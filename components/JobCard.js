import styles from "./JobCard.module.css";

export default function JobCard(props) {
  return (
    <>
      {/* <a href="https://www.w3schools.com"> */}
      <div className={styles.jobCard}>
        <div className={[styles.jobCardLeft, "textXS"].join(" ")}>
          {props.dates}
        </div>
        <div className={styles.jobCardRight}>
          <span className={styles.jobCardTitle}>{props.title}</span>
          <p className={styles.jobCardBody}>{props.description}</p>
          <div className={styles.jobCardTechStack}>
            <div className={styles.jobCardTechItem}>Javascript</div>
            <div className={styles.jobCardTechItem}>HTML</div>
          </div>
        </div>
      </div>
      {/* </a> */}
    </>
  );
}
