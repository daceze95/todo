import Button from './button';

interface ItemCardProp {
  DB: { id: number; task: string; isCompleted: boolean }[];
  completeTask: (id: number) => void;
  deleteTodo: (e: { preventDefault: () => void }, id: number) => void;
  editTodo: (e: { preventDefault: () => void }, id: number) => void;
  editBtn: boolean;
  cancelEdit: (e: { preventDefault: () => void }, id: number) => void;
  todoId: number;
}

const ItemCard = ({
  DB,
  completeTask,
  deleteTodo,
  editTodo,
  editBtn,
  cancelEdit,
  todoId,
}: ItemCardProp) => {
  // console.log(todoId)
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
            {!editBtn ? (
              <Button
                color={'text-black'}
                bg={'bg-white'}
                onClick={(e) => editTodo(e, todo.id)}>
                Edit
              </Button>
            ) : todoId === todo.id ? (
              <Button
                color={'text-black'}
                bg={'bg-white'}
                onClick={(e) => cancelEdit(e, todo.id)}>
                Cancel Edit
              </Button>
            ) : (
              <Button
                color={'text-black'}
                bg={'bg-white'}
                onClick={(e) => editTodo(e, todo.id)}>
                Edit
              </Button>
            )}
            <Button
              color={'text-white'}
              bg={'bg-red-500'}
              onClick={(e) => deleteTodo(e, todo.id)}>
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
