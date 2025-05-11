import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function EsportsHero() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900 to-orange-900/30 opacity-95 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/esports-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-40"></div>

        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,50,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,50,0.15)_1px,transparent_1px)] bg-[size:30px_30px] z-10"></div>

        {/* Accent glows */}
        <div className="absolute -left-20 top-1/4 size-[300px] rounded-full bg-orange-500/20 blur-[100px]"></div>
        <div className="absolute -right-20 top-3/4 size-[300px] rounded-full bg-orange-500/20 blur-[100px]"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto py-20 md:py-32 px-4 md:px-6 flex flex-col md:flex-row items-center">
        {/* Hero Content */}
        <div className="md:w-1/2 space-y-6 mb-10 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-orange-500">
              DOMINATE
              <br />
              THE ARENA
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Join the best team in Ormoc City. With the best players and the best
            coach.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 border-none py-6 text-lg">
              Join Now
            </Button>
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500/20 px-8 py-6 text-lg"
            >
              Tournaments
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-500">50+</p>
              <p className="text-xs text-gray-400">Tournaments</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-500">20+</p>
              <p className="text-xs text-gray-400">Active Players</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-500">20k</p>
              <p className="text-xs text-gray-400">Prize Pool</p>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          className="md:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="relative">
            {/* Enhanced glow effects */}
            <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-3xl"></div>
            <div className="absolute inset-0 -top-10 -left-10 -right-10 -bottom-10 rounded-full bg-orange-500/20 blur-2xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-64 rounded-full bg-orange-500/40 blur-xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-48 rounded-full bg-orange-400/30 blur-2xl animate-ping animation-duration-[3s]"></div>

            {/* Main logo image */}
            <img
              src="/images/logo.jpg"
              alt="FOXFIRE Logo"
              className="w-full h-130 max-w-md mx-auto z-10 relative drop-shadow-[0_0_25px_rgba(249,115,22,0.7)]"
            />

            {/* Game logos */}
            <motion.img
              src="https://sm.ign.com/ign_za/cover/m/mobile-leg/mobile-legends-bang-bang_c6z8.jpg"
              alt="Mobile Legends: Bang Bang"
              className="absolute top-0 left-1/4 w-20 h-20 object-contain bg-black/50 rounded-full p-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
            <motion.img
              src="https://play-lh.googleusercontent.com/LByrur1mTmPeNr0ljI-uAUcct1rzmTve5Esau1SwoAzjBXQUby6uHIfHbF9TAT51mgHm"
              alt="Clash of Clans"
              className="absolute bottom-0 right-1/4 w-20 h-20 object-contain bg-black/50 rounded-full p-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative bar */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
    </div>
  );
}
