import { EsportsHero } from "@/components/EsportsHero";
import { FeaturedGames } from "@/components/FeaturedGames";
import { TeamsSection } from "@/components/TeamsSection";
import { TournamentsSection } from "@/components/TournamentsSection";

const Homepage = () => {
  return (
    <div className="bg-black min-h-screen">
      <EsportsHero />
      <FeaturedGames />
      <TeamsSection />
      <TournamentsSection />
    </div>
  );
};

export default Homepage;
