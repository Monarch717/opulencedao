import React from 'react';

function CtaContact() {
  return (
    <section className=' border-t border-gray-200 dark:border-gray-800'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="dark relative py-10 px-8 md:py-16 md:px-12">

          <div className="relative max-w-3xl mx-auto text-center">

            {/* CTA header */}
            <h3 className="h3 font-red-hat-display mb-2 dark:text-gray-1000">Looking to help improve the protocol?</h3>
            <p className="text-gray-400 text-xl">Opulence protocol is fully decentralized and owned by the community.</p>

            {/* CTA button */}
            <div className="flex justify-center mt-8">
              <a className="btn text-white bg-teal-500 hover:bg-teal-400" href="https://discord.gg/zfXJ2h7HMY" target="_blank" rel="noreferrer">Join The Community</a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CtaContact;
