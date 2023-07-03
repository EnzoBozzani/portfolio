import styles from "./NavBar.module.scss";

export default function NavBar(props: {lang: string, changeLang: any}) {
    return (
        <header className={styles.header}>
            <nav className={styles.wrapper}>
                <a href="#accordionExample">{props.lang !== '🇺🇸 (EN-US)' ? 'Skills' : 'Habilidades'}</a>
                <a href="#pSection">{props.lang !== '🇺🇸 (EN-US)' ? 'Projects' : 'Projetos'}</a>
                <a href="https://github.com/EnzoBozzani" target="_blank"><img src="/github.svg" alt="GitHub Logo" className={styles.icon} /></a>
                <a href="https://www.linkedin.com/in/enzo-bozzani-812a7322a/" target="_blank"><img src="/icons8-linkedin.svg" alt="Linkedin Logo" className={styles.icon} /></a>
            </nav>
            <button className="mx-auto" onClick={props.changeLang}>
                {props.lang}
            </button>
        </header>
    )
}