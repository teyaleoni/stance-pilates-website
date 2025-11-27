import * as React from "react";
import * as C from "../constants";
import logo from "../images/stance-logo.svg";
import InstagramIcon from "./InstagramIcon";
import "../styles/global.css";
import { cx } from "../utility/classNames";
import Fixer from "./Fixer";
import MenuIcon from "./MenuIcon";
import * as classes from "./Page.module.css";
import ContactInfo from "./ContactInfo";

const NavItems = ({ hrefPrefix = "" }) => (
  <>
    <a href={`${hrefPrefix}#about`}>About</a>
    <a href={`${hrefPrefix}#pricing`}>Pricing</a>
    <a href={`${hrefPrefix}events`}>Events</a>

    <a href={`${hrefPrefix}#faq`}>FAQ</a>
    <a href={`#contact`}>Contact</a>
    <a target={"_blank"} href={C.BOOKING_URL}>
      <p style={{ fontWeight: "700" }}>Book</p>
    </a>
    {/* <a href={`${hrefPrefix}#contact`}>Blog</a> */}
    <a
      className="instagram-link"
      target="_blank"
      rel="noreferrer"
      href={C.INSTAGRAM_URL}
    >
      <InstagramIcon />
    </a>
  </>
);

const LogoLink = ({ minWidth }) => (
  <div style={{ display: "grid", paddingTop: 4, alignItems: "center" }}>
    <a href="/" style={{ display: "contents" }}>
      <img src={logo} alt="" width="100%" style={{ minWidth }} />
    </a>
  </div>
);

export default function Page({ children, navHrefPrefix }) {
  const [navOpen, setNavOpen] = React.useState(false);

  return (
    <div
      className={classes.root}
      role="none"
      onClick={() => setNavOpen(false)}
      onKeyDown={(e) => {
        if (e.key === "Escape") setNavOpen(false);
      }}
    >
      <Fixer>
        <header className="wide">
          <LogoLink minWidth={100} />
          <nav className="spaced-responsive">
            <NavItems hrefPrefix={navHrefPrefix} />
          </nav>
          <div className="logo-mirror-space">
            <img src={logo} alt="" width="100%" />
          </div>
        </header>
        <header className="narrow" style={{ height: 40, paddingRight: 40 }}>
          <LogoLink />
          <button
            type="button"
            style={{
              position: "absolute",
              padding: 10,
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

      <nav
        id="nav-drawer"
        className={cx("spaced", navOpen ? "open" : "closed")}
      >
        <NavItems hrefPrefix={navHrefPrefix} />
      </nav>

      <main id="scroll">
        {children}

        <ContactInfo />

        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            fontSize: "0.9em",
          }}
        >
          <div className="copyright">© {presentYear} Stance Pilates</div>
          <div>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
          <div>
            <a href="/terms-and-conditions">Terms and Conditions</a>
          </div>
        </div>
      </main>
    </div>
  );
}

const presentYear = new Date().getFullYear();
