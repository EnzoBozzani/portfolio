import styles from "./Title.module.scss";

export default function Title(){
    return (
        <div className={styles.boxTitle}>
            <p className="display-1 text-light">Enzo Bozzani</p>
            <img src="/github.svg" alt="GitHub Logo" className={styles.icon}/>
            <img src="/instagram.svg" alt="Instagram Logo" className={styles.icon}/>
        </div>
    )
}