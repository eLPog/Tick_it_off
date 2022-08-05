import './WelcomePage.css';
import aboutApp from '../../assets/images/photo-aboutApp.jpg';
import homePage from '../../assets/images/photo-homePage.jpg';
import login from '../../assets/images/photo-login.jpg';
import register from '../../assets/images/photo-registration.jpg';

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
          <h3>Home</h3>
          </div>
        </article>
        {' '}
      <article className={`menuItem bild-2`} onMouseEnter={addActiveClass}>
        <div className={`overlay`}>
        <h3>Login</h3>
        </div>
      </article>
      {' '}
      <article className={`menuItem bild-3` } onMouseEnter={addActiveClass}>
        <div className={`overlay`}>
        <h3>Sign In</h3>
        </div>
      </article>
      {' '}
      <article className={`menuItem bild-4`} onMouseEnter={addActiveClass}>
        <div className={`overlay`}>
        <h3>About App</h3>
        </div>
      </article>
    </section>
      </>

  );
}
