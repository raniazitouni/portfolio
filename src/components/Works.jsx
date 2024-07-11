import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import github from '../assets/github.png';
import { projects } from '../constants';
import { fadeIn , textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ProjectCard = ({index , name, tags , description,
  image , source_code_link}) =>{
  return(
    <motion.div variants={fadeIn("up" ," spring" , index *0.5 , 0.75)}>
       <Tilt
        options={{
          max : 45,
          scale : 1 , 
          speed : 450}}
        className=" bg-tertiary p-5 rounded-2xl sm:w-[360px]
        w-full">
          <div className=" relative w-full h-[230px]">
            <img
            src={image}
            alt={name}
            className=" w-full h-full object-contain rounded-2xl"/>
            <div  className="absolute inset-0 flex justify-end m-3 card-img_hover">
             <div 
             onClick={()=>window.open(source_code_link,"_blank")}
             className="black-gradient w-10 h-10 rounded-full
             flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain"/>
              </div>
            </div>
          </div>
           <div className="mt-5">
             <h3 className=" text-white font-bold text-[24px]">{name}</h3>
             <p className='text-secondary mt-2 text-[14px]'>{description}</p>
           </div>
           <div className=" mt-4 flex flex-wrap gap-2">
            {tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>{tag.name}</p>
            ))}

           </div>
        
       </Tilt>
    </motion.div>
  )

}
const Works = () => {
  return (
    <>
    <motion.div
       variants={textVariant()}>
       <p className={styles.heroSubText}>
        My work
       </p>
       <h2 className={styles.heroHeadText}>
          Projects
       </h2>
     </motion.div>
     <motion.p
      variants={fadeIn("","",0.1,1)}
      className=" mt-4 text-secondary text-[17px] 
      max-w-3xl leading-[30px]"
      >
        following projects showcase my skills and experience 
        through real-world examples of my work . 
        Each projectt is briefly described with links to code
        repositories 

      </motion.p>
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project , index) =>(
          <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}/>
        )

        )}

      </div>
    </>
  )
}

export default SectionWrapper(Works,"");