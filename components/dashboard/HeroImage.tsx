"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface CardTextProps {
  title: string;
  description: string;
  directionAnimate: "left" | "right";
  classname?: string;
}

const CardText = ({
  title,
  description,
  directionAnimate,
  classname,
}: CardTextProps) => {
  return (
    <motion.div
      initial={{ x: directionAnimate === "left" ? -100 : 100, opacity: 0.2 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: directionAnimate === "left" ? 0 : 0.2,
        duration: 1,
        ease: "easeIn",
      }}
      className={cn(
        " absolute rounded-2xl p-6 backdrop-blur-md w-[320px]",
        classname
      )}
    >
      <h2 className=" text-xl uppercase tracking-wider font-semibold">
        {title}
      </h2>
      <p className="text-sm">{description}</p>
    </motion.div>
  );
};

const HeroImage = () => {
  return (
    <div className="relative max-w-6xl mx-auto w-full h-[1152px] mt-[-140px] px-4">
      <motion.div
        className="relative w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 2 }}
      >
        <Image
          src="abstract1.svg"
          alt="abstract 1"
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          priority
          className="w-full h-full object-contain"
        />
      </motion.div>
      <CardText
        title="Tes Card 1"
        description="tes card 1"
        directionAnimate="left"
        classname=" left-[100px] top-[380px]"
      />
      <CardText
        title="Tes Card 2"
        description="tes card 2"
        directionAnimate="right"
        classname=" right-[100px] bottom-[380px]"
      />
    </div>
  );
};

export default HeroImage;
