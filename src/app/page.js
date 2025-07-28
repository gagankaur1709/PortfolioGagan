import Image from "next/image";
import IntroductionSection from './components/IntroductionSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FooterSection from './components/FooterSection';

export default function Home() {
  return (
    <main>
      <IntroductionSection/>
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}
