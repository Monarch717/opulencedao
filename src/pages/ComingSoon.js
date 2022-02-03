import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';

function ComingSoon() {
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

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center">
                <div className="relative inline-flex justify-center items-center">
                  <img className="hidden sm:block opacity-0 md:opacity-0" src={require('../images/404.jpg').default} width="768" height="432" alt="404" />
                  <div className="hidden sm:block absolute inset-0" aria-hidden="true"></div>
                  <div className="sm:absolute w-full">
                    <h1 className="h3 font-red-hat-display mb-8">Opulence is still in private beta.</h1>
                    <p className='mb-8'>Please join our discord to gain early access.</p>
                    <Link className="btn text-white bg-teal-500 hover:bg-teal-400 inline-flex items-center" to="/">
                      <span>Go Back Home</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default ComingSoon;