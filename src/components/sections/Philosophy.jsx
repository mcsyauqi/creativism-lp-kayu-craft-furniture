import { Check, X } from 'lucide-react';
import { SectionWrapper, Container, SectionHeader } from '../ui/SectionWrapper';
import { philosophyContent } from '../../data/content';

export function Philosophy() {
  return (
    <SectionWrapper id="philosophy" bgColor="cream">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Master craftsman selecting wood"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-wood text-warm-white p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-heading font-bold text-gold">30+</div>
              <div className="text-sm">Tahun Pengalaman</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <SectionHeader
              headline={philosophyContent.headline}
              subheadline={philosophyContent.subheadline}
              centered={false}
            />

            <div className="space-y-6">
              {philosophyContent.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-charcoal/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Comparisons */}
        <div className="mt-20">
          <h3 className="font-heading text-2xl font-bold text-center text-charcoal mb-10">
            Perbedaan yang Terlihat
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {philosophyContent.comparisons.map((comparison, index) => (
              <div key={index} className="bg-warm-white rounded-2xl overflow-hidden shadow-lg">
                <div className="p-6 bg-gradient-to-r from-wood to-wood-dark text-warm-white">
                  <h4 className="font-heading font-bold text-lg">{comparison.title}</h4>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-gold font-semibold">KayuKarya</span>
                      <p className="text-charcoal font-medium">{comparison.kayukarya}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-charcoal/50 font-semibold">Lainnya</span>
                      <p className="text-charcoal/60">{comparison.others}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
