// "use client";

// import { useEffect, useRef } from "react";

// export default function CredlyBadge() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://cdn.credly.com/assets/utilities/embed.js";
//     script.async = true;

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       data-iframe-width="150"
//       data-iframe-height="270"
//       data-share-badge-id="1637f74b-98b2-4152-a1d3-bff5939892a8"
//       data-share-badge-host="https://www.credly.com"
//     />
//   );
// }

import Image from "next/image";

export default function CredlyBadge() {
  return (
    <a
      href="https://www.credly.com/badges/1637f74b-98b2-4152-a1d3-bff5939892a8/public_url"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-105"
    >
      <Image
        src="/images/aws-certified-solutions-architect-associate.png"
        alt="AWS Certified Solutions Architect Associate"
        width={120}
        height={120}
        className="rounded-md"
        priority
      />

      <span
        className="text-[11px] font-mono tracking-wide text-center"
        style={{ color: "var(--text-muted)" }}
      >
        {/* AWS Certified Solutions Architect */}
      </span>
    </a>
  );
}