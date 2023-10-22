import { subButtons } from '../constant';
import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import ItemCard from './ItemCard';
import NoTodo from './NoTodo';
import SubHeader from './SubHeader';
import FilterButtons from './FilterButtons';

const InputField = () => {
  const [inputValue, setInputValue] = useState('');
  const [activeBtn, setActiveBtn] = useState(1);
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);
  const [DB, setDB] = useState<
    { id: number; task: string; isCompleted: boolean }[]
  >(JSON.parse(localStorage.getItem('DataBase')) || []);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (inputValue.trim()) {
      const newTodo = {
        id: DB.length + 1,
        task: inputValue,
        isCompleted: false,
      };
      const result = [...DB, newTodo];
      setIsFieldEmpty(false);
      setDB(result);
      setInputValue('');
    } else {
      setIsFieldEmpty(true);
    }
  };

  useEffect(() => {
    localStorage.setItem('DataBase', JSON.stringify(DB));
  }, [DB]);

  const completeTask = (id: number) => {
    const updatedTodos = DB.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: true } : todo
    );
    setDB(updatedTodos);
    localStorage.setItem('DataBase', JSON.stringify(updatedTodos));
  };

  const getTaskStatus = () => DB.filter((task) => task.isCompleted !== true);

  const filterTodo = DB.filter((todo) => {
    if (activeBtn === 2) {
      return !todo.isCompleted;
    } else if (activeBtn === 3) {
      return todo.isCompleted;
    }
    return true;
  });

  const deleteTodo = (e: { preventDefault: () => void }, id: number) => {
    e.preventDefault();
     setDB(DB.filter((todo) => todo.id !== id));
    // console.log(id)
  };

  return (
    <form className='w-3/4 flex flex-col mx-auto bg-white p-5'>
      <h1 className='text-center font-medium text-3xl'>
        What need's to be done?
      </h1>
      <AddItem
        inputValue={inputValue}
        handleChange={(e) => setInputValue(e.target.value)}
        isFieldEmpty={isFieldEmpty}
        handleSubmit={handleSubmit}
      />

      <div className='flex flex-col flex-1 md:px-[10%]'>
        <FilterButtons
          subButtons={subButtons}
          active={activeBtn}
          filterTodo={setActiveBtn}
        />
        {DB.length ? (
          <div className='mt-4'>
            <SubHeader getTaskStatus={getTaskStatus} />
            <ItemCard
              DB={filterTodo}
              completeTask={completeTask}
              deleteTodo={deleteTodo}
            />
          </div>
        ) : (
          <NoTodo />
        )}
      </div>
    </form>
  );
};

export default InputField;
