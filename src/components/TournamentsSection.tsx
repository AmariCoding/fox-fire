import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

// Empty tournaments array - we'll keep this for future use
// when we add tournaments back

export function TournamentsSection() {
  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Upcoming <span className="text-orange-500">Tournaments</span>
          </motion.h2>
          <motion.div
            className="h-1 w-24 bg-orange-500 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p
            className="text-gray-400 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Stay tuned for exciting tournaments with massive prize pools and
            global recognition
          </motion.p>
        </div>

        <motion.div
          className="text-center py-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-12">
            <svg
              className="w-20 h-20 mx-auto mb-6 text-orange-500/50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
            </svg>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              No Tournaments Scheduled
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              We're currently planning our next tournament series. Check back
              soon for upcoming events or subscribe to get notifications.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
              Get Notified
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="inline-block rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to host your own tournament?
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl">
              We provide complete tournament organization services including
              registration, brackets, live streaming, and prize distribution.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
