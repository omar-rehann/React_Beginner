import "../styles/all.css"
import "../styles/header.css"
import logo1 from "../img/avatar-02.png"
import { useState } from "react"
function Header(){
    const [IsActive,setActive]=useState(false);
    function handlenavbar(){
        setActive(!IsActive)
    }
    return(

        <>
        <header id="homelink">
            <nav>
                <div className="logo">
                    <img src={logo1} alt="" />
                    <h5>Omar Rehan</h5>
                </div>
                <div className={`links ${IsActive ?"active":""}`}>
                    <ul>
                        <li>
                            <a href="./#homelink">Home</a>
                        </li>
                        <li>
                            <a href="./#fetlink">Fetures</a>
                        </li>
                        <li>
                            <a href="">Portfilo</a>
                        </li>
                        <li>
                            <a href="">Resume</a>
                        </li>
                       
                        <li>
                            <a href="./#blog">Blog</a>
                        </li>
                        <li>
                            <a href="./#linkcontact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="icons" onClick={handlenavbar}>
                    <button>Buy Now</button>
                    <i className={`fa-solid fa-${IsActive ? "x" : "bars"}`}></i>
                </div>

            </nav>
        </header>
        </>
    )
}
export default  Header