"use client";

import { motion } from "framer-motion";
import React from "react";

interface Props {
  value: string;
  label: string;
  duration?: number;
}

const CardCounter = ({ value, label, duration }: Props) => {
  return (
    <motion.div 
      initial={{ x: 120, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: duration || 2 }}
      viewport={{ once: true }}
    >
        <h1 className="uppercase text-7xl font-bold tracking-wider">{value}</h1>
        <p className="text-gray-700 text-sm font-light">{label}</p>
    </motion.div>
  );
};

export default CardCounter;
