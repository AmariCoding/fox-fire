import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

// We'll add news articles in the future

const News = () => {
  return (
    <div className="bg-black min-h-screen pt-10 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Latest <span className="text-orange-500">News</span>
          </motion.h1>
          <motion.div
            className="h-1 w-24 bg-orange-500 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p
            className="text-gray-400 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Stay updated with the latest esports news, tournament results, and
            player transfers
          </motion.p>
        </div>

        {/* No News Message */}
        <motion.div
          className="text-center py-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-12">
            <svg
              className="w-20 h-20 mx-auto mb-6 text-orange-500/50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
              <path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              No News Articles Yet
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Our news section is currently under development. Check back soon
              for the latest esports updates, team announcements, and event
              coverage.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
              Subscribe for Updates
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="inline-block rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to contribute?
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl">
              We're looking for passionate esports writers and content creators
              to join our team. Share your knowledge and insights with our
              growing community.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
