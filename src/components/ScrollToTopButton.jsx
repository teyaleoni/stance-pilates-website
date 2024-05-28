import React from "react";
import * as classes from "./ScrollToTopButton.module.css";
import { cx } from "../utility/classNames";

export default function ScrollToTopButton() {
  const [atTop, setAtTop] = React.useState(true);

  React.useEffect(() => {
    const scroll = document.getElementById("scroll");
    const update = () => setAtTop(scroll?.scrollTop < 32);
    scroll?.addEventListener("scroll", update);
    return () => scroll?.removeEventListener("scroll", update);
  }, []);

  return (
    <button
      type="button"
      className={cx(classes.toTop, atTop && classes.inactive)}
      onClick={scrollToTop}
    >
      🔝
    </button>
  );
}

function scrollToTop() {
  document.getElementById("scroll")?.scrollTo({
    behavior: "smooth",
    top: 0,
  });
}
