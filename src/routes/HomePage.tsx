import Hero from "../components/Hero";
import NavBar from "../components/navbar/NavBar";

function HomePage() {
  return (
    <>
      <div className="scrollbar-track-transperent container mx-auto h-screen max-w-7xl px-8 scrollbar-thin ">
        <NavBar />
        <Hero />
      </div>{" "}
    </>
  );
}

export default HomePage;
