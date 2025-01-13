import React from "react";
import Page from "../components/Page";
import pelvicFloorImage from "../images/pelvic-floor-workshop.png";
import parallelEventImage from "../images/parallel-event.png";
import tbaImage from "../images/tba.png";

export default function events() {
  return (
    <Page navHrefPrefix="/">
      <section className="content-block">
        <h1>Upcoming Events</h1>
        <p>
          We love bringing people together! Whether it’s a fun mat class, an
          inspiring workshop, or a chance to connect with others, our events are
          all about building community through Pilates. Come join us—you’ll
          move, learn, and leave feeling stronger and more connected!
        </p>
        <div className="grid-row">
          <img src={tbaImage} alt="me" width="100%" />
          <div>
            <h1>Community Mat Class</h1>
            <p>
              Date: February 2025 (Specific date TBA)
              <br />
              Time: TBA
              <br />
              Location: TBA
              <br />
              Mats are provided
            </p>
          </div>
        </div>
      </section>
      <section className="content-block">
        <h2>Previous Events</h2>
        <p>
          We’ve shared some amazing moments with our community! From energizing
          mat classes to insightful workshops, our past events have been all
          about connection, growth, and movement. Take a look at what we’ve been
          up to—we’d love to see you at the next one!
        </p>
        <div className="grid-row">
          <img src={pelvicFloorImage} alt="me" width="100%" />
          <div className="about-picture">
            <h1>Pelvic Floor and Pilates Workshop</h1>
            <p>
              Date: January 12th, 2025
              <br />
              Time: 11AM - 12:30PM
              <br />
              Location: Millennium Dance Complex Las Vegas
              <br />
              Bring your own mat please
            </p>
            <p>
              Join us for a 90-minute workshop with Dr. Catrina Fabian, PT, DPT
              (Pelvic Health Specialist), and Pilates & Dance Instructor Teya
              Lorts. Open to all, this workshop offers valuable insights and
              practical tools. <br />
              Discover foundational movements for pelvic floor and core health,
              then enjoy a guided mat Pilates class to integrate what you’ve
              learned!
              <br />
              <br />
            </p>
            <p>
              <br /> Check out Dr. Catrina's{" "}
              <a
                className="linky"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/powerinthepelvis/"
              >
                instagram
              </a>
            </p>
          </div>
        </div>
        <div className="grid-row">
          <img src={parallelEventImage} alt="me" width="100%" />
          <div>
            <h1>Parallel Mat Pilates Class</h1>
            <p>
              Date: December 12th, 2024
              <br />
              Time: 10AM - 11AM
              <br />
              Location: Millennium Dance Complex Las Vegas
              <br />
              Bring your own mat please
            </p>
            <p>
              During this event, we celebrated the launch of Parallel Grip
              Socks!
              <p>
                Check out our recap on{" "}
                <a
                  className="linky"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/reel/DEF1Gwox_u7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                >
                  instagram
                </a>
              </p>
            </p>
          </div>
        </div>
      </section>
    </Page>
  );
}
