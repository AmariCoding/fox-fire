import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
// import Games from "./pages/Games";
// import Players from "./pages/Players";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Footer } from "./components/Footer";
import Tournaments from "./pages/Tournaments";
import News from "./pages/News";
import { LoadingScreen } from "./components/LoadingScreen";

const App = () => {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/games" element={<Games />} />
        <Route path="/players" element={<Players />} /> */}
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/news" element={<News />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
