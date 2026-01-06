import { ArrowRight } from 'lucide-react';
import { SectionWrapper, Container, SectionHeader } from '../ui/SectionWrapper';
import { collectionsContent } from '../../data/content';

export function Collections() {
  return (
    <SectionWrapper id="collections" bgColor="cream">
      <Container>
        <SectionHeader
          headline={collectionsContent.headline}
          subheadline={collectionsContent.subheadline}
        />

        {/* Collection Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectionsContent.collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative rounded-2xl overflow-hidden shadow-xl card-hover cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] img-zoom">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-warm-white mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-warm-white/70 text-sm mb-3">
                    {collection.products.join(' • ')}
                  </p>
                  {collection.note && (
                    <p className="text-gold text-xs mb-3 italic">
                      {collection.note}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-warm-white/60 text-xs">Starting from</span>
                      <p className="text-warm-white font-semibold">
                        {collection.startingPrice}
                      </p>
                    </div>
                    <span className="flex items-center text-gold text-sm font-medium group-hover:underline">
                      Explore
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
