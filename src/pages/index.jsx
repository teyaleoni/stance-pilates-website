import * as React from "react";
import InstagramIcon from "../InstagramIcon";
import Faq from "../components/Faq";
import Fixer from '../components/Fixer';
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
      <Fixer>
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
            type="button"
            className="reset"
            style={{
              position: "absolute",
              padding: "1rem",
              right: 0,
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setNavOpen((o) => !o);
            }}
          >
            <MenuIcon />
          </button>
        </header>
      </Fixer>
      <nav id="nav-drawer" className={navOpen ? "open" : "closed"}>
        <NavItems />
      </nav>

      <main>
        <section id="home" class="grid-row">
          <h1>The Power of Pilates - Creating a Stronger, Healthier You</h1>
          <img src={headerImg} alt="" width="100%" />
        </section>

        <section id="greeting">
          <div className="nottoowide">
            <h2>Private Pilates Sessions in Southwest Las Vegas</h2>
            <p>
              Empowering a pain-free, healthier lifestyle through personalized
              Pilates training. Our mission at Stance Pilates is to provide
              sustainable workouts for a higher quality of life and lifelong
              mobility.
            </p>
          </div>
        </section>

        <section id="about" class="grid-row">
          <div class="about-picture">
            <img src={aboutImg} alt="me" width="100%" />
          </div>
          <div class="about-container-text">
            <h2>Get to Know Me</h2>
            <p>Hi, I'm Teya!</p>
            <p>
              Growing up as a dancer, I intimately understood the joys and
              challenges of a body in motion. However, as time passed and
              injuries lingered, I discovered the profound impact they had on my
              once-effortless movements. Navigating the demands of work and life
              while striving for a healthy, balanced existence became my
              journey.
            </p>
            <p>
              Witnessing the transformative power of Pilates on my own body, I
              recognized its potential to defy the aging process and enhance the
              quality of life. As adults, we face the constant challenge of
              maintaining our well-being, and Pilates emerged as my answer— a
              preventive measure to safeguard against the degradation that can
              accompany aging.
            </p>
            <p>
              I hold dear the values of quality of life, family, relationships,
              work-life balance, and the pursuit of a pain-free existence.
              Pilates has been my steadfast companion in realizing these values.
              It's an investment in oneself, a commitment to a future where we
              not only age gracefully but thrive.
            </p>
            <p>
              In my role as a Pilates instructor, I am passionate about
              imparting the life-changing benefits of this practice. Teaching is
              not just a profession for me; it's a calling. Join me on this
              journey, and let's invest in the well-being of our future selves.
              Because your future self deserves the very best.
            </p>
          </div>
        </section>

        <section id="quote">
          <div className="nottoowide">
            <h3 style={{ fontStyle: "italic" }}>
              In 10 sessions you'll feel the difference, in 20 sessions you'll
              see a difference, and in 30 sessions you'll have a whole new body
            </h3>
            <p style={{ textAlign: "end" }}>- Joseph Pilates</p>
          </div>
        </section>

        <section id="faq">
          <div className="nottoowide" style={{ display: "grid", gap: "2rem" }}>
            <h2>FAQ</h2>

            <Faq question="What is Pilates?">
              <p>
                Pilates is a form of exercise that focuses on building core
                strength, improving flexibility, and promoting mind-body
                awareness through controlled movements and beneficial breath
                work.
              </p>
            </Faq>

            <Faq question="Who is Pilates for?">
              <p>
                EVERYONE! Pilates can be modified to suit any fitness level or
                physical ability, and provides numerous physical and mental
                benefits.
              </p>
            </Faq>

            <Faq question="Why should I even do Pilates?">
              <p>
                Consider Pilates for the long-term benefits it offers. Picture
                yourself 20 years from now &ndash; playing with your
                kids/grandkids, effortlessly enjoying your favorite activities,
                or maintaining a high quality of life. Pilates is not just a
                workout; it's an investment in injury prevention, building
                strength, and overall functional fitness. It's a sustainable
                approach that adapts to various fitness levels and ages. It can
                even aid in faster recovery from injuries. Your future self
                relies on the work you put in today, ensuring a strong, agile,
                and resilient body for years to come. Use Pilates as a
                preventive measure &ndash; because it's not just about today's
                workout; it's about securing a healthier and more active future.
              </p>
            </Faq>

            <Faq question="Why should I take private lessons?">
              <p>
                Opting for private Pilates sessions offers a tailored and
                focused approach that goes beyond the group class experience. In
                a full Pilates class, individual nuances can be overlooked, and
                mastering the correct technique becomes crucial. Practicing with
                improper form not only hinders progress but also poses a risk of
                injury.
              </p>
              <p>
                In a private session, there are no distractions; my undivided
                attention is solely on you. This allows for a personalized
                assessment of your strengths, weaknesses, and movement patterns.
                With this focused attention, we can meticulously work on
                building the proper technique tailored to your body.
              </p>
              <p>
                By honing in on the correct technique, you pave the way for
                reaching your fitness goals more efficiently. Private Pilates
                sessions offer a space where every movement is analyzed,
                adjusted, and perfected, ensuring that each exercise is
                performed with precision. This attention to detail not only
                maximizes the effectiveness of the workout but also minimizes
                the risk of injuries associated with incorrect form.
              </p>
              <p>
                Choosing private Pilates sessions is an investment in your
                well-being. It provides the opportunity to receive personalized
                guidance, correct any imbalances, and progress towards your
                goals with confidence and safety.
              </p>
            </Faq>

            <Faq question="What should I expect in a session?">
              <p>
                Embark on a personalized Pilates journey with me in a private
                session tailored to YOU. We'll use apparatuses like the
                reformer, mat, and cadillac. I'll support you every step of the
                way, ensuring proper form and technique. It will be a
                comprehensive work out targeting various muscle groups, leading
                to a stronger and more balanced version of yourself.
              </p>
            </Faq>

            <Faq question="Where are you located?">
              <p>
                Inside of Q Wellness & Family Chiropractic 5980 S Durango Dr,
                Las Vegas, NV 89113
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
                Teya has truly been a game-changer in my life. I came to her
                with persistent knee and back injuries that had haunted me for
                over a decade. Despite seeking help from doctors and massages,
                nothing provided lasting relief until I began consistently
                attending Teya's Pilates sessions. Teya's approach is nothing
                short of remarkable. She exudes patience, understanding the
                unique challenges each individual faces. What sets her apart is
                her ability to create a judgment-free environment, ensuring I
                never felt discouraged when struggling to grasp certain
                exercises. This encouragement played a pivotal role in building
                my confidence and commitment to the practice. The impact on my
                physical well-being has been astonishing. I now live pain-free,
                something I hadn't thought possible after years of discomfort.
                The strength and flexibility I've gained through Pilates have
                not only alleviated my injuries but have also empowered me to
                navigate my daily activities and work without the burden of
                constant pain. If you want to change your life for the better,
                go to Teya.
              </p>
            </div>
            <div>
              <h2>Maryloie E.</h2>
              <p>
                Teya is a huge contribution to my pregnancy journey. Going to
                her twice a week set me up for success during delivery. After
                seeing her every session my body felt stronger and help
                alleviate pain and strengthened my body to carry my beautiful
                baby. She listened to my concerns and pain points and tailored
                each session to what my body needed. Teya is passionate about
                her craft and cares deeply about her clients. She is
                collaborative and caring. I look forward to each session with
                her.
              </p>
            </div>
            <div>
              <h2>Chelsea W.</h2>
              <p>
                Training will Teya is a treat! I suffer from a lot of muscle
                imbalances due to past injuries. Teya helped me strengthen and
                stretch those areas that so desperately needed it. She explains
                which muscles we are targeting in each exercise. She also will
                fix your form like no other (something you'll never get in a
                group pilates class). Taking pilates lessons will Teya has been
                amazing for my body!
              </p>
            </div>
            <div>
              <h2>Skyler B.</h2>
              <p>
                While training with Teya, she was able to explain why the
                workouts were beneficial for my needs. I appreciated her
                patience and that each workout was modified/tailored to help me
                get in the best workout for my level. She is an excellent
                pilates instructor!
              </p>
            </div>
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
