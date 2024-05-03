import HeroContentSection from "./HeroContentSection";


const NavbarSection = () => {
    return (
        <div>
            <nav className="navbarLeftRightSpace">
                <div className="navbarParent">
                    <div>
                        <img src="/logo.png" alt="brand logo" />
                    </div>
                    <div>
                        <ul className="listParent">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Service</li>
                            <li>Our Work</li>
                            <li>For Agencies</li>
                        </ul>
                    </div>
                    <div>
                        <div className="herobtnParent">
                            <button className="headerBtnText border border-[2px] border-black ">Start A Conversation</button>
                            <button className="headerBtnText bg-[#E12026] text-white">Get a Quote</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ========== Hero Content Here ========== */}
            <HeroContentSection></HeroContentSection>
        </div>
    );
};

export default NavbarSection;