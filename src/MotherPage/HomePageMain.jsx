import AboutUsSection from "./AboutUsSection/AboutUsAboutUsSection";
import NavbarSection from "./HeaderSections/NavbarSection";
import WhyUsSection from './WhyUsSection/WhyUsSection';
import WhatWeDoSection from './WhatWeDoSection/WhatWeDoSection';
import OurClientSection from "./OurClientSection/OurClientSection";


const HomePageMain = () => {
    return (
        <div>
            <NavbarSection></NavbarSection>
            <AboutUsSection></AboutUsSection>
            <WhyUsSection></WhyUsSection>
            <WhatWeDoSection></WhatWeDoSection>
            <OurClientSection></OurClientSection>
        </div>
    );
};

export default HomePageMain;