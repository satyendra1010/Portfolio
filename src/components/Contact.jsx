import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in touch.
      </motion.h1>
      <div className="items-center text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.description}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a
          href="mailto: satyendra1010@gmail.com"
          target="_blank"
          className="border-b"
        >
          {CONTACT.email}
        </a>
      </div>
      <div className="flex flex-wrap justify-center items-center my-2">
        <a
          href="https://www.linkedin.com/in/satyendrashrivastava/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Contact;
