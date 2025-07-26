// components/PrivateRoute.tsx
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../utils/auth';

type Props = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: Props) => {
  const user = getCurrentUser();

  return user ? children : <Navigate to="/auth" replace />;
};

export default PrivateRoute;
