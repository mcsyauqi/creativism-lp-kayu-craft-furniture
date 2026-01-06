import { useScrollReveal } from '../../hooks/useScrollReveal';

export function SectionWrapper({
  children,
  className = '',
  id,
  bgColor = 'warm-white',
  pattern = false
}) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  const bgColors = {
    'warm-white': 'bg-warm-white',
    'cream': 'bg-cream',
    'wood': 'bg-wood',
    'charcoal': 'bg-charcoal',
    'wood-dark': 'bg-wood-dark',
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`
        py-16 md:py-24 lg:py-32
        ${bgColors[bgColor]}
        ${pattern ? 'wood-texture' : ''}
        ${className}
        transition-opacity duration-700
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {children}
    </section>
  );
}

export function Container({ children, className = '' }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeader({
  preHeadline,
  headline,
  subheadline,
  centered = true,
  light = false
}) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 md:mb-16`}>
      {preHeadline && (
        <p className={`text-sm uppercase tracking-wider mb-3 ${light ? 'text-gold' : 'text-gold'} font-semibold`}>
          {preHeadline}
        </p>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-warm-white' : 'text-charcoal'}`}>
        {headline}
      </h2>
      {subheadline && (
        <p className={`text-lg md:text-xl max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-warm-white/80' : 'text-charcoal/70'}`}>
          {subheadline}
        </p>
      )}
    </div>
  );
}
