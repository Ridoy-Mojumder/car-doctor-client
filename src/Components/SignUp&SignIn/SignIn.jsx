import { useContext, useState } from 'react';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const SignIn = () => {
    // State management
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { signIn } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [passwordShow, setPasswordShow] = useState(false);
    const location = useLocation()

    // Event handler for input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Event handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;
        setLoading(true);
        setError('');

        try {
            // Call sign-in function from AuthContext
            await signIn(email, password);
            alert("Sign In Successful");
            const user = {email}
            // Reset form data and navigate to home page
            setFormData({ email: '', password: '' });
            // 
            axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
            .then(res => {
                console.log(res.data);
                if(res.data.success){
                    navigate(location?.state ? location?.state : "/");
                }
            })






        } catch (error) {
            console.error(error);
            // Display error message for invalid credentials
            setError('Invalid email or password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-around items-center h-auto my-10">
            {/* Image Section */}
            <div className="w-1/2">
                <img src={img} alt="Sign in" className="w-2/3 h-auto ml-10" />
            </div>

            {/* Form Section */}
            <div className="w-1/2 bg-gray-100 p-8">
                <h2 className="text-2xl text-center font-semibold mb-4">Log In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="my-3 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-[#FF3811] focus:border-[#ff3911b2]" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <div className="relative">
                            <input type={passwordShow ? 'text' : 'password'} id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" className="my-3 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-[#FF3811] focus:border-[#ff3911b2]" />
                            {formData.password && (
                                <span
                                    onClick={() => setPasswordShow(!passwordShow)}
                                    className="absolute top-3 right-2 cursor-pointer text-[14px] text-black text-2xl "
                                >
                                    {passwordShow ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            )}
                        </div>
                    </div>
                    <button type="submit" disabled={loading} className={`py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md  block ${loading && 'opacity-50 cursor-not-allowed'} w-full bg-[#FF3811] text-white py-2 px-4 rounded-md hover:bg-[#ff3911d0] focus:outline-none focus:bg-[#ff3911b2]`} >{loading ? 'Signing In...' : 'Sign In'}</button>
                    <p className="mb-3 text-center">Don&apos;t have an account?<Link to="/signUp" className="underline font-semibold" >Register</Link></p>
                    {/* Display error message */}
                    {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default SignIn;
