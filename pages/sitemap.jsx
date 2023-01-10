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
        <a href="/" className="button">
          Home
        </a>
        <a href="/login" className="button">
          Login
        </a>
        <a href="/cites" className="button">
          Cites
        </a>
        <h2>other</h2>
        <a href="/about" className="button">
          About
        </a>
        <a href="/feedback" className="button">
          Feedback
        </a>
        <a href="/map" className="button">
          Map
        </a>
      </div>
    </>
  );
}
