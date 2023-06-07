import styles from "./Card.module.scss";

const Card = (props: {img: string, title: string, text: string, url: string}) => {
    return (
        <div className="card">
            <div className="card-img-top">
                <img src={props.img}  alt="..."/>
            </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href={props.url} className={styles.button}>Project using {props.title}</a>
                </div>
        </div>
    )
}

export default Card;