import React from 'react';

import Header from '../partials/Header';
import HeroTestimonials from '../partials/HeroTestimonials';
import DashboardStats from '../partials/DashStats';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';

function Testimonials() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <HeroTestimonials />
        <DashboardStats />
        <Cta />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Testimonials;