import "../styles/header.css"
import "../styles/font.css"
import { useState } from "react"

function Header(){
    const[Isactive,setIsactive]=useState(false);
   
    return(
        <>
        <header>
            <div className="logo">
                <h4>EduBridge</h4>
            </div>
                <div className={`links ${Isactive ? "active" : ""}`}>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Products</a>
                    </li>
                    <li>
                        <a href="">Prcing</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                     <li>
                        <a href="">Login</a>
                    </li>
                </ul>
            </div>
            <div className="buttons">
                <button>Join Us <i class="fa-solid fa-right-long"></i></button>
<i 
  onClick={() => setIsactive(!Isactive)} 
  className={` sidebar fa-solid ${Isactive ? "fa-x" : "fa-bars"}`} style={{color:"white",margin:"0px 10px",cursor:"pointer"}}>
</i>
            </div>
           
        </header>
        </>

    )
}
export default  Header