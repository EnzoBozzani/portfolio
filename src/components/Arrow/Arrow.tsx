import styles from "./Arrow.module.scss";
import arrow from "/arrowDown.png";

export default function Arrow(props: {direction: string}){
    let className;
    if (props.direction === "Right"){
        className = styles.right;
    } else if(props.direction === "Down"){
        className = styles.down;
    }
    else if(props.direction === "Left"){
        className = styles.left;
    }
    return (
        <>
            <img src={arrow} alt="Arrow Gif" className={className} />
        </>
    )
}