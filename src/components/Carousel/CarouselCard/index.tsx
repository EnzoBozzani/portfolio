import styles from "./CarouselCard.module.scss";

const CarouselCard = (props: { url: string, src: string, title: string, text: string }) => {
    return (
        <a href={props.url} target="_blank">
            <div className="card d-block w-50 mx-auto align-middle">
                <img src={props.src} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </a>
    )
}

export default CarouselCard;

//estilizar cards do carrosel