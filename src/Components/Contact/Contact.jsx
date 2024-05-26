


const Contact = () => {
    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
                    <defs>
                        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M60 0H0v60" stroke="currentColor" strokeWidth="2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 shadow-md rounded-md">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Get in Touch</h3>
                        <form action="#" method="POST">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" name="name" id="name" required className="mt-1 p-3 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="email" id="email" required className="mt-1 p-3 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                <input type="tel" name="phone" id="phone" required className="mt-1 p-3 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea name="message" id="message" rows="4" required className="mt-1 p-3 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#ff2111] hover:bg-[hsl(4,100%,53%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fa5e3e] transition duration-150 ease-in-out">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-white p-8 shadow-md rounded-md">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
                        <p className="text-sm text-gray-600 mb-2"><strong>Address:</strong> 123 Car Service St, Auto City, AS 12345</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Phone:</strong> (123) 456-7890</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Email:</strong> contact@carservice.com</p>
                        <p className="text-sm text-gray-600 mb-4"><strong>Working Hours:</strong> Mon-Fri: 8am - 6pm, Sat: 9am - 4pm, Sun: Closed</p>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-[#1877F2] hover:text-[#376cb1] transition duration-150 ease-in-out">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.54 0H1.46C.654 0 0 .654 0 1.46v21.08C0 23.346.654 24 1.46 24h11.43v-9.294H9.785v-3.615h3.105V8.575c0-3.067 1.87-4.74 4.598-4.74 1.304 0 2.424.097 2.75.14v3.187l-1.887.001c-1.48 0-1.766.704-1.766 1.733v2.273h3.533l-.46 3.615h-3.073V24H22.54c.806 0 1.46-.654 1.46-1.46V1.46C24 .654 23.346 0 22.54 0z"/>
                                </svg>
                            </a>
                            

                            <a href="#" className="text-[#1DA1F2] hover:text-[#4fabe4]">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.23 5.924c-.77.342-1.594.573-2.462.677a4.285 4.285 0 001.88-2.362 8.572 8.572 0 01-2.72 1.04A4.264 4.264 0 0016.39 4c-2.367 0-4.285 1.918-4.285 4.286 0 .335.038.661.11.974C7.728 8.959 4.1 6.89 1.671 3.849a4.267 4.267 0 00-.579 2.154c0 1.486.756 2.798 1.906 3.563a4.268 4.268 0 01-1.94-.536v.054c0 2.076 1.476 3.808 3.437 4.203a4.278 4.278 0 01-1.938.073c.546 1.705 2.13 2.948 4.008 2.981A8.588 8.588 0 010 19.85a12.135 12.135 0 006.57 1.923c7.88 0 12.19-6.526 12.19-12.19 0-.186-.004-.371-.013-.556A8.719 8.719 0 0024 4.556a8.46 8.46 0 01-2.428.666A4.268 4.268 0 0022.23 5.924z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-[#181717] hover:text-gray-900">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c-5.456 0-9.837 4.38-9.837 9.837 0 4.378 2.849 8.083 6.78 9.404.496.09.679-.216.679-.482 0-.238-.009-.867-.014-1.7-2.763.6-3.348-1.333-3.348-1.333-.451-1.143-1.102-1.448-1.102-1.448-.902-.616.068-.603.068-.603 1.001.071 1.528 1.028 1.528 1.028.886 1.52 2.324 1.082 2.89.828.09-.643.347-1.082.633-1.33-2.207-.25-4.525-1.103-4.525-4.912 0-1.084.39-1.97 1.03-2.664-.103-.252-.447-1.268.098-2.643 0 0 .84-.27 2.75 1.026A9.64 9.64 0 0112 6.847c.85.004 1.707.115 2.507.337 1.908-1.296 2.747-1.026 2.747-1.026.548 1.375.204 2.391.1 2.643.641.694 1.028 1.58 1.028 2.664 0 3.819-2.322 4.656-4.536 4.899.357.308.674.918.674 1.85 0 1.334-.012 2.41-.012 2.739 0 .269.181.575.688.479a10.003 10.003 0 006.765-9.404c0-5.457-4.381-9.838-9.837-9.838z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
