import { useContext, useState } from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const CheckOutBox = () => {
    const { user } = useContext(AuthContext);
    const {_id} = useLoaderData()
    const [status, setStatus] = useState(''); // Manage status messages
    const navigate = useNavigate();

    const handleCheckOutBox = event => {
        event.preventDefault();
        setStatus('Processing...'); // Set initial status to loading

        const form = event.target;
        const booking = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            phone: form.phone.value,
            email: form.email.value,
            message: form.message.value,
            photoURL: form.photoURL.value,
        };

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setStatus('Submitted successfully! Thank you.'); // Success message
                navigate(`/Service/${_id}`);
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
                        <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-16">Check Out</h1>
                        <div className="bg-[#FF3811] bottom-0 m-10 p-2 flex justify-center items-center ml-12" style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}>
                            <NavLink to='/'>Home/Service Details</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="bg-gray-100 min-h-screen flex justify-center items-center">
                    <form className="p-16 rounded-lg m-10 w-full" onSubmit={handleCheckOutBox}>
                        <div className="grid md:grid-cols-2 gap-8">
                            <input type="text" id="firstName" name="firstName" placeholder="First Name" className="w-full px-4 py-4 border rounded-lg md:mb-4" required />
                            <input type="text" id="lastName" name="lastName" placeholder="Last Name" className="w-full px-4 py-4 border rounded-lg mb-4" required />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <input type="text" id="phone" name="phone" placeholder="Your Phone" className="w-full px-4 py-4 border rounded-lg md:mb-4" />
                            <input type="email" id="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="w-full px-4 py-4 border rounded-lg mb-4" required />
                        </div>
                        <div className="gap-8">
                        <input type="text" id="photoURL" name="photoURL" placeholder="Photo URL" className="w-full px-4 py-4 border rounded-lg md:mb-4" />

                        </div>
                        <div>
                            <textarea id="message" name="message" placeholder="Message" rows="12" className="w-full px-4 py-2 border rounded-lg mb-4" required></textarea>
                        </div>
                        
                            <button type="submit" className="bg-[#FF3811] hover:bg-[#f17157] w-full text-white py-2 px-4 rounded-lg font-bold">Next For service details</button>
                        
                        {status && <p className="text-center mt-4">{status}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOutBox;
