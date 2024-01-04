import React, { useEffect, useRef, useState } from 'react';

export default function Fixer({ children, at }) {
  const [height, setHeight] = useState(0);
  const contentWrapperRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });
    if (contentWrapperRef.current) {
      setHeight(contentWrapperRef.current.clientHeight);
      resizeObserver.observe(contentWrapperRef.current);
    }
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <>
      <div style={{ height }}></div>
      <div
        style={{
          zIndex: 10,
          position: 'fixed',
          left: 0,
          right: 0,
          top: at === 'top' ? 0 : undefined,
          bottom: at === 'bottom' ? 0 : undefined,
        }}
        ref={contentWrapperRef}
      >
        {children}
      </div>
    </>
  );
}
