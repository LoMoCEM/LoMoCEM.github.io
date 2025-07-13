import { Download, Github, Database, FileText } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { researchData } from '@/data/research-data';
import CodeBlock from './code-block';

export default function DownloadsSection() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section 
      id="downloads" 
      ref={ref}
      className="py-20 bg-dark-bg"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`section-fade ${isVisible ? 'section-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Downloads & Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-dark-card p-8 rounded-2xl border border-dark-surface">
              <h3 className="text-2xl font-semibold mb-6 text-accent-cyan">Research Paper</h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Download the complete research paper with detailed methodology, implementation details, 
                and comprehensive analysis of LaMoCEM framework.
              </p>
              <a 
                href={researchData.downloads.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-accent-cyan text-dark-bg px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </a>
            </div>
            
            <div className="bg-dark-card p-8 rounded-2xl border border-dark-surface">
              <h3 className="text-2xl font-semibold mb-6 text-accent-green">Source Code</h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Access the complete implementation including Python scripts, datasets, 
                and example configurations for reproducing our results.
              </p>
              <div className="space-y-4">
                <a 
                  href={researchData.downloads.framework}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-accent-green text-dark-bg px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 w-full justify-center"
                >
                  <Github className="w-5 h-5" />
                  <span>View on GitHub</span>
                </a>
                <a 
                  href={researchData.downloads.datasets}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 border border-accent-green text-accent-green px-8 py-3 rounded-lg font-semibold hover:bg-accent-green hover:bg-opacity-10 transition-all w-full justify-center"
                >
                  <Database className="w-5 h-5" />
                  <span>Datasets</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Additional Resources */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <a 
              href={researchData.downloads.organization}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-card p-6 rounded-xl border border-dark-surface hover:border-accent-cyan transition-colors group"
            >
              <Github className="w-8 h-8 text-accent-cyan mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold mb-2 text-text-primary">GitHub Org</h4>
              <p className="text-text-secondary text-sm">Complete project organization</p>
            </a>
            
            <a 
              href={researchData.downloads.framework}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-card p-6 rounded-xl border border-dark-surface hover:border-accent-green transition-colors group"
            >
              <FileText className="w-8 h-8 text-accent-green mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold mb-2 text-text-primary">Framework</h4>
              <p className="text-text-secondary text-sm">Core implementation code</p>
            </a>
            
            <a 
              href={researchData.downloads.datasets}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-card p-6 rounded-xl border border-dark-surface hover:border-accent-cyan transition-colors group"
            >
              <Database className="w-8 h-8 text-accent-cyan mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold mb-2 text-text-primary">Datasets</h4>
              <p className="text-text-secondary text-sm">Research data and examples</p>
            </a>
            
            <div className="bg-dark-card p-6 rounded-xl border border-dark-surface">
              <Download className="w-8 h-8 text-accent-green mb-4" />
              <h4 className="font-semibold mb-2 text-text-primary">Export Tool</h4>
              <p className="text-text-secondary text-sm">GitHub Pages deployment</p>
            </div>
          </div>
          
          {/* Citation */}
          <div className="bg-dark-surface p-8 rounded-2xl border border-dark-card">
            <h3 className="text-xl font-semibold mb-6 text-accent-cyan">Citation</h3>
            <CodeBlock
              code={researchData.citation}
              language="bibtex"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
