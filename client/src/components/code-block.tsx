import { useEffect } from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

export default function CodeBlock({ code, language, title }: CodeBlockProps) {
  useEffect(() => {
    // Load Prism.js for syntax highlighting
    if (typeof window !== 'undefined' && window.Prism) {
      window.Prism.highlightAll();
    }
  }, [code]);

  return (
    <div className="bg-dark-card rounded-2xl border border-dark-surface overflow-hidden">
      {title && (
        <div className="px-6 py-3 border-b border-dark-surface">
          <h4 className="text-lg font-medium text-accent-green">{title}</h4>
        </div>
      )}
      <div className="relative">
        <pre className="bg-code-bg rounded-none p-6 overflow-x-auto">
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}
