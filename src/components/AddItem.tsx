import { SetStateAction } from "react";
import Button from "./button";

interface AddItemProps {
  inputValue: string;
  handleChange: (e: { target: { value: SetStateAction<string> } }) => void;
  handleSubmit: (e: { preventDefault: () => void }) => void;
}

const AddItem = ({ inputValue, handleChange, handleSubmit }:AddItemProps) => {
  return (
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
  );
};

export default AddItem;