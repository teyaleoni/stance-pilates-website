// TODO
// - Scroll to the top button at bottom of page
// - Ability to share blog
// Mobile friendly

import React from "react";
import Author from "../../components/Author";
import Page from "../../components/Page";
import "../../styles/global.css";

export default function WhyPilatesIsWorthIt() {
  return (
    <Page navHrefPrefix="/">
      <div className="blog-page-container">
        <div class="blog-lists-container">
          <h1>Blog Posts</h1>
          <p>
            Explore articles covering Pilates, personal experiences, and tips
            for living a healthy lifestyle.
          </p>
          <div class="blog-posts-list">
            <div class="blog-post-list-title">
              <h3>
                Unlock Your Pilates Potential: Why Private Lessons Are Your Key
                to Success
              </h3>
            </div>
            <div class="blog-post-list-title">
              <h3>Is Pilates Suitable for Beginners? A Comprehensive Guide</h3>
            </div>
            <div class="blog-post-list-title">
              <h3>Help! What do I wear to a Pilates class?</h3>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
