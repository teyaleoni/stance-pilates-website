import React from "react";
import Page from "../components/Page";
import pelvicFloorImage from "../images/pelvic-floor-workshop.png";
import parallelEventImage from "../images/parallel-event.png";

export default function events() {
  return (
    <Page navHrefPrefix="/">
      <section className="content-block">
        <h1>Upcoming Events</h1>
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
            <a
              className="button"
              href="https://stancepilates.janeapp.com/locations/millennium-dance-complex-las-vegas/book#/staff_member/1/treatment/2"
              target="_blank"
            >
              Sign Up Here
            </a>
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
      </section>
      <section className="content-block">
        <h2>Previous Events</h2>
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
