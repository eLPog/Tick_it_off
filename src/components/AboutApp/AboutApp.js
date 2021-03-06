import styles from './AboutApp.module.css';

export function AboutApp() {
  return (
    <div className={`${styles.container} animateElement`}>
      <div className={styles.text}>
        <p>
          You can add, edit and delete your tasks.
          To use this app you need to create a user account,
          or try it with a test account:
        </p>
        <div className={styles.data}>
          <p>email:test@test.com</p>
          <p>password:password</p>
        </div>
        <p>
          The application code can be found on github:
        </p>
      </div>
      <div className={styles.links}>
        <a
          href="https://github.com/eLPog/To_Do_List_Backend"
          target="_blank"
          rel="noreferrer"
        >
          Backend
        </a>
        <a
          href="https://github.com/eLPog/Tick_it_off"
          target="_blank"
          rel="noreferrer"
        >
          Frontend
        </a>
      </div>
    </div>
  );
}
