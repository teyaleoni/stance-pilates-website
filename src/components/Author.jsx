import React from "react";
import authorImg from "../images/author-blog-64.jpg";
import * as classes from "./Author.module.css";

export default function Author() {
  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <img src={authorImg} className={classes.photo} alt="" />
        <div className={classes.info}>
          <p className={classes.name}>Written by Teya Lorts</p>
          <p className={classes.publish}>Published May 14, 2024</p>
        </div>
      </div>
      <div className={classes.follow}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/stance.pilates/"
        >
          Follow
        </a>
      </div>
    </div>
  );
}
