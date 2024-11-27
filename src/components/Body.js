import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useState , useEffect} from "react";//named import
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useOnlineStatus from './../utils/useOnlineStatus';

const Body = () => {

    //const [restaurants , setListOfRestaurant] = useState(resList);//we have made use of mock data here
    const [restaurants , setListOfRestaurant] = useState([]);//we have made use of live data here
    const[filteredRestaurants , setFilteredRestaurants] = useState([]);
    const[searchText , setSearchText] = useState("");

    useEffect(() => {fetchData()} , []);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5924336&lng=73.8477874&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();
        console.log(json)
        //Optional Chaining
        setListOfRestaurant(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus == false) 
        return(
            <h1 style={{marginTop : "100px"}}>Check your network connection</h1> 
        ); 
            
    
    //As we know while fetching data from api it takes some time to load. 
    //Previously webpages were loading with a loading message or a spinner which is not used now
    //Shimmer UI is current practice used by almost all websites to make users anticipate in prior 
    //what is going to get loaded onto the screen


    //Conditional rendering
    // if(restaurants.length === 0){
    //     return <Shimmer/>;
    // }

    return restaurants.length === 0 ? <Shimmer/> :(
        <div className ="body">
            
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = restaurants.filter((res) => parseFloat(res.info.avgRatingString) > 4.2);
                    setFilteredRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="search-wrapper">
            <input type="text" className="search" placeholder="Search your type" value={searchText}  onChange={(e)=>{setSearchText(e.target.value);}}></input>
            <button className = "search-button" onClick={()=>{
                const searchedRestaurant = restaurants.filter((r)=>
                r.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurants(searchedRestaurant);
            }}> 
            <i className="fas fa-search"></i>
            </button>
            </div>
            
            <div className='heading_cards'><h1>Top Restaurants in Pune</h1></div>
            <div className='res-container'>
                {
                    filteredRestaurants.map((restaurant) => (<Link to={"/resmenu/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>))
                }
            </div>    
        </div>
    );
};

export default Body;