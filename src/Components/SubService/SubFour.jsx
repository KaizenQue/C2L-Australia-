import React from 'react';
import Frame139 from "../../assets/Frame 139.png";

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
                            Mesothelioma<br />Cancer
                        </h1>

                        {/* Description Section */}
                        <p className="text-[rgba(2,52,55,0.69)] font-open-sans text-[18px] md:text-[24px] font-semibold w-full md:w-[551px] mb-6 mt-6 md:mt-10">
                            Mesothelioma is a cancer affecting the <span className="text-[#023437] font-bold">
                                lining of the lungs, abdomen, or heart, primarily caused by asbestos exposure
                            </span>. Symptoms often appear decades later, even from minimal or unknowing exposure.
                        </p>

                        <p className="text-[rgba(2,52,55,0.69)] font-open-sans text-[18px] md:text-[24px] font-semibold w-full md:w-[551px] mb-6 mt-6 md:mt-10">
                            An experienced mesothelioma lawyer can help
                            identify exposure sources, explain potential
                            compensation, and guide you through the legal
                            process with clarity and support.
                        </p>

                        {/* Understanding Lawsuits Section */}
                        <h2 className="w-full md:w-[414px] text-[28px] md:text-[32px] font-bold leading-normal text-[#C09F53] font-sans">
                            Understanding<br />
                            Mesothelioma Lawsuits
                        </h2>

                        <p className="text-[rgba(2,52,55,0.69)] font-open-sans text-[18px] md:text-[24px] font-semibold leading-normal w-full md:w-[547px]">
                            Mesothelioma lawsuits aim to hold responsible
                            parties accountable for their negligence in
                            exposing individuals to asbestos, the primary
                            cause of this devastating cancer. To navigate
                            the legal process effectively, it is essential to
                            comprehend the various aspects of
                            mesothelioma lawsuits.
                        </p>
                    </div>
                    <div>
                        <img src={Frame139} className='w-[100px] h-[1200px]' alt=""/>
                    </div>

                    {/* Right Content Section */}
                    <div className="w-full md:w-6/12 p-8 md:p-16 mt-6 md:mt-10">
                        <h3 className="text-[#023437] font-sans text-xl md:text-2xl font-bold not-italic leading-normal uppercase mb-6">TYPES OF MESOTHELIOMA LAWSUITS</h3>

                        {/* Common Law Claim */}
                        <div className="mb-12 inline-flex p-[40px_20px_20px_20px] md:p-[79px_35px_40px_40px] flex-col justify-end items-start gap-6 border border-[rgba(2,52,55,0.41)] md:-ml-[9%]">
                            <h3 className="text-[48px] md:text-[64px] font-['Playfair_Display'] font-extrabold leading-[50px] md:leading-[66px] w-full md:w-[386px] text-[#C09F53]">
                                Common<br />
                                Law Claim
                            </h3>
                            <p className="w-full md:w-[419px] text-[#023437] font-open-sans text-[18px] md:text-[24px] font-normal leading-normal">
                                involves filing a claim through the
                                court system. With the help of your
                                lawyer, you can pursue
                                compensation for damages caused
                                by asbestos exposure.
                            </p>
                        </div>

                        {/* Statutory Claim */}
                        <div>
                            <h3 className="text-[48px] md:text-[64px] font-['Playfair_Display'] font-extrabold leading-[50px] md:leading-[66px] w-full md:w-[386px] text-[#C09F53]">
                                Statutory<br />
                                Claim
                            </h3>
                            <p className="w-full md:w-[419px] text-[#023437] font-open-sans text-[18px] md:text-[24px] font-normal leading-normal">
                                provides financial and medical
                                support for mesothelioma caused by
                                occupational asbestos exposure,
                                with programs varying by state or
                                territory.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="block md:hidden p-6">
                <h1 className="text-[#C09F53] font-['Playfair_Display'] text-[48px] font-extrabold leading-[50px] mb-6">
                    Mesothelioma Cancer
                </h1>

                <p className="text-[rgba(2,52,55,0.69)] font-open-sans text-[16px] font-semibold mb-6">
                    Mesothelioma is a cancer affecting the <span className="text-[#023437] font-bold">
                        lining of the lungs, abdomen, or heart, primarily caused by asbestos exposure
                    </span>. Symptoms often appear decades later, even from minimal or unknowing exposure.
                </p>

                <p className="text-[rgba(2,52,55,0.69)] font-open-sans text-[16px] font-semibold mb-6">
                    An experienced mesothelioma lawyer can help identify exposure sources, explain potential
                    compensation, and guide you through the legal process with clarity and support.
                </p>

                <h2 className="text-[24px] font-bold leading-normal text-[#C09F53] font-sans mb-4">
                    Understanding Mesothelioma Lawsuits
                </h2>

                <p className="text-[rgba(2,52,55,0.69)] font-open-sans text-[16px] font-semibold leading-normal mb-8">
                    Mesothelioma lawsuits aim to hold responsible parties accountable for their negligence in
                    exposing individuals to asbestos, the primary cause of this devastating cancer. To navigate
                    the legal process effectively, it is essential to comprehend the various aspects of
                    mesothelioma lawsuits.
                </p>

                <h3 className="text-[#023437] font-sans text-[18px] font-bold not-italic leading-normal uppercase mb-4">
                    TYPES OF MESOTHELIOMA LAWSUITS
                </h3>

                <div className="mb-8 p-6 border border-[rgba(2,52,55,0.41)]">
                    <h3 className="text-[36px] font-['Playfair_Display'] font-extrabold leading-[40px] text-[#C09F53] mb-4">
                        Common Law Claim
                    </h3>
                    <p className="text-[#023437] font-open-sans text-[16px] font-normal leading-normal">
                        involves filing a claim through the court system. With the help of your
                        lawyer, you can pursue compensation for damages caused by asbestos exposure.
                    </p>
                </div>

                <div className="p-6">
                    <h3 className="text-[36px] font-['Playfair_Display'] font-extrabold leading-[40px] text-[#C09F53] mb-4">
                        Statutory Claim
                    </h3>
                    <p className="text-[#023437] font-open-sans text-[16px] font-normal leading-normal">
                        provides financial and medical support for mesothelioma caused by
                        occupational asbestos exposure, with programs varying by state or territory.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SubFour;