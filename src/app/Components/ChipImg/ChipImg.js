import React from "react";
import styles from "./chipImg.module.css";
import Image from "next/image";

export default function ChipImg({ imgChip }) {
  return (
    <div className={styles.tooltipContainer}>
      <div className={styles.tooltip}>{imgChip.name}</div>
      <div className={styles.chipImgContainer}>
        <div className={styles.chipImg}>
          <Image
            src={imgChip.logo}
            width={30}
            height={30}
            className={styles.chipBck}
            alt={imgChip.name}
          ></Image>
        </div>
      </div>
    </div>
  );
}
