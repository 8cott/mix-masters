import React from 'react';
import ImageCarousel from './ImageCarousel';

function HomePage() {
  return (
    <div>
        <main>
          <section>
            <div className="container">
              <div className="even-columns">
                <div></div>
                <div></div>
              </div>
            </div>
          </section>
          <section className="carousel">
            <h2 className="fs-secondary-heading fw-bold">Check These Out!</h2>
            <ImageCarousel/>
          </section>
        </main>

        <footer>
          <div className="container">
            <div className="even-columns">
              <div>
                <a href="#">
                  <img className='mix-master-logo' src="/src/assets/images/mix-master-logo.png" alt="logo" />
                </a>
                <ul role="list" aria-label="social links">
                  <li>
                    <a aria-label="facebook" href="#"></a>
                  </li>
                  <li>
                    <a aria-label="youtube" href="#"></a>
                  </li>
                  <li>
                    <a aria-label="twitter" href="#"></a>
                  </li>
                  <li>
                    <a aria-label="instagram" href="#"></a>
                  </li>
                  <li>
                    <a aria-label="tiktok" href="#"></a>
                  </li>
                </ul>
              </div>
              <div>
                <nav className="footer-nav">
                  <ul aria-label="Footer" role="list">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="show-drink-list">Drinks</a>
                    </li>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
                <form action="">
                  <p>Get our best cocktail recipes, tips, and more when you sign up for our newsletter.</p>
                  <input type="email" />
                  <button>Sign Up</button>
                  <p>Copyright 2023. All Rights Reserved</p>
                </form>
              </div>
            </div>
          </div>
        </footer>
      <script type="module" src="/src/app.jsx"></script>
    </div>
  );
}

export default HomePage;
