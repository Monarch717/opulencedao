import React from 'react';

function Stats() {
  return (
    <section className="relative">
      {/* Background gradient (light version only) */}
      <div className="absolute bottom-0 left-0 right-0 h-128 bg-gradient-to-t from-gray-100 to-white pointer-events-none -z-10 dark:hidden" aria-hidden="true"></div>
      {/* End background gradient (light version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="pb-3 md:pb-3">
          <div className="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-4 text-center" data-aos-id-stats>
            {/* 1st item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-1xl rounded" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]">
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">$0.05</div>
              <div className="text-gray-600 dark:text-gray-400">Opulence Token Price</div>
            </div>
            {/* 2nd item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-1xl rounded" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="100">
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">55,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Active Nodes</div>
            </div>
            {/* 3rd item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-1xl rounded" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="200">
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">7.4%</div>
              <div className="text-gray-600 dark:text-gray-400">Average Daily Return</div>
            </div>
            {/* 4th item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-1xl rounded" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="300">
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">93%</div>
              <div className="text-gray-600 dark:text-gray-400">Total Supply Staked</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;