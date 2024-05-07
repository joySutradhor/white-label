import { GiChart } from "react-icons/gi";

const EngagementSection = () => {
    return (
        <div className="sectionGap">
            <div className="engagementHeadingParent">
                <h2 className="titleHeading relative">
                <span className="relative z-20">Engagement Models</span>
                <span className="absolute z-10 2xl:h-[10px]  2xl:w-[755px] 2xl:bottom-[55px] 2xl:left-[290px] bg-red-700" ></span>    
                That Work</h2>
                <p className="commonPara engagementPara">Our flexible and effective approaches ensure that we can deliver customized solutions that meet our client's specific needs and exceed their expectations. Proven to be successful with more than 1000+ agencies globally.</p>

                <div className="grid 2xl:grid-cols-3 2xl:space-x-[53px]">
                    {/* --------- card one here---------- */}
                    <div className="bg-[#f1f0f0] 2xl:rounded-[10px]">
                        <div className="2xl:p-[50px]">
                            <div className="engagementIconParent">
                                <GiChart className="2xl:text-[40px]"></GiChart>
                            </div>
                            <div>
                                <h3 className="engagementCardHeading">Per Project</h3>
                                <p className="commonPara engementPara">An approach suitable for projects with a clear scope of work and well-identified goals that can be executed in a waterfall working method. Perfect to stay with a specific budget and timeframe.</p>
                            </div>
                        </div>
                    </div>

                    {/* --------- card two here---------- */}
                    <div className="bg-[#f1f0f0] 2xl:rounded-[10px]">
                        <div className="2xl:p-[50px]">
                            <div className="engagementIconParent">
                                <GiChart className="2xl:text-[40px]"></GiChart>
                            </div>
                            <div>
                                <h3 className="engagementCardHeading">Semi-Agile Approach</h3>
                                <p className="commonPara engementPara">Have long-term projects that don't have well-identified goals yet, and the scope may change over time? Let our team help set up a custom agile approach to match your needs.</p>
                            </div>
                        </div>
                    </div>

                    {/* --------- card three here---------- */}
                    <div className="bg-[#f1f0f0] 2xl:rounded-[10px]">
                        <div className="2xl:p-[50px]">
                            <div className="engagementIconParent">
                                <GiChart className="2xl:text-[40px]"></GiChart>
                            </div>
                            <div>
                                <h3 className="engagementCardHeading">Dedicated Developer</h3>
                                <p className="commonPara engementPara">Get skilled developers or an entire team to work exclusively on your projects, ensuring a high level of expertise, commitment, and timely project completion.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EngagementSection;