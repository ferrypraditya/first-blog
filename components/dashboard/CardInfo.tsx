"use client"
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { title } from 'process'
import React from 'react'
import { Button } from '../ui/button';

interface Props {
    title: string;
    description: string;
    classname?:string;
}

const CardInfo = ({title, description, classname} : Props) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{delay:0.4, duration:0.6, ease:"easeIn"}}
    viewport={{once:true}}
    className={cn(" rounded-xl p-10 flex flex-col justify-between", classname)}
    > 
    <div className=' w-[360px]'>
        <h2 className=' uppercase text-2xl font-bold'>{title}</h2>
        <p className=' text-sm mt-2 mb-8'>{description}</p>
    </div>
    <div className=' flex'>
        <Button className=' min-h-14 px-10 rounded-full'>Learn More</Button>
    </div>
    </motion.div>  
  )
}

export default CardInfo