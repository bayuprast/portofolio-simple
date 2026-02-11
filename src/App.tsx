import { Home, User, Briefcase, Mail } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import FooterSection from "@/components/ui/footer";

export default function App() {
  const tabs = [
    { title: "Home", icon: Home },
    { title: "About", icon: User },
    { title: "Projects", icon: Briefcase },
    { title: "Contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen font-sans text-foreground overflow-x-hidden">
      {/* Navbar - Fixed at the top */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
        <ExpandableTabs tabs={tabs} />
      </div>

      {/* Sections */}
      <div className="flex flex-col">
        {/* Home Section (Hero) */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
}
