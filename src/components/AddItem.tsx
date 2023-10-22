import { SetStateAction } from 'react';
import Button from './button';

interface AddItemProps {
  inputValue: string;
  handleChange: (e: { target: { value: SetStateAction<string> } }) => void;
  isFieldEmpty: boolean;
  handleSubmit: (e: { preventDefault: () => void }) => void;
  editBtn: boolean;
  handleEdit: (e: { preventDefault: () => void }) => void;
}

const AddItem = ({
  inputValue,
  handleChange,
  isFieldEmpty,
  handleSubmit,
  editBtn,
  handleEdit,
}: AddItemProps) => {
  return (
    <div className='my-4 flex flex-col gap-4'>
      <div>
        <input
          type='text'
          className={`w-full px-2 h-[50px] border ${
            isFieldEmpty ? 'border-red-500' : 'border-black'
          } outline-none font-semibold box-border`}
          value={inputValue}
          onChange={handleChange}
        />
        {isFieldEmpty && (
          <small className='text-xs text-red-500'>
            Field cannot be empty! Please enter a value.
          </small>
        )}
      </div>
      {!editBtn ? (
        <Button color={'text-white'} onClick={handleSubmit}>
          Add
        </Button>
      ) : (
        <Button color={'text-white'} onClick={handleEdit}>
          Confirm Edit
        </Button>
      )}
    </div>
  );
};

export default AddItem;
