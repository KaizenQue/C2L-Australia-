/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import banner from "../../assets/Frame 166.png";
import frm from "../../assets/16_frm.mp4";
import l from "../../assets/L.png";
import Vector from "../../assets/Vector.png";
import Frame from "../../assets/Frame 260 (1).png";
import { useMediaQuery } from 'react-responsive';

function DesktopVersion() {
  const animationDuration = 4.5 + 0.3;

  return (
    <div className="relative min-h-screen">
      <div>
        <motion.div
          initial={{ x: 750, y: 190 }}
          animate={{
            x: 1420,
            y: window.innerHeight - 280
          }}
          transition={{
            duration: 3.5,
            ease: "easeInOut",
            delay: 0.3
          }}
          style={{ position: 'absolute', zIndex: 10 }}
        >
          <img
            src={l}
            alt="L Icon"
            className="h-[155px] w-full object-cover mt-3 -ml-5"
          />
        </motion.div>

        <motion.div
          initial={{ x: 650, y: 105 }}
          animate={{
            x: -250,
            y: -50
          }}
          transition={{
            duration: 3.5,
            ease: "easeInOut",
            delay: 0.3
          }}
          style={{ position: 'absolute', zIndex: 10 }}
        >
          <img
            src={Vector}
            alt="Vector Icon"
            className="h-[200px] w-full object-cover mt-5"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ x: -700, y: 180, opacity: 0 }}
        animate={{ x: -700, y: 30, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.16, 2, 0.9, 1],
          delay: animationDuration
        }}
        className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-left w-[786px] text-[#FFFBF3] font-['Playfair_Display'] text-[128px] font-extrabold leading-[140px]"
        style={{
          zIndex: 10,
          fontStyle: 'normal'
        }}
      >
        <h1 className="mb-4 ml-5 absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-left w-[786px] text-[#FFFBF3] font-['Playfair_Display'] text-[128px] font-bold leading-[140px]">Your Case Our Priority</h1>
        <p className='text-[#FFFBF3] font-["Open_Sans"] text-[24px] font-normal leading-[30px] w-[645px] mt-32 ml-10'>
          We match you with the right legal expertise to ensure your rights are protected and your voice is heard.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: -180, x: -150, opacity: 0 }}
        animate={{ y: -150, x: -150, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.16, 2, 0.9, 1],
          delay: animationDuration
        }}
        className="absolute bottom-10 right-10"
        style={{
          zIndex: 10,
        }}
      >
        <img src={Frame} alt="Phone Icon" className="w-[120px] h-[120px]" />
      </motion.div>

      <div className="relative w-full max-w-[1404px] aspect-[1404/606] ml-16 mt-[90px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover scale-105"
        >
          <source src={frm} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

function MobileVersion() {
  const animationDuration = 3.5 + 0.3;

  return (
    <div className="relative min-h-screen overflow-hidden mt-4">
      <div className="relative">
        <motion.div
          initial={{ x: 50, y: 50 }}  // Start position
          animate={{
            x: window.innerWidth - 10,  // Move to right side (minus image width)
            y: window.innerHeight - 10   // Move to bottom (minus image height)
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            delay: 0.3
          }}
          style={{ position: 'absolute', zIndex: 10 }}
        >
          <img
            src={l}
            alt="L Icon"
            className="h-[90px] w-auto object-cover mt-[300%] ml-[70%]"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, y: 100 }}  // Start position
          animate={{
            x: -170,   // Move to left side
            y: -250    // Move to top
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            delay: 0.3
          }}
          style={{ position: 'absolute', zIndex: 10 }}
        >
          <img
            src={Vector}
            alt="Vector Icon"
            className="h-[100px] w-auto object-cover mt-[170%]"
          />
        </motion.div>
      </div>

      <div className="relative w-full aspect-[9/16] mt-12 overflow-hidden">
      <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover scale-105"
        >
          <source src={frm} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

function HomeOne() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return isDesktop ? <DesktopVersion /> : <MobileVersion />;
}

export default HomeOne;