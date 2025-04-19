import React from 'react';
import { useNavigate } from 'react-router-dom';
import Group from "../../assets/Group 64.png";
import Frame from "../../assets/Frame 19.png";
import Frame116 from "../../assets/Frame 116.png";
import Searchbar from "../../assets/Search bar.png";
import Frames from "../../assets/Frame 171.png";
import Frame169 from "../../assets/Frame 169.png";
import Frame60 from "../../assets/Frame 160.png";
import Frame175 from "../../assets/Frame 175.png";
import HomeSeven from '../Home/HomeSeven';
import Footer from '../Footer';
import NavBar from '../NavBar';

function MassTort() {
    const navigate = useNavigate();

    return (
        <div className="relative">
            {/* Desktop View (unchanged) */}
            <div className="hidden md:block">
                <div className="fixed top-0 left-0 w-full bg-transparent z-[1000]">
                    <NavBar />
                    {/* <div className="flex items-center justify-between p-[20px] px-[50px] bg-[#FFF] w-full">
                        <div>
                            <img src={Frame} alt="Logo" className="absolute top-5 left-16 w-[300px] h-[50px]" />
                        </div>

                        <div className="flex flex-row items-center justify-between">
                            <span>
                                <img src={Searchbar} alt="Search" className="absolute w-[50px] h-[50px] -ml-10 -mt-5" />
                            </span>
                            <div
                                className="flex items-center justify-center bg-[#C09F53] rounded-[60px] p-[15px_32px_15px_33px] cursor-pointer ml-[25px] border border-white"
                                onClick={() => navigate('/ClaimForm')}
                            >
                                <span className="font-sans font-bold text-[16px] text-white">Free Consultation</span>
                            </div>

                            <div
                                className="flex p-[15px_28px] justify-center items-center rounded-[60px] border border-[#023437] text-[#023437] font-sans text-[16px] font-bold cursor-pointer ml-[25px]"
                                onClick={() => navigate('/ClaimForm')}
                            >
                                <span>Menu</span>
                            </div>
                        </div>
                    </div> */}
                </div>

                <img src={Group} className='w-full p-0 absolute z-10' alt="Background" />
                <img src={Frame116} className='w-[573px] h-[450px] mt-[40%] ml-[5%] absolute z-10' alt="Content" />
                <div className='bg-[#023437] w-full h-[200vh]'></div>
                <img src={Frames} className='w-[719px] h-[354px] absolute z-10 mt-[-50%] ml-[47%]' alt="Frame" />
                <button className="inline-flex h-[52px] px-[28px] py-[13px] justify-center items-center flex-shrink-0 rounded-[60px] bg-[#C09F53] absolute z-10 ml-[50%] mt-[-35%]">Learn More</button>
                <div className='-mt-[20%]'>
                    <HomeSeven />
                    <Footer />
                </div>
            </div>

            {/* Mobile View (fixed) */}
            <div className="block md:hidden">
                {/* Mobile Navigation */}
                {/* <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm px-4 py-3">
                    <div className="flex justify-between items-center">
                        <img src={Frame} alt="Logo" className="h-10 w-auto" />
                        
                        <div className="flex items-center space-x-3">
                            <img src={Searchbar} alt="Search" className="h-8 w-8" />
                            <button
                                className="bg-[#C09F53] text-white text-sm font-bold py-2 px-4 rounded-full"
                                onClick={() => navigate('/ClaimForm')}
                            >
                                Menu
                            </button>
                        </div>
                    </div>
                </header> */}

                <NavBar />

                {/* Mobile Hero Section */}
                <main className="pt-16 pb-8"> {/* Account for fixed header */}
                    {/* Background Image */}
                    <div className="relative bg-[#023437] w-full h-[300px] overflow-hidden">
                        <img 
                            src={Frame175} 
                            className="w-full h-full object-cover" 
                            alt="Background" 
                        />
                    </div>

                    {/* Content Sections */}
                    <div className="px-4 bg-[#023437] w-full pt-10 pb-5">
                        <img 
                            src={Frame169} 
                            className="w-full h-auto rounded-lg shadow-md" 
                            alt="Content" 
                        />
                    </div>

                    <div className="bg-[#023437] w-full pt-10">
                        <div className="px-4 py-8">
                            <img 
                                src={Frame60} 
                                className="w-full h-auto rounded-lg" 
                                alt="Information" 
                            />
                            
                            <button
                                className="bg-[#C09F53] text-white text-sm font-bold py-2 px-4 rounded-full absolute z-10 mt-[-20%] ml-5"
                                onClick={() => navigate('/ClaimForm')}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </main>

                {/* Footer Sections */}
                <div>
                    <HomeSeven />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default MassTort;