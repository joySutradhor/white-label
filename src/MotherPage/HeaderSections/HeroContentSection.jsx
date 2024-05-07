

const HeroContentSection = () => {
    return (
        <div>
            <div className="heroContentParent">
                <div>
                    <img className="heroContentImg" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1714740508/whiteLebel/heroImg_s5ykge.png" alt="HeroContentImg" />
                </div>
                <div>
                    <div className="2xl:pr-[100px]">
                        <h2 className="titleHeading relative">White-Label Web Development Services for   
                        <span className="relative z-20"> Creative Agencies</span>
                        <span className="absolute z-10 2xl:bottom-[55px] 2xl:left-[128px] 2xl:w-[670px] 2xl:h-[7px] bg-red-700"></span>
                        </h2>
                        <p className="commonPara">A reliable coding partner that delivers solutions to your business challenges and stays by your side in the long term. Having the whole spectrum of web development expertise, we are here to take care of your projects while making it possible for you to focus on growing your own business.</p>

                        <div className="heroContainerbtnParent">
                            <button className="headerBtnText  bg-[#E12026] text-white">Get In Touch</button>
                            <button className="headerBtnTextWhite  ">Get In Touch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroContentSection;