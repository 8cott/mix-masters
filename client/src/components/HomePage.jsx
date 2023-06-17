import React from 'react';
import NavBar from './NavBar';

function HomePage() {
  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="/client/src/index.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mix Masters</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
       <NavBar/>

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
          </section>
        </main>

        <footer>
          <div className="container">
            <div className="even-columns">
              <div>
                <a href="#">
                  <img src="/src/assets/images/mix-master-logo.png" alt="logo" />
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
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Drinks</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
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
      </body>
      <script type="module" src="/src/app.jsx"></script>
    </div>
  );
}

export default HomePage;
