import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavigationStyled } from './Navigation.styled';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavigationStyled>
      <NavLink className={'link'} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={'link'} to="/contacts">
          Contacts
        </NavLink>
      )}
    </NavigationStyled>
  );
};
