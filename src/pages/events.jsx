import React from "react";
import Page from "../components/Page";
import pelvicFloorImage from "../images/pelvic-floor-workshop.png";
import parallelEventImage from "../images/parallel-event.png";
import uncommonsImage from "../images/uncommons-event.png";
import tbaImage from "../images/tba.png";
import blueChipImage from "../images/blue-chip-event.png";
import FlodeskForm from "../components/FlodeskForm";

export default function events() {
  return (
    <Page navHrefPrefix="/">
      <section className="content-block">
        <h1>Pilates for Events, Parties & Corporate Wellness</h1>
        <p>
          Bring mindful movement to your celebration or workplace. I offer
          tailored private Pilates sessions for groups of all sizes. Ideal for
          bridal parties, corporate wellness, and exclusive events.
          <br/>
          Email info@stancepilates.com for more info
        </p>
        <h1>Upcoming Community Events</h1>
        <p>
          We love bringing people together! Whether it’s a fun mat class, an
          inspiring workshop, or a chance to connect with others, our events are
          all about building community through Pilates. Come join us—you’ll
          move, learn, and leave feeling stronger and more connected!
        </p>
        <div className="grid-row">
          <img src={tbaImage} alt="me" width="100%" />
          <div>
            <h1>Check back for our upcoming events!</h1>
            {/* <p>
              📅 Sunday, March 9th 2025
              <br />
              ⏰ 9:30AM
              <br />
              📍 Blue Chip Conditioning Pilates Studio
            </p>
            <p>Join us for Blue Chip Conditioning's Wellness Weekend!</p> */}
          </div>
        </div>
      </section>
      <section>
        <FlodeskForm />
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
          <img src={blueChipImage} alt="me" width="100%" />
          <div>
            <h1>Free March Mat Class</h1>
            <p>
              📅 Sunday, March 9th 2025
              <br />
              ⏰ 9:30AM
              <br />
              📍 Blue Chip Conditioning Pilates Studio
            </p>
            <p>Join us for Blue Chip Conditioning's Wellness Weekend!</p>
            <p>
              Come to @thewellnessweekend event and take class with
              @stance.pilates in partnership with @parallelgripsocks! You won’t
              want to miss it!
            </p>
            <p>
              Also don’t miss the Wellness Weekend Mix & Mingle on Saturday 3/8
              from 3-6pm for your chance to win prizes from all the
              participating partners! See you there!
            </p>
          </div>
        </div>
        <div className="grid-row">
          <img src={uncommonsImage} alt="me" width="100%" />
          <div>
            <h1>Community Pilates Mat Class</h1>
            <p>
              📅 Sunday, February 9th 2025
              <br />
              ⏰ 11:00AM
              <br />
              📍 The Assembly by Kiln at Uncommons | 8460 Rozita Lee Ave Las
              Vegas, NV 89113
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
            <p>
              <br /> Check out our recap on{" "}
              <a
                className="linky"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/reel/DF89eVWSQqt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              >
                instagram
              </a>
            </p>
          </div>
        </div>
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
