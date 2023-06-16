export default function Project(props: {src: string, text: string, url: string}){
    function handleClick(){
        window.open(props.url);
    }
    return (
        <div onClick={handleClick}
                style={{backgroundImage: `url(${props.src})`}}><span>{props.text}</span>
        </div>
    )
}