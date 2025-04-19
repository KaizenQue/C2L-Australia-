import React from 'react';

function HomeThree() {
    return (
        <>
            {/* Desktop Version */}
            <div className="hidden md:block">
                <div className='w-[1214px] ml-32 mb-16'>
                    <p className="text-[#C09F53] text-center font-['Playfair_Display'] text-[64px] font-extrabold leading-none">
                        No confusion, no delays. <span className="text-[#023437] font-['Playfair_Display'] text-center text-[64px] font-extrabold leading-normal not-italic"> Just the support </span>
                    </p>
                    <p className="text-[#023437] font-['Playfair_Display'] text-center text-[64px] font-extrabold leading-normal not-italic">
                        you need, right when you need it!
                    </p>
                </div>
                <div className='w-full h-[1300px] flex-shrink-0 bg-[#023437] mt-16'>
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
              leading-normal
            ">
                            Connect with Our Mass Tort Expert
                        </button>
                    </div>
                    <div className='flex gap-[11%] mt-16'>
                        <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-[128px] font-extrabold leading-[140px] not-italic ml-[7%]">
                            How IT Works
                        </h1>
                        <p className="text-[#FFFBF3] w-[318px] font-['Open Sans'] text-[24px] font-semibold leading-normal mt-16">
                            Start in just a few steps, where <span className="text-[#C09F53] font-['Open Sans'] text-[24px] font-semibold leading-normal">your rights come first.</span>
                        </p>
                    </div>
                    <div className='flex p-16 ml-5'>
                        <div className="flex w-[451px] h-[550px] pt-[40px] pr-[81px] pb-[106px] pl-[40px] flex-col items-start gap-[85px] flex-shrink-0 border-t border-b border-l border-opacity-35 border-[#FFFBF3]">
                            <p className="text-[#FFFBF3] font-['Open Sans'] text-[24px] font-semibold leading-normal">
                                Step 1
                            </p>
                            <h4 className="w-64 text-[#C09F53] font-sans text-[48px] font-bold leading-[60px]">
                                Submit your claim
                            </h4>
                            <p className="w-[330px] text-[#FFFBF3] font-['Open Sans'] text-[20px] font-semibold leading-normal">
                                Get a free case review from experienced professionals.
                            </p>
                        </div>
                        <div className="flex w-[451px] h-[550px] pt-[40px] pr-[81px] pb-[186px] pl-[40px] flex-col items-start gap-[85px] flex-shrink-0 border-t border-b border-l border-opacity-35 border-[#FFFBF3]">
                            <p className="text-[#FFFBF3] font-['Open Sans'] text-[24px] font-semibold leading-normal">
                                Step 2
                            </p>
                            <h4 className="w-64 text-[#C09F53] font-sans text-[48px] font-bold leading-[60px]">
                                We take action
                            </h4>
                            <p className="w-[330px] text-[#FFFBF3] font-['Open Sans'] text-[20px] font-semibold leading-normal">
                                We will begin a detailed review of your case as soon as your claim is received.
                            </p>
                        </div>
                        <div className="flex w-[451px] h-[550px] p-[40px_81px_159px_40px] flex-col items-start gap-[85px] flex-shrink-0 border-t border-b border-l border-r border-opacity-35 border-[#FFFBF3]">
                            <p className="text-[#FFFBF3] font-['Open Sans'] text-[24px] font-semibold leading-normal">
                                Step 3
                            </p>
                            <h4 className="w-64 text-[#C09F53] font-sans text-[48px] font-bold leading-[60px]">
                                Justice drives us
                            </h4>
                            <p className="w-[330px] text-[#FFFBF3] font-['Open Sans'] text-[20px] font-semibold leading-normal">
                                If we represent you, our team works tirelessly to secure the results you're entitled to.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="block md:hidden">
                <div className='w-full px-4 mb-16 mt-[-3%]'>
                    <p className="text-[#C09F53] text-center font-['Playfair_Display'] text-3xl font-extrabold leading-tight">
                        No confusion, no delays.
                    </p>
                    <p className="text-[#023437] font-['Playfair_Display'] text-center text-3xl font-extrabold leading-tight">
                        Just the support you need, right when you need it!
                    </p>

                </div>
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
              py-3
              text-[#EDEDEF]
              font-['Open Sans']
              text-lg
              font-bold
              leading-normal
              mb-12
            ">
                            Connect with Our Mass Tort Expert
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
                        <div className="flex flex-col p-6 border border-opacity-35 border-[#FFFBF3] rounded-lg">
                            <p className="text-[#FFFBF3] font-['Open Sans'] text-xl font-semibold leading-normal mb-4">
                                Step 1
                            </p>
                            <h4 className="text-[#C09F53] font-sans text-3xl font-bold leading-[1.3] mb-4">
                                Submit your claim
                            </h4>
                            <p className="text-[#FFFBF3] font-['Open Sans'] text-lg font-semibold leading-normal">
                                Get a free case review from experienced professionals.
                            </p>
                        </div>

                        <div className="flex flex-col p-6 border border-opacity-35 border-[#FFFBF3] rounded-lg">
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

                        <div className="flex flex-col p-6 border border-opacity-35 border-[#FFFBF3] rounded-lg">
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
            </div>
        </>
    );
}

export default HomeThree;