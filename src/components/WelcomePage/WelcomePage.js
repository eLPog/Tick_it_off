import './WelcomePage.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function WelcomePage() {
  const isLogged = useSelector((state) => state.authSlice.isLogged);
  function removeActiveClass() {
    const element = document.getElementsByClassName('activeElement');
    element[0].classList.remove('activeElement');
  }
  function addActiveClass(event) {
    removeActiveClass();
    event.currentTarget.classList.add('activeElement');
  }
  return (
    <>
      <section className="wrapper animateElement">
        {/* eslint-disable */}

        <article className={`menuItem bild-1 activeElement`} onMouseEnter={addActiveClass}>
          <div className={`overlay`}>
              <NavLink to="/"><h3>Home</h3></NavLink>
          </div>
        </article>
        {' '}
      <article className={`menuItem bild-2`} onMouseEnter={addActiveClass}>
        <div className={`overlay`}>
            {!isLogged?<NavLink to="/login"><h3>Login</h3></NavLink>:<NavLink to="/tasks"><h3>Tasks</h3></NavLink>}
        </div>
      </article>
      {' '}
      <article className={`menuItem bild-3` } onMouseEnter={addActiveClass}>
        <div className={`overlay`}>
            {!isLogged? <NavLink to="/register"><h3>Sign In</h3></NavLink>:<NavLink to="/user"><h3>User data</h3></NavLink>}
        </div>
      </article>
      {' '}
      <article className={`menuItem bild-4`} onMouseEnter={addActiveClass}>
        <div className={`overlay`}>
            <NavLink to="/aboutApp"><h3>About App</h3></NavLink>

        </div>
      </article>
          {isLogged&&<>
              <article className={`menuItem bild-5` } onMouseEnter={addActiveClass}>
                  <div className={`overlay`}>
                 <NavLink to="/add"><h3>Add task</h3></NavLink>
                  </div>
              </article>
              <article className={`menuItem bild-6`} onMouseEnter={addActiveClass}>
                  <div className={`overlay`}>
                      <NavLink to="/logout"><h3>Logout</h3></NavLink>
                  </div>
              </article>
          </>}
    </section>
      </>

  );
}
