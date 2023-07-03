import styles from "./Card.module.scss";

const Card = (props: {img: string, title: string, text: string, url: string, lang: string}) => {
    function handleClick(){
        window.open(props.url);
    }
    return (
        <div className={`card ${styles.techCard}`}>
            <div className={`card-img-top ${styles.techCardImgTop}`}>
                <img  data-aos="flip-up" data-aos-duration="1000"  src={props.img}  alt="..."/>
            </div>
                <div className={`card-body ${styles.techCardBody}`}>
                    <h5  data-aos="flip-up" data-aos-duration="1000" className="card-title">{props.title}</h5>
                    <p  data-aos="flip-up" data-aos-duration="1000" className="card-text">{props.text}</p>
                    <button onClick={handleClick} className={styles.button}>{props.lang !== '🇺🇸 (EN-US)' ? 'Project using' : 'Projeto usando'} {props.title}</button>
                </div>
        </div>
    )
}

export default Card;
