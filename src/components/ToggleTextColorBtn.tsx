interface ToggleBtnProp {
  setIsDark: (state: boolean) => void;
  setSlate: (state: boolean) => void;
  isDark: boolean;
  slate: boolean;
}
const ToggleTextColorBtn = ({ setIsDark, setSlate, isDark, slate}: ToggleBtnProp) => {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      onDoubleClick={() => setSlate(!slate)}
      className='w-1/4 h-12 border border-slate-300 text-slate-400 rounded-md p-2 box-border my-2 text-center bg-slate-50'>
      Toggle Dark Mode
    </button>
  );
};

export default ToggleTextColorBtn;
