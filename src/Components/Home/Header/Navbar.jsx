import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);






    const link = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        {
            user && <>
            <li><NavLink to='/myBooking'>My Booking</NavLink></li>
            <li><NavLink to='/customerInfo'>Customer Info</NavLink></li>
            </>
        }
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden h-20 ">
                        <img src={logo} className='w-16 h-16' alt="" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl hidden md:flex h-28">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {!user ? (
                    <Link to='/signIn'>
                        <button className="btn border-2 border-[#FF3811] text-[#FF3811] bg-white">
                            Appointment
                        </button>
                    </Link>
                ) : (
                    <button onClick={logOut} className="btn border-2 border-[#FF3811] text-[#FF3811] bg-white">
                        Sign Out
                    </button>
                )}


            </div>
        </div>
    );
};

export default Navbar;