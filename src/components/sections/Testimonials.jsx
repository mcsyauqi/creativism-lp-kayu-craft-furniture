import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { SectionWrapper, Container, SectionHeader } from '../ui/SectionWrapper';
import { testimonialsContent } from '../../data/content';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = testimonialsContent.testimonials;

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <SectionWrapper id="testimonials" bgColor="wood">
      <Container>
        <SectionHeader
          headline={testimonialsContent.headline}
          light
        />

        {/* Desktop View - Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-warm-white rounded-2xl p-6 shadow-xl"
            >
              <Quote className="w-8 h-8 text-gold/50 mb-4" />
              <p className="text-charcoal/80 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-heading font-bold text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-charcoal/60">
                    {testimonial.location}
                    {testimonial.company && ` • ${testimonial.company}`}
                  </p>
                  <p className="text-xs text-gold font-medium mt-1">
                    {testimonial.product}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <div className="bg-warm-white rounded-2xl p-6 shadow-xl">
            <Quote className="w-8 h-8 text-gold/50 mb-4" />
            <p className="text-charcoal/80 mb-6 leading-relaxed">
              &ldquo;{testimonials[activeIndex].quote}&rdquo;
            </p>
            <div className="flex items-center space-x-4">
              <img
                src={testimonials[activeIndex].avatar}
                alt={testimonials[activeIndex].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-heading font-bold text-charcoal">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-sm text-charcoal/60">
                  {testimonials[activeIndex].location}
                </p>
                <p className="text-xs text-gold font-medium mt-1">
                  {testimonials[activeIndex].product}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1 mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 bg-warm-white/20 rounded-full flex items-center justify-center text-warm-white hover:bg-warm-white/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-gold' : 'bg-warm-white/50'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 bg-warm-white/20 rounded-full flex items-center justify-center text-warm-white hover:bg-warm-white/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
