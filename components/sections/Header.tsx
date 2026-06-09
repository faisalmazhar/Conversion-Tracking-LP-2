"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleHeaderScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleHeaderScroll();

    window.addEventListener("scroll", handleHeaderScroll);

    return () => {
      window.removeEventListener("scroll", handleHeaderScroll);
    };
  }, []);

  return (
    <header
      className={`site-header ${isScrolled ? "site-header-scrolled" : ""}`}
    >
      <div className="header-container">
        <Link href="/" className="header-logo" aria-label="Conversion Tracking Experts">
          <Image
            src="/images/logo.svg"
            alt="Conversion Tracking Experts"
            width={180}
            height={48}
            priority
            className="header-logo-image"
          />
        </Link>

        <Link href="#final-cta" className="header-cta" data-hubspot-popup>
          Schedule Free Audit Call
        </Link>
      </div>
    </header>
  );
}

// import Image from "next/image";
// import Link from "next/link";

// export default function Header() {
//   return (
//     <header className="site-header">
//       <div className="header-container">
//         <Link href="/" className="header-logo" aria-label="Conversion Tracking Experts">
//           <Image
//             src="/images/logo.svg"
//             alt="Conversion Tracking Experts"
//             width={250}
//             height={50}
//             priority
//             className="header-logo-image"
//           />
//         </Link>

//         <Link href="#final-cta" className="header-cta">
//           Schedule Free Audit Call
//         </Link>
//       </div>
//     </header>
//   );
// }