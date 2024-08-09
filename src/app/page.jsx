import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";

export default function Home() {
  return (
    <main className="bg-background w-full h-screen px-20">
      <Navbar />
      <HeroSection />
    </main>
  );
}
