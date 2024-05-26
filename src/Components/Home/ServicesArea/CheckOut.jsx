import { FaArrowRight } from "react-icons/fa";
import { RiNewspaperFill } from "react-icons/ri";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { LuYoutube } from "react-icons/lu";


const CheckOut = () => {

    const loadedData = useLoaderData();
    console.log(loadedData);

    const { _id,title, img, description, facility, price } = loadedData;

    return (
        <div>
            <div className="carousel-item relative w-full mb-16">
                <div className="relative w-full">
                    <img src="https://i.ibb.co/YcHk0yf/man-mechanic-working-with-screwdriver-repair-motorcycle-detail-151013-39125.jpg" className="w-full h-60 object-cover" />
                </div>
                <div className="absolute h-full left-0 top-0  rounded-xl flex bg-gradient-to-r from-[#151515] to-[rgb(21, 21, 21, 0)] ">
                    <div className="text-white p-4 md:p-16 mt-auto">
                        <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-16">Service Details</h1>
                        <div className="bg-[#FF3811] bottom-0 m-10 p-2 flex justify-center items-center ml-12" >
                            <NavLink to='/'>Home/Service Details</NavLink>
                        </div>
                    </div>
                </div>
            </div>




            <div>
                <div className="md:flex justify-around ">
                    <img src={img} alt="" className="border-[#FF3811] border-2 w-full h-auto md:h-80 rounded-xl md:w-1/2" />
                    <div className="bg-gray-200 ">
                        <h1 className="text-xl text-center w-96 mb-4 ">Services</h1>
                        <div className="flex justify-around bg-[#FF3811] text-white items-center p-4 mx-10 mb-4 rounded-md">
                            <h1 className="text-xl">Full car service </h1><FaArrowRight />
                        </div>
                        <div className="flex justify-around bg-white items-center p-4 mx-10 mb-4">
                            <h1 className="text-xl">Engine Repair </h1><span className="text-[#FF3811]"><FaArrowRight /></span>
                        </div>
                        <div className="flex justify-around bg-white items-center p-4 mx-10 mb-4">
                            <h1 className="text-xl">Automatic Services </h1><span className="text-[#FF3811]"><FaArrowRight /></span>
                        </div>
                        <div className="flex justify-around bg-white items-center p-4 mx-10 mb-4">
                            <h1 className="text-xl">Engine Oil Change </h1><span className="text-[#FF3811]"><FaArrowRight /></span>
                        </div>
                        <div className="flex justify-around bg-white items-center p-4 mx-10 mb-4">
                            <h1 className="text-xl">Battery Charge </h1><span className="text-[#FF3811]"><FaArrowRight /></span>
                        </div>
                    </div>
                </div>
            </div>





            <div>
                <div className="md:flex justify-around my-10 mx-4 ">
                    <div className="md:w-1/2">
                        <h1 className="text-7xl font-bold text-black ">{title}</h1>
                        <p className="my-6">{description}</p>
                        <div className="grid grid-cols-2 gap-4  ">
                            <div className="border-t-2 border-[#FF3811] bg-gray-100 p-8 rounded-xl">
                                <h1 className="text-xl font-bold">Instant Car Services</h1>
                                <p className="text-gray-400">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                            <div className="border-t-2 border-[#FF3811] bg-gray-100 p-8 rounded-xl">
                                <h1 className="text-xl font-bold">24/7 Quality Service</h1>
                                <p className="text-gray-400">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                            <div className="border-t-2 border-[#FF3811] bg-gray-100 p-8 rounded-xl">
                                <h1 className="text-xl font-bold">Easy Customer Service</h1>
                                <p className="text-gray-400">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                            <div className="border-t-2 border-[#FF3811] bg-gray-100 p-8 rounded-xl">
                                <h1 className="text-xl font-bold">Quality Cost Service</h1>
                                <p className="text-gray-400">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>

                        </div>
                        <p className="my-6">{facility[0].details} {facility[1].details}</p>


                        <div>
                            <h1 className="text-5xl font-bold">3 Simple Steps to Process</h1>
                            <p className="my-6">{description}</p>

                            <div className="grid grid-cols-3 gap-5">
                                <div className="border p-8">
                                    <div className="flex justify-center items-center m-4">
                                        <h1 className=" text-xl rounded-full bg-[#fcebe9] flex justify-center items-center p-2 w-20 h-20 text-center">
                                            <h1 className=" text-xl rounded-full bg-[#FF3811] text-white font-bold p-2 w-12 h-12">1</h1>
                                        </h1>
                                    </div>
                                    <h1 className="text-[18px] font-bold text-center">Step One</h1>
                                    <p className="my-6 text-gray-400 text-center">It uses a dictionary of over 200 .</p>
                                </div>
                                <div className="border p-8">
                                    <div className="flex justify-center items-center m-4">
                                        <h1 className=" text-xl rounded-full bg-[#fcebe9] flex justify-center items-center p-2 w-20 h-20 text-center">
                                            <h1 className=" text-xl rounded-full bg-[#FF3811] text-white font-bold p-2 w-12 h-12">2</h1>
                                        </h1>
                                    </div>
                                    <h1 className="text-[18px] font-bold text-center">Step Two</h1>
                                    <p className="my-6 text-gray-400 text-center">It uses a dictionary of over 200 .</p>
                                </div>
                                <div className="border p-8">
                                    <div className="flex justify-center items-center m-4">
                                        <h1 className=" text-xl rounded-full bg-[#fcebe9] flex justify-center items-center p-2 w-20 h-20 text-center">
                                            <h1 className=" text-xl rounded-full bg-[#FF3811] text-white font-bold p-2 w-12 h-12">3</h1>
                                        </h1>
                                    </div>
                                    <h1 className="text-[18px] font-bold text-center">Step Three</h1>
                                    <p className="my-6 text-gray-400 text-center">It uses a dictionary of over 200 .</p>
                                </div>

                            </div>


                            <div className="carousel-item relative w-full my-10">
                                <div className="relative w-full">
                                    <img src="https://i.ibb.co/z2X0SWY/2.jpg" className="w-full  rounded-xl" />
                                </div>
                                <div className="absolute h-full left-0 top-0  ">
                                    <div className="text-white  px-56 py-36 mt-auto">
                                        <h1 className="text-4xl  mb-2 md:mb-16 border-2 rounded-full border-[#FF3811] w-28 h-28 text-center flex justify-center items-center text-[#FF3811]"><LuYoutube /></h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>








                    <div className=" ">
                        <div className="bg-black flex justify-center items-center rounded-md text-white">
                            <div>
                                <h1 className="text-2xl ml-4 text-white w-96 my-4 font-bold">Download</h1>
                                <div className="flex justify-between px-6 items-center">
                                    <div className="flex justify-around items-center gap-2">
                                        <RiNewspaperFill className="text-2xl" />
                                        <div>
                                            <h1 className="text-xl">Our Brochure</h1>
                                            <p>Download</p>
                                        </div>
                                    </div>
                                    <div className="bg-[#FF3811] p-3">
                                        <FaArrowRight></FaArrowRight>
                                    </div>
                                </div>
                                <div className="flex justify-between px-6 my-4 items-center">
                                    <div className="flex justify-around items-center gap-2">
                                        <RiNewspaperFill className="text-2xl" />
                                        <div>
                                            <h1 className="text-xl">Company Details</h1>
                                            <p>Download</p>
                                        </div>
                                    </div>
                                    <div className="bg-[#FF3811] p-3">
                                        <FaArrowRight></FaArrowRight>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="bg-black flex justify-center items-center mt-10 rounded-md text-white ">
                            <div className="text-center mb-20">
                                <div className="flex justify-center items-center mt-10">
                                    <img src={logo} alt="" />
                                </div>
                                <h1 className="text-2xl ml-4 text-white w-96 my-4 font-bold">Need Help? We Are Here
                                    <br />To Help You</h1>
                                <div className="relative justify-between px-6 items-center  m-10 p-4 bg-white rounded-xl">
                                    <h1 className="text-2xl text-black  font-bold"><span className="text-[#FF3811]"> Car Doctor</span> Special</h1>
                                    <h1 className="text-[18px] my-2 text-black"> Save up to<span className="text-[#FF3811]"> 60% off</span> </h1>
                                    <h1 className="absolute bg-[#FF3811] py-4 px-6 font-bold text-white rounded-xl ml-16 text-[18px] my-2 "> Get A Quote </h1>
                                </div>

                            </div>
                        </div>

                        <div>
                            <h1 className=" text-4xl my-2 text-black  font-bold ">Price: {price}</h1>
                            <Link to={`/checkOutBox/${_id}`}>
                                <button className="btn w-full bg-[#FF3811] text-white my-6 text-2xl " >Proceed Checkout</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default CheckOut;