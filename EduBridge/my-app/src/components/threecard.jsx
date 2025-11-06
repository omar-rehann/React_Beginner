function Threecard(props){
    return(
        <>
        <div className="three_card">
            <div className="box">
                <div className="image">
                    <img src={props.imgg} alt="" />
                </div>
                <div className="title">
                    {props.title}

                </div>
                <div className="text">
                    {props.text}


                </div>
                <div className="price">
                                        {props.price}


                </div>
                <div className="more">
                    <a href="">Leran More</a>
                </div>
            </div>

        </div>
        </>

    )
}
export default Threecard