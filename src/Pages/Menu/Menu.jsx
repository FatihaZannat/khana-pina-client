import { Helmet } from "react-helmet";
import Cover from "../Sheard/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import HeaderName from "../../Component/HeaderName";
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import { MenuData } from "../../hooks/DataLoad";
import FoodList from "../Sheard/FoodList";
import Button from "../../Component/Button";
import { Link } from "react-router-dom";
import MenuDetails from "./MenuDetails";

const Menu = () => {
    const [offered, salad, pizza, soups, desserts, drinks, ] = MenuData()
    
    return (
        <div>
            <Helmet>
                <title>menu</title>
            </Helmet>
            {/* offered */}
            <Cover img={menuImg} name='OFFER'></Cover>
            <HeaderName subHeader="don't miss" header="today's offer"></HeaderName>
            <MenuDetails   items={offered} ></MenuDetails>

            {/* dessert */}
          <MenuDetails img={dessertImg} name='dessert' items={desserts} ></MenuDetails>
            {/* salad */}
            <MenuDetails img={saladImg} name='salad' items={salad} ></MenuDetails>

            {/* pizza */}

            <MenuDetails img={pizaImg} name='pizza' items={pizza} ></MenuDetails>

            {/* soup */}
         
            <MenuDetails img={soupImg} name='soup' items={soups} ></MenuDetails>

            {/* drinks */}
          
            <MenuDetails img={menuImg} name='drinks' items={drinks} ></MenuDetails>

        </div>
    );
};

export default Menu;