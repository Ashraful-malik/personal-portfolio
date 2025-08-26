import Contact from '@/components/Contact';
import DotBackground from '@/components/DotBackground';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Projects from '@/components/projects/Projects';
import TextScroll from '@/components/projects/TextScroll';

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      <DotBackground />
      <HeroSection />
      {/* Project title */}
      <TextScroll />
      {/* Projects */}
      <Projects />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
