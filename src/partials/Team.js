import React from 'react';

function Team() {
  return (
    <section className='border-t border-gray-200 dark:border-gray-800'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 ">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">Contributors</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Core contributors to the Opulence DAO Protocol</p>
          </div>

          {/* Team members */}
          <div className="max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center -m-5 lg:-my-7" data-aos-id-team>

              {/* 1st member */}
              <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7" data-aos="fade-down" data-aos-anchor="[data-aos-id-team]">
                <div className="flex flex-col items-center">
                  <img className="rounded-full mb-2" src='https://i.imgur.com/VKhxmNr.png' width="80" height="80" alt="Jarrod" />
                  <h4 className="dark:text-gray-300 text-lg font-medium">Jarrod D.</h4>
                  <a className="p-2" href="https://twitter.com/crypvest_de" target="_blank" rel="noreferrer">
                    <svg width="16" height="13" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" fill="#1DA1F2" fillRule="nonzero" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* 2nd member */}
              <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7" data-aos="fade-down" data-aos-delay="100" data-aos-anchor="[data-aos-id-team]">
                <div className="flex flex-col items-center">
                  <img className="rounded-full mb-2" src='https://i.imgur.com/lc7IfEV.png' width="80" height="80" alt="Cobus" />
                  <h4 className="dark:text-gray-300 text-lg font-medium">Cobus D.</h4>
                  <a className="p-2" href="https://twitter.com/KlerkCobus" target="_blank" rel="noreferrer">
                    <svg width="16" height="13" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" fill="#1DA1F2" fillRule="nonzero" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* 3rd member */}
              <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7" data-aos="fade-down" data-aos-delay="200" data-aos-anchor="[data-aos-id-team]">
                <div className="flex flex-col items-center">
                  <img className="rounded-full mb-2" src='https://i.imgur.com/WmXZGEj.png' width="80" height="80" alt="Cor" />
                  <h4 className="dark:text-gray-300 text-lg font-medium">Nico H.</h4>
                  <a className="p-2" href="https://twitter.com/ItBe_DwarfY" target="_blank" rel="noreferrer">
                    <svg width="16" height="13" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" fill="#1DA1F2" fillRule="nonzero" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* 4th member */}
              <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7" data-aos="fade-down" data-aos-delay="300" data-aos-anchor="[data-aos-id-team]">
                <div className="flex flex-col items-center">
                  <img className="rounded-full mb-2" src='https://i.imgur.com/sifQoOT.png' width="80" height="80" alt="Stephan" />
                  <h4 className="dark:text-gray-300 text-lg font-medium">Umberto S.</h4>
                  <a className="p-2" href="https://twitter.com/umbelvo" target="_blank" rel="noreferrer">
                    <svg width="16" height="13" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" fill="#1DA1F2" fillRule="nonzero" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* 5th member */}
              <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7" data-aos="fade-down" data-aos-delay="400" data-aos-anchor="[data-aos-id-team]">
                <div className="flex flex-col items-center">
                  <img className="rounded-full mb-2" src='https://i.imgur.com/3HefhVU.png' width="80" height="80" alt="Carol" />
                  <h4 className="dark:text-gray-300 text-lg font-medium">Carol V.D S.</h4>
                  <a className="p-2" href="https://twitter.com/carolvds" target="_blank" rel="noreferrer">
                    <svg width="16" height="13" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" fill="#1DA1F2" fillRule="nonzero" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* 6th member */}
              <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7" data-aos="fade-down" data-aos-delay="500" data-aos-anchor="[data-aos-id-team]">
                <div className="flex flex-col items-center">
                  <img className="rounded-full mb-2" src='https://i.imgur.com/jhQMVOL.png' width="80" height="80" alt="Wayne" />
                  <h4 className="dark:text-gray-300 text-lg font-medium">Wayne H.</h4>
                  <a className="p-2" href="https://twitter.com/WayneH__" target="_blank" rel="noreferrer">
                    <svg width="16" height="13" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" fill="#1DA1F2" fillRule="nonzero" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* 8th member */}
              <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7" data-aos="fade-down" data-aos-delay="700" data-aos-anchor="[data-aos-id-team]">
                <div className="flex flex-col items-center">
                  <img className="rounded-full mb-2" src='https://i.imgur.com/ulMRdOS.png' width="80" height="80" alt="Corrie" />
                  <h4 className="dark:text-gray-300 text-lg font-medium">Corrie V.</h4>
                  <a className="p-2" href="https://twitter.com/VermeulenKlaas" target="_blank" rel="noreferrer">
                    <svg width="16" height="13" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" fill="#1DA1F2" fillRule="nonzero" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* 9th member */}
              <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7" data-aos="fade-down" data-aos-delay="600" data-aos-anchor="[data-aos-id-team]">
                <div className="flex flex-col items-center">
                  <img className="rounded-full mb-2" src='https://i.imgur.com/mmek5uh.png' width="80" height="80" alt="Mari" />
                  <h4 className="dark:text-gray-300 text-lg font-medium">Mari V.</h4>
                  <a className="p-2" href="https://twitter.com/dasushimuncher" target="_blank" rel="noreferrer">
                    <svg width="16" height="13" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" fill="#1DA1F2" fillRule="nonzero" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* 10th member */}
              <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7" data-aos="fade-down" data-aos-delay="700" data-aos-anchor="[data-aos-id-team]">
                <div className="flex flex-col items-center">
                  <img className="rounded-full mb-2" src='https://i.imgur.com/GIfY3Fe.png' width="80" height="80" alt="Eugene" />
                  <h4 className="dark:text-gray-300 text-lg font-medium">Eugene V. N.</h4>
                  <a className="p-2" href="https://twitter.com/Eugenevnk" target="_blank" rel="noreferrer">
                    <svg width="16" height="13" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" fill="#1DA1F2" fillRule="nonzero" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;