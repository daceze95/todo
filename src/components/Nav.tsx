const Nav = () => {
  const style = {
    backgroundColor: '#000',
    color: '#fff',
    height: "50px",
    paddingInline: "10%",
    paddingBlock: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontStyle: 'bold',
    border: "4px dotted blue",
    padding: "5px 10px"
  };
  return (
    <div style={style}>
      <span style={logoStyle}>Arinze's Todo</span>
    </div>
  );
};

export default Nav;
