import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import Stats from '../partials/Stats';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesAnimation from '../partials/FeaturesAnimation';
import Team from '../partials/Team';
import HelpList from '../partials/HelpList';
import CtaContact from '../partials/CtaContact';
import Footer from '../partials/Footer';


function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <Stats />
        <FeaturesBlocks />
        <FeaturesAnimation />
        <HelpList />
        <Team />
        <CtaContact />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;