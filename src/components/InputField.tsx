import { subButtons } from '../constant';
import { SetStateAction, useState } from 'react';
import AddItem from './AddItem';
import ItemCard from './ItemCard';
import NoTodo from './NoTodo';
import SubHeader from './SubHeader';
import FilterButtons from './FilterButtons';

const InputField = () => {
  const [inputValue, setInputValue] = useState('');
  const [activeBtn, setActiveBtn] = useState(1);
  const [DB, setDB] = useState<
    { id: number; task: string; isCompleted: boolean }[]
  >([]);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newTodo = {
      id: DB.length + 1,
      task: inputValue.trim(),
      isCompleted: false,
    };
    setDB([...DB, newTodo]);

    setInputValue('');
  };

  const completeTask = (id: number) => {
    const updatedTodos = DB.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: true } : todo
    );
    setDB(updatedTodos);
  };

  const getTaskStatus = () => DB.filter((task) => task.isCompleted !== true);
  // const getCompletedTask = () => DB.filter((task) => task.isCompleted === true);

  const filterTodo = (active: number) => {
    setActiveBtn(active);
  };

  return (
    <form className='w-3/4 flex flex-col mx-auto bg-white p-5'>
      <h1 className='text-center font-medium text-3xl'>
        What need's to be done?
      </h1>
      <AddItem
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div className='flex flex-col flex-1 md:px-[10%]'>
        <FilterButtons
          subButtons={subButtons}
          active={activeBtn}
          filterTodo={filterTodo}
        />
        {DB.length ? (
          <div className='mt-4'>
            <SubHeader getTaskStatus={getTaskStatus} />
            <ItemCard DB={DB} completeTask={completeTask} />
          </div>
        ) : (
          <NoTodo />
        )}
      </div>
    </form>
  );
};

export default InputField;
