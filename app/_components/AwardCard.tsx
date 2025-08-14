import styles from "./AwardCard.module.css";
import { Award } from "@/interfaces/interfaces";

export default function AwardCard(props: Award) {
  return (
    <>
      <div className={styles.awardCard}>
        <div className={styles.awardCardContainer}>
          {/* Left */}
          <div className={styles.awardCardLeft}>
            <p className={styles.awardCardTitle}>{props.title}</p>
          </div>

          {/* Middle Spacer */}
          <div className={styles.awardCardMiddle}></div>

          {/* Right */}
          <div className={styles.awardCardRight}>
            <p className={styles.awardCardBody}>{props.subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
}
