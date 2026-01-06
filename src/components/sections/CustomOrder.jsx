import { MessageCircle, PencilRuler, CheckCircle, Hammer, Truck, Check } from 'lucide-react';
import { SectionWrapper, Container, SectionHeader } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { customOrderContent } from '../../data/content';

const iconMap = {
  'message-circle': MessageCircle,
  'pencil-ruler': PencilRuler,
  'check-circle': CheckCircle,
  'hammer': Hammer,
  'truck': Truck,
};

export function CustomOrder() {
  return (
    <SectionWrapper id="custom-order" bgColor="wood-dark" pattern>
      <Container>
        <SectionHeader
          headline={customOrderContent.headline}
          subheadline={customOrderContent.subheadline}
          light
        />

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gold/30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {customOrderContent.steps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={step.step} className="relative">
                  {/* Step Number Circle */}
                  <div className="flex flex-col items-center">
                    <div className="relative z-10 w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="w-6 h-6 text-charcoal" />
                    </div>
                    <span className="text-gold font-bold text-sm mb-2">Step {step.step}</span>
                  </div>

                  {/* Content Card */}
                  <div className="bg-warm-white/10 backdrop-blur-sm rounded-xl p-5 text-center">
                    <h4 className="font-heading font-bold text-warm-white text-lg mb-2">
                      {step.title}
                    </h4>
                    {step.duration && (
                      <span className="inline-block bg-gold/20 text-gold text-xs px-2 py-1 rounded-full mb-3">
                        {step.duration}
                      </span>
                    )}
                    <p className="text-warm-white/70 text-sm mb-3">
                      {step.description}
                    </p>
                    <p className="text-gold text-xs font-medium">
                      ✓ {step.deliverable}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Capabilities */}
        <div className="mt-16 bg-warm-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h4 className="font-heading text-xl font-bold text-warm-white mb-6 text-center">
            Kemampuan Custom Kami
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {customOrderContent.capabilities.map((capability, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <span className="text-warm-white/90 text-sm">{capability}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gold" size="lg" icon>
            Mulai Custom Order
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
}
