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
          {/* <span className={styles.jobCardTitle}>{props.title}</span> */}
          {props.titleLink !== undefined ? (
            <div className={styles.jobCardRow}>
              <a
                href={props.titleLink}
                target="_blank"
                rel="noopener noreferrer"
                className={[styles.jobCardLink, styles.jobCardTitle].join(" ")}
              >
                <span>{props.title}</span>
                {/* <span style={{ display: "flex", alignItems: "center" }}> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 jobCardSVG"
                  height="20px"
                  width="20px"
                  style={{ verticalAlign: "middle" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
                {/* </span> */}
              </a>
            </div>
          ) : (
            <span className={styles.jobCardTitle}>{props.title}</span>
          )}

          <p
            className={styles.jobCardBody}
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></p>
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
