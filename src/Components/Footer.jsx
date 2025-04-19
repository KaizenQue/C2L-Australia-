import React from 'react'
import { Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import phone from "../assets/Group 40.png"
import mail from "../assets/Frame 173.png"

function Footer() {
  return (
    <div className="bg-[#023437] text-white w-full ">
      <div className="max-w-7xl mx-auto pt-16 ">
        {/* Desktop Layout - shown on md screens and above */}
        <div className="hidden md:block ml-[-3%]">
          {/* Top section with contact info and social icons */}
          <div className="flex justify-between items-center border-b border-teal-800 pb-4">
            <div className="flex flex-col space-y-1">
              <div className="flex items-center">
                <img className="mr-2 w-[50px] h-[50px]" src={phone} alt="" />
                <span className="text-white text-center font-open-sans text-4xl font-semibold leading-normal">
                  (888) 202-1350
                </span>
              </div>
              <div className="flex items-center">
                <img className="mr-2 w-[50px] h-[50px]" src={mail} alt="" />
                <span className="text-md text-white text-center font-open-sans text-[20px] font-semibold underline underline-auto underline-from-font">
                  info@connect2lawyer.com.au
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="rounded-full border border-white p-2">
                <Facebook size={18} />
              </div>
              <div className="rounded-full border border-white p-2">
                <Instagram size={18} />
              </div>
              <div className="rounded-full border border-white p-2">
                <Linkedin size={18} />
              </div>
            </div>
          </div>

          <div className="py-8">
            <h1 className="text-[174.452px] text-white text-center font-['Playfair_Display'] font-bold leading-none">
              Connect2Lawyer
            </h1>
          </div>
        </div>

        {/* Mobile Layout - shown on sm screens and below */}
        <div className="md:hidden block px-5">
          <div className="border-t border-teal-700 my-6 w-[135%] -mt-10 -ml-16"></div>
          <div className='ml-[-3%]'>
            <div className="py-3">
              <h1 className="text-[46px] text-white text-left font-['Playfair_Display'] font-bold leading-tight">
                Connect2Lawyer
              </h1>
            </div>
            {/* Contact info centered */}
            <div className="flex flex-col space-y-4 border-b border-teal-800 pb-6 ml-5">
              <div className="flex items-left">
                <img className="mr-2 w-[50px] h-[50px]" src={phone} alt="" />
                <span className="text-white text-left font-open-sans text-xl font-semibold">
                  (888) 202-1350
                </span>
              </div>

              <div className="flex items-left">
                <img className="mr-2 w-[50px] h-[50px]" src={mail} alt="" />
                <span className="text-white text-left font-open-sans text-base font-semibold underline">
                  info@connect2lawyer.com.au
                </span>
              </div>

              {/* Social icons */}
              <div className="flex space-x-4 gap-16">
                <div className='mt-0'>
                  <span className="text-[#FFFBF3] font-open-sans text-xs font-normal not-italic leading-none w-[100px]">All rights reserved</span>
                  <p className="text-[#FFFBF3] font-open-sans text-xs font-normal not-italic leading-none w-[100px] mt-1">Privacy Policy</p>
                </div>
                <div className='flex gap-3 items-end justify-end'>
                  <div className="rounded-full border border-white p-2">
                    <Facebook size={16} />
                  </div>
                  <div className="rounded-full border border-white p-2">
                    <Instagram size={16} />
                  </div>
                  <div className="rounded-full border border-white p-2">
                    <Linkedin size={16} />
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* Logo section - smaller on mobile */}

        </div>
      </div>
    </div>
  )
}

export default Footer