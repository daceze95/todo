import LogoutButton from '../components/LogoutButton';
import { getCurrentUser } from '../utils/auth';
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
    fontStyle: 'extra-bold',
    // border: "4px double blue",
    padding: "2px 10px",
    marginRight: "auto"
  };

  const user = getCurrentUser();

  if (!user) return;

  return (
    <div style={style}>
      <span style={logoStyle}>TODO</span>
      <span className='mr-4 text-2xl'>
       {user.firstName}
      </span>
      <LogoutButton/>
    </div>
  );
};

export default Nav;
