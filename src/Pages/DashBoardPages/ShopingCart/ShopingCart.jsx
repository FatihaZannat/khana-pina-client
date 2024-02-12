import HeaderName from "../../../Component/HeaderName";
import Usecart from "../../../hooks/Usecart";
import CartTable from "./CartTable";

const ShopingCart = () => {
    const [cart] = Usecart()
    // console.log(cart);
    return (
        <div className="">
            <HeaderName subHeader='my cart' header='wanna add more'></HeaderName>

           <div className="max-w-screen-lg mx-auto">

           <div className="flex mb-10 justify-between uppercase text-4xl">
                <div><h1>Total order {cart.length}</h1></div>
                <div>Total Price $ { cart.reduce((acc,item)=>acc+item.price,0) }</div>
                <div>Pay</div>
                
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="text-2xl">
                            <th></th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                 {cart.map((item, index )=> <CartTable key={item._id} item={item} index={index}></CartTable>)}
                </table>
            </div>
           </div>

        </div>
    );
};

export default ShopingCart;