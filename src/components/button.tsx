interface propType {
  color?: string;
  bg?: string;
  btnIsActive?: (number| string)[]
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const Button = ({ color, bg, onClick, btnIsActive, children}: propType) => {
  return (
    // ${btnIsActive && btnIsActive[0] == 1 && btnIsActive[1] === 'active' ? "border-blue": "border-black"}
    <button
      className={`border ${btnIsActive?.[0] === btnIsActive?.[1] ? "border-black" : "border-slate-300"} py-2 px-5 w-full text-center bg-black font-bold ${color} ${bg}`}
      onClick={onClick}>
      {children}
</button>
  );
};

export default Button;
