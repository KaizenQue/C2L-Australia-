import React from 'react';

function SubSix() {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block">
        <div className="w-full max-w-[1540px] h-auto flex-shrink-0 bg-[#C09F53] pb-16">
          <p className="text-[#023437] font-['Open Sans'] text-2xl font-bold normal-case w-[542px] text-center mx-auto pt-10">
            THESE GOVERNMENT-RUN PROGRAMS OFFER
          </p>
          <div className='mt-[-5px]'>
            <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-[64px] font-extrabold leading-[70px] w-full ml-16 mt-10">
              <span className="text-custom-light font-['Open Sans'] text-[128px] font-semibold leading-none mr-10">01</span> Medical Tests & Treatment</h1>
            <p className="w-[805px] text-[#023437] font-open-sans text-[24px] font-normal leading-none mx-auto mt-4">
              Coverage for necessary examinations and treatment costs.
            </p>
          </div>
          <div className="w-[1164px] h-px bg-[rgba(255,251,243,0.44)] ml-16 mt-16"></div>
          <div className='mt-[-5px]'>
            <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-[64px] font-extrabold leading-[70px] w-full ml-16 mt-10">
              <span className="text-custom-light font-['Open Sans'] text-[128px] font-semibold leading-none mr-10">02</span> Financial Support</h1>
            <p className="w-[805px] text-[#023437] font-open-sans text-[24px] font-normal leading-none mx-auto mt-4">
              Compensation to assist with your recovery and expenses.
            </p>
          </div>
          <div className="w-[1164px] h-px bg-[rgba(255,251,243,0.44)] ml-16 mt-16"></div>

          <div className='mt-[-5px]'>
            <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-[64px] font-extrabold leading-[70px] w-full ml-16 mt-10">
              <span className="text-custom-light font-['Open Sans'] text-[128px] font-semibold leading-none mr-10">03</span> Financial Support</h1>
            <p className="w-[805px] text-[#023437] font-open-sans text-[24px] font-normal leading-none mx-auto mt-4">
              Compensation to assist with your recovery and expenses.
            </p>
          </div>
          <div className="w-[1164px] h-px bg-[rgba(255,251,243,0.44)] ml-16 mt-16"></div>

          <div className='mt-[-5px]'>
            <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-[64px] font-extrabold leading-[70px] w-full ml-16 mt-10">
              <span className="text-custom-light font-['Open Sans'] text-[128px] font-semibold leading-none mr-10">04</span> Financial Support</h1>
            <p className="w-[805px] text-[#023437] font-open-sans text-[24px] font-normal leading-none mx-auto mt-4">
              Compensation to assist with your recovery and expenses.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden bg-[#C09F53] py-8 px-4">
        <p className="w-[398px] text-[#023437] font-['Playfair_Display'] text-[32px] font-extrabold normal-case leading-[41.609px] text-left mx-auto pt-0">
          THESE GOVERNMENT-RUN PROGRAMS OFFER
        </p>

        <div className="mt-16">
          <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-3xl font-extrabold flex items-start">
            <span className="text-custom-light font-['Open Sans'] text-6xl font-semibold mr-4">01</span>
            <span>Medical Tests & Treatment</span>
          </h1>
          <p className="text-[#023437] font-open-sans text-base mt-4">
            Coverage for necessary examinations and treatment costs.
          </p>
        </div>

        <div className="w-full h-px bg-[rgba(255,251,243,0.44)] my-8"></div>
        <div className="mt-16">
          <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-3xl font-extrabold flex items-start">
            <span className="text-custom-light font-['Open Sans'] text-6xl font-semibold mr-4">01</span>
            <span>Medical Tests & Treatment</span>
          </h1>
          <p className="text-[#023437] font-open-sans text-base mt-4">
            Coverage for necessary examinations and treatment costs.
          </p>
        </div>

        <div className="w-full h-px bg-[rgba(255,251,243,0.44)] my-8"></div>
        <div className="mt-16">
          <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-3xl font-extrabold flex items-start">
            <span className="text-custom-light font-['Open Sans'] text-6xl font-semibold mr-4">01</span>
            <span>Medical Tests & Treatment</span>
          </h1>
          <p className="text-[#023437] font-open-sans text-base mt-4">
            Coverage for necessary examinations and treatment costs.
          </p>
        </div>

        <div className="w-full h-px bg-[rgba(255,251,243,0.44)] my-8"></div>

        <div className="mt-4">
          <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-3xl font-extrabold flex items-start">
            <span className="text-custom-light font-['Open Sans'] text-6xl font-semibold mr-4">02</span>
            <span>Financial Support</span>
          </h1>
          <p className="text-[#023437] font-open-sans text-base mt-4">
            Compensation to assist with your recovery and expenses.
          </p>
        </div>
      </div>
    </>
  );
}

export default SubSix;