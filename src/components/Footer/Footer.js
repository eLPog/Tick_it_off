import styles from './Footer.module.css';
import logo from '../../assets/logo-github.png';

export function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://www.github.com/elPog">
        <div className={styles.author}>
          <h4>Created by eLPog</h4>
          <img src={logo} alt="github logo" className={styles.logo} />
        </div>

      </a>

      <h4>
        2022
      </h4>
    </div>
  );
}
