interface InputProp {
  text: string;
  handleTextColor: (e: { target: { value: any } }) => void;
}

const ColorNameInput = ({ text, handleTextColor }: InputProp) => {
  return (
    <input
      type='text'
      placeholder='Type a color name...'
      className='w-1/4 h-12 border border-slate-300 rounded-md px-2 placeholder:text-slate-300'
      value={text}
      onChange={handleTextColor}
    />
  );
};

export default ColorNameInput;
