import styles from "./TechSection.module.scss";

export default function TechSection(props: any){
    return (
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
}
