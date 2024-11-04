import React,{useState,useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {styles} from '../styles'
import {EarthCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import { slideIn } from '../utils/motion'

// template_y02j6q9
//service_pwkrhso
//JTA-JfAt5mTT1x0dT

const Contact = () => {
 const formRef = useRef();
  const[form, setForm] = useState({
    name:'',
    email: '',
    message:'',
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({ ...form, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_pwkrhso', 'template_y02j6q9',{
      from_name: form.name,
      to_name: 'Kabir Kurra',
      from_email: form.email,
      to_email:'kabirkurra13@gmail.com',
      message: form.message,
    },
    'JTA-JfAt5mTT1x0dT'
  )
  .then(() =>{
    setLoading(false);
    alert("Thank you! I'll get back to you ASAP");
    setForm({
      name:'',
      email:'',
      message:'',
    })
  },(error) =>{
    setLoading(false)
    console.log(error);
    alert('Something went wrong')
  })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
      variants={slideIn('left', "tween", 0.2,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact me</h3>

        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="What's your Email?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
            rows="5"
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder="What do you wanna say?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
          type='submit'
          className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl' 
          >      
            {loading ? 'Sending...' : 'Send'}

          </button>
          <button
            type='button'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl ml-auto'
            onClick={(e) => {
              e.preventDefault()
              window.open('/Kabir.kurra.Resume.pdf', '_blank')} }
          >
           My Resume
        </button>
        </div>
        </form>

      </motion.div>

      <motion.div
      variants={slideIn('right', "tween", 0.2,1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    
    </div>
  )
}

export default SectionWrapper(Contact, "contact");