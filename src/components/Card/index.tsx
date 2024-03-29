import styles from "./Card.module.scss";

const Card = (props: {img: string, title: string, url: string, lang: string, display: string}) => {
    function handleClick(){
        window.open(props.url);
    }
    return (
        <div className={`card ${styles.techCard}`} style={{display: props.display}}>
            <div className={`card-img-top ${styles.techCardImgTop}`}>
                <img src={props.img}  alt="..."/>
            </div>
                <div className={`card-body ${styles.techCardBody}`}>
                    <button onClick={handleClick} className={styles.button}>{props.lang !== '🇺🇸 (EN-US)' ? 'Project using' : 'Projeto usando'} {props.title}</button>
                </div>
        </div>
    )
}

export default Card;
