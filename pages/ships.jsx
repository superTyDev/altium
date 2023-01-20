import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "../styles/Ships.module.css";

export default function Ships() {
  return (
    <>
      <div className="navSpacer"></div>
      <div>
        <h2>Meet the Ships</h2>
        <div className={styles.section}>
          <Carousel
            className={styles.sectionImage}
            autoPlay
            infiniteLoop
            showThumbs={false}
          >
            <div>
              <img
                src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"
                alt="image1"
              />
              <p className="legend">Image 1</p>
            </div>
            <div>
              <img
                src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"
                alt="image2"
              />
              <p className="legend">Image 2</p>
            </div>
            <div>
              <img
                src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"
                alt="image3"
              />
              <p className="legend">Image 3</p>
            </div>
            <div>
              <img
                src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"
                alt="image4"
              />
              <p className="legend">Image 4</p>
            </div>
            <div>
              <img
                src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"
                alt="image5"
              />
              <p className="legend">Image 5</p>
            </div>
          </Carousel>
        </div>
        <div className={styles.section}>
          <Carousel
            className={styles.sectionImage}
            autoPlay
            infiniteLoop
            showThumbs={false}
          >
            <div>
              <img
                src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"
                alt="image1"
              />
              <p className="legend">Image 1</p>
            </div>
            <div>
              <img
                src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"
                alt="image2"
              />
              <p className="legend">Image 2</p>
            </div>
            <div>
              <img
                src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"
                alt="image3"
              />
              <p className="legend">Image 3</p>
            </div>
            <div>
              <img
                src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"
                alt="image4"
              />
              <p className="legend">Image 4</p>
            </div>
            <div>
              <img
                src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/final_configuration_of_iss.jpg?v=1673519859930"
                alt="image5"
              />
              <p className="legend">Image 5</p>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
