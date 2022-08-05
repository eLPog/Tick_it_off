import './WelcomePage.css';
import { NavLink } from 'react-router-dom';

export function WelcomePage() {
  function removeActiveClass() {
    const element = document.getElementsByClassName('active');
    element[1].classList.remove('active');
  }
  function addActiveClass(event) {
    removeActiveClass();
    event.currentTarget.classList.add('active');
  }
  return (
    <>
      <section className="wrapper animateElement">
        {/* eslint-disable */}

        <article className={`menuItem active bild-1`} onMouseEnter={addActiveClass}>
          <div className={`overlay`}>
              <NavLink to="/"><h3>Home</h3></NavLink>
          </div>
        </article>
        {' '}
      <article className={`menuItem bild-2`} onMouseEnter={addActiveClass}>
        <div className={`overlay`}>
            <NavLink to="/login"><h3>Login</h3></NavLink>

        </div>
      </article>
      {' '}
      <article className={`menuItem bild-3` } onMouseEnter={addActiveClass}>
        <div className={`overlay`}>
        <NavLink to="/register"><h3>Sign In</h3></NavLink>
        </div>
      </article>
      {' '}
      <article className={`menuItem bild-4`} onMouseEnter={addActiveClass}>
        <div className={`overlay`}>
            <NavLink to="/aboutApp"><h3>About App</h3></NavLink>

        </div>
      </article>
    </section>
      </>

  );
}
