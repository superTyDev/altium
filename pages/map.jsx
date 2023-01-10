import * as React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
// const [style, trigger] = useWiggle({ x: 50, rotation: 1, scale: 1.2 });
function rotateEarth(evt) {
  var earth = document.querySelector("#model");

  const earthRect = earth.getBoundingClientRect();
  const center_x = earthRect.right + earthRect.width / 2;

  var mouse_x = evt.pageX;
  var distance = ((center_x - mouse_x) / earthRect.width) * 360;
  earth.setAttribute("camera-orbit", `${distance}deg 70deg 100%`);
}
/**
 * The template function defines the component that makes up the template page
 * This component needs to be attached to the /template path in /src/components/router.jsx
 */
// modified 9/28/22
export default function Map() {
  document.addEventListener("mousemove", rotateEarth);
  return (
    <>
      <Helmet>
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
      </Helmet>

      <div className="navSpacer"></div>
      <div className="page">
        <div className="hero">
          <div className="heroBackground">
            <model-viewer
              id="model"
              src="https://cdn.glitch.global/3e382f9d-a3b6-424b-966a-b4704cfa4afc/Earth_1_12756.glb?v=1664381511722"
              environment-image="https://cdn.glitch.global/f08abb14-42ed-46f6-bf3d-e8c00a91d384/cubemap.jpg?v=1663689736500"
              skybox-image="https://cdn.glitch.global/f08abb14-42ed-46f6-bf3d-e8c00a91d384/cubemap.jpg?v=1663689736500"
              exposure="2"
            >
              <div className="progress-bar hide" slot="progress-bar">
                <div className="update-bar"></div>
              </div>
            </model-viewer>
          </div>
        </div>
      </div>
      <center>
        <h1>For more information</h1>
      </center>
      <div>
        <div>
          <p>hello</p>
<p>https://solarsystem.nasa.gov/moons/earths-moon/overview/</p>
          <div classname="heroRight">
            <div className="spacer"></div>
            <img src="https://cdn.glitch.global/3e382f9d-a3b6-424b-966a-b4704cfa4afc/istockphoto-1314510269-612x612.jpg?v=1664383228152"></img>
            <div className="spacer"></div>
          </div>
        </div>
      </div>
    </>
  );
}
