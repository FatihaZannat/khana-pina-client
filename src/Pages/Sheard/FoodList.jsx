
const FoodList = ({item}) => {
    const {name, recipe, image , price} = item
    return (
        <div className="flex gap-4 ">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]  " src={image} alt="" />
            <div>
                <h1 className="uppercase ">{name}----------</h1>
                <p>{recipe}</p>
            </div>
            <h1 className="text-orange-500">${price}</h1>
        </div>
    );
};

export default FoodList;