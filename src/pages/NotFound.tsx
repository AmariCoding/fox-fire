import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background grid effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.8)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-bold text-white mb-6 relative inline-block">
            <span className="text-red-500 absolute -inset-0.5 animate-glitch-1 opacity-70">
              404
            </span>
            <span className="text-blue-500 absolute -inset-0.5 animate-glitch-2 opacity-70">
              404
            </span>
            <span className="relative">404</span>
          </h1>

          <div className="w-full max-w-md mx-auto px-8 relative">
            <motion.div
              className="h-1 bg-orange-500 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-white mt-6 mb-4">
            MATCH <span className="text-orange-500">NOT FOUND</span>
          </h2>

          <p className="text-gray-400 md:text-lg mb-8 max-w-lg mx-auto">
            The page you're looking for doesn't exist or has been moved to
            another universe. Our scouts couldn't locate it.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg relative overflow-hidden group"
            >
              <Link to="/">
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-white group-hover:translate-x-0 opacity-20"></span>
                Return to Homepage
              </Link>
            </Button>

            <Button
              variant="outline"
              className="border-orange-500/50 text-orange-500 hover:bg-orange-500/10 px-8 py-6 text-lg"
            >
              Report Issue
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 p-4 border border-gray-800/50 rounded-lg bg-gray-900/30 max-w-md mx-auto"
        >
          <p className="text-gray-500 text-sm">
            ERROR CODE:{" "}
            <span className="text-orange-500 font-mono">GG_404_NO_RESPAWN</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
