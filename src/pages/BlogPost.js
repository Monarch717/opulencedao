import React from 'react';

import Header from '../partials/Header';
import BlogSingle from '../partials/BlogSingle';
import Footer from '../partials/Footer';

function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <BlogSingle />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default BlogPost;