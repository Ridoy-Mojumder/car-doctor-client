import { useContext, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const ServicesConfirm = () => {

    const { user } = useContext(AuthContext)
    const { _id, title, img, description, price } = useLoaderData()
    const [status, setStatus] = useState(''); // Manage status messages

    const handleBookingServices = event => {
        event.preventDefault();
        setStatus('Processing...'); // Set initial status to loading

        const form = event.target;
        const serviceTitle = form.serviceTitle.value;
        const date = form.date.value
        const price = form.price.value;
        const serviceType = form.serviceType.value;
        const message = form.message.value;
        const bookingServices = {
            service_id: _id,
            serviceTitle: serviceTitle,
            userName: user.displayName,
            email: user.email,
            date: date,
            price: price,
            img: img,
            serviceType: serviceType,
            message: message,
        }
        console.log(bookingServices)

        fetch('http://localhost:5000/bookingServices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingServices)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setStatus('Submitted successfully! Thank you.');
                alert('Submitted successfully! Thank you.') // Success message
            })
            .catch(error => {
                console.error('Error:', error);
                setStatus('Failed to submit. Please try again.'); // Error message
            });
    }

    return (
        <div>
            <div className="carousel-item relative w-full mb-16">
                <div className="relative w-full">
                    <img src="https://i.ibb.co/YcHk0yf/man-mechanic-working-with-screwdriver-repair-motorcycle-detail-151013-39125.jpg" className="w-full h-60 object-cover" />
                </div>
                <div className="absolute h-full left-0 top-0  rounded-xl flex bg-gradient-to-r from-[#151515] to-[rgb(21, 21, 21, 0)] ">
                    <div className="text-white p-4 md:p-16 mt-auto">
                        <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-16">Services</h1>
                        <div className="bg-[#FF3811] bottom-0 m-10 p-2 flex justify-center items-center ml-12" style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}>
                            <NavLink to='/'>Home/Service Details</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="bg-gray-100 min-h-screen flex justify-center items-center">
                    <form className="p-16 rounded-lg m-10 w-full" onSubmit={handleBookingServices}>
                        <div className="grid md:grid-cols-2 gap-8">
                            <input type="text" id="serviceTitle" name="serviceTitle" defaultValue={title} placeholder="Service Title" className="w-full px-4 py-4 border rounded-lg md:mb-4" required />
                            <input type="date" id="date" name="date" className="w-full px-4 py-4 border rounded-lg mb-4" required />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <select id="serviceType" name="serviceType" defaultValue={user?.serviceType} className="w-full px-4 py-4 border rounded-lg md:mb-4" required>
                                <option value="">Select a Service Type</option>
                                <option value="Oil Change">Oil Change</option>
                                <option value="Tire Rotation">Tire Rotation</option>
                                <option value="Brake Inspection and Service">Brake Inspection and Service</option>
                                <option value="Wheel Alignment">Wheel Alignment</option>
                                <option value="Engine Tune-Up">Engine Tune-Up</option>
                                <option value="Air Conditioning Service">Air Conditioning Service</option>
                                <option value="Battery Replacement">Battery Replacement</option>
                                <option value="Transmission Service">Transmission Service</option>
                                <option value="Coolant Flush">Coolant Flush</option>
                                <option value="Diagnostic Service">Diagnostic Service</option>
                                <option value="Car Service">Car Service</option>
                                {/* Add more options as needed */}
                            </select>
                            <input type="text" id="price" name="price" defaultValue={price} placeholder="Your Email" className="w-full px-4 py-4 border rounded-lg mb-4" required />
                        </div>
                        <div>
                            <textarea id="message" name="message" defaultValue={description} rows="12" className="w-full px-4 py-2 border rounded-lg mb-4" required></textarea>
                        </div>

                        <button type="submit" className="bg-[#FF3811] hover:bg-[#f17157] w-full text-white py-2 px-4 rounded-lg font-bold">Order Confirm</button>

                        {status && <p className="text-center mt-4">{status}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServicesConfirm;