import Button from './button';
import { subButtons } from '../constant';
import { SetStateAction, useState } from 'react';

const InputField = () => {
  const [inputValue, setInputValue] = useState('');
  const [DB, setDB] = useState<{ id: number; task: string }[]>([]);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) =>
    setInputValue(e.target.value);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newTodo = { id: DB.length + 1, task: inputValue };
    setDB([...DB, newTodo]);

    setInputValue('');
  };

  return (
    <form className='w-3/4 mx-auto bg-white p-5'>
      <h1 className='text-center font-medium text-3xl'>
        What need's to be done?
      </h1>

      {/* Task entry field */}
      <div className='my-4 flex flex-col gap-4'>
        <input
          type='text'
          className='w-full px-2 h-[50px] border border-black outline-none font-semibold box-border'
          value={inputValue}
          onChange={handleChange}
        />
        <Button color={'text-white'} onClick={handleSubmit}>
          Add
        </Button>
      </div>

      <div className='my-4'>
        <div className='flex flex-col flex-1 md:px-[10%]'>
          <div className='flex flex-col md:flex-row py-2 w-full justify-center gap-4'>
            {subButtons.map(({ text, id }) => (
              <Button color={'text-black'} bg={'bg-transparent'} key={id}>
                {text}
              </Button>
            ))}
          </div>
          {
            DB.length > 0 ? <div className='mt-4'>
            <h2 className='font-bold text-3xl my-2'>
              {DB.length == 1
                ? `${DB.length} task remaining`
                : `${DB.length} tasks remaining`}
            </h2>

            {/* Todo Task Section */}
            {DB.map((todo) => (
              <div className='py-4 ' key={todo.id}>
                <div className='flex items-center pb-2'>
                  <input
                    type='checkbox'
                    className='h-8 w-8 bg-transparent border-2 border-black  checked:border-black cursor-pointer'
                    //   checked={false}
                  />
                  <span className='ml-2 text-lg'>{todo.task}</span>
                </div>

                <div className='flex py-2 w-full justify-center gap-4'>
                  <Button color={'text-black'} bg={'bg-white'}>
                    Edit
                  </Button>
                  <Button color={'text-white'} bg={'bg-red-500'}>
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>: <div className='py-4 flex justify-center items-center text-slate-400 text-3xl'> NO TASK ADDED</div>
          }
          
        </div>
      </div>
    </form>
  );
};

export default InputField;
