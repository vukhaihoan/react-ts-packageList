import React, { useState } from "react";
import "./App.css";
// import * as test from "framer-motion";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Modal from "../components/modal";
function Framer() {
  let [modalOpen, SetModalOpen] = useState(false);

  const close = () => SetModalOpen(false);
  const open = () => SetModalOpen(true);

  const list = { hidden: { opacity: 1 } };
  const item = { hidden: { x: -10, opacity: 1 } };
  console.log(test);
  let { formState, getValues, setValue } = useForm();
  return (
    <div>
      <motion.button
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        laucher button
      </motion.button>
      {modalOpen && <Modal handleClose={close} text={"test"} />}
      <div></div>
      <motion.button
        drag={true}
        dragConstraints={{ left: 0, right: 100, top: 0, bottom: 200 }}
      >
        test
      </motion.button>
      <motion.ul animate="hidden" variants={list}>
        <motion.li variants={item} children="hoan" />
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ul>
    </div>
  );
}

export default Framer;
