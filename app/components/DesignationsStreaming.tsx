"use client";
import { motion } from "framer-motion";
import designationRoles from "../constants/designationRoles";
import useTextWritingStream from "../hooks/useTextWritingStream";

const DesignationsStreaming = () => {
  const { text } = useTextWritingStream(designationRoles);
  return (
    <motion.div
      className="overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <span className="font-semibold text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text typing">
        {text}
      </span>
      <span className="blinking-cursor">|</span>
    </motion.div>
  );
};

export default DesignationsStreaming;
