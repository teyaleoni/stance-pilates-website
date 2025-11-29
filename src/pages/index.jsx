// TODO:
// Website wants:
// - add google reviews
// - add location with google map in footer
import React from "react";
import Faq from "../components/Faq";
import FlodeskForm from "../components/FlodeskForm";
import Page from "../components/Page";
import PricingCard, {
  PricingCtaHeightProvider,
} from "../components/PricingCard";
import JobCard from "../components/JobCard";
import aboutImg from "../images/lunge-cropped.jpg";
import headerImg from "../images/sitting-1024.jpg";
import studioImage from "../images/studio-current.jpg";
import teachingImage from "../images/teya-teaching.jpg";

import "../styles/global.css";

const IndexPage = () => (
  <Page>
    <section id="home" className="grid-row">
      <div>
        <h1>Built for a Life in Motion</h1>
        <p style={{ fontSize: "1.3rem" }}>Be a participant, not an observer.</p>
        <p>
          We move beyond generic fitness to focus on precision and deep
          connection. Whether you are recovering from the daily grind or
          training for elite performance, we build a structural foundation that
          restores your natural freedom of movement.
        </p>
      </div>
      <img src={headerImg} alt="" width="100%" />
    </section>
    <section id="greeting">
      <div className="nottoowide">
        <h1>Precision. Control. Freedom.</h1>
        <p style={{ textTransform: "uppercase" }}>
          Private Pilates Sessions in Southwest Las Vegas
        </p>
        <p style={{ fontFamily: "Lato", fontSize: "1.25rem" }}>
          Dedicated to the art of control. We build the structural foundation
          for a life in motion.
        </p>
      </div>
      <a
        className="button cta"
        target={"_blank"}
        href={`https://stancepilates.janeapp.com/`}
      >
        START YOUR PRACTICE
      </a>
    </section>

    <section id="about" className="grid-row">
      <div className="about-picture">
        <img src={aboutImg} alt="me" width="100%" />
      </div>
      <div className="about-container-text">
        <h2>Why Stance is Different.</h2>
        <p>Hi, I'm Teya.</p>
        <p>
          My approach to Pilates wasn't born from a desire to be fit; it was
          born from a need to regain control.
        </p>
        <p>
          Ten years ago, my professional dance career ended with a diagnosis of
          Paroxysmal Dyskinesia—a movement disorder that left me feeling like a
          stranger in my own body.
        </p>
        <p style={{ fontWeight: "700" }}>
          But I didn't just choose this path; I needed it. I learned the hard
          way that movement is medicine—but only if the dosage is correct.
        </p>
        <p>
          When I first found Pilates, I thought I had found the answer—until I
          hit a wall. I was straining my neck in a group class, and when I asked
          for help, I was dismissed. I realized then that generic instruction
          wasn't just ineffective for me; it was dangerous.
        </p>
        <p>I became a teacher to be the guide I never had.</p>
        <p>
          To manage my condition, I had to become an expert in my own mechanics.
          I learned that safety lies in the details. That experience gave me a
          keen eye for the micro-misalignments that often go unnoticed in group
          settings. I use that focus to ensure you are always supported, never
          dismissed, and moving with true intention in every private session.
        </p>
        <p>
          Whether you are reclaiming your body from an injury or fine-tuning for
          elite performance, I am here to help you build a foundation that
          lasts.
        </p>
      </div>
    </section>
    <section>
      <div>
        <div style={{ marginBottom: "1rem" }}>
          <h1>Who is Stance For?</h1>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            gap: "2rem",
          }}
        >
          <JobCard
            number="01."
            job="The High-Performance
              Professional"
            youAre="A software engineer, a nurse, or an executive
              making decisions all day."
            struggle="You are active, but your job fights back. The
              mental load of your day leaves you disconnected from your physical
              self, &ldquo;reverting&rdquo; your progress and leaving you stiff."
            solution="We provide the maintenance your body
              requires and the guidance your mind craves. We take the wheel on
              programming so you can stop managing the world and start tuning
              into yourself. You walk in carrying the weight of decision
              fatigue, and you walk out grounded, connected, and clear."
            quote="I love the luxury of being guided. For one hour, I don't have
                to plan—I just have to be present."
          ></JobCard>
          <JobCard
            number="02."
            job="The Elite & The Active"
            youAre="A Pro Athlete, a
              100-mile-a-week cyclist, or a gym-goer chasing a PR."
            struggle="You don't need &ldquo;more cardio.&rdquo; You need the missing link in your strength.
              You might be an Olympic lifter who has never felt their deep core,
              or a pro player looking for low-impact movement on a recovery day."
            solution="We
              don't replace your training; we bulletproof it. By cueing the deep
              muscles you’ve never felt before, we help you lift heavier, ride
              longer, and stay in the game without the wear and tear."
            quote="Your core engagement helped me lift more weight at the gym."
          ></JobCard>
          <JobCard
            number="03."
            job="The Structural &
              Specific"
            youAre="Someone who needs a safe harbor. Maybe you have
              Scoliosis, Sciatica, or a body that rejects generic workouts."
            struggle="You want to move, but most fitness classes
              hurt. You are looking for a studio that understands anatomy and
              has the specific equipment to support your unique spine."
            solution=" Precision is our love language. We design a practice that agrees
              with your body, using the apparatus to support you where you are
              weak and challenge you where you are strong."
            quote="Pilates is the only workout that agrees with my body."
          ></JobCard>
        </div>
      </div>
    </section>
    <section id="studio" className="grid-row">
      <div>
        <h2 style={{ marginBottom: "1rem" }}>The Studio</h2>
        <h3>A space built for focused movement.</h3>
        <p>
          We utilize BASI Systems equipment—the gold standard for durability and
          feel. Whether on the Pilates Reformer, Cadillac, or Wunda Chair, our
          setup ensures that every movement is supported, aligned, and
          purposeful. Experience the difference of a private studio designed for
          true control.
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
      <div style={{ maxWidth: "37rem" }}>
        <h2>Invest in Your Practice.</h2>
        <p>
          More than just a workout. Stance is a partnership. We provide a
          private, focused space where you can leave the outside world at the
          door. We handle the plan and the precision, so you can quiet your mind
          and reconnect with your body.
        </p>
      </div>

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
              The essential starting point. We use these sessions to assess your
              unique mechanics, establish your foundation, and align your body
              for a safe, effective practice.
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
            body. You will move through a personalized sequence on the Pilates
            Reformer and apparatus, focusing on control and precision. You
            should leave feeling refreshed, lighter, and more capable than when
            you walked in.
          </p>
        </Faq>

        <Faq question="Why choose private training over a group class?">
          <p>
            Pilates is a discipline of detail. In a private session, we can
            correct physical imbalances and ensure you are engaging the correct
            muscles without strain. This 1-on-1 focus allows us to address
            specific needs—whether back pain relief, posture correction, injury
            rehabilitation, or sport-specific conditioning—ensuring you build
            resilience safely.
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
            friend or loved one. <br />
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
        <h1>Workshops & Community</h1>
        <div>
          <p>
            We believe that freedom of movement belongs to everyone. That is why
            we take Stance beyond the studio walls. Whether we are hosting our
            own community gatherings at local venues or bringing the practice
            directly to your location for corporate and private events, we meet
            you where you are so we can move as one.
          </p>
        </div>
        <br />
        <a className="button" href="/events">
          VIEW EVENTS & INQUIRIES
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
  </Page>
);

export default IndexPage;

export const Head = () => (
  <>
    <title>Stance Pilates | Private Studio Southwest Las Vegas</title>
    meta
    <meta
      name="description"
      content="Exclusive 1-on-1 training in Southwest Las Vegas (89113). Personalized sessions using the Pilates Reformer and Cadillac for strength, back pain relief, and control."
    />
  </>
);

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-NB4VFNEXCY"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-NB4VFNEXCY');
// </script>
