import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

const PrivateRoute = () => {
  const  currentUser  = useSelector(selectCurrentUser);

  return currentUser ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoute;
