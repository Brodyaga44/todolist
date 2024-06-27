import styles from "./welcome.module.scss";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.welcome__items}>
        <div className={styles.welcome__title}>TaskDo</div>
        <div className={styles.welcome__slogan}>
          Manage You Task Checklist Easily
        </div>
      </div>
      <Link to="/todo" className={styles.welcome__button}>
        <span className={styles.welcome__btnText}>Lets Start</span>
      </Link>
    </div>
  );
};

export default Welcome;
