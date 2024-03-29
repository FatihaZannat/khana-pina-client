import FoodCard from "../Sheard/FoodCard";
import 'swiper/css';
import 'swiper/css/pagination';

const ShopDetails = ({ items }) => {

 


    return (
        <>
          
                
                    <section className="grid grid-cols-3 gap-8 mb-12">
                        {
                            items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </section>
              

            
        </>

    );
};

export default ShopDetails;