import React from "react";
import "../styles/global.css";
import Page from "./Page";
import ScrollToTopButton from "./ScrollToTopButton";
import authorImage from "../images/author-blog-64.jpg";
import FlodeskForm from "../components/FlodeskForm";

export const Head = () => <title>Stance Pilates Blog</title>;

export default function BlogArticle({ title, postDate, readTime, content }) {
  return (
    <Page navHrefPrefix="/">
      <div class="blog-article-container">
        <div class="blog-article-header">
          <h1 class="blog-article-title">{title}</h1>

          <div class="author-meta">
            <img src={authorImage} alt="Teya" class="author-img" />
            <div class="meta-text">
              <span class="author-name">Teya</span>
              <span class="post-date">
                {postDate} · {readTime}
              </span>
            </div>
          </div>
        </div>

        {/* <!-- CONTENT --> */}
        <div class="blog-article-content">
          {/* <!-- Optional Hero Image if you have one --> */}
          {/* <img
                  src="hero-image.jpg"
                  alt="Description"
                  class="blog-article-hero-image"
                /> */}
          {content}
        </div>
        <FlodeskForm formName="blog" />
        <ScrollToTopButton />
      </div>
    </Page>
  );
}
