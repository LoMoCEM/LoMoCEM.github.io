import { useState, useEffect } from 'react';
import { smoothScrollTo } from '@/lib/smooth-scroll';

export default function ResearchNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Abstract', id: 'abstract' },
    { label: 'Methodology', id: 'methodology' },
    { label: 'Results', id: 'results' },
    { label: 'Downloads', id: 'downloads' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 no-print transition-all duration-300 ${
      isScrolled ? 'bg-dark-bg/90 backdrop-blur-md border-b border-dark-surface' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent-cyan to-accent-green rounded-lg"></div>
            <span className="font-semibold text-lg text-text-primary">LaMoCEM</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => smoothScrollTo(item.id)}
                className="text-text-secondary hover:text-accent-cyan transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
