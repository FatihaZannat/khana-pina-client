import { useEffect, useState } from "react";
import FoodCard from "../../Sheard/FoodCard";

const ChefRecommend = () => {
    const [recommend, setRecommend] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const recommendData = data.filter(item => item.category
                === 'salad')
            setRecommend(recommendData.slice(0,3));
        })
    },[])
    return (
        <div className="flex justify-between my-20">
            {recommend.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)}
        </div>
    );
};

export default ChefRecommend;