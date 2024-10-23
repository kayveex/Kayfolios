import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import QuotesSection from "./components/quotessection";
import ProjectSection from "./components/projectsection";
import SkillSection from "./components/skillsection";
import ContactSection from "./components/contactsection";


export default function Home() {
  return (
    <main className="bg-background w-full h-full">
      <Navbar  />
      <div className="px-20 w-full h-full">
        <HeroSection />
        <QuotesSection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />  
      </div>

    </main>
  );
}
