import * as React from "react";
import "../styles/global.css";
import Fixer from "./Fixer";
import MenuIcon from "./MenuIcon";
import * as classes from "./Page.module.css";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../constants";
import InstagramIcon from "../InstagramIcon";
import logo from "../images/stance-logo.svg";

const NavItems = ({ hrefPrefix = "" }) => (
  <>
    <a href={`${hrefPrefix}#home`}>Home</a>
    <a href={`${hrefPrefix}#about`}>About</a>
    <a href={`${hrefPrefix}#pricing`}>Pricing</a>
    <a target={"_blank"} href={`https://stancepilates.janeapp.com/`}>
      Book
    </a>
    <a href={`${hrefPrefix}#faq`}>FAQ</a>
    <a href={`${hrefPrefix}#contact`}>Contact</a>
    <a href={`${hrefPrefix}events`}>Events</a>
    {/* <a href={`${hrefPrefix}#contact`}>Blog</a> */}
    <a
      className="instagram-link"
      target="_blank"
      rel="noreferrer"
      href={INSTAGRAM_URL}
    >
      <InstagramIcon />
    </a>
  </>
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
          <div
            style={{
              marginTop: ".5rem",
            }}
          >
            <a href="/">
              <img src={logo} alt="" width="75%" />
            </a>
          </div>
          <nav>
            <NavItems hrefPrefix={navHrefPrefix} />
          </nav>
          <div className="logo-mirror-space">
            <img src={logo} alt="" width="100%" />
          </div>
        </header>
        <header className="narrow">
          <div>
            <a href="/">
              <img src={logo} alt="" width="100%" />
            </a>
          </div>
          <button
            type="button"
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
        <NavItems hrefPrefix={navHrefPrefix} />
      </nav>

      <main id="scroll">
        {children}

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
