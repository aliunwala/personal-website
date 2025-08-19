import Link from "next/link";
import styles from "./EducationCard.module.css";
import { Education } from "@/interfaces/interfaces";
export default function EducationCard(props: Education) {
  return (
    <>
      <div className={styles.educationCard}>
        <div className={styles.educationCardTitle}>{props.school}</div>
        <div className={styles.educationCardContainer}>
          <div className={styles.educationCardLeft}>
            <p className={styles.educationCardBody}>
              {"Department: " + props.department}
            </p>
            <p className={styles.educationCardBody}>
              {props.degreeLevel + ": " + props.degree}
            </p>
          </div>
          <div className={styles.educationCardMiddle}></div>
          <div className={styles.educationCardRight}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <p className={styles.educationCardBody}>{"GPA: " + props.GPA}</p>
              <p className={styles.educationCardBody}>
                {"Graduated: " + props.graduated}
              </p>
              <div></div>
            </div>
          </div>
        </div>
        {props.research !== undefined ? (
          <div>
            <Link
              href={props.researchLink ?? ""}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.educationCardRow}
            >
              <span className={styles.educationCardBody}>
                {"Research: " + props.research}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
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
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
