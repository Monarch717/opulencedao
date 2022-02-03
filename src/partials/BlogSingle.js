import React from 'react';

function BlogSingle() {
  return (
    <section className="relative">


      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto">

            <article>

              {/* Article header */}
              <header className="mb-8">
                {/* Title and excerpt */}
                <div className="text-center md:text-left">
                  <h1 className="h4 font-red-hat-display mb-5" data-aos="fade-down">Bug Bounty</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-5" data-aos="fade-down" data-aos-delay="150">This public bounty program supports the ongoing audits and formal verification of Opulence contracts.</p>
            
                </div>
      
              </header>

              {/* Article content */}
              <div className="text-lg text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="450">
              <h3 className="h4 font-red-hat-display mb-5 text-gray-900 dark:text-gray-100">Scope</h3>
              
              <p className='mb-8'>Rewards are offered for reported vulnerabilities affecting the Opulence Protocol smart contracts: https://github.com/opulencedao/contracts-solidity</p>

                <h3 className="h4 font-red-hat-display mb-5 text-gray-900 dark:text-gray-100">Rewards</h3>
                <p className="mb-5">
                The severity of bugs will be assessed under the CVSS Risk Rating.</p>
<ol><li>Critical (9.0–10.0): Up to $25,000</li>
<li>High (7.0–8.9): Up to $7,000</li>
<li>Medium (4.0–6.9): Up to $3,000</li>
<li>Low (0.1–3.9): Up to $1,000</li>
</ol>
<p className="text-xl text-gray-600 dark:text-gray-400 mt-8" data-aos="fade-down" data-aos-delay="150">Submit a report to: <strong>bounty@oplunce.network</strong></p>       
              </div>

            </article>

          </div>

        </div>
      </div>
    </section>
  );
}

export default BlogSingle;