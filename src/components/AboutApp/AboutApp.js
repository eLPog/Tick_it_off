export function AboutApp() {
  return (
    <div>
      <p>
        This app has been fully developed by me (frontend and backend),
        and allows you to store your own To Do List.
      </p>
      <p>
        You can add, edit and delete your tasks.
        To use this app you need to create a user account,
        or try it with a test account:
      </p>

      <p>email:test@test.com</p>
      <p>password:password</p>
      <p />
      <p>
        The backend was also created by me, in typescript.
        The application code can be found on github:
      </p>
      <p>
        <a
          href="https://github.com/eLPog/To_Do_List_Backend"
          target="_blank"
          rel="noreferrer"
        >
          Backend
        </a>
      </p>
      <p>
        <a
          href="https://github.com/eLPog/Do_That_Now"
          target="_blank"
          rel="noreferrer"
        >
          Frontend
        </a>
      </p>
    </div>
  );
}
