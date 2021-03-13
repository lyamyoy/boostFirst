import React from "react";
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
