import React from 'react'
import Bg from "../assets/Bg.png"
import coffee  from '../assets/Coffeeanime.json'
import Lottie from 'lottie-react';
import { motion } from 'framer-motion'
const About = () => {
    const bgImage = {
        backgroundImage: `url(${Bg})`,
        backgroundcolor: "#270c03",
        backgroundPosition:"center",
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        height:"100%",
        width:"100%",
    };
    
  return (
    <div id='about' className='md:py-20 py-40' style={bgImage}>
      <motion.h1 
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:1.5, delay:0.5}} className='text-amber-900 text-5xl text-center
               font-cursive'>About Us</motion.h1>
      <div className='flex flex-col md:flex-row max-w-7xl mx-auto items-center'>
       {/* image section */}
       <motion.div
         initial={{opacity:0,scale:0.5}}
         whileInView={{opacity:1,scale:1}}
         transition={{duration:1.5, delay:0.5}}>
       <Lottie animationData={coffee} className='md:w-[600px]'/>
       </motion.div>
       <div className='space-y-4 px-4 md:px-0'>
            <motion.h1 
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:1.5, delay:0.5}}
            className='text-xl font-cursive2 p-2 text-amber-900'>Welcome to **Raj Royal Café**—a sanctuary where flavour meets finesse, and the familiar is reborn with noble flair.

            We are purveyors of indulgence, curators of comfort, and stewards of a culinary reverie that honours both heritage and innovation. From the velvet richness of hand-poured chocolate to the bold elegance of our *Beana Bun*—a whimsical reinvention of the humble akara—we invite you into a world where each bite whispers a story, and every sip carries a crown.
            
            Our journey began with a simple longing: to reimagine street-side favourites through a lens of refinement, warmth, and wonder. Born in the heart of our own community, Raj Royal Café was crafted to be both familiar and fascinating—a bridge between memory and modernity.
            
            We stand for **authenticity, curiosity, craft, and care**. Every offering is made with purpose. Every detail, intentional. We value culture not as costume, but as a living canvas—one that deserves both honour and evolution.
            
            Our mobile cart, though modest in stature, is regal in spirit—a roving emporium of delight designed for those who seek wonder in the everyday. We blend tradition with audacity, grace with grit, and street soul with café couture.
            
            At RRC, we do not merely serve refreshments; we compose edible poetry. We do not simply cater to taste—we court it, tease it, elevate it.
            
            **So, come—wander into our world. Linger. Savour. Be stirred.**
            For this is **Raj Royal Café**—*Where Street Meets Majesty*. _with_vibes_</motion.h1>
            <motion.p 
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:1.5, delay:0.6}}
            className='font-cursive2'>
              
            </motion.p>
        </div>
      </div>
    </div>
  )
}

export default About