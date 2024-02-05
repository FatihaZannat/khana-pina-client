import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../assets/home/slide1.jpg'
import img2 from '../../assets/home/slide2.jpg'
import img3 from '../../assets/home/slide3.jpg'
import img4 from '../../assets/home/slide4.jpg'
import img5 from '../../assets/home/slide5.jpg'
import HeaderName from '../../Component/HeaderName';


const Category = () => {
    return (
        <div>
            <div>
                <HeaderName subHeader='From 11:00am to 10:00pm'
                 header='order online'></HeaderName>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide><img src={img1} alt="" />
                    <h1 className='uppercase text-center text-white -mt-16 text-2xl'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide><img src={img2} alt="" />
                <h1 className='uppercase text-center text-white -mt-16 text-2xl'>Soup</h1>
                </SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /> 
                <h1 className='uppercase text-center text-white -mt-16 text-2xl'>Pizza</h1>
                </SwiperSlide>
                <SwiperSlide><img src={img4} alt="" />
                <h1 className='uppercase text-center text-white -mt-16 text-2xl'>Desart</h1>
                </SwiperSlide>
                <SwiperSlide><img src={img5} alt="" />
                <h1 className='uppercase text-center text-white -mt-16 text-2xl'>Salad</h1>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;