import "../styles/boxes.css"
function Boxes(props){
    return(
        <>
        <div className="box">
            <div className="icon">
            <i className=    {props.icons}></i>
            </div>
            <div className="content">
                <h2>{props.name}</h2>
                <p>{props.text}</p>
            </div>
        </div>
        </>
    )
}
export default  Boxes