import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Axios from "../../hooks/Axios";
import AxiosPublic from "../../hooks/AxiosPublic";

const image_hosting_key = import.meta.env.VITE_imbb_key
const image_hosting_URL = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const axios = Axios()
    const axiosPublic = AxiosPublic()

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const menu = useLoaderData()
    // console.log(menu);

    const onSubmit = async (data) => {
        console.log(data);
        const image ={image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_URL, image, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
        console.log(res);
        if(res.data.success){

            const updateData = {
                name: data.name,
                price: parseFloat(data.price),
                category: data.category,
                recipe: data.recipe,
                image: res.data.data.display_url
                
            }
            
    
            const updateResult = await axios.patch(`/menu/${menu._id}`, updateData)
            console.log(updateResult);
        }
      
    }
    return (
        <>
            <div className="uppercase text-4xl m-8 text-center">
                update item
            </div>


            <form className="bg-white mx-12 py-8" onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full px-14 m">
                    <div className="label">
                        <span className="label-text">What is your name?*</span>
                    </div>
                    <input defaultValue={menu.name} {...register("name", { required: true })} type="text" placeholder="Type here" className="input  input-bordered w-full " />
                    {errors.name && <span>This field is required</span>}

                </label>
                <div className="flex px-14 gap-3">
                    <label className="form-control w-full py-4 ">
                        <div className="label">
                            <span className="label-text">Category*</span>
                        </div>
                        <select defaultValue={menu.category} {...register('category', { required: true })} className="select select-bordered w-full">
                            <option disabled value='Category'>Category</option>
                            <option>drinks</option>
                            <option>dessert</option>
                            <option>dalad</option>
                            <option>pizza</option>
                            <option>soup</option>
                        </select>
                        {errors.category && <span>This field is required</span>}

                    </label>
                    <label className="form-control w-full py-4 ">
                        <div className="label">
                            <span className="label-text">Price</span>
                        </div>
                        <input defaultValue={menu.price} {...register("price", { required: true })} type="text" placeholder="price" className="input input-bordered w-full " />
                        {errors.price && <span>This field is required</span>}

                    </label>

                </div>
                <label className="form-control px-12">
                    <div className="label">
                        <span className="label-text">Recipe Details</span>
                    </div>
                    <textarea defaultValue={menu.recipe} {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    {errors.price && <span>This field is required</span>}
                    <div className="label">
                    </div>
                </label>
                <input  {...register('image')} type="file" className="file-input w-full max-w-xs px-12 " />
                {/* {errors.image && <span>This field is required</span>} */}

                <div className="mx-12 mt-4 ">
                    <button className=" btn" type="submit">Submit <FaUtensils></FaUtensils></button>
                </div>
            </form>
        </>
    );
};

export default UpdateItem;