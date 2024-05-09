/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */

import { FaHeartPulse } from "react-icons/fa6";
import { GiChart } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaGraduationCap } from "react-icons/fa6";
import { Fade, Zoom } from "react-awesome-reveal";



const WhyUsSection = () => {
    return (
        <div className="sectionGap">
            <div className="whyChooseUsParent">
                <div>
                    <img className="h-full w-full object-cover rounded-[10px]" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1714974336/whiteLebel/whyUs_euww80.png" alt="" />
                </div>
                <div>
                    <h1 className="titleHeading relative"> <span className="relative z-20"><span> <Fade cascade duration={300}>So, Why Us?</Fade> </span></span> <span className="absolute z-10 2xl:bottom-[55px] 2xl:left-0 2xl:w-[440px] 2xl:h-[7px] bg-red-700"></span> </h1>
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
                                <Zoom><MdDashboard className="2xl:text-[35px] "></MdDashboard></Zoom>
                            </div>
                            <div className="iconsSingleParent">
                                <Zoom delay={100}><FaGraduationCap className="2xl:text-[35px] "></FaGraduationCap></Zoom>
                            </div>
                            <div className="iconsSingleParent">
                                <Zoom delay={200}><GiChart className="2xl:text-[35px] "></GiChart></Zoom>
                            </div>
                            <div className="iconsSingleParent">
                                <Zoom delay={300}><VscWorkspaceTrusted className="2xl:text-[35px] "></VscWorkspaceTrusted></Zoom>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUsSection;