//3. Restaurant Card
const RestaurantCard = (props) => {
    const {resData} = props;

    return (<div className="res-card">
        <img className="res-logo" src={resData.image}/>
        <h3>{resData.name}</h3>
        <h4>{resData.receipe}</h4>
        <h4>{resData.rating}</h4>
        <h4>{resData.deliveryTime}</h4>
        <h4>{resData.price}</h4>
    </div>);
}

export default RestaurantCard;