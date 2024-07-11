import React from 'react';
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn,textVariant} from '../utils/motion';
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index , title, icon}) => {
  return(
   <Tilt className="sm:w-[250px] w-full">
     <motion.div
      variants={fadeIn("right","spring",0.5 * index , 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px]
      shadow-card">
        <div
          options={{
            max:5, 
            scale : 1,
            speed : 450
          }}
        className="bg-tertiary rounded-[20px] py-5 px-12
        min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} 
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold 
          text-center">{title}</h3>
        </div>
     </motion.div>

   </Tilt>

   
  )
}

const About = () => {
  return (
   <>
    <motion.div
       variants={textVariant()}>
       <p className={styles.heroSubText}>
        Introduction
       </p>
       <h2 className={styles.heroHeadText}>
          Overview
       </h2>
     </motion.div>
     <motion.p
      variants={fadeIn("","",0.1,1)}
      className=" mt-4 text-secondary text-[17px] 
      max-w-3xl leading-[30px]"
      >
       As a third-year student at the National School of 
       Computer Science, I am passionate about web 
       development. I have gained solid skills through my 
       academic and personal projects. My expertise includes
       web frontend development using React, HTML, CSS, and
       JavaScript, as well as mobile frontend development 
       with React Native. Additionally, I am proficient 
       in programming languages such as Java and C.
     </motion.p>
     <div className="mt-20 flex flex-wrap gap-10 justify-center">
       {services.map((service , index) => (
        <ServiceCard key={service.title} index={index} 
        {...service}/> 
       ))}

     </div>
   </>
     
     
     
    
 
  )
}

export default SectionWrapper(About, "about")

