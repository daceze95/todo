const Square = ({
  text,
  displayText,
  isDark,
  slate
}: {
  text: string;
  isDark: boolean;
  slate: boolean;
  displayText: string;
}) => {
  return (
    <div
      className='w-1/4 h-1/4 mb-4 border border-slate-300 flex justify-center items-center text-slate-300 text-3xl'
      style={{
        backgroundColor: text,
        color: isDark ? '#fff' : slate ? '#cdd5e1' : '#000',
      }}>
      {' '}
      {displayText}
    </div>
  );
};
export default Square;
