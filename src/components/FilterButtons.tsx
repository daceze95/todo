import Button from './button';

interface SubBtnProp {
  subButtons: { id: number; text: string }[];
  active: number;
  filterTodo: (id: number) => void;
}
const FilterButtons = ({ subButtons, active, filterTodo }: SubBtnProp) => {
  return (
    <div className='flex flex-col md:flex-row py-2 w-full justify-center gap-4'>
      {subButtons.map(({ text, id }) => (
        <Button
          color={active == id ? 'text-slate-300': 'text-black'}
          bg={'bg-transparent'}
          key={id}
          btnIsActive={[active, id]}
          onClick={(e) => {
            e.preventDefault();
            filterTodo(id);
          }}>
          {text}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;
