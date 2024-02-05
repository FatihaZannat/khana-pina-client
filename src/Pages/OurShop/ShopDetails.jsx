import FoodCard from "../Sheard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const ShopDetails = ({ items }) => {

    const total = items.length
    const itemPerPase = 6
    const totalPage = Math.ceil(total / itemPerPase)
   
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';

        },
    }


    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                
                    <section className="grid grid-cols-3 gap-8 mb-12">
                        {
                            items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </section>
              

            </Swiper>
        </>

    );
};

export default ShopDetails;