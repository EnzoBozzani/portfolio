import styles from "./TextBox.module.scss";

export default function TextBox(props: {text: string}){
    return (
        <div className="text-box">
            <p data-aos="flip-up" data-aos-duration="1000" className={styles.text1}>
                <strong>{props.text}</strong>
            </p>
        </div>
    )
}