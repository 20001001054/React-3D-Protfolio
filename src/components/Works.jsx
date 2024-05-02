import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard= ({index, name, description, tags, image, source_code_link}) => {
return(
  <motion.div variants={fadeIn("up" ,"spring", index * 0.5, 0.75)}>
    <Tilt
    options= {{
      max: 45,
      scale:1,
      speed: 450
    }}
    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className='relative w-full h-[230px]'>
        <img src={image}
        alt={name}
        className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 flex justify-end card-img_hover'>
          <div onClick={() =>window.open (source_code_link,"_blank")}
          className='black-gradient w-8 h-8 rounded-full flex-justify-center items-center cursor-pointer'
          >
           <img
           src={github}
           alt="github"
           className='w-full h-full object-contain'
           />
          </div>
        </div>
        
      </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p  className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) =>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        </Tilt>
  </motion.div>
  
)
}

const Works = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>My work</p>
    <h2 className={styles.sectionHeadText}>Projects</h2>
    </motion.div>
    <div className='w-full flex'>
    <motion.p variants={fadeIn("", "", 0.1, 1)}
    className='mt-3 text-seconday text-[17px] max-w-3xl leading-[30px]'>   
      The showcased projects offer tangible demonstrations of my skills and expertise, presenting real-world instances of my work. Each project is succinctly outlined, accompanied by link to code repositories. These examples underscore my proficiency in tackling intricate challenges, adeptness with diverse technologies, and effective project management abilities.
    </motion.p>
    </div>
    <div className='mt-20 flex flex-wrap gap-7'>
    {projects.map((project, index) =>(
      <ProjectCard 
      key ={`project-${index}`}
      index={index}
      {...project}
      />
    ))}
    </div>
    <motion.p variants={fadeIn("", "", 0.6, 3)}
    className='mt-7 text-seconday text-[17px] max-w-3xl leading-[30px]'>    
    Feel free to explore my GitHub for more exciting projects like these! <button
        type='button'
        className='bg-tertiary py-3 px-8 outline-none w-fit text-white shadow-md shadow-primary rounded-xl ml-[9px] text-center'
        onClick={(e) => {
          e.preventDefault()
          window.open('https://github.com/20001001054/', '_blank')} }
      >
        Github
    </button>
    </motion.p>
   
    </>
  )
}

export default SectionWrapper(Works,"")