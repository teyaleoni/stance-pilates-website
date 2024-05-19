import * as React from "react";
import InstagramIcon from "../InstagramIcon";
import Faq from "../components/Faq";
import Page from "../components/Page";
import PricingCard, {
  PricingCtaHeightProvider,
} from "../components/PricingCard";
import aboutImg from "../images/lunge-cropped.jpg";
import headerImg from "../images/sitting-1024.jpg";
import logoHeader from "../images/stance-logo.svg";
import "../styles/global.css";

const IndexPage = () => (
  <Page>
    <section id="home" className="grid-row">
      <div>
        <img src={logoHeader} alt="" width="30%" />
        <h1>
          Creating a stronger, healthier you through the power or Pilates.
        </h1>
      </div>
      <img src={headerImg} alt="" width="100%" />
    </section>
    <section id="greeting">
      <div className="nottoowide">
        <h2>Private Pilates Sessions in southwest Las Vegas</h2>
        <p>
          The Stance Pilates mission is to provide sustainable workouts that
          guide each person toward a pain-free, vibrant life that fosters
          resilience and lifelong mobility. Be empowered to discover your
          strength and thrive through private, personalized Pilates training
          tailored to your unique needs and well-being journey.
        </p>
      </div>
    </section>
    <section id="about" className="grid-row">
      <div className="about-picture">
        <img src={aboutImg} alt="me" width="100%" />
      </div>
      <div className="about-container-text">
        <h2>About your instructor</h2>
        <p>Hi, I'm Teya!</p>
        <p>
          Growing up as a dancer, I have experienced first-hand all the joys and
          challenges of a body in motion. Through the years, I discovered how
          the passage of time along with lingering injuries had a profound
          impact on my once-effortless movements. As a result, navigating the
          demands of work and life while striving for a healthy, balanced
          existence became part of my wellness journey.
        </p>
        <p>
          Witnessing the transformative power of Pilates on my own body, I
          recognized its potential to promote healthy aging and enhance quality
          of life. As adults, we face the constant challenge of maintaining our
          well-being. Pilates emerged as my answer—a proactive step toward
          enduring strength and optimal healthspan.
        </p>
        <p>
          I value a high quality of life that prioritizes family, relationships,
          work-life balance, and the pursuit of a pain-free existence. Pilates
          has been my steadfast companion in realizing that for me. It's an
          investment in oneself, a commitment to a future where we not only age
          gracefully, but thrive.
        </p>
        <p>
          In my role as a Pilates instructor, I am passionate about imparting
          the life-changing benefits of this practice. Teaching is not just a
          profession for me; it's a calling. Join me on this journey, and let's
          invest in the well-being of our future selves. Because your future
          self deserves the very best!
        </p>
      </div>
    </section>
    <section id="quote">
      <div className="nottoowide">
        <h3 style={{ fontStyle: "italic" }}>
          "In 10 sessions you will feel the difference, in 20 you will see the
          difference, and in 30 you’ll have a whole new body."
        </h3>
        <p style={{ textAlign: "end" }}>- Joseph Pilates</p>
      </div>
    </section>
    <section id="pricing" style={{ display: "grid", gap: "2rem" }}>
      <h2>Pricing</h2>
      <div style={{ display: "grid", gap: "1rem" }}>
        <h3 style={{ color: "var(--color-blue-steel)" }}>Opening specials</h3>
        <p>These special packages are limited to one purchase per person.</p>
        <PricingCtaHeightProvider>
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
            </PricingCard>
            <PricingCard
              bundleSize={5}
              price={349}
              expiry="2 months"
              cta="I'm In"
              noSavingsBadge
            >
              Dive deeper into strength, flexibility, and wellness. Elevate your
              fitness experience with Pilates!
            </PricingCard>
          </div>
        </PricingCtaHeightProvider>
      </div>

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
              expiry="3 months"
              cta="Start Your Transformation"
            >
              Commit to wellness with 10 dynamic Pilates sessions. Flexibility
              for your lifestyle.
            </PricingCard>
            <PricingCard
              bundleSize={20}
              price={1750}
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

        <Faq question="What is Pilates?">
          <p>
            Pilates is a method that focuses on building core strength,
            improving flexibility, and promoting mind-body awareness through
            controlled movements and beneficial breath work.
          </p>
        </Faq>

        <Faq question="Who is Pilates for?">
          <p>
            EVERYONE! Pilates can be modified to suit any fitness level or
            physical ability, and provides numerous physiological and mental
            health benefits.
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
          <p>
            Choosing private Pilates sessions is an investment in your
            well-being. It provides the opportunity to receive personalized
            guidance, correct any imbalances, and progress towards your goals
            with confidence and safety.
          </p>
        </Faq>

        <Faq question="What should I expect in a session?">
          <p>
            Embark on a personalized Pilates journey with me in a private
            session tailored to YOU. We'll use apparatuses like the reformer,
            mat, and cadillac. I'll support you every step of the way, ensuring
            proper form and technique. It will be a comprehensive workout
            targeting various muscle groups, leading to a stronger and more
            balanced version of yourself.
          </p>
        </Faq>

        <Faq question="Do you sell Pilates gift certificates?">
          <p>
            Absolutely! We're all about spreading the Pilates love with our
            Stance Pilates gift certificates. Feel free to contact us to
            purchase one today!
          </p>
        </Faq>

        <Faq question="Where are you located?">
          <p>
            Inside of Q Wellness & Family Chiropractic located at 5980 S Durango
            Dr, Las Vegas, NV 89113
          </p>
        </Faq>
      </div>
    </section>
    <section id="testimonials">
      <h1>Testimonials</h1>
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
    <section id="contact">
      <div>
        <h2>Contact</h2>
        <div
          style={{
            marginTop: "1rem",
          }}
        ></div>
        <h3>Teya Lorts</h3>

        <p>
          To schedule a session or ask any questions, please email, call, or
          text.
        </p>
        <div>
          <a className="button" href="mailto:info@stancepilates.com">
            info@stancepilates.com
          </a>

          <p>702-608-2065</p>
          <a href="https://maps.app.goo.gl/ZywfJdjJqj5wrvNs8">
            5980 S Durango Dr #113-114 <br />
            Las Vegas, NV 89113 <br />
            (Inside of Q Wellness)
          </a>
        </div>
        <div className="social">
          <p>Let's keep in touch on Instagram!</p>
          <a
            className="instagram-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/stance.pilates/"
          >
            <InstagramIcon />
            @stance.pilates
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
