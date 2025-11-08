import "../styles/F_props.css"
import "../styles/all.css"
function FeaturesProps(props){
    return(
        <div className="all_props">
            <div className="box">
                <div className="icon">
                    <i className={props.icon}></i>

                </div>
                <div className="text">
                    <h3>{props.name}</h3>
                    <p>{props.text}</p>
                </div>

            </div>

        </div>

    )
}
export default FeaturesProps