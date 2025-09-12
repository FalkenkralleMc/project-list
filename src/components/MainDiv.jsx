import "../theme/MainDiv.css";

//Here i want to have  buttons that lead to: Statistics and it should have a Diagramm with the current completion of all projects. and a filterpossibility for the projects displayed down
function MainDiv(){

    return(
        <div className="mainDiv">
            <button className="statistics main">Statistics</button>
            <div className="total-complete main"><p>Total completion</p></div>
            <div className="filter main"><p>filter</p></div>
        </div>
    )
}

export default MainDiv;