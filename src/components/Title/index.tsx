import styles from "./Title.module.scss";

export default function Title(props: {lang: string}){
    return (
        <div className={styles.boxTitle} data-aos="fade-left" data-aos-duration="1500">
            <img src="/profile.jpg" alt="" className={styles.profileImg}/>
            <div className={styles.boxTitleInfo}>
                {props.lang !== '🇺🇸 (EN-US)' ? 
                    (<> Hi, my name is <strong className={styles.nameTitle}>Enzo Bozzani</strong> and I'm a Web Developer (JavaScript, TypeScript, React)</>)
                    :
                    (<> Oi, meu nome é <strong className={styles.nameTitle}>Enzo Bozzani</strong> e sou um Desenvolvedor Web (JavaScript, TypeScript, React)</>)
                }
            </div>
        </div>
    )
}

