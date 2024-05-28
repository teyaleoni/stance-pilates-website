// TODO
// - Scroll to the top button at bottom of page
// - Ability to share blog
// Mobile friendly

import React from "react";
import Author from "./Author";
import Page from "./Page";
import * as classes from "./BlogArticle.module.css";

export const Head = () => <title>Stance Pilates Blog</title>;

export default function BlogArticle({ title, subtitle, date, children }) {
  return (
    <Page navHrefPrefix="/">
      <div className={classes.root}>
        <article className={classes.article}>
          <div className={classes.heading}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <Author date={date} />
          </div>
          <div className={classes.content}>{children}</div>
        </article>
        <div className={classes.otherLinks}>
          <h3>Related content</h3>
          <a href="..">
            Is Pilates Suitable for Beginners? A Comprehensive Guide
          </a>
        </div>
      </div>
    </Page>
  );
}
