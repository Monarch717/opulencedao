import React from 'react';

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h1 className="h2 font-red-hat-display mb-4">Protocol</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">An innovative step forward for passive income generation</p>
          </div>

          {/* Items */}
          <div className="max-w-xs mx-auto sm:max-w-none md:max-w-xl lg:max-w-none grid sm:grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-4" data-aos-id-featbl>

            {/* 1st item */}
            <a className="flex flex-col p-5 group text-white bg-gradient-to-tr from-teal-500 to-teal-400 dark:to-teal-500 shadow-1xl rounded" href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]">
              <svg className="w-8 h-8 mb-3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-current" d="M12.033 20.182a10.027 10.027 0 01-5.622-6.334A8 8 0 1014.5 27.615a9.962 9.962 0 01-2.467-7.433zm1.97.618A7.97 7.97 0 0016 26.291a7.97 7.97 0 001.997-5.49 10.046 10.046 0 01-3.996 0zm11.964-8.982A10.003 10.003 0 0132 21c0 5.523-4.477 10-10 10a9.956 9.956 0 01-6-2 9.956 9.956 0 01-6 2C4.477 31 0 26.523 0 21c0-4.113 2.484-7.647 6.033-9.182C6.011 11.548 6 11.275 6 11 6 5.477 10.477 1 16 1s10 4.477 10 10c0 .275-.011.548-.033.818zm-.378 2.03a10.027 10.027 0 01-5.622 6.334 9.962 9.962 0 01-2.467 7.433 8 8 0 108.089-13.767zM12.41 18.152a9.982 9.982 0 012.09-3.767 8.03 8.03 0 00-6.2-1.204 8.02 8.02 0 004.11 4.97zm1.89.667a8.03 8.03 0 003.398 0A7.984 7.984 0 0016 15.71a7.984 7.984 0 00-1.7 3.11zm9.697-7.62L24 11a8 8 0 10-15.998.2c.646-.131 1.314-.2 1.998-.2 2.251 0 4.329.744 6 2a9.956 9.956 0 016-2c.684 0 1.352.069 1.998.2zm-.299 1.982a8.03 8.03 0 00-6.2 1.204 9.982 9.982 0 012.09 3.767 8.02 8.02 0 004.11-4.971z" />
              </svg>
              <div className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">Combined Rewards</div>
              <div className="grow opacity-80 mb-4">Combined rewards across 150+ DEFI Yield protocols.</div>
              <svg className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z" />
              </svg>
            </a>

            {/* 2nd item */}
            <a className="flex flex-col p-5 group text-white bg-gradient-to-tr from-purple-500 to-purple-400 dark:to-purple-500 shadow-1xl rounded" href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]" data-aos-delay="100">
              <svg className="w-8 h-8 mb-3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" d="M20.796 20l-1.677 7.264a6 6 0 01-7.302 4.471L0 28.781V11.54l.35-.3 9.457-8.107a3.751 3.751 0 015.29 5.29L11.175 13H28.5a3.5 3.5 0 012.6 1.156c.663.736.984 1.72.878 2.74-.252 1.808-1.817 3.143-3.622 3.104h-7.56zM2 27.22l10.303 2.575a4 4 0 004.868-2.98L19.204 18h9.173c.812.018 1.508-.575 1.615-1.345A1.5 1.5 0 0028.5 15H11.173a2 2 0 01-1.517-3.3l3.922-4.577a1.755 1.755 0 00-.597-2.733 1.751 1.751 0 00-1.872.262L2 12.46v14.76zM28 .585L29.414 2 23 8.414 21.586 7 28 .586zm-8.272 6.627l-1.94-.485 1.484-5.94 1.94.484-1.484 5.94zm3.544 5l-.485-1.94 5.94-1.486.486 1.94-5.94 1.486z" fillRule="nonzero" />
              </svg>
              <div className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">Reduced Fees</div>
              <div className="grow opacity-80 mb-4">Reduced fees and no time spent clicking.</div>
              <svg className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z" />
              </svg>
            </a>

            {/* 3rd item */}
            <a className="flex flex-col p-5 group text-white bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:to-indigo-500 shadow-1xl rounded" href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]" data-aos-delay="200">
              <svg className="w-8 h-8 mb-3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-current" d="M2 2v19h16V2H2zm18-2v23H0V0h20zm9.201 11.03l-7.425-1.987.518-1.932 9.357 2.505-5.948 22.218-19.32-5.172.518-1.932 17.388 4.654L29.2 11.03z" />
              </svg>
              <div className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">Managed Risk</div>
              <div className="grow opacity-80 mb-4">Managed risk with a balanced set of investments.</div>
              <svg className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z" />
              </svg>
            </a>

            {/* 4th item */}
            <a className="flex flex-col p-5 group text-white bg-gradient-to-tr from-pink-500 to-pink-400 dark:to-pink-500 shadow-1xl rounded" href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-featbl]" data-aos-delay="300">
              <svg className="w-8 h-8 mb-3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" d="M20.243 6.757l.707.707-1.414 1.414-.707-.707a4 4 0 00-5.658 0l-.707.707-1.414-1.414.707-.707a6 6 0 018.486 0zm3.535-3.535l.707.707-1.414 1.414-.707-.707a9 9 0 00-12.728 0l-.707.707L7.515 3.93l.707-.707c4.296-4.296 11.26-4.296 15.556 0zM9 17.212V16a7 7 0 00-7-7H1V7h1a9 9 0 019 9v.788l2.302 5.18L11 23.117V24a4 4 0 01-4 4H5v3H3v-5h4a2 2 0 002-2v-2.118l1.698-.85L9 17.213zm12-.424V16a9 9 0 019-9h1v2h-1a7 7 0 00-7 7v1.212l-1.698 3.82 1.698.85V24a2 2 0 002 2h4v5h-2v-3h-2a4 4 0 01-4-4v-.882l-2.302-1.15L21 16.787zM16 12a1 1 0 110-2 1 1 0 010 2z" fillRule="nonzero" />
              </svg>
              <div className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">Community Owned</div>
              <div className="grow opacity-80 mb-4">Opulence DAO is 100% community owned.</div>
              <svg className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z" />
              </svg>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
