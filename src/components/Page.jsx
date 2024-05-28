import * as React from "react";
import "../styles/global.css";
import Fixer from "./Fixer";
import MenuIcon from "./MenuIcon";
import * as classes from "./Page.module.css";

const NavItems = ({ hrefPrefix = "" }) => (
  <>
    <a href={`${hrefPrefix}#home`}>Home</a>
    <a href={`${hrefPrefix}#about`}>About</a>
    <a href={`${hrefPrefix}#pricing`}>Pricing</a>
    <a href={`${hrefPrefix}#faq`}>FAQ</a>
    <a href={`${hrefPrefix}#testimonials`}>Testimonials</a>
    <a href={`${hrefPrefix}#contact`}>Contact</a>
    {/* <a href={`${hrefPrefix}#contact`}>Blog</a> */}
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
          <div>
            <p className="logo">STANCE PILATES</p>
          </div>
          <nav>
            <NavItems hrefPrefix={navHrefPrefix} />
          </nav>
          <div className="logo-mirror-space">
            <p className="logo">STANCE PILATES</p>
          </div>
        </header>
        <header className="narrow">
          <div>
            <p className="logo">STANCE PILATES</p>
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

        <div className="copyright">© {presentYear} Stance Pilates</div>
      </main>
    </div>
  );
}

const presentYear = new Date().getFullYear();
