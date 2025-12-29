// TODO
// - Scroll to the top button at bottom of page
// - Ability to share blog
// Mobile friendly

import React from "react";
import Page from "../../components/Page";
import "../../styles/global.css";
import babyImage from "../../images/baby-teya.png";
import lantanasImage from "../../images/lantanas.jpg";
import privateSessionImage from "../../images/teaching.jpg";

export default function BlogIndex() {
  return (
    <Page navHrefPrefix="/">
      <div class="blog-container">
        {/* <!-- HEADER SECTION --> */}
        <div class="blog-header">
          <h1 class="blog-title">Notes from the Studio.</h1>
          <p class="blog-subtext">
            A space for reflection. Exploring the intersection of Pilates and
            the ongoing process of building a life in motion.
          </p>
          <hr style={{ padding: "0 1rem 0 1rem" }}></hr>
        </div>

        {/* <!-- FEATURED POST (Your "Origin Story") --> */}
        <section class="featured-post">
          {/* <!-- Replace 'dancer-photo.jpg' with your B&W childhood photo --> */}
          <img src={babyImage} alt="Young dancer" class="featured-image" />

          <div class="featured-content">
            <span class="category-tag">Founder Stories</span>
            <h2 class="featured-title">
              Robbed by the Invisible (and How I Took It Back)
            </h2>
            <p class="featured-excerpt">
              Ten years ago, a rare diagnosis stole my career and left me unable
              to trust my own body. This is the story of how I found my way
              back—and why movement is only medicine if the dosage is correct.
            </p>
            <a href="/blog/robbed-by-the-invisible" class="read-btn">
              Read the Story
            </a>
          </div>
        </section>
        <section>
          {/* <!-- RECENT POSTS GRID (Future Content) --> */}
          <h3 class="recent-grid-title">Recent Articles</h3>
          <div class="article-grid">
            <article class="article-card">
              <img
                src={lantanasImage}
                alt="Picture of the debris from a lantana plant"
                class="article-image"
              ></img>
              <span class="category-tag">The Mindset</span>
              <h3 class="card-title">Pruning in the Dark</h3>
              <p class="card-excerpt">
                Moving beyond the surface to process the things we carry. Why I
                turn to drastic movement to clear mental clutter and tend to my
                roots.
              </p>
              <a class="card-link" href="/blog/pruning-in-the-dark">
                Read More
              </a>
            </article>

            <article class="article-card">
              <img
                src={privateSessionImage}
                alt="Private Pilates Session"
                class="article-image"
              ></img>
              <span class="category-tag">The Method</span>
              <h3 class="card-title">
                Beyond the Basics: Why Private Sessions Are the Key to True
                Connection
              </h3>
              <p class="card-excerpt">
                Moving beyond generic fitness to build a practice that lasts.
                Why focused attention is the most efficient path to connecting
                to your body.
              </p>
              <a class="card-link" href="/blog/beyond-the-basics">
                Read More
              </a>
            </article>

            {/* <!-- ARTICLE 3 (Placeholder) --> */}

            {/* <!-- ARTICLE 4 (Placeholder) --> */}
            <div></div>
            {/* <article class="article-card">
              <a href=""></a>
              <div class="article-image"></div>
              <span class="category-tag">Studio Life</span>
              <h3 class="card-title">
                Coming Soon: Building a Comprehensive Studio
              </h3>
              <p class="card-excerpt">
                Why we are expanding our apparatus collection to include every
                tool Joseph Pilates designed.
              </p>
              <div class="card-link">Read More</div>
            </article> */}
          </div>
        </section>
      </div>
    </Page>
  );
}
