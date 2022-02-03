import React from 'react';

function HelpList() {

  return (
<section className="relative border-t border-gray-200 dark:border-gray-800">
    
    {/* Background gradient (dark version only) */}
    <div className="absolute inset-0 opacity-25 bg-gradient-to-b from-gray-800 to-gray-900 pointer-events-none hidden dark:block" aria-hidden="true"></div>
    {/* End background gradient (dark version only) */}
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

            <div data-aos="fade-up" data-aos-delay="450">
   {/* Section header */}
   <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h1 className="h2 font-red-hat-display mb-4">FAQ</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Frequently Asked Questions</p>
          </div>

                {/* Articles */}
                <div className="-mb-2">

                    {/* 1st Article */}
                    <article className="mb-2">
                        <div className="flex pr-6 py-5 bg-white dark:bg-gray-800 divide-x divide-gray-200 dark:divide-gray-700 shadow-2xl">
                           
                            {/* Content */}
                            <div className="pl-6">
                                <header>
                                    <h3 className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">
                                        <a href="#0">What is the Opulence DAO protocol?</a>
                                    </h3>
                                </header>
                                <p className="text-gray-600 dark:text-gray-400">
                                    The Opulence DAO protocol is a DeFi protocol built ontop of the Binance smart chain and is owned by the community. The Opulence token is used to govern the site and owners of the Opulence token get to vote for and against changes to the protocol.
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* 2nd Article */}
                    <article className="mb-2">
                        <div className="flex pr-6 py-5 bg-white dark:bg-gray-800 divide-x divide-gray-200 dark:divide-gray-700 shadow-2xl">
                            {/* Category icon */}
                            {/* Content */}
                            <div className="pl-6">
                                <header>
                                    <h3 className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">
                                        <a href="#0">What is a node?</a>
                                    </h3>
                                </header>
                                <p className="text-gray-600 dark:text-gray-400">
                                    A node is created by buying and staking the Opulence token. For each node created Opulence tokens are sold for another Cryptocurrency and returned to the Opulence treasury. 
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* 3rd Article */}
                    <article className="mb-2">
                        <div className="flex pr-6 py-5 bg-white dark:bg-gray-800 divide-x divide-gray-200 dark:divide-gray-700 shadow-2xl">
            
                            {/* Content */}
                            <div className="pl-6">
                                <header>
                                    <h3 className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">
                                        <a href="#0">How does the Opulence treasury work?</a>
                                    </h3>
                                </header>
                                <p className="text-gray-600 dark:text-gray-400">
                                The Opulence treasury has been developed to receive other crypto currencies in exchange for Opulence tokens. These other crypto currencies are automatically added too many liquidity pools to insure that the Opulence token's price remains stable. Some tokens are converted to USDT and staked in other DeFi projects to earn APY without the risk of losing funds.
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* 4th Article */}
                    <article className="mb-2">
                        <div className="flex pr-6 py-5 bg-white dark:bg-gray-800 divide-x divide-gray-200 dark:divide-gray-700 shadow-2xl">
                          
                            {/* Content */}
                            <div className="pl-6">
                                <header>
                                    <h3 className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">
                                        <a href="#0">Who owns the Opulence Protocol?</a>
                                    </h3>
                                </header>
                                <p className="text-gray-600 dark:text-gray-400">
                                    The Opulence protocol is completely decentralized and owned by the community. The developers of the protocol have renounced ownership of all the Opulence Protocol contracts and are not running any servers.
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* 5th Article */}
                    <article className="mb-2">
                        <div className="flex pr-6 py-5 bg-white dark:bg-gray-800 divide-x divide-gray-200 dark:divide-gray-700 shadow-2xl">
                          
                            {/* Content */}
                            <div className="pl-6">
                                <header>
                                    <h3 className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">
                                        <a href="#0">Has the Opulence Protocol been audited?</a>
                                    </h3>
                                </header>
                                <p className="text-gray-600 dark:text-gray-400">
                                    The Opulence protocol is currently undergoing an audit through Certik but is still in beta and should be used at your own risk.
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* 6th Article */}
                    <article className="mb-2">
                        <div className="flex pr-6 py-5 bg-white dark:bg-gray-800 divide-x divide-gray-200 dark:divide-gray-700 shadow-2xl">
                          
                            {/* Content */}
                            <div className="pl-6">
                                <header>
                                    <h3 className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">
                                        <a href="#0">How do I create a node?</a>
                                    </h3>
                                </header>
                                <p className="text-gray-600 dark:text-gray-400">To create a node you need to purchase the Opulence token through one of our partner exchanges. Once you have purchased sufficient Opulence tokens you can create a node by visiting the Opulence network, connecting your wallet and selecting "Create A Node" within the Opulence dashboard panel.</p>
                            </div>
                        </div>
                    </article>

                </div>

            </div>

        </div>
    </div>
</section>
  );
}

export default HelpList;