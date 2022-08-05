import styles from './StartPage.module.css';

export function AboutApp() {
  return (
    <div className={`${styles.container} animateElement`}>
      <div className={styles.text}>

        <p>
          This app has been fully developed by me: Frontend and Backend.
        </p>
        <ul>
          <strong>Backend:</strong>
          <li>
            Written in typescript
          </li>
          <li>
            Built with the dependency injection principle - awillix package
          </li>
          <li>
            Tests for the application written in Jest
          </li>
          <li>
            Authorization and authentication using the json web token.
          </li>
          <li>
            After login, the token is added to the database, and on  logout,
            it is removed from it. This enables the token to be deactivated on request.
          </li>
          <li>
            App is built on a relational database.
          </li>
          <li>
            See the readme file on github for details
            {' '}
            <a
              href="https://github.com/eLPog/To_Do_List_Backend"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
        <ul>
          <strong>Frontend:</strong>
          <li>
            This application is built from functional components and uses routing.
          </li>
          <li>
            The state is based on Redux/Toolkit and locals states.
          </li>
          <li>
            Includes validation of the entered data (data is also validated on the backend)
          </li>
          <li>
            Adapted to lower resolutions
          </li>
          <li>
            See full code on
            {' '}
            <a
              href="https://github.com/eLPog/Tick_it_off"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.data}>
        <p>
          Data to test login:
        </p>
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
