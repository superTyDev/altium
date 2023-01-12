import Link from "next/link";
import * as React from "react";

/**
 * The template function defines the component that makes up the template page
 * This component needs to be attached to the /template path in /src/components/router.jsx
 */
// added page in 9/21/22
export default function Sitemap() {
  return (
    <>
      <div className="navSpacer"></div>
      <div className="page">
        <h1>Site map</h1>
        <h2>main</h2>
        <Link href="/" className="button">
          Home
        </Link>
        <Link href="/login" className="button">
          Login
        </Link>
        <Link href="/cites" className="button">
          Cites
        </Link>
        <h2>other</h2>
        <Link href="/about" className="button">
          About
        </Link>
        <Link href="/feedback" className="button">
          Feedback
        </Link>
        <Link href="/map" className="button">
          Map
        </Link>
      </div>
    </>
  );
}
