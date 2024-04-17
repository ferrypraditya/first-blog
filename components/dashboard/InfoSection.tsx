"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import CardInfo from './CardInfo'

const InfoSection = () => {
  return (
    <div className=' relative h-[1080px] overflow-hidden'>
        <div className=' w-[1000px] h-[800px] bg-orange-500 rounded-full blur-[260px] absolute bottom-[-840px] left-[-400px]'/>
        <div className=' absolute bottom-[-660px] left-[-300px]'>
            <Image 
            src="/abstract3.svg"
            alt='bottom abstract'
            width={1155}
            height={1155}
            className=' object-contain'
            />
        </div>
        <div className=' absolute w-full'>
            <div className=' max-w-6xl mx-auto pt-56 pb-16 px-4'>
                <motion.h1
                initial={{ y:-50}}
                whileInView={{ y: 0}}
                transition={{duration:0.6, ease:"easeIn"}}
                viewport={{ once:true}}
                className=' uppercase font-bold text-5xl text-center tracking-wider'
                >
                    We Diligently serve 
                    <br />
                    our customer with
                    <br />
                    <span className=' text-yellow-200'>superior product</span>
                    <br />
                    and performance
                </motion.h1>
                <div className=' flex gap-10 mt-24 overflow-x-auto my-scrollbar'>
                    <CardInfo 
                    title='Redefining enterprise grade'
                    description='We live in an age in which cyber attack make front page news on a weekly, sometimes even daily basis.'
                    classname=' bg-violet-500'
                    />
                    <CardInfo 
                    title='Brings New Data Analytics'
                    description='A traditional ransomware search may require a query for a file hash, this is evective if you only have a few examples of matches.'
                    classname=' bg-fuchsia-500'
                    />
                    <CardInfo 
                    title='Brings New Data Analytics'
                    description='A traditional ransomware search may require a query for a file hash, this is evective if you only have a few examples of matches.'
                    classname=' bg-yellow-200 text-gray-900'
                    />
                    <CardInfo 
                    title='Redefining enterprise grade'
                    description='We live in an age in which cyber attack make front page news on a weekly, sometimes even daily basis.'
                    classname=' bg-emerald-400 text-gray-900'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoSection