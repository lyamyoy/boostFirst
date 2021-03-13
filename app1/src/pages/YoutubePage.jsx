import React from "react";
// import { css } from "@emotion/css";
// import { jsx, css } from "@emotion/core";
import Youtube from "../components/Youtube";
import styles from "../assets/youtubeStyle.module.css";

export default function YoutubePage() {
  return (
    <>
      <div className={styles.color}>
        <Youtube></Youtube>
      </div>
    </>
  );
}

// const YoutubeVideo = css`
//   background-color: green;
// `;
