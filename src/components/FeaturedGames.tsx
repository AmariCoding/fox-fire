import { motion } from "motion/react";

// Game data
const games = [
  {
    id: 1,
    title: "Mobile Legends: Bang Bang",
    image:
      "https://rog-forum.asus.com/t5/image/serverpage/image-id/84100i044471BD6DCCB42A/image-size/large?v=v2&px=999",
    players: "45K",
    prize: "$2.5M",
    category: "Mobile MOBA",
  },
  {
    id: 2,
    title: "Clash of Clans",
    image:
      "https://preview.redd.it/are-players-returning-to-clash-of-clans-because-of-the-v0-54y7j0o1ksre1.jpeg?width=640&crop=smart&auto=webp&s=9f29869ac754aab827159274eef5f0f43bf0ee3c",
    players: "38K",
    prize: "$1.2M",
    category: "Strategy",
  },
  {
    id: 3,
    title: "Call of Duty Mobile",
    image:
      "https://cdn.prod.website-files.com/65956e2711516206d2d1258f/6634c7715af10f24b00dc7b1_CODM%202663x1384.webp",
    players: "42K",
    prize: "$1.8M",
    category: "Mobile FPS",
  },
];

export function FeaturedGames() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured <span className="text-orange-500">Games</span>
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
            Compete in the world's most prestigious esports titles with massive
            prize pools and global recognition
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Game Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded">
                  {game.category}
                </div>
              </div>

              {/* Game Info */}
              <div className="absolute bottom-0 left-0 w-full p-4 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400">
                  {game.title}
                </h3>
                <div className="flex justify-between text-sm text-gray-300">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1 text-orange-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M15.5 8a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM12 2a6 6 0 0 0-6 6c0 3.314 6 10 6 10s6-6.686 6-10a6 6 0 0 0-6-6Z" />
                    </svg>
                    <span>{game.players} Players</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1 text-orange-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M12 1v3M21 12H18M12 21V18M3 12h3"
                        strokeWidth="2"
                        stroke="currentColor"
                      />
                      <path
                        d="M18.364 5.636l-2.122 2.122M7.758 16.242l-2.121 2.122M18.364 18.364l-2.122-2.122M7.758 7.758l-2.121-2.122"
                        strokeWidth="2"
                        stroke="currentColor"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      />
                    </svg>
                    <span>Prize Pool: {game.prize}</span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-10 left-0 w-full p-4 bg-orange-500/90 text-white text-center transform transition-transform duration-300 group-hover:translate-y-[-100%] group-hover:rounded-b-lg">
                  Join Tournament
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
          <button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300 font-medium py-3 px-8 rounded-lg">
            View All Games
          </button>
        </motion.div>
      </div>
    </section>
  );
}
