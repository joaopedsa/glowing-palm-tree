import "./button.css"

function Button(props) {
    return (
        <button className={"plan-button"} onClick={props.handleClick}>
            {props.name}
        </button>
    )
}

export default Button;