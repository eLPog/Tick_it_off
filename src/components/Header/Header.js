import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import icon1 from '../../assets/icon1.png';
import styles from './Header.module.css';

const menuForLogged = (
  <ul className={styles.menu}>
    <li>
      <NavLink to="/aboutApp" className={({ isActive }) => `${isActive ? ' activated' : ''}`}>
        About App
      </NavLink>
    </li>
    <li>
      <NavLink to="/logout">
        LogOut
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/user"
        className={({ isActive }) => `${isActive ? ' activated' : ''}`}
      >
        User
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/tasks"
        className={({ isActive }) => `${isActive ? ' activated' : ''}`}
      >
        Tasks
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/add"
        className={({ isActive }) => `${isActive ? ' activated' : ''}`}
      >
        Add Task
      </NavLink>
    </li>

  </ul>

);
const menuForNotLogged = (

  <ul className={styles.menu}>
    <li>
      <NavLink
        to="/aboutApp"
        className={({ isActive }) => `${isActive ? styles.activated : ''}`}
      >
        About App
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/login"
        className={({ isActive }) => `${isActive ? styles.activated : ''}`}
      >
        Login
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/register"
        className={({ isActive }) => `${isActive ? styles.activated : ''}`}
      >
        Register
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) => `${isActive ? styles.activated : ''}`}
      >
        Main Page
      </NavLink>
    </li>
  </ul>

);

export function Header() {
  const isLogged = useSelector((state) => state.authSlice.isLogged);
  return (
    <section className={styles.headerContainer}>
      <div className={styles.logo}>
        <NavLink to="/">Tick it off</NavLink>
      </div>
      <input id={styles.menuToggle} type="checkbox" />
      <label className={styles.menuButtonContainer} htmlFor={styles.menuToggle}>
        <div className={styles.menuButton} />
      </label>
      {isLogged ? menuForLogged : menuForNotLogged}
      {/* <div className={styles.icon}> */}
      {/*  <img src={icon1} alt="Task list icon" /> */}

      {/* </div> */}
    </section>
  );
}
