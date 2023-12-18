import * as React from "react";
import InstagramIcon from "../InstagramIcon";
import aboutImg from "../images/lunge-cropped.jpg";
import headerImg from "../images/sitting-1024.jpg";
import "../styles/global.css";

const presentYear = new Date().getFullYear();

const NavItems = () => (
  <>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#faq">FAQ</a>
    <a href="#testimonials">Testimonials</a>
    <a href="#contact">Contact</a>
  </>
);

const MenuIcon = () => (
  <div className="MenuIcon">
    <div />
    <div />
    <div />
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
          <MenuIcon />
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
            people achieve a healthier, pain-free lifestyle through personalized
            private Pilates training.
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
            <p>
              Inside of Q Wellness & Family Chiropractic 5980 S Durango Dr, Las
              Vegas, NV 89113
            </p>
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

        <section id="testimonials">
          <h1>Testimonials</h1>
          <div>
            <h2>Maryloie E.</h2>
            <p>
              Teya is a huge contribution to my pregnancy journey. Going to her
              twice a week set me up for success during delivery. After seeing
              her every session my body felt stronger and help alleviate pain
              and strengthened my body to carry my beautiful baby. She listened
              to my concerns and pain points and tailored each session to what
              my body needed. Teya is passionate about her craft and cares
              deeply about her clients. She is collaborative and caring. I look
              forward to each session with her.
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
