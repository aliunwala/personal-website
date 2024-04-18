import styles from "./ProjectCard.module.css";

export default function ProjectCard(props) {
  return (
    <>
      <div
        id={props.id === undefined ? "" : props.id}
        className={styles.projectCard}
      >
        {/* Setting up title of card with a link if it exists */}
        {props.titleLink !== undefined ? (
          <div className={styles.projectCardRow}>
            <a
              href={props.titleLink}
              target="_blank"
              rel="noopener noreferrer"
              className={[styles.projectCardLink, styles.projectCardTitle].join(
                " "
              )}
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
          <span className={styles.projectCardTitle}>{props.title}</span>
        )}

        <div className={styles.projectCardContiner}>
          {/* Left side of card with image */}
          <div className={[styles.projectCardLeft, "textXS"].join(" ")}>
            <img
              src={props.image}
              fill="white"
              width="100%"
              height="auto"
              alt={styles.title}
            />
          </div>
          <div className={styles.projectCardRight}>
            {/* Body text of card */}
            <p
              className={styles.projectCardBody}
              dangerouslySetInnerHTML={{ __html: props.goal }}
            ></p>

            {/* Adding relavant tech stack bubbles */}
            {props.technologies !== undefined && props.technologies !== "" ? (
              <div className={styles.projectCardTechStack}>
                {props.technologies.split(",").map((element) => {
                  return (
                    <div className={styles.projectCardTechItem}>{element}</div>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {/* </a> */}
    </>
  );
}
