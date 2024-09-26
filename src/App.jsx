import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import VideoCarousel from "./components/VideoCarousel";
const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <VideoCarousel />
    </main>
  );
};
export default App;
