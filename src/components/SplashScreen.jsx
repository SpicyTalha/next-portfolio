import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const SplashScreen = () => {
    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
        >
            <motion.img
                src="/images/logo-2-square-modified.png" // Make sure this exists or swap it
                alt="Logo"
                className="w-40 h-40"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            />
        </motion.div>
    );
};

export default SplashScreen;
