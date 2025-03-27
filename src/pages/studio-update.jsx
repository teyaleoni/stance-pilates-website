import React from "react";
import Page from "../components/Page";
import { INSTAGRAM_URL } from "../constants";

export default function StudioUpdate() {
  return (
    <Page navHrefPrefix="/">
      <section>
        <h1>Studio Update:</h1>
        <br />
        <h2>I have big news to share 🤗</h2>
        <br />
        <br />
        <h3>🤰 MATERNITY LEAVE 🤰</h3>
        <p>
          I'm having a baby! I will be going on maternity leave starting April
          5th and will return to the studio at the end of May.
        </p>
        <h3>‼️ NEW STUDIO LOCATION ‼️</h3>
        <p>
          When I return, Stance Pilates will be moving to a new location! The
          new studio will be inside Bottega Exchange: 6675 S Tenaya Way #200,
          Las Vegas, NV 89113—just 3 miles (or a 7-minute drive) from current
          studio.
        </p>
        <h3>💻 SCHEDULING 💻</h3>
        <p>
          You can still schedule a session while I am away at{" "}
          <a target={"_blank"} href={`https://parallelsocks.com/`}>
            stancepilates.janeapp.com.
          </a>{" "}
          My schedule is regularly updated and has available slots for when I
          come back.
        </p>
        <p>
          If you have any questions, feel free to reach out at
          info@stancepilates.com or call/text 702-608-2065.
        </p>
        <p>
          To see what I am up to and for regular updates, check out my{" "}
          <a
            className="instagram-link"
            target="_blank"
            rel="noreferrer"
            href={INSTAGRAM_URL}
          >
            instagram!
          </a>
        </p>
        <p>
          Thank you for reading! I’m so excited for this new chapter in my life
          and business! 💛
        </p>
      </section>
    </Page>
  );
}
