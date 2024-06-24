import chel from "../../assets/chel.svg"
import styles from "./header.module.scss"
import Logout from "../Logout/logout";
const Header = () => {
    return(
        <header>
            <div className={styles.header}>
                <div className={styles.headerWrapper}>
                    <div className={styles.inner}>
                        <div className={styles.header__content}>
                            <div className={styles.user}>
                                <div><img src={chel} alt=''/></div>
                                <div className={styles.user__wrapper}>
                                    <div className={styles.user__upperText}>Hi Ishak 👋🏽</div>
                                    <div className={styles.user__bottomText}>X tasks pending</div>
                                </div>
                            </div>
                            <div className={styles.header__title}>TaskDO</div>
                            <div className={styles.header__logout}><Logout/></div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default Header;