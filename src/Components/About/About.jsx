
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faBuilding, faTruck, faCogs, faStar } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const milestones = [
        {
            icon: faBuilding,
            year: "1990",
            title: "Company Founded",
            description: "Our car service company was founded with a mission to provide top-notch car repair and maintenance services. Starting with a small garage and a dedicated team of skilled mechanics, we quickly built a reputation for reliable and efficient service. Our commitment to quality work and customer satisfaction laid the foundation for our growth and success."
        },
        {
            icon: faWrench,
            year: "1995",
            title: "First Expansion",
            description: "In response to increasing demand, we opened our second location. This expansion allowed us to serve more customers and offer a wider range of services, including specialized repairs and maintenance for different car models. The new location was equipped with advanced tools and facilities, ensuring we could handle more complex repair jobs with ease."
        },
        {
            icon: faTruck,
            year: "2000",
            title: "Introduction of Towing Services",
            description: "Recognizing the need for comprehensive roadside assistance, we introduced 24/7 towing services. This addition ensured that our customers could rely on us in emergencies, providing quick and safe transportation of their vehicles to our service centers. Our towing service became a crucial part of our commitment to complete customer care."
        },
        {
            icon: faCogs,
            year: "2010",
            title: "Advanced Diagnostics",
            description: "We invested in state-of-the-art diagnostic equipment to enhance our service capabilities. These advanced tools allowed our mechanics to quickly and accurately diagnose issues, reducing repair times and improving the overall efficiency of our service process. This upgrade positioned us as a leader in the industry for technical expertise and innovation."
        },
        {
            icon: faStar,
            year: "2020",
            title: "Award-Winning Service",
            description: "Our dedication to excellence was recognized with the 'Best Car Service' award. This accolade highlighted our exceptional customer service, skilled technicians, and high-quality repairs. We are proud of this achievement and continue to strive for excellence in every aspect of our business, ensuring our customers receive the best service possible."
        }
    ];

    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            {milestones.map((milestone, index) => (
                <li key={index}>
                    <div className="timeline-middle mb-4">
                        <FontAwesomeIcon icon={milestone.icon} size="2x" className="text-[#FF3811]" />
                    </div>
                    <div className={`timeline-${index % 2 === 0 ? 'start md:text-end' : 'end'} mb-10`}>
                        <time className="font-mono italic block mb-2">{milestone.year}</time>
                        <div className="text-lg font-black mb-2">{milestone.title}</div>
                        <p className="text-gray-500">{milestone.description}</p>
                    </div>
                    {index < milestones.length - 1 && <hr className="my-4" />}
                </li>
            ))}
        </ul>
    );
};

export default About;
