import { Link } from "react-router-dom";
import Cover from "../Sheard/Cover";
import Button from "../../Component/Button";
import FoodList from "../Sheard/FoodList";

const MenuDetails = ({img,items,name}) => {
    // console.log(items);
    return (
        <div>
           {name && img && <Cover img={img} name={name}></Cover> }
            <section className="grid grid-cols-2 gap-8 mb-12">
                {
                   items.map(item => <FoodList key={item._id} item={item}></FoodList>)
                }
            </section>
            <Link to={`/shop/${name}`}><Button  item='' text='order your favourite'></Button></Link>

        </div>
    );
};

export default MenuDetails;