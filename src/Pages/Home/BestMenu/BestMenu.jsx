import Button from "../../../Component/Button";
import HeaderName from "../../../Component/HeaderName";
import featuredImg from "../../../assets/home/featured.jpg"
import './bestMenu.css'

const BestMenu = () => {
    return (
       
         <div className="my-28 bgStyle py-12">
        <div className="">
        <HeaderName subHeader='check it out' header='from our menu'></HeaderName>
            <div className=" flex items-center my-12 mx-[200px] gap-4">
                <img className='w-[400px] ' src={featuredImg} alt="" />
                <div className="text-white  ">
                    <h1 className="text-2xl">March 20, 2023</h1>
                    <h1 className="text-xl my-3">WHERE CAN I GET SOME?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur
                    </p>
                    <span><Button item=''  text='read more'></Button></span>
                </div>
            
        </div>
        </div>
       </div>
    );
};

export default BestMenu;