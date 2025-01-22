import styles from "./JobCard.module.css";

interface TitleWithLinkProps {
  title: string;
  titleLink: string;
}
function TitleWithLink({ title, titleLink }: TitleWithLinkProps) {
  const noLink = (
    <div className={[styles.jobCardTitle, styles.jobCardRow].join(" ")}>
      <span>{title}</span>
    </div>
  );

  const hasLink = (
    <a
      href={titleLink}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        styles.jobCardLink,
        styles.jobCardTitle,
        styles.jobCardRow,
      ].join(" ")}
    >
      <span>{title}</span>
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
  );

  if (titleLink) {
    return hasLink;
  } else {
    return noLink;
  }
}

export default function JobCard({
  id,
  dates,
  title,
  titleLink,
  description,
  technologies,
}: JobCardProps) {
  return (
    <>
      <div id={id === undefined ? "" : id} className={styles.jobCard}>
        <div className={[styles.jobCardLeft, "textXS"].join(" ")}>
          {/* Left side of card with dates */}
          {dates}
        </div>
        <div className={styles.jobCardRight}>
          {/* Setting up title of card with a link if it exists */}
          {titleLink !== undefined ? (
            <div className={styles.jobCardRow}>
              <TitleWithLink {...{ title, titleLink }}></TitleWithLink>
            </div>
          ) : (
            <span className={styles.jobCardTitle}>{title}</span>
          )}

          {/* Adding back dates if employment when card is smaller than a specific size */}
          <div className={[styles.jobCardDatesSmall, "textXS"].join(" ")}>
            {dates}
          </div>

          {/* Main body of card */}
          <p
            className={styles.jobCardBody}
            // dangerouslySetInnerHTML={{ __html: description }}
          >
            {description}
          </p>

          {/* Adding relavant tech stack bubbles */}
          {technologies !== undefined && technologies !== "" ? (
            <div className={styles.jobCardTechStack}>
              {technologies.split(",").map((element, i) => {
                return (
                  <div key={id + i} className={styles.jobCardTechItem}>
                    {element}
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {/* </a> */}
    </>
  );
}
