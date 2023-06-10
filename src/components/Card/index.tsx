import styles from "./Card.module.scss";

const Card = (props: {img: string, title: string, text: string, url: string}) => {
    function handleClick(){
        window.open(props.url);
    }
    return (
        <div className={`${styles.mainCard} card`}>
            <div className="card-img-top">
                <img  data-aos="flip-up" data-aos-duration="1000"  src={props.img}  alt="..."/>
            </div>
                <div className="card-body">
                    <h5  data-aos="flip-up" data-aos-duration="1000" className="card-title">{props.title}</h5>
                    <p  data-aos="flip-up" data-aos-duration="1000" className="card-text">{props.text}</p>
                    <button onClick={handleClick} className={styles.button}>Project using {props.title}</button>
                </div>
        </div>
    )
}

export default Card;

//estilizar o botão e adicionar o funcionamento da função