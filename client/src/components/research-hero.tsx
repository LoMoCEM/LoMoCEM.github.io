import { Download, Github } from 'lucide-react';
import { smoothScrollTo } from '@/lib/smooth-scroll';
import { researchData } from '@/data/research-data';

export default function ResearchHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center tech-grid bg-dark-bg">
      {/* Abstract technology background */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1518709268805-4e9042af2e4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Abstract technology background with geometric patterns" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="float-animation">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-text-primary">
            <span className="gradient-text">LaMoCEM</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-text-secondary max-w-4xl mx-auto leading-relaxed">
            {researchData.title}
          </h2>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
          {researchData.authors.map((author, index) => (
            <div key={index} className="text-center">
              <p className="text-lg font-medium text-text-primary">
                {author.name}
              </p>
              <p className="text-text-secondary">{author.designation}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={() => smoothScrollTo('downloads')}
            className="inline-flex items-center space-x-2 bg-accent-cyan text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            <span>Download Paper</span>
          </button>
          <a
            href={researchData.downloads.organization}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 border border-accent-green text-accent-green px-8 py-3 rounded-lg font-semibold hover:bg-accent-green hover:bg-opacity-10 transition-all"
          >
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-accent-cyan to-transparent rounded-full"></div>
      </div>
    </section>
  );
}
