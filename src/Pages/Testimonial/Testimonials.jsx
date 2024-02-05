import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import HeaderName from "../../Component/HeaderName";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {

    const [review, setReview] = useState([])
    
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => {
                setReview(data);
            })
    }, [])
    return (
        <div className="text-center">
            <HeaderName subHeader='What Our Clients Say' header='testimonials'></HeaderName>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {review.map(item=><SwiperSlide key={item._id}>
               <div className="w-3/4 mx-auto">
               <Rating style={{ maxWidth: 250 }} className="mx-auto my-6 pb-4" value={item.rating} />
              <FaQuoteLeft className="mx-auto text-6xl pb-6"></FaQuoteLeft>
                <p>{item.details}</p>
               <h1 className="my-5 text-orange-600 text-4xl uppercase mb-20">{item.name}</h1>
               </div>
            </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default Testimonials;