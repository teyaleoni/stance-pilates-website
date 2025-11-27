import React from "react";
import * as C from "../constants";
import logoFooter from "../images/stance-logo.svg";
import InstagramIcon from "./InstagramIcon";

export default function ContactInfo({ children, at }) {
  return (
    <section id="contact">
      <div>
        <img src={logoFooter} alt="" style={{ maxHeight: "4vh" }} />
      </div>
      <div>
        <p>
          <a href={C.GOOGLE_MAPS_URL} target="_blank">
            6675 S Tenaya Way #200 <br />
            Las Vegas, NV 89113 <br />
          </a>
        </p>
        <p>
          {" "}
          <a href={`mailto:${C.EMAIL_ADDRESS}`}>{C.EMAIL_ADDRESS}</a>
        </p>
        <p>{C.PHONE_NUMBER}</p>
      </div>
      <div className="social">
        <a
          className="instagram-link"
          target="_blank"
          rel="noreferrer"
          href={C.INSTAGRAM_URL}
        >
          <InstagramIcon /> @{C.INSTAGRAM_HANDLE}
        </a>
      </div>
      <p style={{ fontSize: ".8rem" }}>
        Proudly serving Southwest Las Vegas, <br />
        South Summerlin, Rhodes Ranch, Mountain's Edge,
        <br /> and Spring Valley (89113)
      </p>
    </section>
  );
}
