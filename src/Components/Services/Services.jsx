
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOilCan, faWrench, faCarBattery, faCarSide, faCarCrash } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    const services = [
        {
            icon: faOilCan,
            title: "Oil Change",
            description: "Regular oil changes to keep your engine running smoothly."
        },
        {
            icon: faWrench,
            title: "General Maintenance",
            description: "Comprehensive maintenance services for all car models."
        },
        {
            icon: faCarBattery,
            title: "Battery Replacement",
            description: "Quick and reliable battery testing and replacement."
        },
        {
            icon: faCarSide,
            title: "Tire Services",
            description: "Tire rotation, alignment, and replacement services."
        },
        {
            icon: faCarCrash,
            title: "Collision Repair",
            description: "Expert repair services for collision and accident damage."
        }
    ];

    return (
        <div className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Car Services</h2>
            <p className="text-lg text-gray-500 mb-12">
                We provide a variety of top-notch car services to ensure your vehicle stays in perfect condition.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6 max-w-sm transform transition-transform hover:-translate-y-2">
                        <FontAwesomeIcon icon={service.icon} size="3x" className="text-[#FF3811] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-500">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
