import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
<footer className="relative border-t border-gray-200 dark:border-gray-800">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 -mt-px">
            
            {/* Footer illustration */}
            <div className="pointer-events-none -z-1" aria-hidden="true">
                <svg className="absolute bottom-0 left-0 transform -translate-x-1/2 ml-24 dark:opacity-40" width="800" height="264" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="400" cy="400" r="400" fill="url(#footerglow_paint0_radial)" fillOpacity=".4" />
                    <defs>
                        <radialGradient id="footerglow_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 0 400) scale(315.089)">
                            <stop stopColor="#3ABAB4" />
                            <stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>


            {/* Bottom area */}
            <div className="md:flex md:items-center md:justify-between">

                {/* Social links */}
                <ul className="flex mb-4 md:order-2 md:ml-4 md:mb-0">
                    <li>
                    <a className="flex justify-center items-center text-white bg-teal-500 rounded dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out" href="https://discord.gg/zfXJ2h7HMY" target="_blank" rel="noreferrer" aria-label="discord">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.804 10.956c-1.222-.974-2.968-1.243-3.724-1.323h-.03c-.115 0-.225.065-.26.174a.278.278 0 0 0 .203.378c.85.175 1.832.48 2.727 1.04.182.11.225.357.08.524-.116.131-.313.146-.465.058-1.746-1.076-3.913-1.134-4.335-1.134-.422 0-2.59.058-4.335 1.134-.152.088-.349.073-.465-.058a.344.344 0 0 1 .08-.524c.895-.56 1.876-.865 2.727-1.04.168-.029.27-.21.204-.378-.036-.109-.146-.174-.262-.174h-.029c-.756.08-2.502.349-3.724 1.323-.712.662-2.13 4.466-2.196 7.833 0 .226.058.451.19.633.85 1.2 2.697 1.92 4.094 2.022.21.014.414-.08.538-.255.007 0 .007-.007.014-.014a.654.654 0 0 0-.305-.997c-1.164-.429-1.76-.938-1.796-.974a.355.355 0 0 1-.037-.495c.131-.145.35-.16.495-.029.022.015 1.636 1.39 4.807 1.39 3.17 0 4.785-1.375 4.807-1.39a.347.347 0 0 1 .495.03.355.355 0 0 1-.037.494c-.036.036-.632.545-1.796.974a.654.654 0 0 0-.305.997c.007.007.007.014.014.014.124.175.327.27.538.255 1.397-.102 3.244-.822 4.095-2.022.13-.182.189-.407.189-.633-.065-3.367-1.484-7.17-2.196-7.833Zm-8.066 6.677c-.669 0-1.214-.626-1.214-1.39 0-.77.545-1.396 1.214-1.396.677 0 1.215.626 1.215 1.397 0 .763-.538 1.389-1.215 1.389Zm4.524 0c-.677 0-1.215-.626-1.215-1.39 0-.77.538-1.396 1.215-1.396.669 0 1.214.626 1.214 1.397 0 .763-.545 1.389-1.214 1.389Z"></path>
                            </svg>
                        </a>

                    </li>
                    <li className="ml-4">
                    <a className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded transition duration-150 ease-in-out" href="https://twitter.com/opulencedao" target="_blank" rel="noreferrer" aria-label="Twitter">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                            </svg>
                        </a>
              
                    </li>
                    <li className="ml-4">
                    <a className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded transition duration-150 ease-in-out" href="https://github.com/opulencedao" target="_blank" rel="noreferrer"  aria-label="Github">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                            </svg>
                        </a>
                    </li>

                </ul>

                {/* Middle links */}
                <div className="text-sm md:order-1 text-gray-700 mb-2 md:mb-0">
                    <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#">Dev Channel</Link> · <Link className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="/bug-bounty">Bug Bounty</Link>
                </div>

                {/* Copyrights note */}
                <div className="text-gray-600 dark:text-gray-400 text-sm mr-4">&copy; 2022 Opulence.</div>

            </div>

        </div>
    </div>
</footer>
  );
}

export default Footer;
