const colors = {
  'warm-white': '#FAF8F5',
  'cream': '#F5F0E8',
  'wood': '#5D4037',
  'wood-light': '#8D6E63',
  'wood-dark': '#3E2723',
  'charcoal': '#2E2E2E',
  'gold': '#D4AF37',
};

export function SectionWrapper({
  children,
  className = '',
  id,
  bgColor = 'warm-white',
  pattern = false
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 lg:py-32 ${pattern ? 'wood-texture' : ''} ${className}`}
      style={{ backgroundColor: colors[bgColor] || colors['warm-white'] }}
    >
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}

export function Container({ children, className = '' }) {
  return (
    <div className={`max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 ${className}`}>
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
    <div className={`${centered ? 'text-center' : ''} mb-14 md:mb-16`}>
      {preHeadline && (
        <p
          className="text-sm uppercase tracking-widest mb-4 font-bold"
          style={{ color: colors.gold }}
        >
          {preHeadline}
        </p>
      )}
      <h2
        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-5"
        style={{ color: light ? colors['warm-white'] : colors.charcoal }}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={`text-lg md:text-xl max-w-3xl leading-relaxed ${centered ? 'mx-auto' : ''}`}
          style={{ color: light ? 'rgba(250,248,245,0.8)' : 'rgba(46,46,46,0.7)' }}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
