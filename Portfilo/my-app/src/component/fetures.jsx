import FeaturesProps from "../props/fetures"
import "../styles/F_props.css"
function Fetures(){
    return(
        <>
        <div className="fetures" id="fetlink">
            <div className="continer">
                <h2>Feturees</h2>
                <h3>What I DO</h3>
            </div>

          <div className="content">
  <FeaturesProps 
    icon="fa-solid fa-briefcase" 
    name="Business Strategy" 
    text="We help you develop and implement effective strategies to grow your business." 
  />

  <FeaturesProps 
    icon="fa-solid fa-code" 
    name="App Development" 
    text="We build high-performance, scalable applications tailored to your needs." 
  />
  <FeaturesProps 
    icon="fa-solid fa-mobile-screen" 
    name="Mobile App" 
    text="We create modern, user-friendly mobile applications for all platforms." 
  />

  <FeaturesProps 
    icon="fa-brands fa-flutter" 
    name="Flutter Development" 
    text="Cross-platform mobile apps built with Flutter for iOS and Android." 
  />




</div>

        </div>
        </>
    )
}
export default  Fetures