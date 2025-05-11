import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-sm">
            {/* Fox running animation */}
            <div className="relative h-48 w-full flex justify-center items-center overflow-hidden">
              {/* Fox GIF */}
              <img
                src="https://i.pinimg.com/originals/5b/19/d3/5b19d355d154388b45e4a8e3d01b16ae.gif"
                alt="Running Fox"
                className="h-32 object-contain z-10"
              />

              {/* Fire trail effect */}
              <motion.div
                className="absolute bottom-8 left-0 right-0 h-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.7, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-full h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
              </motion.div>
            </div>

            {/* Loading text */}
            <div className="text-center mt-8">
              <motion.h2
                className="text-2xl font-bold text-orange-500"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                FOXFIRE
              </motion.h2>
              <motion.div
                className="mt-4 flex justify-center gap-1"
                initial={{ opacity: 1 }}
              >
                <motion.div
                  className="h-2 w-2 rounded-full bg-orange-500"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="h-2 w-2 rounded-full bg-orange-500"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="h-2 w-2 rounded-full bg-orange-500"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
