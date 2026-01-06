import { Shield, Check, Sparkles, AlertCircle } from 'lucide-react';
import { SectionWrapper, Container, SectionHeader } from '../ui/SectionWrapper';
import { careContent } from '../../data/content';

export function Care() {
  return (
    <SectionWrapper id="care" bgColor="cream">
      <Container>
        <SectionHeader
          headline={careContent.headline}
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Warranty Card */}
          <div className="bg-wood rounded-2xl p-8 text-warm-white">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold">
                  {careContent.warranty.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-warm-white/10 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Check className="w-5 h-5 text-gold" />
                  <span className="font-semibold">Coverage</span>
                </div>
                <p className="text-warm-white/80 text-sm pl-7">
                  {careContent.warranty.coverage}
                </p>
              </div>

              <div className="bg-warm-white/10 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-warm-white/60" />
                  <span className="font-semibold text-warm-white/60">Tidak Termasuk</span>
                </div>
                <p className="text-warm-white/60 text-sm pl-7">
                  {careContent.warranty.exclusions}
                </p>
              </div>
            </div>
          </div>

          {/* Care Tips Card */}
          <div className="bg-warm-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-charcoal">
                  Tips Perawatan
                </h3>
              </div>
            </div>

            <ul className="space-y-3">
              {careContent.careTips.map((tip, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-charcoal/80">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Free Service Banner */}
        <div className="mt-8 bg-gradient-to-r from-gold/20 to-gold/10 rounded-2xl p-6 md:p-8 border border-gold/30">
          <div className="flex items-start md:items-center space-x-4">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-charcoal" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-charcoal text-lg mb-1">
                Free Service Tahun Pertama
              </h4>
              <p className="text-charcoal/70">
                {careContent.freeService}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
