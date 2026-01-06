import { MessageCircle, PencilRuler, CheckCircle, Hammer, Truck, Check, ArrowRight } from 'lucide-react';
import { SectionWrapper, Container, SectionHeader } from '../ui/SectionWrapper';

const colors = {
  charcoal: '#2E2E2E',
  gold: '#D4AF37',
  warmWhite: '#FAF8F5',
};

const steps = [
  { step: 1, title: "Consultation", icon: MessageCircle, duration: "30-60 menit", description: "Diskusi kebutuhan, style preference, space measurements. Bisa di workshop atau via video call.", deliverable: "Understanding of your vision" },
  { step: 2, title: "Design", icon: PencilRuler, duration: "1-2 minggu", description: "Tim design membuat sketches dan 3D render sesuai brief. Revisi hingga Anda puas.", deliverable: "Design drawings, material samples, quote" },
  { step: 3, title: "Approval & Deposit", icon: CheckCircle, duration: null, description: "Review final design, konfirmasi materials, approve quote. DP 50% untuk mulai produksi.", deliverable: "Signed order, production slot secured" },
  { step: 4, title: "Crafting", icon: Hammer, duration: "4-8 minggu", description: "Master craftsmen mengerjakan piece Anda. Progress photos dikirim secara regular.", deliverable: "Your furniture, handcrafted with love" },
  { step: 5, title: "Delivery & Installation", icon: Truck, duration: "1 minggu", description: "Delivery ke lokasi, assembly jika needed, final inspection bersama Anda.", deliverable: "Perfect installation, care instructions" },
];

const capabilities = [
  "Custom dimensions untuk fit space Anda",
  "Mix materials (wood + metal, wood + glass)",
  "Special finishes dan stain colors",
  "Replicate antique designs",
  "Corporate/hospitality bulk orders",
];

export function CustomOrder() {
  return (
    <SectionWrapper id="custom-order" bgColor="wood-dark" pattern>
      <Container>
        <SectionHeader
          headline="Wujudkan Furniture Impian Anda"
          subheadline="Custom order untuk yang tidak menemukan apa yang dicari"
          light
        />

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-0.5"
            style={{ backgroundColor: 'rgba(212,175,55,0.3)' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative">
                  {/* Step Circle */}
                  <div className="flex flex-col items-center">
                    <div
                      className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg"
                      style={{ backgroundColor: colors.gold }}
                    >
                      <Icon className="w-7 h-7" style={{ color: colors.charcoal }} />
                    </div>
                    <span className="font-bold text-sm mb-2" style={{ color: colors.gold }}>
                      Step {step.step}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div
                    className="backdrop-blur-sm rounded-xl p-5 text-center"
                    style={{ backgroundColor: 'rgba(250,248,245,0.1)' }}
                  >
                    <h4 className="font-heading font-bold text-lg mb-2" style={{ color: colors.warmWhite }}>
                      {step.title}
                    </h4>
                    {step.duration && (
                      <span
                        className="inline-block text-xs px-3 py-1 rounded-full mb-3"
                        style={{ backgroundColor: 'rgba(212,175,55,0.2)', color: colors.gold }}
                      >
                        {step.duration}
                      </span>
                    )}
                    <p className="text-sm mb-3" style={{ color: 'rgba(250,248,245,0.7)' }}>
                      {step.description}
                    </p>
                    <p className="text-xs font-semibold" style={{ color: colors.gold }}>
                      ✓ {step.deliverable}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Capabilities */}
        <div
          className="mt-16 backdrop-blur-sm rounded-2xl p-8"
          style={{ backgroundColor: 'rgba(250,248,245,0.1)' }}
        >
          <h4
            className="font-heading text-xl font-bold mb-8 text-center"
            style={{ color: colors.warmWhite }}
          >
            Kemampuan Custom Kami
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(212,175,55,0.2)' }}
                >
                  <Check className="w-4 h-4" style={{ color: colors.gold }} />
                </div>
                <span className="text-sm" style={{ color: 'rgba(250,248,245,0.9)' }}>
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
            style={{ backgroundColor: colors.gold, color: colors.charcoal }}
          >
            Mulai Custom Order
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </Container>
    </SectionWrapper>
  );
}
