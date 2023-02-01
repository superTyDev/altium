import * as React from "react";

/**
 * The template function defines the component that makes up the template page
 * This component needs to be attached to the /template path in /src/components/router.jsx
 */



export default function Contact() {
  return (
    <>
      <div className="navSpacer"></div>
      <div className="page">
        <h1>Contact</h1>
    <ul>
      <li>Email:  NotMyProblem@gmail.com </li>
      <li>Phone: 1 800 GET SPACE (438-7723)</li>
       <li></li>
    </ul>
      </div>
    </>
  );
}
