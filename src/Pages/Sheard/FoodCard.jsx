import Button from "../../Component/Button";

const FoodCard = ({item}) => {
    const {image, name,recipe} = item
    // console.log(item);
    return (
        <div className="card w-96 bg-slate-50 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                   <Button item={item}  text='add to cart'></Button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;