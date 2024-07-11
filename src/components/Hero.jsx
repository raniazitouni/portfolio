import React from 'react'
import {motion } from 'framer-motion';
import {styles } from'../styles';
import { ComputersCanvas } from './canvas';
import { ReactTyped } from "react-typed";


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div className={`${styles.paddingX} absolute inset-0 
      top-[40px] max-w-7xl mx-auto flex flex-row items-start 
      gap-5 
      `}>
       <div className="flex flex-col justify-center
       items-center mt-5">
         <div className="w-5 h-5  rounded-full bg-[#915eff]"/>
         <div className="w-1 sm:h-80 h-40 violet-gradient"/>
       </div>
       <div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi , I'm <span className="text-[#915eff]">Rania</span>
        </h1>
        <ReactTyped 
        strings ={[
          "I develop frontend web applications",
          "and mobile applications "

        ]}
        typeSpeed={250}
        backSpeed={200}
        loop
        className={`${styles.heroSubText} mt-2 text-white-200`}
        />
        {/* <p className={`${styles.heroSubText} mt-2 text-white-200`}>
         I develop frontend web applications <br className="sm:block hidden"/>and mobile applications 
         </p> */}
       </div>
      </div>
      <ComputersCanvas/>
      <div className="absolute sm:bottom-12 bottom-32 w-full flex
      justify-center items-center">
        <a href="#about">
        <div className="w-[30px] h-[59px] rounded-3xl border-2
        border-secondary flex justify-center items-start p-2">
              <motion.div
              animate={{
                y: [0,24,0]
              }}
              transition={{
                duration : 1.5,
                repeat : Infinity,
                repeatType:'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary
              "/>
        </div>
        </a>
      </div>
    </section>
    
  )
}

export default Hero