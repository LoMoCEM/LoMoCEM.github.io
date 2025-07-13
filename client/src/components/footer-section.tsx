import { Github } from 'lucide-react';
import { researchData } from '@/data/research-data';

export default function FooterSection() {
  return (
    <footer className="py-16 bg-dark-card border-t border-dark-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-cyan to-accent-green rounded-lg"></div>
              <span className="font-semibold text-lg text-text-primary">LaMoCEM</span>
            </div>
            <p className="text-text-secondary leading-relaxed">
              Revolutionary cost estimation framework leveraging Large Language Models 
              for dynamic Agile development forecasting.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-accent-cyan">Authors</h4>
            <div className="space-y-3">
              {researchData.authors.map((author, index) => (
                <div key={index}>
                  <p className="font-medium text-text-primary">{author.name}</p>
                  <p className="text-text-secondary text-sm">{author.email}</p>
                  <p className="text-text-secondary text-sm">{author.designation}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-accent-green">Resources</h4>
            <div className="space-y-3">
              <a 
                href={researchData.downloads.organization}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text-secondary hover:text-accent-cyan transition-colors"
              >
                GitHub Organization
              </a>
              <a 
                href={researchData.downloads.framework}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text-secondary hover:text-accent-cyan transition-colors"
              >
                Framework Code
              </a>
              <a 
                href={researchData.downloads.datasets}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text-secondary hover:text-accent-cyan transition-colors"
              >
                Research Datasets
              </a>
              <a 
                href={researchData.downloads.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text-secondary hover:text-accent-cyan transition-colors"
              >
                Paper Repository
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-surface mt-12 pt-8 text-center text-text-secondary">
          <p>&copy; 2024 LaMoCEM Research Project. Open source under MIT License.</p>
        </div>
      </div>
    </footer>
  );
}
