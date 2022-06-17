import styles from './StartPage.module.css';

export function StartPage() {
  return (
    <div className={`${styles.welcomeContainer} animateElement`}>
      <p>
        This app has been fully developed by me (frontend and backend),
        and allows you to store your own To Do List.
      </p>
      <p>
        You can add, edit and delete your tasks.
        To use this app you need to create a user account,
        or try it with a test account:
      </p>
      <div className={styles.data}>

        <strong>Email:</strong>
        {' '}
        test@test.com

        <strong>Password:</strong>
        {' '}
        password

      </div>

    </div>
  );
}
