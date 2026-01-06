import { useState } from 'react';
import { Calendar, X } from 'lucide-react';
import { SectionWrapper, Container, SectionHeader } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { workshopContent } from '../../data/content';

export function Workshop() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <SectionWrapper id="workshop" bgColor="warm-white">
      <Container>
        <SectionHeader
          headline={workshopContent.headline}
          subheadline={workshopContent.subheadline}
        />

        {/* Photo Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {workshopContent.gallery.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              className={`
                relative rounded-xl overflow-hidden cursor-pointer group card-hover
                ${index === 0 ? 'col-span-2 row-span-2' : ''}
              `}
            >
              <div className={`${index === 0 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-warm-white text-sm">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Highlight */}
        <div className="bg-cream rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl font-bold text-charcoal mb-4">
                Tim Kami
              </h3>
              <p className="text-charcoal/70 mb-6">
                {workshopContent.teamHighlight}
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-wood-light border-2 border-cream flex items-center justify-center text-warm-white text-xs font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-charcoal/60 text-sm">+20 craftsmen</span>
              </div>
            </div>
            <div className="bg-wood rounded-xl p-6 text-warm-white">
              <Calendar className="w-8 h-8 text-gold mb-4" />
              <h4 className="font-heading font-bold text-lg mb-2">
                Kunjungi Workshop Kami
              </h4>
              <p className="text-warm-white/80 text-sm mb-4">
                {workshopContent.visitInvitation}
              </p>
              <Button variant="gold" size="sm">
                Schedule Workshop Visit
              </Button>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-warm-white hover:text-gold"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.image}
                alt={selectedImage.caption}
                className="w-full rounded-xl"
              />
              <p className="text-warm-white text-center mt-4">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        )}
      </Container>
    </SectionWrapper>
  );
}
