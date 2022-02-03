import React from 'react';

function Cta() {
  return (
    <section id="waitlist">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">

        {/* CTA box */}
        <div className="dark relative bg-gray-800 py-10 px-8 md:py-16 md:px-12 rounded">

          {/* Background illustration */}
          <div className="absolute inset-0 left-auto  pointer-events-none" aria-hidden="true">
            <svg className="h-full" width="400" height="232" viewBox="0 0 400 232" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-a">
                  <stop stopColor="#667EEA" offset="0%" />
                  <stop stopColor="#667EEA" stopOpacity="0" offset="100%" />
                </radialGradient>
                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-b">
                  <stop stopColor="#3ABAB4" offset="0%" />
                  <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                </radialGradient>
              </defs>
              <g transform="translate(-85 -369)" fill="none" fillRule="evenodd">
                <circle fillOpacity=".16" fill="url(#box-gr-a)" cx="413" cy="688" r="240" />
                <circle fillOpacity=".24" fill="url(#box-gr-b)" cx="400" cy="400" r="400" />
              </g>
            </svg>
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-5/2">
              <h4 className="h4 font-red-hat-display text-gray-100">The Opulence Protocol is still in private beta.</h4>
              <p className="text-gray-100">To get early access please join our discord.</p>
            </div>

            {/* CTA form */}
            <form className="w-full lg:w-1/5">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
             
                <a className="btn text-white bg-teal-500 hover:bg-teal-400 shrink-0" href="https://discord.gg/zfXJ2h7HMY" target="_blank" rel="noreferrer">Join Discord</a>
              </div>
            
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Cta;
