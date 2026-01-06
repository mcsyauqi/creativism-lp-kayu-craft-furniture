const colors = {
  wood: '#5D4037',
  woodLight: '#8D6E63',
  charcoal: '#2E2E2E',
  gold: '#D4AF37',
  warmWhite: '#FAF8F5',
  cream: '#F5F0E8',
};

export function Card({
  children,
  className = '',
  hover = true,
  padding = true,
  ...props
}) {
  return (
    <div
      className={`rounded-2xl shadow-lg ${hover ? 'card-hover' : ''} ${padding ? 'p-6' : ''} ${className}`}
      style={{ backgroundColor: colors.warmWhite }}
      {...props}
    >
      {children}
    </div>
  );
}

export function ImageCard({
  image,
  alt,
  children,
  aspectRatio = 'aspect-[4/3]',
  className = ''
}) {
  return (
    <Card className={`overflow-hidden ${className}`} padding={false}>
      <div className={`img-zoom ${aspectRatio}`}>
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {children && (
        <div className="p-6">
          {children}
        </div>
      )}
    </Card>
  );
}

export function WoodCard({ wood, className = '' }) {
  const tierColors = {
    'Premium': { bg: colors.gold, text: colors.charcoal },
    'Mid-Premium': { bg: colors.woodLight, text: colors.warmWhite },
    'Value': { bg: 'rgba(46,46,46,0.8)', text: colors.warmWhite },
  };

  const tier = tierColors[wood.priceTier] || tierColors['Value'];

  return (
    <Card className={`overflow-hidden ${className}`} padding={false}>
      <div className="h-36 relative" style={{ backgroundColor: wood.color }}>
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.25))' }}
        />
        <div className="absolute bottom-4 left-4 right-4">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold"
            style={{ backgroundColor: tier.bg, color: tier.text }}
          >
            {wood.priceTier}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3
          className="font-heading text-xl font-bold mb-1"
          style={{ color: colors.charcoal }}
        >
          {wood.name}
        </h3>
        <p className="text-sm italic mb-4" style={{ color: 'rgba(46,46,46,0.6)' }}>
          {wood.latin}
        </p>
        <div className="space-y-4 text-sm">
          <div>
            <span className="font-bold" style={{ color: colors.wood }}>Origin:</span>
            <p style={{ color: 'rgba(46,46,46,0.7)' }}>{wood.origin}</p>
          </div>
          <div>
            <span className="font-bold" style={{ color: colors.wood }}>Karakteristik:</span>
            <p style={{ color: 'rgba(46,46,46,0.7)' }}>{wood.characteristics}</p>
          </div>
          <div>
            <span className="font-bold" style={{ color: colors.wood }}>Best for:</span>
            <p style={{ color: 'rgba(46,46,46,0.7)' }}>{wood.bestFor}</p>
          </div>
          <div className="pt-3" style={{ borderTop: `1px solid ${colors.cream}` }}>
            <p className="italic text-xs" style={{ color: 'rgba(46,46,46,0.6)' }}>
              {wood.funFact}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
