interface propType {
  color?: string;
  bg?: string;
  btnIsActive?: (number | string)[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  deleteTodo?: () => void;
}

const Button = ({
  color,
  bg,
  onClick,
  btnIsActive,
  children,
}: propType) => {
  return (
    <button
      className={`border border-black ${
        btnIsActive?.[0] === btnIsActive?.[1]
          ? 'border-slate-300'
          : 'border-black'
      } py-2 px-5 w-full text-center font-bold ${color} ${
        bg != null ? bg : 'bg-black'
      }`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
