import React from 'react';
import Frame139 from "../../assets/Frame 139.png";
import Marquee from "../../assets/Ellipse 13.png";

function SubFour() {
    return (
        <div className='bg-[rgba(192,159,83,0.25)]'>
            {/* Desktop View */}
            <div className="hidden md:block">
                <div className="flex flex-col md:flex-row w-full">
                    {/* Left Content Section */}
                    <div className="w-full md:w-7/12 p-8 md:p-12">
                        {/* Main Heading */}
                        <h1 className="w-full md:w-[649px] text-[#C09F53] font-['Playfair_Display'] text-[64px] md:text-[96px] font-extrabold leading-[70px] md:leading-[100px]">
                            What is Mesothelioma?<br />
                        </h1>

                        {/* Description Section */}
                        <p className="text-[rgba(2,52,55,0.69)] font-open-sans text-[18px] md:text-[24px] font-semibold w-full md:w-[551px] mb-6 mt-6 md:mt-10">
                            {/* Mesothelioma is a cancer affecting the <span className="text-[#023437] font-bold">
                                lining of the lungs, abdomen, or heart, primarily caused by asbestos exposure
                            </span>. Symptoms often appear decades later, even from minimal or unknowing exposure. */}
                            Mesothelioma is a rare and aggressive cancer caused by asbestos exposure, affecting the <span className="text-[#023437] font-bold">protective lining of the lungs, abdomen, or heart. </span>This devastating condition often leads to physical, emotional, and financial challenges for patients and their families.
                        </p>

                        <p className="text-[rgba(2,52,55,0.69)] font-open-sans text-[18px] md:text-[24px] font-semibold w-full md:w-[551px] mb-6 mt-6 md:mt-10">
                            If you have been diagnosed with mesothelioma and are exploring your legal options, don’t wait to get the support you need.
                        </p>

                        {/* Understanding Lawsuits Section */}
                        <h2 className="w-full md:w-[414px] text-[28px] md:text-[32px] font-bold leading-normal text-[#C09F53] font-sans">
                            How Mesothelioma Claims <br />
                            Work in Australia
                        </h2>

                        <p className="text-[rgba(2,52,55,0.69)] font-open-sans text-[18px] md:text-[24px] font-semibold leading-normal w-full md:w-[547px]">
                            Mesothelioma claims must be filed within strict legal timeframes, which vary by state. Some states offer statutory compensation, while others require court claims. Acting early helps protect your rights and strengthens your case. A legal expert can help you choose the best path forward.
                        </p>
                    </div>
                    <div>
                        <img src={Frame139} className='w-[100px] h-[1300px]' alt="" />
                    </div>

                    {/* Right Content Section */}
                    <div className="w-full md:w-6/12 p-8 md:p-16 mt-6 md:mt-10">
                        <h3 className="text-[#023437] font-sans text-xl md:text-2xl font-bold not-italic leading-normal uppercase mb-6">Latest Mesothelioma Lawsuit News in Australia</h3>

                        {/* Common Law Claim */}
                        <div className="mb-12 inline-flex p-[40px_20px_20px_20px] md:p-[79px_35px_40px_40px] flex-col justify-end items-start gap-6 border border-[rgba(2,52,55,0.41)] md:-ml-[9%]">
                            <h3 className="text-[48px] md:text-[64px] font-['Playfair_Display'] font-extrabold leading-[50px] md:leading-[66px] w-full md:w-[386px] text-[#C09F53]">
                                Legal Case<br />
                                News
                            </h3>
                            <p className="w-full md:w-[419px] text-[#023437] font-open-sans text-[18px] md:text-[24px] font-normal leading-normal">
                                In 2024, Queensland’s Supreme Court awarded 77-year-old Kim Martin over $2 million in damages after he was diagnosed with mesothelioma linked to James Hardie asbestos products. This included a record $800,000 for pain and suffering the first of its kind in the state.
                            </p>
                        </div>

                        {/* Statutory Claim */}
                        <div>
                            <h3 className="text-[48px] md:text-[64px] font-['Playfair_Display'] font-extrabold leading-[50px] md:leading-[66px] w-full md:w-[386px] text-[#C09F53]">
                                Compensation <br />
                                News
                            </h3>
                            <p className="w-full md:w-[419px] text-[#023437] font-open-sans text-[18px] md:text-[24px] font-normal leading-normal">
                                In 2025, Western Australia introduced a new law allowing mesothelioma victims to claim additional compensation if new asbestos-related illnesses develop later. This gives patients and families more flexibility in seeking justice.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="block md:hidden p-6">
                <h1 className="text-[#C09F53] font-['Playfair_Display'] text-[48px] font-extrabold leading-[50px] mb-6">
                What is Mesothelioma?
                </h1>

                <p className="text-[rgba(2,52,55,0.69)] font-open-sans text-[16px] font-semibold mb-6">
                    {/* Mesothelioma is a cancer affecting the <span className="text-[#023437] font-bold">
                        lining of the lungs, abdomen, or heart, primarily caused by asbestos exposure
                    </span>. Symptoms often appear decades later, even from minimal or unknowing exposure. */}
                Mesothelioma is a rare and aggressive cancer caused by asbestos exposure, affecting the <span className="text-[#023437] font-bold">protective lining of the lungs, abdomen, or heart. </span>This devastating condition often leads to physical, emotional, and financial challenges for patients and their families.
                </p>

                <p className="text-[rgba(2,52,55,0.69)] font-open-sans text-[16px] font-semibold mb-6">
                If you have been diagnosed with mesothelioma and are exploring your legal options, don’t wait to get the support you need. </p>

                <h2 className="text-[24px] font-bold leading-normal text-[#C09F53] font-sans mb-4">
                How Mesothelioma Claims <br />
                Work in Australia
                </h2>

                <p className="text-[rgba(2,52,55,0.69)] font-open-sans text-[16px] font-semibold leading-normal mb-8">
                Mesothelioma claims must be filed within strict legal timeframes, which vary by state. Some states offer statutory compensation, while others require court claims. Acting early helps protect your rights and strengthens your case. A legal expert can help you choose the best path forward.
                </p>

                <div className="flex w-[1200px] h-[60px] -ml-11 mb-10 z-10 justify-end items-center gap-8 bg-[#023437] overflow-hidden relative mt-16">
                    <div className="w-full overflow-hidden py-2">
                        <div className="flex whitespace-nowrap animate-marquee">
                            {[...Array(40)].map((_, index) => (
                                <div key={index} className="flex items-center mt-16">
                                    <span className="w-[350px] h-[121px] flex-shrink-0 text-[#FFF] text-center font-['Playfair_Display'] text-[30px] font-[800] leading-none mt-[5%]">
                                        Asbestos Exposure
                                    </span>
                                    <img src={Marquee} alt="Banner" className="h-[30px] w-[100px] object-cover justify-between mt-[-15%] mr-10" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <h3 className="text-[#023437] font-sans text-[18px] font-bold not-italic leading-normal uppercase mb-4">
                Latest Mesothelioma Lawsuit News in Australia
                </h3>

                <div className="mb-8 p-6 border border-[rgba(79,79,79,0.41)]">
                    <h3 className="text-[36px] font-['Playfair_Display'] font-extrabold leading-[40px] text-[#C09F53] mb-4">
                    Legal Case<br />
                    News
                    </h3>
                    <p className="text-[#023437] font-open-sans text-[16px] font-normal leading-normal">
                    In 2024, Queensland’s Supreme Court awarded 77-year-old Kim Martin over $2 million in damages after he was diagnosed with mesothelioma linked to James Hardie asbestos products. This included a record $800,000 for pain and suffering the first of its kind in the state. </p>
                </div>

                <div className="p-6">
                    <h3 className="text-[36px] font-['Playfair_Display'] font-extrabold leading-[40px] text-[#C09F53] mb-4">
                    Compensation <br />
                    News
                    </h3>
                    <p className="text-[#023437] font-open-sans text-[16px] font-normal leading-normal">
                    In 2025, Western Australia introduced a new law allowing mesothelioma victims to claim additional compensation if new asbestos-related illnesses develop later. This gives patients and families more flexibility in seeking justice.</p>
                </div>
            </div>
        </div>
    );
}

export default SubFour;