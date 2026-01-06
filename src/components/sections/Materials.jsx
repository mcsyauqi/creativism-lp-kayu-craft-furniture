import { Leaf } from 'lucide-react';
import { SectionWrapper, Container, SectionHeader } from '../ui/SectionWrapper';
import { WoodCard } from '../ui/Card';
import { materialsContent } from '../../data/content';

export function Materials() {
  return (
    <SectionWrapper id="materials" bgColor="warm-white">
      <Container>
        <SectionHeader
          headline={materialsContent.headline}
          subheadline={materialsContent.subheadline}
        />

        {/* Wood Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materialsContent.woods.map((wood) => (
            <WoodCard key={wood.id} wood={wood} />
          ))}
        </div>

        {/* Sustainability Note */}
        <div className="mt-12 bg-gradient-to-r from-green-50 to-cream rounded-2xl p-8 flex items-start space-x-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Leaf className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-charcoal text-lg mb-2">
              Komitmen Keberlanjutan
            </h4>
            <p className="text-charcoal/70">
              {materialsContent.sustainabilityNote}
            </p>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
