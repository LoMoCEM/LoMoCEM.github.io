import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { researchData } from '@/data/research-data';
import CodeBlock from './code-block';

export default function MethodologySection() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section 
      id="methodology" 
      ref={ref}
      className="py-20 bg-dark-bg"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`section-fade ${isVisible ? 'section-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Methodology
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-accent-cyan">LaMoCEM Process</h3>
              <div className="space-y-6">
                {researchData.methodology.steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent-cyan rounded-full flex items-center justify-center text-dark-bg font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-text-primary">{step.title}</h4>
                      <p className="text-text-secondary">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Code visualization */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Code visualization with syntax highlighting on dark background" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          {/* Code Examples */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6 text-accent-green text-center">
              Sample Implementation
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <CodeBlock
                title="Input CSV Structure"
                code={researchData.methodology.codeExamples.inputCsv}
                language="python"
              />
              
              <CodeBlock
                title="Generated Lambda Function"
                code={researchData.methodology.codeExamples.lambdaFunction}
                language="python"
              />
            </div>
            
            <CodeBlock
              title="Tools Configuration (tools.json)"
              code={researchData.methodology.codeExamples.toolsJson}
              language="json"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
