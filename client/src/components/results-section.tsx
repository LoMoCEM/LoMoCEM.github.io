import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { researchData } from '@/data/research-data';

export default function ResultsSection() {
  const [ref, isVisible] = useIntersectionObserver();

  const getErrorColor = (errorMargin: number) => {
    if (errorMargin > 20) return 'text-red-400';
    if (errorMargin > 5) return 'text-yellow-400';
    return 'text-accent-cyan';
  };

  const getCardBorder = (model: string) => {
    return model === 'LaMoCEM' ? 'border-accent-cyan/20' : 'border-dark-surface';
  };

  return (
    <section 
      id="results" 
      ref={ref}
      className="py-20 bg-dark-surface"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`section-fade ${isVisible ? 'section-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Results & Comparison
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {researchData.results.comparison.map((result, index) => (
              <div 
                key={index}
                className={`bg-dark-card p-8 rounded-2xl border ${getCardBorder(result.model)} text-center`}
              >
                <div className={`w-16 h-16 ${
                  result.model === 'LaMoCEM' ? 'bg-accent-cyan/20' : 
                  result.errorMargin > 20 ? 'bg-red-500/20' : 'bg-yellow-500/20'
                } rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-2xl font-bold ${getErrorColor(result.errorMargin)}`}>
                    {result.errorMargin}%
                  </span>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  result.model === 'LaMoCEM' ? 'text-accent-cyan' : 'text-text-primary'
                }`}>
                  {result.model}
                </h3>
                <p className="text-text-secondary mb-4">
                  {result.model === 'LaMoCEM' ? 'Our model error margin' : 
                   result.model === 'HuBiCEM' ? 'Previous model error margin' :
                   'Traditional model error margin'}
                </p>
                <p className="text-sm text-text-secondary">
                  PKR {result.estimated.toLocaleString()} vs PKR {result.actual.toLocaleString()} actual
                </p>
              </div>
            ))}
          </div>
          
          {/* Comparison Table */}
          <div className="bg-dark-card rounded-2xl p-8 border border-dark-surface overflow-x-auto">
            <h3 className="text-xl font-semibold mb-6 text-accent-green">Detailed Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-dark-surface">
                    <th className="text-left py-4 px-4 text-text-primary">Model</th>
                    <th className="text-left py-4 px-4 text-text-primary">Estimated Cost</th>
                    <th className="text-left py-4 px-4 text-text-primary">Actual Cost</th>
                    <th className="text-left py-4 px-4 text-text-primary">Error Margin</th>
                    <th className="text-left py-4 px-4 text-text-primary">Adaptability</th>
                  </tr>
                </thead>
                <tbody>
                  {researchData.results.comparison.map((result, index) => (
                    <tr 
                      key={index}
                      className={`border-b border-dark-surface/50 ${
                        result.model === 'LaMoCEM' ? 'bg-accent-cyan/5' : ''
                      }`}
                    >
                      <td className={`py-4 px-4 ${
                        result.model === 'LaMoCEM' ? 'font-semibold text-accent-cyan' : 'text-text-primary'
                      }`}>
                        {result.model}
                      </td>
                      <td className={`py-4 px-4 ${
                        result.model === 'LaMoCEM' ? 'font-semibold text-text-primary' : 'text-text-secondary'
                      }`}>
                        PKR {result.estimated.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-text-secondary">
                        PKR {result.actual.toLocaleString()}
                      </td>
                      <td className={`py-4 px-4 ${
                        result.model === 'LaMoCEM' ? 'text-accent-cyan font-semibold' : getErrorColor(result.errorMargin)
                      }`}>
                        {result.errorMargin}%
                      </td>
                      <td className={`py-4 px-4 ${
                        result.adaptability === 'Dynamic' ? 'text-accent-green' : 'text-text-secondary'
                      }`}>
                        {result.adaptability}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
