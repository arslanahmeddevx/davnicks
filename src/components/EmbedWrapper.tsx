"use client";

import { useEffect, useRef } from "react";

export default function EmbedWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sendHeight = () => {
      const height = document.documentElement.scrollHeight || document.body.scrollHeight;
      window.parent.postMessage(
        {
          type: "resize",
          height: height,
        },
        "*"
      );
    };

    const resizeObserver = new ResizeObserver(() => {
      sendHeight();
    });

    resizeObserver.observe(containerRef.current);
    
    // Also observe body for changes
    resizeObserver.observe(document.body);

    // Initial send
    sendHeight();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return <div ref={containerRef} className="min-h-screen w-full">{children}</div>;
}
