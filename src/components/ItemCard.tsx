import Button from './button';

interface ItemCardProp {
  DB: { id: number; task: string; isCompleted: boolean }[];
  completeTask: (id: number) => void;
}

const ItemCard = ({ DB, completeTask }: ItemCardProp) => {
  return (
    <div className='h-[380px] overflow-auto'>
      {DB.map((todo) => (
        <div className='py-4 ' key={todo.id}>
          <div className='flex items-center pb-2'>
            <input
              type='checkbox'
              className='h-8 w-8 bg-transparent border-2 border-black  checked:border-black cursor-pointer'
              onChange={() => completeTask(todo.id)}
              checked={todo.isCompleted}
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
    </div>
  );
};

export default ItemCard;
