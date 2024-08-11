import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import QuotesSection from "./components/quotessection";
import ProjectSection from "./components/projectsection";
import SkillSection from "./components/skillsection";
import ContactSection from "./components/contactsection";


export default function Home() {
  return (
    <main className="bg-background w-full h-full px-20">
      <Navbar />
      <HeroSection />
      <QuotesSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />  
    </main>
  );
}
