import React, { useRef } from 'react';
import Frame176 from "../../assets/Frame 176 (2).png"
import Framem176 from "../../assets/ACTIVE LAWSUIT.png"

function HomeThree() {

    const targetRef = useRef(null);
    const handleConsultationClick = () => {
        window.scrollTo({
            top: 2900,
            left: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
            {/* Desktop Version */}
            <div className="hidden md:block">
                {/* <div className='w-[1214px] ml-32 mb-16'>
                    <p className="text-[#C09F53] text-center font-['Playfair_Display'] text-[64px] font-extrabold leading-none">
                        No confusion, no delays. <span className="text-[#023437] font-['Playfair_Display'] text-center text-[64px] font-extrabold leading-normal not-italic"> Just the support </span>
                    </p>
                    <p className="text-[#023437] font-['Playfair_Display'] text-center text-[64px] font-extrabold leading-normal not-italic">
                        you need, right when you need it!
                    </p>
                </div> */}
                <div className='w-full h-[1300px] flex-shrink-0 bg-[#023437]'>
                    <div className='flex gap-64 p-16'>
                        <h3 className="w-[685px] text-[#FFFBF3] font-['Open Sans'] text-[36px] font-bold leading-normal ml-[4%]">
                            We guide your next move, ensuring your voice is heard and your rights are protected.
                        </h3>
                        <button className="
              rounded-[60px]
              border
              border-[#FFFBF3]
              inline-flex
              h-[52px]
              px-[42px]
              py-[12px]
              justify-center
              items-center
              flex-shrink-0
              text-[#EDEDEF]
              font-['Open Sans']
              text-[20px]
              font-bold
              leading-normal cursor-pointer
            "
                            onClick={handleConsultationClick}>
                            Connect with Our Legal Expert
                        </button>
                    </div>

                    <div ref={targetRef}></div>
                    <div className='flex gap-[11%] mt-16'>
                        <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-[128px] font-extrabold leading-[140px] not-italic ml-[7%]">
                            How IT Works
                        </h1>
                        <p className="text-[#FFFBF3] w-[318px] font-['Open Sans'] text-[24px] font-semibold leading-normal mt-16">
                            Start in just a few steps, where <span className="text-[#C09F53] font-['Open Sans'] text-[24px] font-semibold leading-normal">your rights come first.</span>
                        </p>
                    </div>
                    <div className='flex p-16 ml-5 cursor-pointer' >
                        <div className="flex w-[451px] h-[550px] pt-[40px] pr-[81px] pb-[106px] pl-[40px] flex-col items-start gap-[85px] flex-shrink-0 border-t border-b border-l border-opacity-35 border-[#FFFBF3]" onClick={handleConsultationClick}>
                            <p className="text-[#FFFBF3] font-['Open Sans'] text-[24px] font-semibold leading-normal">
                                Step 1
                            </p>
                            <h4 className="w-64 text-[#C09F53] font-sans text-[48px] font-bold leading-[60px] underline" >
                                Submit your claim
                            </h4>
                            <p className="w-[330px] text-[#FFFBF3] font-['Open Sans'] text-[20px] font-semibold leading-normal">
                                Get a free case review from experienced professionals.
                            </p>
                        </div>
                        <div className="flex w-[451px] h-[550px] pt-[40px] pr-[81px] pb-[186px] pl-[40px] flex-col items-start gap-[85px] flex-shrink-0 border-t border-b border-l border-opacity-35 border-[#FFFBF3]" onClick={handleConsultationClick}>
                            <p className="text-[#FFFBF3] font-['Open Sans'] text-[24px] font-semibold leading-normal">
                                Step 2
                            </p>
                            <h4 className="w-64 text-[#C09F53] font-sans text-[48px] font-bold leading-[60px] underline">
                                We take action
                            </h4>
                            <p className="w-[330px] text-[#FFFBF3] font-['Open Sans'] text-[20px] font-semibold leading-normal">
                                We will begin a detailed review of your case as soon as your claim is received.
                            </p>
                        </div>
                        <div className="flex w-[451px] h-[550px] p-[40px_81px_159px_40px] flex-col items-start gap-[85px] flex-shrink-0 border-t border-b border-l border-r border-opacity-35 border-[#FFFBF3]" onClick={handleConsultationClick}>
                            <p className="text-[#FFFBF3] font-['Open Sans'] text-[24px] font-semibold leading-normal">
                                Step 3
                            </p>
                            <h4 className="w-64 text-[#C09F53] font-sans text-[48px] font-bold leading-[60px] underline">
                                Justice drives us
                            </h4>
                            <p className="w-[330px] text-[#FFFBF3] font-['Open Sans'] text-[20px] font-semibold leading-normal">
                                If we represent you, our team works tirelessly to secure the results you're entitled to.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full h-[800px] flex-shrink-0 bg-[#023437]'>
                    <h1 class="w-[941.971px] absolute z-10 mt-[16%] ml-[10%] text-[#FFFBF3] font-['Playfair_Display'] text-[128px] font-extrabold leading-none italic">
                        Active Lawsuits
                    </h1>

                    <h2 class="text-[#FFFBF3] ml-[35%] mt-[35%] absolute z-10 font-sans text-[36px] font-bold leading-[34px] not-italic">
                        Mesothelioma Lawsuit
                    </h2>
                    <p class="w-[526px] text-[#FFFBF3] ml-[35%] mt-[40%] absolute  z-10 font-open-sans text-[24px] font-normal leading-[34px]">
                        Seeks justice for individuals diagnosed with mesothelioma due to asbestos exposure, often decades ago.
                    </p>
                    <img src={Frame176} alt="" className='w-[1050px] h-[800px] float-end' ></img>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="block md:hidden">
                {/* <div className='w-full px-4 mb-16 mt-[-15%]'>
                    <p className="text-[#C09F53] text-center font-['Playfair_Display'] text-3xl font-extrabold leading-tight">
                        No confusion, no delays.
                    </p>
                    <p className="text-[#023437] font-['Playfair_Display'] text-center text-3xl font-extrabold leading-tight">
                        Just the support you need, right when you need it!
                    </p>

                </div> */}
                <div className='w-full bg-[#023437] py-12 px-4'>
                    <div className='flex flex-col items-center'>
                        <h3 className="text-[#FFFBF3] font-['Open Sans'] text-2xl font-bold leading-normal text-center mb-8">
                            We guide your next move, ensuring your voice is heard and your rights are protected.
                        </h3>
                        <button className="
              rounded-[60px]
              border
              border-[#FFFBF3]
              h-[52px]
              px-8
              py-2
              text-[#EDEDEF]
              font-['Open Sans']
              text-md
              font-bold
              leading-normal
              mb-12
            "  onClick={handleConsultationClick}>
                            Connect with Our Legal Expert
                        </button>
                    </div>

                    <div className='flex flex-col w-[700px]'>
                        <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-[48px] font-extrabold leading-[1.2] text-left mb-6 ">
                            How IT Works
                        </h1>
                        <p className="text-[#FFFBF3] font-['Open Sans'] text-xl font-semibold leading-normal text-left mb-12 max-w-xs">
                            Start in just a few steps, where <span className="text-[#C09F53]">your rights come first.</span>
                        </p>
                    </div>

                    <div className='flex flex-col gap-8'>
                        <div className="flex flex-col p-6 border border-opacity-35 border-[#FFFBF3] rounded-lg" onClick={handleConsultationClick}>
                            <p className="text-[#FFFBF3] font-['Open Sans'] text-xl font-semibold leading-normal mb-4">
                                Step 1
                            </p>
                            <h4 className="text-[#C09F53] font-sans text-3xl font-bold leading-[1.3] mb-4 underline">
                                Submit your claim
                            </h4>
                            <p className="text-[#FFFBF3] font-['Open Sans'] text-lg font-semibold leading-normal">
                                Get a free case review from experienced professionals.
                            </p>
                        </div>

                        <div className="flex flex-col p-6 border border-opacity-35 border-[#FFFBF3] rounded-lg" onClick={handleConsultationClick}>
                            <p className="text-[#FFFBF3] font-['Open Sans'] text-xl font-semibold leading-normal mb-4">
                                Step 2
                            </p>
                            <h4 className="text-[#C09F53] font-sans text-3xl font-bold leading-[1.3] mb-4">
                                We take action
                            </h4>
                            <p className="text-[#FFFBF3] font-['Open Sans'] text-lg font-semibold leading-normal">
                                We will begin a detailed review of your case as soon as your claim is received.
                            </p>
                        </div>

                        <div className="flex flex-col p-6 border border-opacity-35 border-[#FFFBF3] rounded-lg" onClick={handleConsultationClick}>
                            <p className="text-[#FFFBF3] font-['Open Sans'] text-xl font-semibold leading-normal mb-4">
                                Step 3
                            </p>
                            <h4 className="text-[#C09F53] font-sans text-3xl font-bold leading-[1.3] mb-4">
                                Justice drives us
                            </h4>
                            <p className="text-[#FFFBF3] font-['Open Sans'] text-lg font-semibold leading-normal">
                                If we represent you, our team works tirelessly to secure the results you're entitled to.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='lg:hidden w-full min-h-screen flex-shrink-0 bg-[#023437] relative pb-20 '>
                    <h1 className="w-full px-2 pt-16 text-[#FFFBF3] font-['Playfair_Display'] text-[48px] md:text-[64px] font-extrabold leading-tight italic text-center">
                        Active Lawsuits
                    </h1>
                    <div className='absolute z-10 mt-[70%]'>
                        <div className="w-full px-10 mt-12 flex flex-col items-center">
                            <h2 className="text-[#FFFBF3] text-[48px] md:text-[32px] font-bold leading-[54px] text-left font-['Playfair_Display'] ">
                                Mesothelioma Lawsuit
                            </h2>
                            <p className="w-full max-w-[530px] -ml-10 text-[#FFFBF3] mt-6 font-open-sans text-[18px] md:text-[20px] font-normal leading-[28px] md:leading-[34px] text-left px-4">
                                Seeks justice for individuals diagnosed with mesothelioma due to asbestos exposure, often decades ago.
                            </p>
                        </div>
                    </div>

                    <img
                        src={Framem176}
                        alt=""
                        className='w-full h-[640px] mt-12 object-contain'
                    />
                </div>
            </div>
        </>
    );
}

export default HomeThree;