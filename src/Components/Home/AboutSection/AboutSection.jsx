

const AboutSection = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src="https://i.ibb.co/8NVwDMd/person.jpg" className="w-2/3 rounded-lg shadow-2xl" />
                    <img src="https://i.ibb.co/ZGsPvs5/parts.jpg" className="w-1/2 rounded-lg shadow-2xl absolute right-16 top-1/2 border-l-8 border-t-8 border-white" />
                </div>
                <div className="lg:w-1/2 p-4 md:p-8 lg:p-16">
                    <h6 className="text-xl text-[#FF3811] font-bold my-10">About Us</h6>
                    <h1 className=" text-3xl md:text-5xl font-bold text-black mr-4 md:mr-12 lg:mr-20">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p><br />
                    <p className="pb-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;