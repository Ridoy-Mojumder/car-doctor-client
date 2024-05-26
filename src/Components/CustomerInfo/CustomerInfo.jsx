import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const CustomerInfo = () => {
    const { user } = useContext(AuthContext);
    const [bookingsUser, setBookingsUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings`)
            .then(res => res.json())
            .then(data => {
                setBookingsUser(data);
            })
            .catch(error => {
                console.error("Error fetching bookings:", error);
            });
    }, [user]);



    return (
        <div>
             <table className="table my-10">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookingsUser.map(customer => (
                                <tr key={customer._id}>
                                    <td>{customer.firstName}</td>
                                    <td>{customer.lastName}</td>
                                    <td>{customer.phone}</td>
                                    <td>{customer.email}</td>
                                    <td>
                                        <Link to={`/customerDetails/${customer._id}`}><button className="btn btn-ghost btn-xs">Details</button></Link>
                                    </td>
                                </tr>
                            ))}

                        </tbody>

                    </table>
        </div>
    );
};

export default CustomerInfo;