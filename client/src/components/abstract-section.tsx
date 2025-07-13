import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { researchData } from '@/data/research-data';

export default function AbstractSection() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section 
      id="abstract" 
      ref={ref}
      className="py-20 bg-dark-surface"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`section-fade ${isVisible ? 'section-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Abstract
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-dark-card p-8 rounded-2xl border border-dark-surface">
              <p className="text-lg leading-relaxed mb-6 text-text-primary">
                {researchData.abstract}
              </p>
            </div>
            
            {/* AI neural network graphics */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Abstract AI neural network visualization with connected nodes and data flow" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-accent-green">Keywords</h3>
            <div className="flex flex-wrap gap-3">
              {researchData.keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className="bg-dark-card px-4 py-2 rounded-lg text-sm border border-dark-surface text-text-primary"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
