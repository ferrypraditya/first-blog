"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const HeroText = () => {
  return (
    <div className=" min-h-[calc(70svh-100px)] max-auto flex flex-col items-center px-4 gap-5">
      <motion.h5
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, transition: { duration: 2 } }}
        className="uppercase text-gray-500 text-lg tracking-wider"
      >
        We make innovation creation easy
      </motion.h5>
      <div className="uppercase text-8xl font-bold tracking-wider">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.17, 0.24, 1, 0.74] }}
        >
          Deep Tech
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.17, 0.24, 1, 0.74] }}
        >
          Company
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, transition: { duration: 0.3 } }}
        className="z-10"
      >
        <Button className="bg-yellow-200 min-h-14 px-10 rounded-full mt-6">
          Learn more
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroText;
