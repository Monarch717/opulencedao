import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';

function Crypvest() {
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h1 font-red-hat-display mb-4">Crypvest Airdrop.</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">Crypvest investors will receive an airdrop matching their investment value.</p>
              </div>

              {/* Contact form */}
              <form className="max-w-xl mx-auto">
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">First Name <span className="text-red-600">*</span></label>
                    <input id="first-name" type="text" className="form-input w-full" placeholder="Enter your first name" required />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">Last Name <span className="text-red-600">*</span></label>
                    <input id="last-name" type="text" className="form-input w-full" placeholder="Enter your last name" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="company">Amount Invested <span className="text-red-600">*</span></label>
                    <input id="amount" type="text" className="form-input w-full" placeholder="Amount invested in USD" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="phone">BNB Address <span className="text-red-600">*</span></label>
                    <input id="address" type="text" className="form-input w-full" placeholder="Please provide your BNB address" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button className="btn text-white bg-teal-500 hover:bg-teal-400 w-full flex items-center">
                      <span>Request Airdrop</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </section>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Crypvest;