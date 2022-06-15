import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import icon1 from '../../assets/icon1.png';
import styles from './Header.module.css';

const menuForLogged = (
  <nav className={styles.nav}>
    <ul>
      <li>
        <NavLink to="/aboutApp">About App</NavLink>
      </li>
      <li>
        <NavLink to="/logout">
          LogOut
        </NavLink>
      </li>
      <li>
        <NavLink to="/user">User</NavLink>
      </li>
      <li>
        <NavLink to="/tasks">Tasks</NavLink>
      </li>

    </ul>
  </nav>
);
const menuForNotLogged = (
  <nav className={styles.nav}>
    <ul>
      <li>
        <NavLink to="/aboutApp">About App</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/">Main Page</NavLink>
      </li>

    </ul>
  </nav>
);

export function Header() {
  const isLogged = useSelector((state) => state.authSlice.isLogged);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>
        Tick it off
      </div>
      {isLogged ? menuForLogged : menuForNotLogged}
      <div className={styles.icon}>
        <img src={icon1} alt="Task list icon" />

      </div>
    </div>
  );
}
