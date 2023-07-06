import styles from "./Footer.module.scss";

export const Footer = (props: { lang: string }) => {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.media}>
                <span className="d-block ms-5">{props.lang !== '🇺🇸 (EN-US)' ? 'Other Social Media' : 'Outras Redes Sociais'}</span>
                <div className="d-flex justify-content-center align-items-center gap-3">
                    <a className="main-color">@enzobozzani</a><a href="https://www.instagram.com/enzobozzani/" target="_blank" className="main-color">Instagram</a><a href="https://twitter.com/enzobozzani" target="_blank" className="main-color">Twitter</a>
                </div>
            </div>
            <div>
                <button onClick={() => window.open('mailto:bozzanienzo@gmail.com')}>
                    Email
                </button>
            </div>
        </footer>
    )
}