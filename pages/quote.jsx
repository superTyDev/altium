import Image from "next/image";
import * as React from "react";

/**
 * The About function defines the component that makes up the About page
 * This component is attached to the /about path in router.jsx
 */

export default function About() {
  return (
    <>
      <div className="navSpacer"></div>
      <div className="page">
        <h1 className="title">Quote</h1>
        <div className="card">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </>
  );
}
