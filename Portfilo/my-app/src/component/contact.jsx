import "../styles/contact.css"
import "../styles/all.css"
function Contact(){
    return(
        <>
<div className="contact" id="linkcontact">
    <form action="">
        <div className="continer">
            <h2>Contact With Me</h2>
        </div>
        <input type="text" placeholder="Enter Name" name="" id="" />
        <input type="email" placeholder="Enter Email" name="" id="" />
        <input type="password" placeholder="Enter Password" name="" id="" />
        <textarea rows={10} cols={10} name="" placeholder="Enter Your Message" id=""></textarea>
        <button>Sumbit</button>

    </form>
</div>

        </>

    )
}
export default Contact