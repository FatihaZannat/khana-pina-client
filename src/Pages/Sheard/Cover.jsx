
import Tilt from 'react-parallax-tilt';

const Cover = ({ img, name }) => {

    return (


        <Tilt tiltEnable={false} scale={1.3} transitionSpeed={2500}>
            <div className="background-stripes scale-no-tilt">
                <div className="header">
                    <div className="relative">
                        <img src={img} alt="" />
                        <div className="text-center  bg-black opacity-50  w-[1000px] py-20 px-28 absolute top-20 left-32">
                            <h1 className="uppercase text-4xl  text-white  mb-4">{name}</h1>
                            <p className="text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                        </div>
                    </div>
                    <hr />
                </div>

            </div>
        </Tilt>


    );
};

export default Cover;