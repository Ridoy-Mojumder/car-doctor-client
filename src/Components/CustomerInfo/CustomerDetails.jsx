import { useLoaderData } from "react-router-dom";

const CustomerDetails = () => {
    const { firstName, lastName, phone, email, message, photoURL } = useLoaderData();

    return (
        <div className="flex justify-center items-center my-20">
            <div className="customer-card bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-md p-6 gap-4 ">
                <div className="customer-image px-10 m-10  ">
                    <img src={photoURL} alt={`${firstName} ${lastName}`} className="w-64 h-64 rounded-full" />
                </div>
                <div className="customer-info px-10 m-10">
                    <h5 className="text-xl font-bold mt-4">User Name: {firstName} {lastName}</h5>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Phone:</strong> {phone}</p>
                    <p><strong>Message:</strong> {message}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerDetails;
