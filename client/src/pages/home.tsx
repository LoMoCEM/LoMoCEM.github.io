import { useEffect } from 'react';
import ResearchNav from '@/components/research-nav';
import ResearchHero from '@/components/research-hero';
import AbstractSection from '@/components/abstract-section';
import MethodologySection from '@/components/methodology-section';
import ResultsSection from '@/components/results-section';
import DownloadsSection from '@/components/downloads-section';
import FooterSection from '@/components/footer-section';

export default function Home() {
  useEffect(() => {
    // Load Prism.js for syntax highlighting
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
    script.async = true;
    document.head.appendChild(script);

    const pythonScript = document.createElement('script');
    pythonScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js';
    pythonScript.async = true;
    document.head.appendChild(pythonScript);

    const jsonScript = document.createElement('script');
    jsonScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-json.min.js';
    jsonScript.async = true;
    document.head.appendChild(jsonScript);

    // Load Prism CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(pythonScript);
      document.head.removeChild(jsonScript);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="bg-dark-bg text-text-primary font-sans overflow-x-hidden">
      <ResearchNav />
      <ResearchHero />
      <AbstractSection />
      <MethodologySection />
      <ResultsSection />
      <DownloadsSection />
      <FooterSection />
    </div>
  );
}
