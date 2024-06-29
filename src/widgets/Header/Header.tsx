import chel from "../../assets/chel.svg";
import styles from "./header.module.scss";
import Logout from "../Logout/logout";

type HeaderProps = { pending: number; taskCounter: number };
const Header = ({ pending, taskCounter }: HeaderProps) => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.header__content}>
            <div className={styles.header__user}>
              <div>
                <img src={chel} alt="" />
              </div>
              <div className={styles.header__userWrapper}>
                <div className={styles.header__userUpperText}>Hi Ishak 👋🏽</div>
                <div className={styles.header__userBottomText}>
                  <span>{pending} tasks pending </span>
                  <span>{taskCounter} Total</span>
                </div>
              </div>
            </div>
            <div className={styles.header__title}>TaskDO</div>
            <div className={styles.header__logout}>
              <Logout />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
