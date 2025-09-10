import "../theme/Navbar.css";
import Button from "./Button.jsx";
import logo from "/title.svg";

function Navbar() {
  const homeBtnInnerHTML = (
    <>
      <img src={logo} width="25px"/> Projectlist
    </>)
  

  return (
    <div className="Navbar">
      <Button className="home-btn" innerHTML={homeBtnInnerHTML}/>
    </div>
  )
}

export default Navbar
