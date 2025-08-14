// Code from: https://dev.to/madsstoumann/the-solar-system-in-css-51bo?ref=dailydev
import styles from "./index.module.css";
export default function solarSystem() {
  return (
    <>
      <div className={styles.body_solar}>
        <ol className="ol_solar">
          <li class={styles.sun}></li>
          <li class={styles.mercury}></li>
          <li class={styles.venus}></li>
          <li class={styles.earth}></li>
          <li class={styles.mars}></li>
          <li class={styles.jupiter}></li>
          <li class={styles.saturn}></li>
          <li class={styles.uranus}></li>
          <li class={styles.neptune}></li>
        </ol>
      </div>
    </>
  );
}
