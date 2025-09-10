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
      <div class="left">
        <Button className="home-btn" innerHTML={homeBtnInnerHTML}/>
      </div>
      <div class="right">
        <Button className="github-btn" innerHTML="github"/>
      </div>
    </div>
  )
}

export default Navbar
