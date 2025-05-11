import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

// Teams data
const teams = [
  {
    id: 1,
    name: "The Sovereigns",
    logo: "/images/team1.png",
    description:
      "Dominating the MLBB scene with incredible macro play and team synergy.",
    members: 9,
    game: "Mobile Legends: Bang Bang",
    achievements: [
      "Balangay Cup 2024",
      "Chinatown Cup 2024",
      "Pagloksoon Champions",
    ],
  },
];

export function TeamsSection() {
  return (
    <section className="bg-gray-900 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative elements */}
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="relative">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Elite <span className="text-orange-500">Teams</span>
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
              Meet the professional teams that compete at the highest level of
              esports competition
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto">
            {teams?.map((team, index) => (
              <motion.div
                key={team.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-orange-500/50 rounded-xl overflow-hidden hover:border-orange-500 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-8 flex flex-col md:flex-row gap-8">
                  {/* Team Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-700/50 rounded-lg flex items-center justify-center p-3 border border-orange-500">
                      <img
                        src={team.logo}
                        alt={team.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Team Info */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-orange-500">
                        {team.name}
                      </h3>
                      <span className="text-sm font-medium text-orange-400 bg-orange-900/30 rounded-full px-4 py-1.5 w-fit">
                        {team.game}
                      </span>
                    </div>
                    <p className="text-gray-300 text-lg mb-6">
                      {team.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-base font-medium text-gray-200 mb-3">
                        Achievements:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {team.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="text-sm bg-orange-500/20 text-orange-300 rounded-full px-4 py-1.5"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-base text-gray-300">
                        <svg
                          className="w-5 h-5 mr-2 text-orange-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
                        </svg>
                        <span>{team.members} Members</span>
                      </div>
                      <Button
                        variant="ghost"
                        className="text-orange-500 hover:text-orange-400 hover:bg-orange-500/10 text-base"
                      >
                        View Team
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-gray-400 mb-6">More elite teams coming soon!</p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
              Apply for Tryouts
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
