"use client";

import { motion } from "framer-motion";
import React from "react";
import CardOffer from "./CardOffer";

const ServiceSection = () => {
  return (
    <div className=" max-w-6xl mx-auto py-16 px-4">
      <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ once: true }}
      >
        <h1 className=" uppercase text-8xl font-bold tracking-wider">
          Service
        </h1>
        <h1 className=" uppercase text-8xl font-bold tracking-wider text-yellow-200">
          We Offer
        </h1>
      </motion.div>
      <div className="grid grid-cols-2 gap-8 mt-14 max-w-5xl mx-auto">
        <div>
          <CardOffer
          title="Custom Development Indonesia"
          img="/abstract2.svg"
          classname=" bg-orange-400"
          />
        </div>
        <div className=" mt-[120px] mb-[-120px]">
          <CardOffer
          title="Embedded Hardware Development"
          img="/abstract3.svg"
          classname=" bg-purple-400"
          />
        </div>
        <div>
          <CardOffer
          title="Machine Vision Design"
          img="/abstract1.svg"
          classname=" bg-blue-400"
          />
        </div>
        <div className=" mt-[120px] mb-[-120px]">
          <CardOffer
          title="Iot & Connected Devices"
          img="/abstract4.svg"
          classname=" bg-yellow-400"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
