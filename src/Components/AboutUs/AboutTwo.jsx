import React from 'react'
import Frame from "../../assets/Frame 263.png"
import arrow from "../../assets/Frame 158.png"
import Fram from "../../assets/box.png"
import Frames from "../../assets/Frame 172 (1).png"

function AboutTwo() {
    return (
        <div className="w-full overflow-hidden">
            {/* Desktop Version */}
            <div className="hidden md:block mb-10">
                <div className='mt-10'>
                    <h1 className="text-[#023437] text-center font-['Playfair_Display'] text-[120px] font-extrabold leading-[137.6px] w-[1009px] ml-64">Why Choose Connect2Lawyer?</h1>
                    <p className='text-[#C09F53] text-center font-open-sans text-2xl font-bold leading-normal w-[633px] ml-[30%] mt-16'>
                        Navigating the legal system can be complex, but with us, finding the right legal representation is simple, efficient, and stress-free.
                    </p>

                    <p className="text-[#FFFBF3] font-['Playfair_Display'] text-[64px] w-[400px] font-[800] leading-[70px] absolute z-10 pt-10 mt-[6%] ml-[15%]">Expert Network</p>
                    <p className="text-[#FFFBF3] font-['Open Sans'] text-[20px] w-[434px] font-[600] absolute z-10 pt-10 mt-[19%] ml-[15%]"> Our platform features a vast network of experienced lawyers, each vetted for their expertise and commitment to client success.</p>

                    <p className="text-[#023437] font-['Playfair_Display'] text-[64px] w-[400px] font-[800] leading-[70px] absolute z-10 pt-10 mt-[6%] ml-[60%]">Transparent Insights</p>
                    <p className="text-[#023437] font-['Open Sans'] text-[20px] w-[434px] font-[600] absolute z-10 pt-10 mt-[19%] ml-[60%]"> Access detailed lawyer profiles, client reviews, and success stories to make informed decisions.</p>

                    <p className="text-[#023437] font-['Playfair_Display'] text-[64px] w-[400px] font-[800] leading-[70px] absolute z-10 pt-10 mt-[35%] ml-[15%]">Seamless Connection</p>
                    <p className="text-[#023437] font-['Open Sans'] text-[20px] w-[434px] font-[600] absolute z-10 pt-10 mt-[48%] ml-[15%]">Our user-friendly interface allows for direct communication with your chosen legal professional, streamlining the initiation process. </p>

                    <p className="text-[#FFFBF3] font-['Playfair_Display'] text-[64px] w-[400px] font-[800] leading-[70px] absolute z-10 pt-10 mt-[35%] ml-[60%]">Nationwide Reach</p>
                    <p className="text-[#FFFBF3] font-['Open Sans'] text-[20px] w-[434px] font-[600] absolute z-10 pt-10 mt-[48%] ml-[60%]"> Serving clients across all major cities and regions in Australia, ensuring local expertise is always within reach. </p>

                    <img src={Frame} className='mt-16 w-[1400px] p-10 ml-16' alt="" />
                </div>

                <div className="w-[1200px] h-[539px] border border-[rgba(2,52,55,0.35)] items-center ml-[11%] mb-16">
                    <h1 className="w-[779px] text-[#023437] font-['Playfair_Display'] text-[128px] font-extrabold leading-[140px] ml-16 mt-16">Start Your Case Today</h1>
                    <div className="flex items-center justify-between mt-8">
                        <p className="text-[#023437] font-sans text-xl font-semibold leading-normal w-[779px] ml-16">
                            Finding the right lawyer has never been easier.
                            Take a moment to explore our website today and connect with a dedicated attorney who will protect your rights.
                        </p>
                        <button className="inline-flex justify-center items-center px-8 py-3 rounded-[60px] border border-[rgba(2,52,55,0.61)] text-[#023437] font-sans text-lg font-medium whitespace-nowrap ml-8 mr-16">
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="rounded-lg w-[1330px] ml-[10%]">
                    <img src={arrow} alt="" />
                    <p className="text-[#EFE4CB] font-sans text-[36px] font-bold leading-none ml-16 absolute z-10">
                        Fill out the free case review form now!
                    </p>
                </div>
            </div>

            {/* Mobile Version - unchanged from previous implementation */}
            <div className="block md:hidden px-4 mb-10">
                <div className='mt-8'>
                    <h1 className="text-[#023437] text-center font-['Playfair_Display'] text-[36px] font-extrabold leading-[40px]">
                        Why Choose Connect2Lawyer?
                    </h1>
                    <p className='text-[#C09F53] text-center font-open-sans text-lg font-bold leading-normal mt-6'>
                        Navigating the legal system can be complex, but with us, finding the right legal representation is simple, efficient, and stress-free.
                    </p>

                    <div className="mt-8 space-y-8">
                        <div className="rounded-lg">
                            <img src={Fram} alt="" />
                            <p className="text-[#FFFBF3] font-['Playfair_Display'] text-[28px] font-[800] leading-[10px] absolute z-10 mt-[-40%] ml-16">Expert Network</p>
                            <p className="text-[#FFFBF3] font-['Open Sans'] text-base font-[600] absolute z-10 mt-[-25%] leading-tight w-[282px] ml-16">Our platform features a vast network of experienced lawyers, each vetted for their expertise and commitment to client success.</p>
                        </div>


                        <div className="rounded-lg">
                            <img src={Frames} alt="" />
                            <p className="text-[#023437] font-['Playfair_Display'] text-[28px] font-[800] leading-[10px] absolute z-10 mt-[-40%] ml-16">Transparent Insights</p>
                            <p className="text-[#023437] font-['Open Sans'] text-base font-[600] absolute z-10 mt-[-25%] leading-tight w-[282px] ml-16">Access detailed lawyer profiles, client reviews, and success stories to make informed decisions.</p>
                        </div>

                        <div className="rounded-lg">
                            <img src={Fram} alt="" />
                            <p className="text-[#FFFBF3] font-['Playfair_Display'] text-[28px] font-[800] leading-[10px] absolute z-10 mt-[-40%] ml-16">Seamless Connection</p>
                            <p className="text-[#FFFBF3]  font-['Open Sans'] text-base font-[600] absolute z-10 mt-[-25%] leading-tight w-[282px] ml-16">Our user-friendly interface allows for direct communication with your chosen legal professional, streamlining the initiation process.</p>
                        </div>

                        <div className="rounded-lg">
                            <img src={Frames} alt="" />
                            <p className="text-[#023437]  font-['Playfair_Display'] text-[28px] font-[800] leading-[10px] absolute z-10 mt-[-40%] ml-16">Nationwide Reach</p>
                            <p className="text-[#023437] font-['Open Sans'] text-base font-[600] absolute z-10 mt-[-25%] leading-tight w-[282px] ml-16">Serving clients across all major cities and regions in Australia, ensuring local expertise is always within reach.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full border border-[rgba(2,52,55,0.35)] p-6 my-8 rounded-lg">
                    <h1 className="text-[#023437] font-['Playfair_Display'] text-[48px] font-extrabold leading-[50px]">
                        Start Your Case Today
                    </h1>
                    <div className="mt-4">
                        <p className="text-[#023437] font-sans text-base font-semibold leading-normal mb-4">
                            Finding the right lawyer has never been easier.
                            Take a moment to explore our website today and connect with a dedicated attorney who will protect your rights.
                        </p>
                        <button className="w-full text-center px-6 py-3 rounded-[60px] border border-[rgba(2,52,55,0.61)] text-[#023437] font-sans text-lg font-medium">
                            Contact Us
                        </button>
                    </div>
                </div>

                <div className="relative bg-[#023437] text-center rounded-[60px] h-[60px] mb-16 overflow-hidden w-[398px]">
                    <p className="text-[#EFE4CB] font-sans text-lg font-bold leading-tight text-left ml-3 mt-3">
                        Fill out the free case review form now!
                    </p>
                    <img src={arrow} className='w-[50px] absolute right-0 top-1/2 transform -translate-y-1/2' alt="" />
                </div>
            </div>

        </div>
    )
}

export default AboutTwo