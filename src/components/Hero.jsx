import React from 'react';
import heroBG from '../assets/hero-bg.jpg';

function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen pt-20 pb-20 overflow-hidden bg-gray-100">
      <img
        src={heroBG}
        alt="Hero Background"
        className="absolute inset-0 object-cover w-full h-full z-0"
      />

      <div className="container mx-auto relative z-10 px-4 lg:px-8">
        {/* Welcome Section */}
        <div className="text-left mb-10" data-aos="fade-down" data-aos-delay="100">
          <h2 className="text-4xl font-bold mb-4 ml-3">Welcome to Vaidya</h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap justify-center -mx-4">
          {/* Why Box */}
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div
              className="bg-blue-600 bg-opacity-50 text-white p-8 rounded-md h-full flex flex-col justify-between"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Why Choose Vaidya?</h3>
              <p className="mb-6 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel
                necessitatibus optio ad corporis.
              </p>
              <div className="text-center">
                <a
                  href="#about"
                  className="inline-block px-6 py-2 text-blue-600 bg-white rounded-full hover:bg-gray-100 transition"
                >
                  Learn More <i className="bi bi-chevron-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Icon Boxes */}
          <div className="w-full lg:w-2/3 px-4">
            <div className="flex flex-wrap justify-center -mx-4">
              {/* Icon Box 1 */}
              <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
                <div
                  className="bg-white bg-opacity-50 p-6 rounded-md shadow-md text-center"
                  data-aos="zoom-out"
                  data-aos-delay="300"
                >
                  <i className="bi bi-clipboard-data text-4xl text-blue-600 mb-4"></i>
                  <h4 className="text-xl font-bold mb-2">Corporis voluptates officia eiusmod</h4>
                  <p className="text-gray-600">
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut
                    aliquip
                  </p>
                </div>
              </div>

              {/* Icon Box 2 */}
              <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
                <div
                  className="bg-white bg-opacity-50 p-6 rounded-md shadow-md text-center"
                  data-aos="zoom-out"
                  data-aos-delay="400"
                >
                  <i className="bi bi-gem text-4xl text-blue-600 mb-4"></i>
                  <h4 className="text-xl font-bold mb-2">Ullamco laboris ladore pan</h4>
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt
                  </p>
                </div>
              </div>

              {/* Icon Box 3 */}
              <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
                <div
                  className="bg-white bg-opacity-50 p-6 rounded-md shadow-md text-center"
                  data-aos="zoom-out"
                  data-aos-delay="500"
                >
                  <i className="bi bi-inboxes text-4xl text-blue-600 mb-4"></i>
                  <h4 className="text-xl font-bold mb-2">Labore consequatur incidid dolore</h4>
                  <p className="text-gray-600">
                    Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
