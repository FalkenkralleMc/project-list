import "../theme/Navbar.css";

function Button(props) {
    return (
    <button className={props.className}>
        {props.innerHTML}
    </button>
    )
}

export default Button;
