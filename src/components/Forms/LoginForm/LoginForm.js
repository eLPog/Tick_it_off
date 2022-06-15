import styles from './LoginForm.module.css';

export function LoginForm() {
  return (
    <div className="centered">
      <form className={styles.loginForm}>
        <label htmlFor="loginEmail">
          Email
        </label>
        <input type="email" id="loginEmail" required />
        <label htmlFor="loginPassword">
          Password
        </label>
        <input type="password" id="loginPassword" required />
      </form>
    </div>
  );
}
