import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "../styles/Ships.module.css";

export default function Ships() {
  return (
    <>
      <div>
        <div className={styles.hero}>
          <div className="navSpacer"></div>
          <Image
            className={styles.backgroundImg}
            src={
              "https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/sunRise.webp?v=1674255059462"
            }
            width={1980}
            height={500}
            alt="Sun Rise over Earth from Space"
          />
          <h1>Meet the Ships</h1>
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
                src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/modernShuttleShort.webp?v=1674259900863"
                alt="image1"
                loading="lazy"
              />
              <p className="legend">SS Gibraltar in Space</p>
            </div>
            <div>
              <img
                src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/modernShuttleShort2.webp?v=1674258615375"
                alt="image2"
                loading="lazy"
              />
              <p className="legend">Construction of the Gibraltar</p>
            </div>
            <div>
              <img
                src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/modernShuttleShort3.webp?v=1674258615375"
                alt="image3"
                loading="lazy"
              />
              <p className="legend">Gibraltar's Space Launch Vehicle (SLV)</p>
            </div>
          </Carousel>
          <div className={styles.altCont}>
            <h2>SS Gibraltar</h2>
            <p>
              This revolutionary spacecraft is designed to take you to the moon
              and beyond. With its powerful engines and advanced navigation
              systems, the Gibraltar is Altium's medium distance shuttle. This
              shuttle is optimized for quick trips to the ISS or longer distance
              flights.
            </p>
            <div className="buttonCont">
              <Link href="/quote" className="button">
                Book Gibraltar
              </Link>
            </div>
          </div>
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
                src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/redRocket.webp?v=1674258725776"
                alt="image1"
              />
              <p className="legend">Malta Rainforest Launch</p>
            </div>
            <div>
              <img
                src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/redRocket2.webp?v=1674258725776"
                alt="image2"
              />
              <p className="legend">Malta Low Impact Thrusters</p>
            </div>
            <div>
              <img
                src="https://cdn.glitch.global/d7070554-ac67-4c73-a3d6-aadfe190dab5/redRocket3.webp?v=1674258725776"
                alt="image3"
              />
              <p className="legend">Malta in Hanger</p>
            </div>
          </Carousel>
          <div className={styles.altCont}>
            <h2>STS Malta</h2>
            <p>
              Altium's largest rocket is designed to carry payloads to the moon
              and beyond. With its state-of-the-art ion trust technology, the
              STS Malta is the perfect choice for those looking to explore the
              depths of space. And with its comfortable interior, you can enjoy
              the journey in style.
            </p>
            <div className="buttonCont">
              <Link href="/quote" className="button">
                Book Malta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
