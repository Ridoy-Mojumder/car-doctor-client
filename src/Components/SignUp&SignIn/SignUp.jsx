import { updateProfile } from 'firebase/auth';
import img from '../../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');
    const [passwordShow, setPasswordShow] = useState(false);
    const [password, setPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        photoURL: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newPassword = e.target.value;
        setPassword(newPassword);
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();

        const { name, photoURL, email, password } = formData;

        // Validate password
        if (password.length < 6) {
            setRegisterError('Password should be 6 characters or longer.');
            return;
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)) {
            setRegisterError('Password must be at least 8 and at most 15 characters, and contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.');
            return;
        }

        // Clear any previous error
        setRegisterError('');

        // Create user with email and password
        createUser(email, password)
            .then((userCredential) => {
                // Update user profile
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL
                }).then(() => {
                    console.log("Profile updated successfully");
                }).catch((error) => {
                    console.error("Error updating profile:", error);
                });

                // Clear form data
                setFormData({
                    name: '',
                    photoURL: '',
                    email: '',
                    password: ''
                });

                // Redirect to home page
                navigate("/");
            })
            .catch((error) => {
                console.error("Error signing up:", error);
                setRegisterError(error.message);
            });
    };

    return (
        <div className="flex justify-around items-center h-auto my-10">
            {/* Image Section */}
            <div className="w-1/2">
                <img src={img} alt="Sign up" className="w-2/3 h-auto ml-10" />
            </div>

            {/* Form Section */}
            <div className="w-1/2 bg-gray-100 p-8">
                <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                {registerError && <h1 className="text-xl font-bold mb-4 text-red-500 text-center">{registerError}</h1>}
                <form onSubmit={handleSignUpSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                        <input type="text" id="name" value={formData.name} onChange={handleChange} name="name" placeholder="Enter your name" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-[#FF3811] focus:border-[#ff3911b2]" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" id="email" value={formData.email} onChange={handleChange} name="email" placeholder="Enter your email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-[#FF3811] focus:border-[#ff3911b2]" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input type={passwordShow ? 'text' : 'password'} id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-[#FF3811] focus:border-[#ff3911b2]" />
                        {password && (
                            <span
                                onClick={() => setPasswordShow(!passwordShow)}
                                className="absolute top-3 right-2 cursor-pointer text-[14px] text-black text-2xl"
                            >
                                {passwordShow ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">Photo URL:</label>
                        <input type="text" id="photoURL" name="photoURL" value={formData.photoURL} onChange={handleChange} placeholder="Enter your photo URL" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-[#FF3811] focus:border-[#ff3911b2]" />
                    </div>
                    <button type="submit" className="w-full bg-[#FF3811] text-white py-2 px-4 rounded-md hover:bg-[#ff3911d0] focus:outline-none focus:bg-[#ff3911b2]">Sign Up</button>
                    <p className="my-3 text-center">Are You new? Please<Link to="/signIn" className="underline font-semibold" >Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
