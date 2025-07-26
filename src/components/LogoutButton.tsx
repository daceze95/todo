import { signout } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signout();
    navigate('/auth');
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-1 bg-red-500 text-white rounded"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
