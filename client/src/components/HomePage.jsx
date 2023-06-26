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
      <script type="module" src="/src/app.jsx"></script>
    </div>
  );
}

export default HomePage;
