import AboutUsSection from "./AboutUsSection/AboutUsAboutUsSection";
import NavbarSection from "./HeaderSections/NavbarSection";
import WhyUsSection from './WhyUsSection/WhyUsSection';
import WhatWeDoSection from './WhatWeDoSection/WhatWeDoSection';
import OurClientSection from "./OurClientSection/OurClientSection";
import PeopleTalkingSection from "./PeopleTalkingSection/PeopleTalkingSection";
import RiskFreeCta from './RiskFreeCta/RiskFreeCta.jsx';
import EngagementSection from "./EngagementSection/EngagementSection.jsx";
import CollaborateSection from "./CollaborateSection/CollaborateSection.jsx";




const HomePageMain = () => {
    return (
        <div>
            <NavbarSection></NavbarSection>
            <AboutUsSection></AboutUsSection>
            <WhyUsSection></WhyUsSection>
            <WhatWeDoSection></WhatWeDoSection>
            <OurClientSection></OurClientSection>
            <PeopleTalkingSection></PeopleTalkingSection>
            <RiskFreeCta></RiskFreeCta>
            <EngagementSection></EngagementSection>
            <CollaborateSection></CollaborateSection>
            
            
        </div>
    );
};

export default HomePageMain;