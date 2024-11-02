import styles from "./JobCard.module.css"

export default function JobCard(props: Job) {
  return (
    <>
      <div
        id={props.id === undefined ? "" : props.id}
        className={styles.jobCard}
      >
        <div className={[styles.jobCardLeft, "textXS"].join(" ")}>
          {/* Left side of card with dates */}
          {props.dates}
        </div>
        <div className={styles.jobCardRight}>
          {/* Setting up title of card with a link if it exists */}
          {props.titleLink !== undefined ? (
            <div className={styles.jobCardRow}>
              <a
                href={props.titleLink}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  styles.jobCardLink,
                  styles.jobCardTitle,
                  styles.jobCardRow,
                ].join(" ")}
              >
                <span>{props.title}</span>
                <span>
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
                </span>
              </a>
            </div>
          ) : (
            <span className={styles.jobCardTitle}>{props.title}</span>
          )}

          {/* Adding back dates if employment when card is smaller than a specific size */}
          <div className={[styles.jobCardDatesSmall, "textXS"].join(" ")}>
            {props.dates}
          </div>

          {/* Main body of card */}
          <p
            className={styles.jobCardBody}
            // dangerouslySetInnerHTML={{ __html: props.description }}
          >
            {props.description}
          </p>

          {/* Adding relavant tech stack bubbles */}
          {props.technologies !== undefined && props.technologies !== "" ? (
            <div className={styles.jobCardTechStack}>
              {props.technologies.split(",").map((element, i) => {
                return (
                  <div key={props.id + i} className={styles.jobCardTechItem}>
                    {element}
                  </div>
                )
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {/* </a> */}
    </>
  )
}
