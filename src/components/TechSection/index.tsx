import styles from "./TechSection.module.scss";

export default function TechSection(props: any){
    return (
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
}

//usar bootstrap cards para as tecnologias (1 card p cada tech, criar um compoonente card aqui nessa pasta mesmo)