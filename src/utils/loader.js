import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'


export default function Loader({ progress = 0 }) {

  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="fixed inset-0 bg-linear-to-br from-green-400 to-blue-500 flex flex-col items-center justify-center z-50">
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8"
      >
        <FaWhatsapp className="w-16 h-16 text-green-500" />
      </motion.div>

      <div className="w-64 bg-white/30 rounded-full h-2 mb-4 overflow-hidden">
        <motion.div
          className="bg-white h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${safeProgress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      <p className="text-white text-lg font-semibold">
        Loading... {safeProgress}%
      </p>

    </div>
  )
}

