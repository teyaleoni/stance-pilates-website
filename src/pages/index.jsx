import * as React from "react";
import InstagramIcon from "../InstagramIcon";
import aboutImg from "../images/lunge-cropped.jpg";
import headerImg from "../images/sitting-1024.jpg";
import "../styles/global.css";

// TODO:
// testimonials

const presentYear = new Date().getFullYear();

const NavItems = () => (
  <>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#faq">FAQ</a>
    <a href="#contact">Contact</a>
  </>
);

const Bugrer = () => (
  <div
    style={{
      display: "grid",
      gap: 5,
      width: 20,
    }}
  >
    {[0, 1, 2].map((n) => (
      <div
        key={n}
        style={{
          background: "var(--color-dark)",
          height: 3,
          borderRadius: 2,
        }}
      />
    ))}
  </div>
);

const IndexPage = () => {
  const [navOpen, setNavOpen] = React.useState(false);

  return (
    <div id="page" onClick={() => setNavOpen(false)}>
      <header className="wide">
        <div>
          <p class="logo">STANCE PILATES</p>
        </div>
        <nav>
          <NavItems />
        </nav>
        <div class="logo-mirror-space">
          <p class="logo">STANCE PILATES</p>
        </div>
      </header>
      <header className="narrow">
        <div>
          <p class="logo">STANCE PILATES</p>
        </div>
        <button
          className="reset"
          style={{
            position: "absolute",
            padding: "1rem",
            right: 0,
          }}
          onClick={(e) => {
            e.stopPropagation();
            setNavOpen((o) => !o);
          }}
        >
          <Bugrer />
        </button>
      </header>
      <nav id="nav-drawer" className={navOpen ? "open" : "closed"}>
        <NavItems />
      </nav>

      <main>
        <section id="home" class="grid-row">
          <h1>The Power of Pilates - Creating a Stronger, Healthier You</h1>
          <img src={headerImg} alt="" width="100%" />
        </section>

        <section id="greeting">
          <h2>Hi, I'm Teya</h2>
          <p>
            A Pilates Instructor based in Las Vegas, Nevada, focusing on helping
            people achieve a healthier, pain-free lifestyle through
            transformative and personalized Pilates training.
          </p>
        </section>

        <section id="about" class="grid-row">
          <div class="about-picture">
            <img src={aboutImg} alt="me" width="100%" />
          </div>
          <div class="about-container-text">
            <h2>Get to Know Me</h2>
            <p>
              Growing up as a competitive dancer I have experienced my fair
              share of injuries. But it is because of those injuries that I
              discovered the power of Pilates firsthand. After consistently
              practicing and seeing remarkable results within myself, I decided
              to pursue my Pilates certification through BASI Pilates in order
              to help others achieve their own personal benefits. As an
              instructor, my core goal is to help my clients lead healthier,
              pain-free lives by teaching them how to safely move their bodies
              with more awareness, balance, and control.
            </p>
            <p>
              Whether you're recovering from an injury or simply looking to
              improve your overall fitness, I'm here to guide and support you on
              your journey towards a stronger, more vibrant you. With that being
              said, I can't wait to work together as we achieve your goals and
              unlock your full potential with Pilates!
            </p>
          </div>
        </section>

        <section id="faq">
          <h2>FAQ</h2>
          <div>
            <h3>What is Pilates?</h3>
            <p>
              Pilates is a form of exercise that focuses on building core
              strength, improving flexibility, and promoting mind-body awareness
              through controlled movements and beneficial breath work.
            </p>
          </div>
          <div>
            <h3>Who is Pilates for?</h3>
            <p>
              EVERYONE! Pilates can be modified to suit any fitness level or
              physical ability, and provides numerous physical and mental
              benefits.
            </p>
          </div>
          <div>
            <h3>Where are you located?</h3>
            <p>Las Vegas, Nevada.</p>
          </div>
          <div>
            <h3>Why should I take private lessons?</h3>
            <p>
              Taking private Pilates lessons is beneficial because it allows for
              personalized attention, customized workouts, and quicker progress
              towards achieving your individual goals.
            </p>
          </div>
        </section>

        <section id="contact">
          <div>
            <h2>Contact</h2>
            <p>
              To inquire about scheduling, lessons, questions please click the
              button below.
            </p>
            <div>
              <a class="button" href="mailto:info@stancepilates.com">
                info@stancepilates.com
              </a>
            </div>
            <div class="social">
              <a
                className="instagram-link"
                target="_blank"
                href="https://www.instagram.com/stance.pilates/"
              >
                <InstagramIcon />
                @stance.pilates
              </a>
            </div>
            <div class="copyright">© {presentYear} Stance Pilates</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Stance Pilates</title>;