import { FaHeartPulse } from "react-icons/fa6";
import { GiChart } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaGraduationCap } from "react-icons/fa6";



const WhyUsSection = () => {
    return (
        <div className="sectionGap">
            <div className="whyChooseUsParent">
                <div>
                    <img className="h-full w-full object-cover rounded-[10px]" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1714974336/whiteLebel/whyUs_euww80.png" alt="" />
                </div>
                <div>
                    <h1 className="titleHeading"> So, Why Us? </h1>
                    <p className="commonPara">So you can optimize costs and effectiveness, access to a diverse range of skills and experience, increase your business offerings to clients, take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more. take more projects without having to worry about capacity constraints. But there's more.</p>
                    <div>
                        <div className="flex 2xl:space-x-[35px]">
                            <div className="relative iconsParentWhyUsSection">
                                <div className="flex  items-center">
                                    <div className="innerParentWhyUs">
                                        <FaHeartPulse className="2xl:text-[35px] text-white"></FaHeartPulse>
                                    </div>
                                    <div>
                                        <p className="webHealthText">Web Health</p>
                                    </div>
                                </div>
                            </div>
                            <div className="iconsSingleParent">
                                <MdDashboard className="2xl:text-[35px] "></MdDashboard>
                            </div>
                            <div className="iconsSingleParent">
                                <FaGraduationCap className="2xl:text-[35px] "></FaGraduationCap>
                            </div>
                            <div className="iconsSingleParent">
                                <GiChart className="2xl:text-[35px] "></GiChart>
                            </div>
                            <div className="iconsSingleParent">
                                <VscWorkspaceTrusted className="2xl:text-[35px] "></VscWorkspaceTrusted>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUsSection;