export function Card({
  children,
  className = '',
  hover = true,
  padding = true,
  ...props
}) {
  return (
    <div
      className={`
        bg-warm-white rounded-2xl shadow-lg
        ${hover ? 'card-hover' : ''}
        ${padding ? 'p-6' : ''}
        ${className}
      `}
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

export function WoodCard({
  wood,
  className = ''
}) {
  return (
    <Card className={`overflow-hidden ${className}`} padding={false}>
      <div
        className="h-32 relative"
        style={{ backgroundColor: wood.color }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className={`
            inline-block px-3 py-1 rounded-full text-xs font-semibold
            ${wood.priceTier === 'Premium' ? 'bg-gold text-charcoal' :
              wood.priceTier === 'Mid-Premium' ? 'bg-wood-light text-warm-white' :
              'bg-charcoal/80 text-warm-white'}
          `}>
            {wood.priceTier}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-charcoal mb-1">
          {wood.name}
        </h3>
        <p className="text-sm italic text-charcoal/60 mb-3">
          {wood.latin}
        </p>
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-semibold text-wood">Origin:</span>
            <p className="text-charcoal/70">{wood.origin}</p>
          </div>
          <div>
            <span className="font-semibold text-wood">Karakteristik:</span>
            <p className="text-charcoal/70">{wood.characteristics}</p>
          </div>
          <div>
            <span className="font-semibold text-wood">Best for:</span>
            <p className="text-charcoal/70">{wood.bestFor}</p>
          </div>
          <div className="pt-2 border-t border-cream">
            <p className="text-charcoal/60 italic text-xs">
              💡 {wood.funFact}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
