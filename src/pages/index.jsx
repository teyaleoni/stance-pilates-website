// TODO:
// Website wants:
// - add instagram in nav bar
// - add google reviews
// - add location with google map in footer
import * as React from "react";
import InstagramIcon from "../InstagramIcon";
import Faq from "../components/Faq";
import FlodeskForm from "../components/FlodeskForm";
import Page from "../components/Page";
import PricingCard, {
  PricingCtaHeightProvider,
} from "../components/PricingCard";
import {
  EMAIL_ADDRESS,
  GOOGLE_MAPS_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_NUMBER,
} from "../constants";
import aboutImg from "../images/lunge-cropped.jpg";
import headerImg from "../images/sitting-1024.jpg";
import logoFooter from "../images/stance-logo.svg";
import studioImage from "../images/studio-current.jpg";
import workshopImage from "../images/workshops.jpg";
import teachingImage from "../images/teya-teaching.jpg";

import "../styles/global.css";

const IndexPage = () => (
  <Page>
    {/* <div>
      <h2 style={{ 
        color: "red",
        textAlign: 'center',
        margin: '1rem 1rem 0 1rem' 
        }}>
        <a href="/studio-update">Important Studio Update<br/>Click to Read!</a>
      </h2>
    </div> */}
    <section id="home" className="grid-row">
      <div>
        <h1>Built for a Life in Motion</h1>
      </div>
      <img src={headerImg} alt="" width="100%" />
    </section>
    <section id="greeting">
      <div className="nottoowide">
        <p style={{ textTransform: "uppercase" }}>
          Private Pilates Sessions in Southwest Las Vegas
        </p>
        <p style={{ fontFamily: "Lato", fontSize: "1.25rem" }}>
          Empowering a resilient and active life through a personalized, mindful
          practice.
        </p>
      </div>
      <a
        className="button cta"
        target={"_blank"}
        href={`https://stancepilates.janeapp.com/`}
      >
        BOOK A SESSION
      </a>
    </section>

    <section id="about" className="grid-row">
      <div className="about-picture">
        <img src={aboutImg} alt="me" width="100%" />
      </div>
      <div className="about-container-text">
        <h2>About your instructor</h2>
        <p>Hi, I'm Teya!</p>
        <p>
          I believe that true strength isn't about bulk or force—it’s about
          control.
        </p>
        <p>
          I founded Stance Pilates to move away from the "no pain, no gain"
          mentality and return to the essence of the method: precision, grace,
          and balance.
        </p>
        <p>
          As a certified BASI comprehensive instructor, my approach is distinct
          from traditional fitness. Instead of mindless repetition, I guide you
          through a personalized practice that offers the focused attention of
          private personal training, where you are an active participant, not
          just an observer.
        </p>
        <p>
          We work to correct physical imbalances, alleviate back pain, and
          develop a "strong center" that acts as a support system for everything
          you do. Whether you are seeking athletic conditioning, injury
          recovery, or relief from desk work, I am here to help you move with
          freedom and ease.
        </p>
        <p>
          Pilates transformed my life by teaching me to move with intention. I
          created Stance to share that same clarity and resilience with you.
        </p>
      </div>
    </section>
    <section id="studio" className="grid-row">
      <div>
        <h2>The Studio</h2>
        <p>A space built for focused movement.</p>
        <p>
          We utilize BASI Systems equipment—the gold standard for durability and
          feel. Whether on the Pilates Reformer, Cadillac, or Wunda Chair, our
          setup ensures that every movement is supported, aligned, and
          purposeful. Experience the difference of a studio designed for true
          control.
        </p>
      </div>
      <div className="about-picture">
        <img src={studioImage} alt="me" width="100%" />
      </div>
    </section>
    <section id="testimonials">
      <h1>What my clients are saying...</h1>
      <div className="grid-row-lg">
        <div>
          <h2>Annabelle B.</h2>
          <p>
            "I came to Teya with persistent back injuries that had haunted me
            for a decade. Her approach is nothing short of remarkable—I now live
            pain-free, something I hadn't thought possible."
          </p>
        </div>
        <div>
          <h2>Maryloie E.</h2>
          <p>
            "Teya tailored each session to what my body needed. After every
            session, my body felt stronger... she set me up for success."
          </p>
        </div>
        <div>
          <h2>Chelsea W.</h2>
          <p>
            "Teya will fix your form like no other—something you’ll never get in
            a group Pilates class. She helped me strengthen and stretch areas
            that desperately needed it."
          </p>
        </div>
      </div>
    </section>

    <section id="quote">
      <div className="nottoowide">
        <h3
          style={{
            fontStyle: "italic",
            fontSize: "1.75rem",
            lineHeight: "1.4em",
          }}
        >
          "We retire too early and we die too young. Our prime of life should be
          in the 70’s and old age should not come until we are almost 100."
        </h3>
        <p style={{ textAlign: "end" }}>- Joseph Pilates</p>
      </div>
    </section>
    <section id="pricing" style={{ display: "grid", gap: "2rem" }}>
      <h2>Pricing</h2>

      <PricingCtaHeightProvider>
        <div style={{ display: "grid", gap: "1rem" }}>
          <h3 style={{ color: "var(--color-terracotta)" }}>
            New client special
          </h3>
          <div className="grid-row-4" style={{ gap: "1rem" }}>
            <PricingCard
              bundleSize={4}
              price={299}
              expiry="1 month"
              cta="PURCHASE"
              noSavingsBadge
            >
              The essential starting point. Establish your foundation, learn the
              apparatus, and align your body with the Stance method.
              <br />
              <br />
              **One-time purchase per client.
            </PricingCard>
          </div>
        </div>
      </PricingCtaHeightProvider>

      <div style={{ display: "grid", gap: "1rem" }}>
        <h3 style={{ color: "var(--color-terracotta)" }}>Regular pricing</h3>
        <PricingCtaHeightProvider>
          <div className="grid-row-4" style={{ gap: "1rem" }}>
            <PricingCard
              bundleSize={1}
              price={100}
              expiry="1 month"
              cta="PURCHASE"
            >
              A focused, standalone session. Ideal for an initial assessment or
              a specific tune-up.
            </PricingCard>
            <PricingCard
              bundleSize={5}
              price={450}
              expiry="3 months"
              cta="PURCHASE"
            >
              Build momentum. Establish a consistent routine to see improvements
              in strength and control.
            </PricingCard>
            <PricingCard
              bundleSize={10}
              price={850}
              expiry="4 months"
              cta="PURCHASE"
            >
              Deepen your practice. Our best value for clients committed to
              lasting resilience and precision.
            </PricingCard>
          </div>
        </PricingCtaHeightProvider>
      </div>
    </section>
    <section id="faq">
      <div className="nottoowide" style={{ display: "grid", gap: "2rem" }}>
        <h2>FAQ</h2>
        <Faq question="What can I expect from my first session?">
          <p>
            We begin with an assessment of your movement patterns and goals.
            Unlike a group class where you might get lost in the crowd, this
            session is designed to make you an active participant in your own
            body. You will move through a personalized sequence on the
            apparatus, focusing on control and precision. You should leave
            feeling refreshed, invigorated, and energized rather than exhausted.
          </p>
        </Faq>

        <Faq question="Why choose private training over a group class?">
          <p>
            Pilates is a discipline of detail. In a private session, we can
            correct physical imbalances and ensure you are engaging the correct
            muscles without strain. This 1-on-1 focus allows us to address your
            specific needs—whether rehab or athletic conditioning—ensuring you
            build resilience safely.
          </p>
        </Faq>

        <Faq question="Do I need an initial consultation before booking?">
          <p>
            Your first session is your consultation. We use the first
            appointment to assess your posture, alignment, and range of motion
            while moving. This allows us to build a program that supports your
            life in motion immediately.
          </p>
        </Faq>

        <Faq question="Can I share a package with another person?">
          <p>
            No. Our session series are designed for your individual progression
            and mastery. To ensure the highest level of personalization and
            focus, packages are non-transferable and cannot be shared.
          </p>
        </Faq>

        <Faq question="What should I wear?">
          <p>
            Wear comfortable, form-fitting clothing that allows you to move with
            freedom and ease. Grip socks are not required.
          </p>
        </Faq>
        <Faq question="Do you sell Pilates gift certificates?">
          <p>
            Yes. Giving the gift of movement is a wonderful way to support a
            friend or loved one.
            <a
              className="linky"
              target="_blank"
              rel="noreferrer"
              href="https://stancepilates.janeapp.com/online_gift_cards/new"
            >
              Purchase one here
            </a>
          </p>
        </Faq>
      </div>
    </section>
    {/* EVENTS*/}
    <section id="events" className="grid-row">
      <div>
        <h1>Movement in Community</h1>
        <div>
          <p>
            We believe movement is better shared. Join our specialized workshops
            to refine your technique, or book Stance for your own private event.
            From the studio to your location, let’s move together.
          </p>
        </div>
        <br />
        <a className="button" href="/events">
          SEE UPCOMING DATES
        </a>
      </div>
      <div className="about-picture">
        {/* <img src={workshopImage} alt="me" width="100%" /> */}
        <img src={teachingImage} alt="me" width="100%" />
      </div>
    </section>
    <section>
      <FlodeskForm formName="home" />
    </section>
    {/* CONTACT */}
    <section id="contact">
      <div>
        <div>
          <img src={logoFooter} alt="" style={{ maxHeight: "4vh" }} />
        </div>
        <div
          style={{
            marginTop: "1rem",
          }}
        ></div>
        <div>
          <p>
            <a href={GOOGLE_MAPS_URL} target="_blank">
              6675 S Tenaya Way #200 <br />
              Las Vegas, NV 89113 <br />
            </a>
          </p>
          <p>
            {" "}
            <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
          </p>
          <p>{PHONE_NUMBER}</p>
        </div>
        <div className="social">
          <a
            className="instagram-link"
            target="_blank"
            rel="noreferrer"
            href={INSTAGRAM_URL}
          >
            <InstagramIcon /> @{INSTAGRAM_HANDLE}
          </a>
        </div>
        <p style={{ fontSize: ".8rem" }}>
          Proudly serving Southwest Las Vegas, <br />
          South Summerlin, Rhodes Ranch, Mountain's Edge,
          <br /> and Spring Valley (89113)
        </p>
      </div>
    </section>
  </Page>
);

export default IndexPage;

export const Head = () => <title>Stance Pilates</title>;

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-NB4VFNEXCY"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-NB4VFNEXCY');
// </script>
