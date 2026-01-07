import React from "react";
import { INSTAGRAM_URL } from "../constants";
import authorImg from "../images/author-blog-64.jpg";
import * as classes from "./Author.module.css";

export default function Author({ date }) {
  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <img src={authorImg} className={classes.photo} alt="picture of author" />
        <div className={classes.info}>
          <p className={classes.name}>Written by Teya Lorts</p>
          <p className={classes.publish}>Published {date}</p>
        </div>
      </div>
      <div className={classes.follow}>
        <a target="_blank" rel="noreferrer" href={INSTAGRAM_URL}>
          Follow
        </a>
      </div>
    </div>
  );
}
