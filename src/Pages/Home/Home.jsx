
import { Helmet } from "react-helmet";
import Testimonials from "../Testimonial/Testimonials";
import BestMenu from "./BestMenu/BestMenu";
import Category from "./Category";
import FeaturedItem from "./FeaturedItem";
import ChefRecommend from "./Recommended/ChefRecommend";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
              <Helmet>
                <title>Khana Pina | Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Slider></Slider>
            <Category></Category>
            <FeaturedItem></FeaturedItem>
            <ChefRecommend></ChefRecommend>
            <BestMenu></BestMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;