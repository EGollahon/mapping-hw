import {useState} from "react";

function Character(props) {
    const [write, setWrite] = useState("");

    let style = {
        minHeight: "100px",
        maxWidth: "200px",
        backgroundColor: props.color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "0px 10px 0px 10px"
    }

    let moves = props.moves.map((obj) => <li>{obj}</li>);

    function writePower() {
        setWrite("My power is " + props.power);
    }

    return (
        <div style={style} onClick={writePower}>
            <p>Name: {props.name}</p>
            <p>Superpower: {props.power}</p>
            <p>Age: {props.age > 50 ? "I am too old" : props.age}</p>
            <p>Special Moves:</p>
            <ul>
                {moves}
            </ul>
            <p>{write}</p>
        </div>
    )
}

export default Character;