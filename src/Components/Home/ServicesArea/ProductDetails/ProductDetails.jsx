import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { FaCalendarAlt, FaUser, FaEnvelope, FaDollarSign, FaBook } from 'react-icons/fa';

const ProductDetails = () => {
    const { serviceTitle, userName, email, date, price, img, serviceType, message } = useLoaderData();
    const [isBooked, setIsBooked] = useState(false);

    const handleBookNow = () => {
        setIsBooked(true);
        // Add logic to book the service
    };

    return (
        <div className="card flex justify-center items-center">
            <div className="flex justify-center items-center">
                <img src={img} alt={serviceTitle} className="card-img-top w-2/3" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{serviceTitle}</h5>
                <p className="card-text">{message}</p>
                <div className="details">
                    <p><FaCalendarAlt /> <strong>Date:</strong> {date}</p>
                    <p><FaUser /> <strong>Customer Name:</strong> {userName}</p>
                    <p><FaEnvelope /> <strong>Email:</strong> {email}</p>
                    <p><FaDollarSign /> <strong>Price:</strong> {price}</p>
                    <p><strong>Service Type:</strong> {serviceType}</p>
                </div>
                {isBooked ? (
                    <p className="text-success"><FaBook /> Service Booked!</p>
                ) : (
                    <button onClick={handleBookNow} className="btn btn-primary"><FaBook /> Book Now</button>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
