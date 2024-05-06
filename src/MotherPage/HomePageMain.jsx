import AboutUsSection from "./AboutUsSection/AboutUsAboutUsSection";
import NavbarSection from "./HeaderSections/NavbarSection";
import WhyUsSection from './WhyUsSection/WhyUsSection';


const HomePageMain = () => {
    return (
        <div>
            <NavbarSection></NavbarSection>
            <AboutUsSection></AboutUsSection>
            <WhyUsSection></WhyUsSection>
        </div>
    );
};

export default HomePageMain;