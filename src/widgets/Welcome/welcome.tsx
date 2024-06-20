import styles from "./welcome.module.scss"
const Welcome = () => {
    return(
        <div className={styles.welcome}>
            <div className={styles.welcome__title}>
                TaskDo
            </div>
            <div className={styles.welcome__slogan}>Manage You Task Checklist Easily</div>
            <div className={styles.welcome__container}>
                <div className={styles.welcome__button}>
                    <div>
                        Lets Start
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Welcome