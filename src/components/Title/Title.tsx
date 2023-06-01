import styles from "./Title.module.scss";

export default function Title(){
    return (
        <div className={styles.boxTitle} data-aos="fade-left" data-aos-duration="1500">
            <p className="display-1 text-light">Enzo Bozzani</p>
            <div className={styles.iconsDiv}>
                <a href="https://github.com/EnzoBozzani"><img src="/github.svg" alt="GitHub Logo" className={styles.icon}/></a>
                <a href="https://www.instagram.com/enzobozzani/"><img src="/instagram.svg" alt="Instagram Logo" className={styles.icon}/></a>
                <a href=""><img src="/icons8-linkedin.svg" alt="Linkedin Logo" className={styles.icon} /></a>
            </div>
        </div>
    )
}


//acertar as cores dos icons, assim como mudar a cor principal do projeto
//cor azul do bootstrap alert é interessante, tentar implementar nos textboxes
//cards para os projetos
//acordions para as tecnologias