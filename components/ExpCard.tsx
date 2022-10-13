import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExpCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://entrustlab.com/wp-content/uploads/2020/02/crm-system-isometric-vector-illustration_151150-77.jpg"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">DEVELOPER</h4>
        <p className="font-bold text-2xl mt-1">VIETTEL</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://entrustlab.com/wp-content/uploads/2020/02/crm-system-isometric-vector-illustration_151150-77.jpg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://entrustlab.com/wp-content/uploads/2020/02/crm-system-isometric-vector-illustration_151150-77.jpg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://entrustlab.com/wp-content/uploads/2020/02/crm-system-isometric-vector-illustration_151150-77.jpg"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Glory Glory Man United</li>
          <li>Glory Glory Man United</li>
          <li>Glory Glory Man United</li>
          <li>Glory Glory Man United</li>
          <li>Glory Glory Man United</li>
        </ul>
      </div>
    </article>
  );
}
