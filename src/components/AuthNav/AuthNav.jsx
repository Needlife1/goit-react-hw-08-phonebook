import { NavLink } from 'react-router-dom';
import { AuthNavStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavStyled>
      <NavLink className={'link'} to="/register">
        Register
      </NavLink>
      <NavLink className={'link'} to="/login">
        Log In
      </NavLink>
    </AuthNavStyled>
  );
};
