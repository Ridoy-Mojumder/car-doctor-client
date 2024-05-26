import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const ServicesArea = () => {

    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/carDoctor')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <h6 className="text-xl text-[#FF3811] font-bold my-4 text-center">Service {services.length}</h6>
                <h1 className="text-3xl md:text-5xl font-bold text-purple-900 text-center"> Our Services Area</h1>
                <p className="text-center text-gray-700  my-4 md:my-8">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full">
                    {services.map((service, index) => (
                        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                            <img className="w-full" src={service.img} alt={service.title} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-[#FF3811]">{service.title}</div>
                                <div className="flex justify-between my-8 text-[#FF3811]">
                                    <p className=" text-lg font-bold ">{service.price}</p>
                                    <Link to={`/checkOut/${service._id}`}><FaArrowRight /></Link>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            <div className="flex justify-center items-center my-8">
                <button className="btn border-[#FF3811] text-[#FF3811] bg-white">More services</button>
            </div>

        </div>
    );
};

export default ServicesArea;