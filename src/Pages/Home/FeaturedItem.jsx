
import HeaderName from "../../Component/HeaderName";
import chef from '../../assets/home/chef-service.jpg'
import Button from "../../Component/Button";
import Cover from "../Sheard/Cover";
import {  MenuData } from "../../hooks/DataLoad";
import FoodList from "../Sheard/FoodList";
const FeaturedItem = () => {
    const [,,,,,,,,popular] = MenuData()

    return (
        <div>
            <Cover img={chef} name='KHANA PINA'></Cover>

            <HeaderName
                subHeader='check ti out'
                header='from our menu'
            ></HeaderName>
            <section className="grid grid-cols-2 gap-8 mb-12">
                {
                    popular.map(item => <FoodList
                        key={item._id}
                        item={item}></FoodList>)
                }
            </section>
           <Button item='' text='view full menu'></Button>

           <div className="bg-black text-white py-16 text-center text-4xl">Call Us: +12<sub className="text-4xl">8</sub>03480<sub className="text-4xl">9</sub>348</div>
        </div>

    );
};

export default FeaturedItem;