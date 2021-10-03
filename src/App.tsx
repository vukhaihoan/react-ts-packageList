import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import Modal from "./components/modal";
function App() {
  let [modalOpen, SetModalOpen] = useState(false);

  const close = () => SetModalOpen(false);
  const open = () => SetModalOpen(true);
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
    </div>
  );
}

export default App;
