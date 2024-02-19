import { useForm } from "react-hook-form";
import HeaderName from "../../Component/HeaderName";
import { FaUtensils } from "react-icons/fa";
import AxiosPublic from "../../hooks/AxiosPublic";
import Axios from "../../hooks/Axios";
import Swal from "sweetalert2";
const imageHostingKey = import.meta.env.VITE_imbb_key
const imgHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`

const AddItem = () => {
    const axios = AxiosPublic()
    const axiosSecure = Axios()  
    const { register, handleSubmit,reset ,formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const image = { image: data.image[0] }

        const res = await axios.post(imgHostingURL, image, {
            headers: { "content-type": "multipart/form-data" }
        })
        console.log(res);


        if (res.data.success) {
             const addItem = {
                name: data.name,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category
                
             }
             const menuResponse = await axiosSecure.post('/menu', addItem)
             console.log(menuResponse);
             if(menuResponse.data.insertedId){
                reset()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} is added`,
                    showConfirmButton: false,
                    timer: 1000
                  });
             }

        }
    }


    return (
        <>
            <HeaderName subHeader="what's new" header='wanna add a item'></HeaderName>
            <form className="bg-white mx-12 py-8" onSubmit={handleSubmit(onSubmit)}>


                <label className="form-control w-full px-14 m">
                    <div className="label">
                        <span className="label-text">What is your name?*</span>
                    </div>
                    <input {...register("name", { required: true })} type="text" placeholder="Type here" className="input  input-bordered w-full " />
                    {errors.name && <span>This field is required</span>}

                </label>
                <div className="flex px-14 gap-3">
                    <label className="form-control w-full py-4 ">
                        <div className="label">
                            <span className="label-text">Category*</span>
                        </div>
                        <select defaultValue={"Category"} {...register('category', { required: true })} className="select select-bordered w-full">
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
                        <input {...register("price", { required: true })} type="text" placeholder="price" className="input input-bordered w-full " />
                        {errors.price && <span>This field is required</span>}

                    </label>

                </div>
                <label className="form-control px-12">
                    <div className="label">
                        <span className="label-text">Recipe Details</span>
                    </div>
                    <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    {errors.price && <span>This field is required</span>}
                    <div className="label">
                    </div>
                </label>
                <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs px-12 " />
                {errors.image && <span>This field is required</span>}

                <div className="mx-12 mt-4 ">
                    <button className=" btn" type="submit">Submit <FaUtensils></FaUtensils></button>
                </div>
            </form>
        </>

    );
};

export default AddItem;