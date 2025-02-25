import { HERO_CONTENT } from "../constants";
import HeroPic from "../assets/MagaSiddarth.jpg";
import { motion } from "framer-motion";

const container = (delay) =>({
  hidden : {x: -100, opacity: 0},
    visible : {
      x: 0,
      opacity : 1,
      transition : {duration: 0.5,delay}
    },
  }
)

//font-medium font-light

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35    sm:mb:200   ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial= 'hidden'
              animate= 'visible'
              className="pl-10 pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Maga Siddarth
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial= 'hidden'
              animate= 'visible'
              className="p-4 py-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
            variants={container(1)}
            initial= 'hidden'
            animate= 'visible' className="pl-4 pt-3 my-2 max-w-xl py-6 p-7 text-start    tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className=" h-0.5 w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img initial={{x:100 ,opacity: 0}}
            animate={{x:0, opacity:1}} 
            transition={{duration: 1,delay:1.2}}
            src={HeroPic} alt="Siddarth" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
