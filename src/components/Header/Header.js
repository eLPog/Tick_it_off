import { NavLink } from 'react-router-dom';
import icon1 from '../../images/icon1.png';
import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>
        Tick it off
      </div>
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
      <div className={styles.icon}>
        <img src={icon1} alt="Task list icon" />

      </div>
    </div>
  );
}
