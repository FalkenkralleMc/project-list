import "../theme/Navbar.css";

function Button(props) {
    return (
    <button className={props.className} onClick={props.onClick}>
        {props.innerHTML}
    </button>
    )
}

export default Button;
