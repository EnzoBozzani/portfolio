import Arrow from "./Arrow";

export default function ArrowBox(props: { direction: string }) {
    if (props.direction === "Down"){
        return (
            <div style={{
                width: "30%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "368px"
            }}>
                <Arrow direction={props.direction} />
            </div>
        )
    } else {
        return (
            <div style={{
                width: "30%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "292px"
            }}>
                <Arrow direction={props.direction} />
            </div>
        )
    }

}