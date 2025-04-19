import React from 'react';
import Frame from "../../assets/xray.png";

function SubFive() {
    return (
        <div className="relative">
            {/* Desktop View */}
            <div className="hidden md:flex">
                <div className="absolute z-10 ml-[25%] mt-32">
                    <div className="text-[#023437] w-[660px] font-['Playfair_Display'] text-[96px] font-extrabold leading-[100px]">
                        Eligibility for Compensation
                    </div>
                    <div className="text-[#023437] font-open-sans text-2xl font-normal leading-none w-[504px]">
                        If you've developed mesothelioma due to occupational exposure,
                        you may qualify for a government-run workers' compensation scheme
                        in your state or territory.
                    </div>
                </div>
                <div className="w-[619px] h-[540px] ml-[60%]">
                    <img src={Frame} alt="Frame" className="w-full h-full object-contain" />
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col items-center px-0 py-8">
                <div className="text-[#023437] text-center font-['Playfair_Display'] text-4xl font-extrabold leading-tight mb-6">
                    Eligibility for Compensation
                </div>
                <div className="text-[#023437] font-open-sans text-lg font-normal leading-relaxed text-center">
                    If you've developed mesothelioma due to occupational exposure,
                    you may qualify for a government-run workers' compensation scheme
                    in your state or territory.
                </div>
                <div className="w-full mb-8">
                    <img src={Frame} alt="Frame" className="w-full h-auto object-contain" />
                </div>
                
            </div>
        </div>
    );
}

export default SubFive;