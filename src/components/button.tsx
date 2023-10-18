interface propType {
  color?: string;
  bg?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const Button = ({ color, bg, onClick, children }: propType) => {
  return (
    <button
      className={`border border-black py-2 px-5 w-full text-center bg-black font-bold ${color} ${bg}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
