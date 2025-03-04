import { CONTACT } from "../constants"
import { motion } from "framer-motion"


const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-2">
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity : 0, y:-100}}
        transition={{duration: 0.5}} className="my-8 text-center text-4xl font-thin ">Get in Touch with me !</motion.h1>
        <div className="text-center tracking-tighter">
            <motion.p 
            initial={{x:100 ,opacity: 0}}
            animate={{x:0, opacity:1}} 
            transition={{duration: 1}}
            className="my-2">{CONTACT.address}</motion.p>
            <motion.p
            initial={{x: -100 ,opacity: 0}}
            animate={{x:0, opacity:1}} 
            transition={{duration: 1}}
            
            className="my-4">{CONTACT.phoneNo}</motion.p>
            <motion.a
            initial={{x: 100 ,opacity: 0}}
            animate={{x:0, opacity:1}} 
            transition={{duration: 1}}
           
            href="#" className="border-b">{CONTACT.email}</motion.a>
        </div>
    </div>
  )
}

export default Contact