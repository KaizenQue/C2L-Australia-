import React, { useState, useEffect } from 'react';
import Frame from "../../src/assets/Frame 19.png";
import Searchbar from "../../src/assets/Search bar.png";
import navicon from "../../src/assets/navicon.png";
import logoo from "../../src/assets/logoo.png";
import call from "../../src/assets/call.png";
import { Phone, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isStatesDropdownOpen, setIsStatesDropdownOpen] = useState(false);

    // Scroll to top whenever the route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const australianStates = [
        'New South Wales',
        'Queensland',
        'South Australia',
        'Tasmania',
        'Victoria',
        'Western Australia',
        'Australian Capital Territory',
        'Northern Territory'
    ];

    const menuItems = [
        { name: 'Home', path: '/' },
        {
            name: 'Services',
            path: '/Service',

        },
        { name: 'Sub Services', path: '/SubService' },
        { name: 'About Us', path: '/About' },
        { name: 'Contact', path: '/ContactUs' },
        { name: 'Masstort', path: '/Masstort' }
    ];

    return (
        <>
            {/* Desktop Header */}
            <div className="fixed top-0 left-0 w-full bg-transparent z-[1000] hidden md:block">
                <div className="flex items-center justify-between p-3 px-[30px] bg-white w-full">
                    <div>
                        <img
                            src={Frame}
                            alt="Logo"
                            className="w-[300px] h-[50px] ml-10"
                        />
                    </div>

                    <div className="flex items-center mr-10">
                        <img
                            src={Searchbar}
                            alt="Search"
                            className="w-[60px] h-[60px] mr-2"
                        />

                        <button
                            className="flex items-center justify-center bg-[#C09F53] rounded-[60px] px-5 py-3 cursor-pointer ml-6 border border-white"
                            onClick={() => navigate('/ClaimForm')}
                        >
                            <span className="font-sans font-bold text-base text-white">
                                Free Consultation
                            </span>
                        </button>

                        <div className="relative ml-6">
                            <button
                                className="flex px-24 py-3 justify-center items-center rounded-[60px] border border-[#023437] text-[#023437] font-sans text-base font-bold cursor-pointer"
                                onClick={() => setIsStatesDropdownOpen(!isStatesDropdownOpen)}
                            >
                                States
                            </button>
                            {isStatesDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 5 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                                    style={{ right: '5px' }}
                                >
                                    <div className="py-4">
                                        {australianStates.map((state) => (
                                            <button
                                                key={state}
                                                className="block w-full px-4 py-2 text-left text-md text-gray-700 font-bold hover:bg-[#C09F53] hover:text-white"
                                                onClick={() => {
                                                    setIsStatesDropdownOpen(false);
                                                }}
                                            >
                                                {state}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        <button
                            className="flex px-7 py-3 justify-center items-center rounded-[60px] border border-[#023437] text-[#023437] font-sans text-base font-bold cursor-pointer ml-6"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? 'Close' : 'Menu'}
                        </button>
                        {/* States Dropdown */}

                    </div>

                </div>

            </div>


            {/* Mobile Header */}
            <div className="fixed top-0 left-0 w-full bg-white md:hidden z-[1000]">
                <div className="flex items-center justify-between px-3 py-3">
                    <img
                        src={logoo}
                        alt="Logo"
                        className="w-[70px] h-[40px]"
                    />

                    <div className="flex items-center gap-2">
                        <img
                            src={call}
                            alt="Call"
                            className="w-[40px] h-[40px]"
                        />
                        <button
                            className="rounded-full border border-[#023437] text-[#023437] font-sans text-xs font-bold cursor-pointer px-3 py-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? 'Close' : 'Menu'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Side Navigation - All in AnimatePresence */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black bg-opacity-50 z-[1000]"
                            onClick={() => setIsMenuOpen(false)}
                            key="overlay"
                        />

                        {/* Side Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full md:w-1/3 lg:w-1/4 bg-white shadow-xl z-[1001]"
                            key="side-panel"
                        >
                            {/* Close Button */}
                            <div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex justify-end p-4"
                            >
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-[#023437] font-bold text-lg"
                                >
                                    ✕
                                </button>

                            </div>

                            {/* Menu Items */}
                            <div className="flex flex-col p-6 space-y-2">
                                {menuItems.map((item, index) => (
                                    <div className='flex gap-4 -mt-16' key={item.name}>
                                        <img src={navicon} alt='icon' className='w-[45px] h-[45px] mt-3' />
                                        <motion.button
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                                transition: { delay: index * 0.1 }
                                            }}
                                            whileHover={{
                                                scale: 1.02,
                                                color: "#C09F53",
                                                paddingLeft: "1rem"
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                            className="text-[#023437] font-['Playfair_Display'] text-3xl font-extrabold py-3 text-left border-b border-gray-100 rounded-lg"
                                            onClick={() => {
                                                navigate(item.path);
                                                setIsMenuOpen(false);
                                            }}
                                        >
                                            {item.name}
                                        </motion.button>
                                    </div>
                                ))}
                            </div>

                            {/* Contact Section */}
                            <div className="w-[300px] h-[230px] flex-shrink-0 border border-white/35 ml-16 text-center pt-3 mt-16 md:mt-0 md:ml-10">
                                <div className='gap-2'>
                                    <p className="text-[#023437] text-center font-['Open_Sans'] text-[26px] font-bold not-italic leading-none mt-2">(888) 202-1350</p>
                                    <button className="inline-flex px-[32px] py-[8px] justify-center items-center rounded-[60px] bg-[#C09F53] text-white">
                                        Call Now
                                    </button>
                                    <div className='flex gap-3 mt-2 justify-center items-center'>
                                        {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="rounded-full border border-white p-2"
                                            >
                                                <Icon size={16} />
                                            </motion.div>
                                        ))}
                                    </div>
                                    <p className="w-[255px] ml-9 text-[#023437] font-['Open_Sans'] text-[16px] font-semibold not-italic leading-normal mt-1">
                                        123 Legal Avenue, Suite 456 Justice Tower Sydney, NSW 2000, Australia
                                    </p>
                                    <div className="flex space-x-4 gap-16">
                                        <div className='mt-0'>
                                            <span className="text-[#FFFBF3] font-open-sans text-xs font-normal not-italic leading-none w-[100px]">All rights reserved</span>
                                            <p className="text-[#FFFBF3] font-open-sans text-xs font-normal not-italic leading-none w-[100px] mt-1">Privacy Policy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavBar;