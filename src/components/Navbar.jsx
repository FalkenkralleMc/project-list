import "../theme/Navbar.css";
import Button from "./Button.jsx"

function Navbar() {
  const homeBtnInnerHTML = (
    <>
      <img src="../../title.svg" width="25px"/> Projectlist
    </>)
  

  return (
    <div className="Navbar">
      <Button className="home-btn" innerHTML={homeBtnInnerHTML}/>
    </div>
  )
}

export default Navbar
