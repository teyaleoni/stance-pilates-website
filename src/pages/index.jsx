import * as React from "react";
import InstagramIcon from "../InstagramIcon";
import Faq from "../components/Faq";
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
import logoHeader from "../images/stance-logo.svg";

import "../styles/global.css";

const IndexPage = () => (
  <Page>
    {/* holiday banner */}
    {/* <div>
      <img src={holidayBanner} alt="" width="100%" ></img>
    </div> */}
    {/* holiday banner end */}
    <section id="home" className="grid-row">
      <div>
        <img src={logoHeader} alt="" width="30%" />
        <h1>
          Empowering you to move freely, feel stronger, and live vibrantly
          through the power of Pilates.
        </h1>
      </div>
      <img src={headerImg} alt="" width="100%" />
    </section>
    <section id="greeting">
      <div className="nottoowide">
        <h2>Private Pilates Sessions in southwest Las Vegas</h2>
        <p>
          Our mission is to help you build strength, relieve pain, and move
          freely through sustainable, personalized Pilates training. We empower
          you to create a vibrant, active life with resilience and mobility,
          tailored to your body and your goals.
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
          I help busy individuals overcome the physical challenges of their
          daily lives to feel stronger, more mobile, and more confident in their
          bodies. Whether you’re spending long hours at a desk, on your feet, or
          juggling a hectic schedule, Pilates can help you move better, feel
          better, and live better.
        </p>
        <p>
          Using the BASI Block System and a variety of Pilates apparatuses —
          including the reformer, wunda chair, and cadillac — I create
          personalized programs that work your entire body. This approach
          ensures every session is balanced and tailored to your needs,
          addressing not just isolated discomfort but promoting overall
          strength, mobility, and well-being. Whether you’re looking to relieve
          discomfort, prevent injuries, or stay active, I’m here to guide you
          every step of the way.
        </p>
        <p>
          With experience working with a wide range of clients—including desk
          workers, nurses, cocktail waitresses, performers, mothers, and
          teachers — I understand how life’s demands can take a toll on your
          body. My goal is to help you integrate movement into your routine so
          you can thrive in both work and life.
        </p>
        <p>
          Pilates transformed my life by enhancing my health, confidence, and
          quality of life, and I’m passionate about sharing that with others. If
          you’re ready to invest in your health and rediscover the joy of
          movement, let’s get started. Because your future self deserves it.
        </p>
      </div>
    </section>
    <section id="testimonials">
      <h1>What my clients are saying...</h1>
      <div className="grid-row-lg">
        <div>
          <h2>Annabelle B.</h2>
          <p>
            Teya has truly been a game-changer in my life. I came to her with
            persistent knee and back injuries that had haunted me for over a
            decade. Despite seeking help from doctors and massages, nothing
            provided lasting relief until I began consistently attending Teya's
            Pilates sessions. Teya's approach is nothing short of remarkable.
            She exudes patience, understanding the unique challenges each
            individual faces. What sets her apart is her ability to create a
            judgment-free environment, ensuring I never felt discouraged when
            struggling to grasp certain exercises. This encouragement played a
            pivotal role in building my confidence and commitment to the
            practice. The impact on my physical well-being has been astonishing.
            I now live pain-free, something I hadn't thought possible after
            years of discomfort. The strength and flexibility I've gained
            through Pilates have not only alleviated my injuries but have also
            empowered me to navigate my daily activities and work without the
            burden of constant pain. If you want to change your life for the
            better, go to Teya.
          </p>
        </div>
        <div>
          <h2>Maryloie E.</h2>
          <p>
            Teya is a huge contribution to my pregnancy journey. Going to her
            twice a week set me up for success during delivery. After seeing her
            every session my body felt stronger and help alleviate pain and
            strengthened my body to carry my beautiful baby. She listened to my
            concerns and pain points and tailored each session to what my body
            needed. Teya is passionate about her craft and cares deeply about
            her clients. She is collaborative and caring. I look forward to each
            session with her.
          </p>
        </div>
        <div>
          <h2>Chelsea W.</h2>
          <p>
            Training will Teya is a treat! I suffer from a lot of muscle
            imbalances due to past injuries. Teya helped me strengthen and
            stretch those areas that so desperately needed it. She explains
            which muscles we are targeting in each exercise. She also will fix
            your form like no other (something you'll never get in a group
            pilates class). Taking pilates lessons will Teya has been amazing
            for my body!
          </p>
        </div>
        <div>
          <h2>Skyler B.</h2>
          <p>
            While training with Teya, she was able to explain why the workouts
            were beneficial for my needs. I appreciated her patience and that
            each workout was modified/tailored to help me get in the best
            workout for my level. She is an excellent pilates instructor!
          </p>
        </div>
      </div>
    </section>
    <section id="quote">
      <div className="nottoowide">
        <h3 style={{ fontStyle: "italic" }}>
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
          <h3 style={{ color: "var(--color-blue-steel)" }}>
            New client special
          </h3>
          <div className="grid-row-4" style={{ gap: "1rem" }}>
            <PricingCard
              bundleSize={3}
              price={199}
              expiry="1 month"
              cta="Let's Go"
              noSavingsBadge
            >
              Begin your path to strength, flexibility, and well-being as you
              discover the transformative benefits of Pilates. Let's start your
              fitness adventure together!
              <br />
              <br />
              **This package is limited to one purchase per person.
            </PricingCard>
          </div>
          <h3 style={{ color: "var(--color-blue-steel)" }}>
            🎄Holiday special🎄
          </h3>
          {/* <p>4 privates sessions + free pair of Parallel Grip Socks!</p> */}
          <div className="grid-row-4" style={{ gap: "1rem" }}>
            <PricingCard
              bundleSize={4}
              price={299}
              expiry="6 Weeks"
              cta="Let's Start!"
              noSavingsBadge
            >
              4 privates sessions + free pair of Parallel Grip Socks! (Save
              $100+)
              <br />
              <br />
              This bundle is perfect for keeping movement in the mix this
              holiday season.
              <br />
              <br />
              All 4 sessions must be used within 6 weeks of purchase.
              <br />
              <br />
              OFFER ENDS 12/15.
            </PricingCard>
          </div>
        </div>
      </PricingCtaHeightProvider>

      <div style={{ display: "grid", gap: "1rem" }}>
        <h3 style={{ color: "var(--color-blue-steel)" }}>Regular pricing</h3>
        <PricingCtaHeightProvider>
          <div className="grid-row-4" style={{ gap: "1rem" }}>
            <PricingCard
              bundleSize={1}
              price={100}
              expiry="1 month"
              cta="Start Your Pilates Experience"
            >
              Try a single Pilates session for $100. Perfect for those wanting
              to experience the Stance Pilates approach.
            </PricingCard>
            <PricingCard
              bundleSize={5}
              price={450}
              expiry="3 months"
              cta="Get Started"
            >
              Kickstart your fitness journey with 5 tailored Pilates sessions.
              Perfect for beginners or those with busy schedules.
            </PricingCard>
            <PricingCard
              bundleSize={10}
              price={850}
              expiry="4 months"
              cta="Start Your Transformation"
            >
              Commit to wellness with 10 dynamic Pilates sessions. Flexibility
              for your lifestyle.
            </PricingCard>
            <PricingCard
              bundleSize={20}
              price={1600}
              expiry="6 months"
              cta="Transform Your Lifestyle"
            >
              Experience the full benefits with 20 transformative Pilates
              sessions. Ideal for long-term goals.
            </PricingCard>
          </div>
        </PricingCtaHeightProvider>
      </div>
    </section>
    <section id="faq">
      <div className="nottoowide" style={{ display: "grid", gap: "2rem" }}>
        <h2>FAQ</h2>
        <Faq question="How do I book a session?">
          <p>
            Ready to book a session?
            <br />
            You can book online
            <a
              class="intro-call"
              href="https://stancepilates.janeapp.com/"
              target="_blank"
            >
              {" "}
              here
            </a>{" "}
            or contact me at info@stancepilates.com or text/call 702-608-2065.
          </p>
        </Faq>

        <Faq question="Where are you located?">
          <p>
            Inside of Collective Studios located at 6050 S Fort Apache Rd #200B,
            Las Vegas, NV 89148
          </p>
        </Faq>

        <Faq question="What is Pilates?">
          <p>
            Pilates is a method that focuses on building core strength,
            improving flexibility, and promoting mind-body awareness through
            controlled movements and beneficial breath work.
          </p>
        </Faq>

        <Faq question="Who is Pilates for?">
          <p>
            Pilates is for EVERYONE! It can be tailored to fit any fitness level
            or physical ability and offers a wide range of physical and mental
            health benefits. However, if you have any medical conditions or
            medication limitations, it’s always a good idea to consult your
            doctor before starting a new exercise program. Currently, I am
            accepting clients 18 years and older.
          </p>
        </Faq>

        <Faq question="Why should I do Pilates?">
          <p>
            Consider Pilates for the long-term benefits it offers. Picture
            yourself 20 years from now &ndash; being active with your loved
            ones, effortlessly enjoying your favorite activities, or maintaining
            a high quality of life. Pilates is not just a workout; it's an
            investment in injury prevention, building strength, and overall
            functional fitness. It's a sustainable approach that adapts to
            various fitness levels and ages. It can even aid in faster recovery
            from injuries. Your future self relies on the work you put in today,
            ensuring a strong, agile, and resilient body for years to come. Use
            Pilates as a preventive measure &ndash; because it's not just about
            today's workout; it's about securing a healthier and more active
            future.
          </p>
        </Faq>

        <Faq question="Why should I take private Pilates sessions?">
          <p>
            Opting for private Pilates sessions offers a tailored and focused
            approach that goes beyond the group class experience. In a full
            Pilates class, individual nuances are often overlooked. Mastering
            the correct technique becomes crucial; practicing with improper form
            not only hinders progress, but also poses a risk of injury.
          </p>
          <p>
            In a private session, there are no distractions- my undivided
            attention is solely on you. This allows for a personalized
            assessment of your strengths, weaknesses, and movement patterns.
            With this focused attention, we can meticulously work on building
            the proper technique tailored to your body.
          </p>
          <p>
            By honing in on the correct technique, you pave the way for reaching
            your fitness goals more efficiently. Private Pilates sessions offer
            a space where every movement is analyzed, adjusted, and perfected,
            ensuring that each exercise is performed with precision. This
            attention to detail not only maximizes the effectiveness of the
            workout but also minimizes the risk of injuries associated with
            incorrect form.
          </p>
        </Faq>

        <Faq question="What should I expect in a session?">
          <p>
            Each session is a 1-hour personalized Pilates journey tailored just
            for YOU. We'll work together using apparatuses like the reformer,
            mat, wunda chair, and cadillac to ensure proper form and technique.
            Depending on how you're feeling that day, I’ll adapt the workout to
            meet your needs, so you leave feeling better than when you arrived.
            Socks are not required, but if you prefer, I do sell grip socks at
            the studio. Expect a comprehensive workout targeting various muscle
            groups to help you become a stronger, more balanced version of
            yourself!
          </p>
        </Faq>

        <Faq question="Can I share a package with another person?">
          <p>
            Packages are for individual use only and can't be shared between
            people.
          </p>
        </Faq>

        <Faq question="Do you sell Pilates gift certificates?">
          <p>
            Absolutely! We're all about spreading the Pilates love with our
            Stance Pilates gift certificates. Feel free to contact us to
            purchase one today!
          </p>
        </Faq>

        <Faq question="I would like more information!">
          <p>
            Need some more answers? No problem! Please give text/call at
            702-608-2065. You can also send me an email at
            info@stancepilates.com.
          </p>
        </Faq>
      </div>
    </section>
    <section id="contact">
      <div>
        <h2>Contact</h2>
        <div
          style={{
            marginTop: "1rem",
          }}
        ></div>
        <h3>Teya Lorts</h3>

        <p>Questions? Please email, call, or text.</p>
        <div>
          <a className="button" href={`mailto:${EMAIL_ADDRESS}`}>
            {EMAIL_ADDRESS}
          </a>

          <p>{PHONE_NUMBER}</p>
          <a href={GOOGLE_MAPS_URL}>
            6050 S Fort Apache Rd #200B <br />
            Las Vegas, NV 89148 <br />
            (Inside of Collective Studios)
          </a>
        </div>
        <div className="social">
          <p>Let's keep in touch on Instagram!</p>
          <a
            className="instagram-link"
            target="_blank"
            rel="noreferrer"
            href={INSTAGRAM_URL}
          >
            <InstagramIcon /> @{INSTAGRAM_HANDLE}
          </a>
        </div>
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
