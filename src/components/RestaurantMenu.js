import React, { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (!resInfo) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage, locality } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu" style={{ margin: '200px' }}>
            <header className="restaurant-header">
                <h1 className="restaurant-name">{name}</h1>
                <p className="restaurant-description">
                    {cuisines.join(", ")} • {locality} • {costForTwoMessage}
                </p>
            </header>
            <h2>Recommended</h2>
            <div className="recommended-items">
                {Array.isArray(itemCards) && itemCards.map(item => (
                    <div className="menu-card" key={item.card.info.id}>
                        <img
                            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"+item.card.info.imageId || "default-image-url.jpg"}
                            className="menu-item-image"
                        />
                        <div className="menu-item-details">
                            <h3>{item.card.info.name}</h3>
                            <p>{item.card.info.description}</p>
                            <p>Price: Rs. {item.card.info.price / 100}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestaurantMenu;
