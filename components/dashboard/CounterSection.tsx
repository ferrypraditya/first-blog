"use client";

import React from "react";
import { Button } from "../ui/button";
import CardCounter from "./CardCounter";
import { motion } from "framer-motion";

const CounterSection = () => {
  return (
    <div className="flex flex-col justify-center min-h-[calc(100svh-100px)] bg-yellow-200 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex gap-5 text-black items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.4 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="max-w-xl">
              <h1 className="uppercase text-7xl tracking-wider max-w-[340px] font-black">
                What we do
              </h1>
              <p className="text-gray-700 font-light mt-5">
                9 Agu 2021 — Bramus Van Damme menyatakan bahwa spesifikasi
                sekarang menyertakan beberapa nilai ... berapa pun dalam batas
                100vh (maksimum) dan 100svh (minimum) ...
              </p>
              <p className=" text-gray-700 font-light mt-2">
                27 Nov 2023 — Pengenalan 100dvh , 100svh , dan 100lvh menawarkan
                solusi, memberikan desainer kontrol berbeda atas perilaku tata
                letak di seluruh perangkat.
              </p>
              <Button
                variant="secondary"
                className=" bg-black min-h-14 px-10 rounded-full mt-16"
              >
                Learn more
              </Button>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 gap-12">
            <CardCounter value="125+" label="Client" duration={1} />
            <CardCounter value="155+" label="Complete" duration={1.2} />
            <CardCounter value="44+" label="Partner" duration={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
