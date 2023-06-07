import styles from "./NavBar.module.scss";

export default function NavBar() {
    return (
        <nav className={styles.wrapper}>
            <a href="">Contact</a><a href="">About</a>
            <a href="https://github.com/EnzoBozzani" target="_blank"><img src="/github.svg" alt="GitHub Logo" className={styles.icon}/></a>
            <a href="https://www.linkedin.com/in/enzo-bozzani-812a7322a/" target="_blank"><img src="/icons8-linkedin.svg" alt="Linkedin Logo" className={styles.icon} /></a>
        </nav>
    )
}