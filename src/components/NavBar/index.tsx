import { useState } from "react";
import styles from "./NavBar.module.scss";

export default function NavBar() {
    const [lang, setLang] = useState<string>('🇺🇸 (EN-US)');
    const changeLang = () => {
        setLang((currentState: string) => {
            if (currentState === '🇺🇸 (EN-US)'){
                return '🇧🇷 (PT-BR)';
            } else {
                return '🇺🇸 (EN-US)';
            }
        })
    }
    return (
        <header className={styles.header}>
            <nav className={styles.wrapper}>
                <a href="#accordionExample">Skills</a>
                <a href="#pSection">Projects</a>
                <a href="https://github.com/EnzoBozzani" target="_blank"><img src="/github.svg" alt="GitHub Logo" className={styles.icon} /></a>
                <a href="https://www.linkedin.com/in/enzo-bozzani-812a7322a/" target="_blank"><img src="/icons8-linkedin.svg" alt="Linkedin Logo" className={styles.icon} /></a>
            </nav>
            <button className="mx-auto" onClick={changeLang}>
                {lang}
            </button>
        </header>
    )
}