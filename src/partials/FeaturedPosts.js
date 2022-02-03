import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedPosts() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-16">

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4" data-aos-id-featposts>

            {/* 1st article */}
            <article className="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="100">
              <figure>
                <div className="absolute inset-0 bg-teal-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
              </figure>
              <div className="relative flex flex-col h-full text-white">
                <header className="grow">
                  <Link className="hover:underline" to="/blog-post">
                    <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                      17,304
                    </h3>
                  </Link>
                </header>
                <footer>
                  <div className="text-sm opacity-80">Active Nodes</div>
                </footer>
              </div>
            </article>

            {/* 2nd article */}
            <article className="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="200">
              <figure>
                <div className="absolute inset-0 bg-purple-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
              </figure>
              <div className="relative flex flex-col h-full text-white">
                <header className="grow">
                  <Link className="hover:underline" to="/blog-post">
                    <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                      5 Ways to grow your personal network
                    </h3>
                  </Link>
                </header>
                <footer>
                  <div className="text-sm opacity-80">By Yuri Lapko · Nov 14, 2020</div>
                </footer>
              </div>
            </article>

            {/* 3rd article */}
            <article className="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="300">
              <figure>
                <div className="absolute inset-0 bg-indigo-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
              </figure>
              <div className="relative flex flex-col h-full text-white">
                <header className="grow">
                  <Link className="hover:underline" to="/blog-post">
                    <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                      How to fix my website myself
                    </h3>
                  </Link>
                </header>
                <footer>
                  <div className="text-sm opacity-80">By Josh Wang · Nov 10, 2020</div>
                </footer>
              </div>
            </article>

            {/* 4th article */}
            <article className="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="400">
              <figure>
                <div className="absolute inset-0 bg-pink-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
              </figure>
              <div className="relative flex flex-col h-full text-white">
                <header className="grow">
                  <Link className="hover:underline" to="/blog-post">
                    <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                      How COVID-19 redefined the entrepreneur
                    </h3>
                  </Link>
                </header>
                <footer>
                  <div className="text-sm opacity-80">By Mary Champ · Nov 2, 2020</div>
                </footer>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturedPosts;
