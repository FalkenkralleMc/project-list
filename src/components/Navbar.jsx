import "../theme/Navbar.css";
import Button from "./Button.jsx";
import logo from "/title.svg";
import github from "/github.svg";
import settings from "/settings.svg";

function Navbar() {
  const homeBtnInnerHTML = (
    <>
      <img src={logo} width="25px"/> Projectlist
    </>)

    const githubBtnInnerHtml = (
    <>
      <img src={github} width="25px"/> GitHub
    </>)

  return (
    <div className="Navbar">
      <div class="left">
        <Button className="home-btn" innerHTML={homeBtnInnerHTML}/>
      </div>
      <div class="right">
        <Button className="github-btn" innerHTML={githubBtnInnerHtml} onClick={() => window.open("https://github.com/FalkenkralleMc/project-list.git", "_blank")}/>
        <Button className="settings-btn" innerHTML={<img src={settings} width="25px"/>}/>
      </div>
    </div>
  )
}

export default Navbar
