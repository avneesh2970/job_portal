
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="py-20 px-4 sm:px-8 bg-gradient-to-br from-white to-blue-50 text-center">
      <motion.h1
        className="text-5xl sm:text-6xl font-bold text-blue-600 mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        404 - Page Not Found
      </motion.h1>

      <motion.p
        className="text-gray-600 text-lg sm:text-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Oops! Looks like you're lost in space. 🚀
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium px-6 py-2 rounded-full transition duration-300 shadow-sm"
        >
          ⬅ Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
