import * as React from "react";

export const PricingCtaHeightContext = React.createContext();

const singleSessionPrice = 100;

export default function PricingCard({
  heading,
  bundleSize,
  price,
  endDate,
  expiry,
  cta,
  children,
  noSavingsBadge = false,
}) {
  const savings = bundleSize * singleSessionPrice - price;

  const { innerTextRef, outerMinHeight } = useSynchronizedHeight();

  return (
    <div
      className="card elevated grow"
      style={{
        display: "grid",
        gap: "1rem",
        alignContent: "space-between",
        position: "relative",
        gridTemplateRows: "1fr auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gap: "1rem",
          alignContent: "start",
          gridTemplateRows: "auto 1fr",
        }}
      >
        <h3>
          {heading ||
            (bundleSize === 1
              ? "Single Session"
              : `${bundleSize}-Class Bundle`)}
          <br />${price}
        </h3>
        {savings > 0 && !noSavingsBadge && (
          <div className="savings-badge" style={{}}>
            Save ${savings}
          </div>
        )}
        <div
          style={{
            display: "grid",
            gap: "1rem",
            alignContent: "space-between",
          }}
        >
          {children && <div>{children}</div>}
          <div style={{ fontStyle: "italic" }}>
            {endDate ? <>Valid through {endDate}</> : <>Expires in {expiry}</>}
          </div>
        </div>
      </div>
      <a href="#contact" className="button">
        <div
          style={{
            minHeight: finite(outerMinHeight),
            display: "grid",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div ref={innerTextRef}>{cta}</div>
        </div>
      </a>
    </div>
  );
}

function useSynchronizedHeight() {
  const { setHeights, maxHeight } = React.useContext(PricingCtaHeightContext);

  const innerTextRef = React.useRef(null);

  React.useEffect(() => {
    const resizeObserver = new ResizeObserver(([entry]) => {
      setHeights((prior) => ({
        ...prior,
        [entry.target.textContent]: entry.contentRect.height,
      }));
    });
    resizeObserver.observe(innerTextRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [setHeights]);

  return {
    innerTextRef,
    outerMinHeight: maxHeight,
  };
}

export function PricingCtaHeightProvider({ children }) {
  const [heights, setHeights] = React.useState({});
  // React.useEffect(() => {
  //   console.info(heights);
  // }, [heights]);
  const maxHeight = React.useMemo(
    () => Math.max(...Object.values(heights)),
    [heights]
  );

  return (
    <PricingCtaHeightContext.Provider
      value={{
        heights,
        setHeights,
        maxHeight,
      }}
    >
      {children}
    </PricingCtaHeightContext.Provider>
  );
}

function finite(n) {
  return Number.isFinite(n) ? n : undefined;
}
