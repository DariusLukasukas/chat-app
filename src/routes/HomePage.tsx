import Hero from "../components/Hero";
import NavBar from "../components/navbar/NavBar";

function HomePage() {
  return (
    <>
      <div className="scrollbar-track-transperent container mx-auto h-screen touch-none overflow-hidden px-8 scrollbar-thin lg:max-w-7xl">
        <NavBar />
        <Hero />
      </div>{" "}
    </>
  );
}

export default HomePage;
