
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img src="https://i.ibb.co/1JLGgJF/404-found-page-with-genie-from-lamp-illustration-673004-319.jpg" alt="404 Error" className="w-1/3 mb-8" />
            <Link to="/">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go to Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;
