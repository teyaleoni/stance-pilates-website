import * as React from "react";
import * as classes from "./Faq.module.css";
import UpDownArrow from "./UpDownArrow";

export default function Faq({ question, children }) {
  const [open, setOpen] = React.useState(false);
  const [bodyHeight, setBodyHeight] = React.useState(0);
  const innerBodyRef = React.useRef();

  React.useEffect(() => {
    const updateBodySize = () =>
      setBodyHeight(innerBodyRef.current?.clientHeight);
    updateBodySize();
    const resizeObserver = new ResizeObserver(updateBodySize);
    resizeObserver.observe(innerBodyRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className={classes.root}>
      <button
        type="button"
        className={classes.heading}
        onClick={(e) => {
          e.preventDefault();
          setOpen((prior) => !prior);
        }}
      >
        <h3 className={classes.question}>{question}</h3>
        <div>
          <UpDownArrow direction={open ? "up" : "down"} />
        </div>
      </button>
      <div
        className={classes.bodyOuter}
        style={{
          height: open ? bodyHeight : 0,
        }}
      >
        <div
          ref={innerBodyRef}
          className={classes.bodyInner}
          style={{
            transform: `translateY(${open ? "0" : "-100%"})`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
