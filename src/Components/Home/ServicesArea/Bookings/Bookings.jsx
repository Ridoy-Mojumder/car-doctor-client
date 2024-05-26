import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Bookings = () => {
    const { user, loadingState } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookingServices?email=${user.email}`

    useEffect(() => {

        axios.get(url, {withCredentials:true})
        .then(res=>{
            setBookings(res.data)
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data);
        //     })
        //     .catch(error => {
        //         console.error("Error fetching bookings:", error);
        //     });
    }, [url]);



    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/bookingServices/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = bookings.filter(booking => booking._id !== _id);
                            setBookings(remaining);
                        }
                    })
            }
        });

    };

    const handleBookingConfirm = (_id) => {
        fetch(`http://localhost:5000/bookingServices/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== _id);
                    const updated = bookings.find(booking => booking._id === _id);
                    updated.status = 'confirm';
                    const newBooking = [updated, ...remaining];
                    setBookings(newBooking);
                }
            })
    }


    if (loadingState) {
        return <>
            <div className="flex justify-center items-center my-32">
                <img src="https://i.ibb.co/ZSppyKq/Rotating-globe.gif" alt="" />
            </div>
        </>;
    }

    return (
        <>
            {loadingState ? (
                <div className="flex justify-center items-center my-32">
                    <img src="https://i.ibb.co/ZSppyKq/Rotating-globe.gif" alt="" />
                </div>
            ) : (
                <div className="overflow-x-auto m-10">

                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Customer Name</th>
                                <th>Delivery Date</th>
                                <th>Product Info</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map(booking => (
                                <tr key={booking._id}>
                                    <td>
                                        <img src={booking.img} alt="Booking Image" className="w-28 h-28 rounded-full" />
                                    </td>
                                    <td>{booking.serviceTitle}</td>
                                    <td>{booking.price}</td>
                                    <td>{booking.userName}</td>
                                    <td>{booking.date}</td>
                                    <td>
                                        <Link to={`/productDetails/${booking._id}`}><button className="btn btn-ghost btn-xs">Details</button></Link>
                                    </td>
                                    <td className="flex justify-between">
                                        {
                                            booking.status === 'confirm' ?
                                                <span className="font-bold text-[#FF3811]">Confirm</span> :
                                                <button onClick={() => handleBookingConfirm(booking._id)}>
                                                    Please Confirm
                                                </button>
                                        }

                                        <button onClick={() => handleDelete(booking._id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#FF3811]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </button>
                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>









                </div>
            )
            }

        </>

    );
};

export default Bookings;
