const RestaurantCard = ({resData}) => {
  
    const {cloudinaryImageId,name,avgRatingString,sla,costForTwo,areaName,cuisines
    } = resData?.info
  
    return(
          <div className='res-card'>
              {console.log(resData)}
              <img className="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}></img>
              <h3 style={{color:"orange"}}>{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h4>{avgRatingString}</h4>
              <h4>{"Delivery in "}<span style={{color:"green"}}>{sla.deliveryTime}</span>{" minutes"}</h4>
              <h4>{costForTwo}</h4>
          </div>
      );
  };
  
export default RestaurantCard;