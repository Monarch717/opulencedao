import React from 'react';
import { Link } from 'react-router-dom';

function HeroTestimonials() {
  return (
    <section className="relative">

      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
        <div className="absolute inset-0" aria-hidden="true"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-6xl mx-auto text-left">
            <h1 className="h3 font-red-hat-display mb-4" data-aos="fade-down">Welcome to your dashboard</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">From this console, you can view, manage, and launch Opulence nodes. You can also see how many rewards have been allocated, and claim them here. </p>
            <div className="mt-8" data-aos="fade-down" data-aos-delay="300">
              <Link className="btn text-white bg-gray-800 hover:bg-gray-800 btn-disabled" to="#" disabled>Create a node</Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default HeroTestimonials;