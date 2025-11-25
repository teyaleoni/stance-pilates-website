import React from "react";
import Page from "../components/Page";
import pelvicFloorImage from "../images/pelvic-floor-workshop.jpg";
import parallelEventImage from "../images/parallel-launch.jpg";
import uncommonsImage from "../images/uncommons-event.jpg";
import tbaImage from "../images/tba.png";
import blueChipImage from "../images/blue-chip-event.png";
import FlodeskForm from "../components/FlodeskForm";

export default function events() {
  return (
    <Page navHrefPrefix="/">
      <section className="content-block">
        <h1>Stance On Location</h1>
        <p>
          Bring the method to you. Whether for a corporate wellness retreat, a
          bridal gathering, or a private event, we offer tailored Pilates
          sessions designed to build connection and resilience.
          <br />
          Inquire for Rates & Availability: info@stancepilates.com
        </p>
        <h1>Workshops & Community</h1>
        <p>
          Go beyond the weekly session. Join us for specialized in-studio
          workshops designed to deepen your practice, refine your technique, and
          explore the principles of movement in a community setting.
        </p>
        <div className="grid-row">
          {/* <img src={tbaImage} alt="me" width="100%" /> */}
          <div>
            <h4>No upcoming dates currently scheduled.</h4>
          </div>
        </div>
      </section>
      <section>
        <FlodeskForm formName='event'/>
      </section>
      <section className="content-block">
        <h1>Past Highlights</h1>
        <div className="grid-row">
          <div className="grid-row">
            <img src={uncommonsImage} alt="me" width="100%" />
            <div>
              <h3>Community Mat Series</h3>
              <p>
                Partnering with The Assembly by Kiln and local vendors to make
                Pilates accessible to all levels in the heart of Las Vegas.
              </p>

              <a
                className="linky"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/reel/DF89eVWSQqt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              >
                RECAP CLIP
              </a>
            </div>
          </div>
          <div className="grid-row">
            <img src={pelvicFloorImage} alt="me" width="100%" />
            <div className="about-picture">
              <h3>Pelvic Health Workshop</h3>
              <p>
                An educational deep-dive co-hosted with Dr. Catrina Fabian, DPT.
                We combined clinical insight with Pilates principles for a
                90-minute specialized masterclass.
              </p>

              <a
                className="linky"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/reel/DEyTLYbyMQA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              >
                RECAP CLIP
              </a>
            </div>
          </div>
          <div className="grid-row">
            <img src={parallelEventImage} alt="me" width="100%" />
            <div>
              <h3>Parallel Launch Event</h3>
              <p>
                Celebrating the launch of Parallel Grip Socks with a dedicated
                mat flow at Millennium Dance Complex.
              </p>
              <p>
                <a
                  className="linky"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/reel/DEF1Gwox_u7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                >
                  RECAP CLIP
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
