
const Bread = (props) => {
    let top = props.top;
    let price = props.price;
    return(
        <>
            {
            (top)?(
                <div className="bread-top">
                     {(price)} EP
                </div>
            ):(
                <div className="bread-bottom">
            
                </div>
            )
            }
        </>
    )
}

export default Bread;