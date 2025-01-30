import React from "react";
import Page from "../components/Page";
import pelvicFloorImage from "../images/pelvic-floor-workshop.png";
import parallelEventImage from "../images/parallel-event.png";
import uncommonsImage from "../images/uncommons-event.png";
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
          <img src={uncommonsImage} alt="me" width="100%" />
          <div>
            <h1>Community Pilates Mat Class</h1>
            <p>
              📅 Sunday, February 9th 2025
              <br />
              ⏰ 11:00AM
              <br />
              📍 The Assembly by Kiln at Uncommons | 8460 Rozita Lee Ave Las Vegas,
              NV 89113
              <br />
              🧘‍♀️ Mats will be provided
            </p>
            <p>FREE Community Pilates Class!</p>
            <p>
              Stance Pilates is partnering with other local Las Vegas businesses
              to bring the community together through movement! ❤️
            </p>
            <p>
              Come out and join us for a beginner-friendly mat Pilates class.
              <br />
              After class, enjoy a free refreshment from @brewteabar and a chain
              ring from @luxexlinxpermanentjewelry
            </p>
            <p>SPOTS ARE LIMITED!</p>
            <p>
              Sign up{" "}
              <a
                className="linky"
                target="_blank"
                rel="noreferrer"
                href="https://www.eventbrite.com/e/free-mat-pilates-class-featuring-luxe-linx-brew-tea-bar-uncommons-tickets-1221426873659?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
              >
                here!
              </a>
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
            </p>
            <p>
              This was a 90-minute workshop with Dr. Catrina Fabian, PT, DPT
              (Pelvic Health Specialist), and Pilates & Dance Instructor Teya
              Lorts. Open to all, this workshop offered valuable insights and
              practical tools. <br />
              We discovered foundational movements for pelvic floor and core
              health, then enjoyed a guided mat Pilates class to integrate what
              we learned!
            </p>
            <p>
              <br /> Check out our recap on{" "}
              <a
                className="linky"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/reel/DEyTLYbyMQA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
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
