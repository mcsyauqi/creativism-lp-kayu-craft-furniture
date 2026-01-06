import { ArrowRight, TreeDeciduous, Hammer, Award, Shield } from 'lucide-react';
import { Button } from '../ui/Button';
import { heroContent } from '../../data/content';

const iconMap = {
  tree: TreeDeciduous,
  hammer: Hammer,
  award: Award,
  shield: Shield,
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80"
          alt="KayuKarya Furniture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              {/* Pre-headline */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold font-medium tracking-wider text-sm uppercase">
                  {heroContent.preHeadline}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-warm-white leading-tight mb-6">
                {heroContent.headline}
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-warm-white/80 mb-8 leading-relaxed max-w-xl">
                {heroContent.subheadline}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-12">
                <Button variant="gold" size="lg" icon>
                  {heroContent.ctaPrimary}
                </Button>
                <Button variant="secondary" size="lg" className="border-warm-white text-warm-white hover:bg-warm-white hover:text-charcoal">
                  {heroContent.ctaSecondary}
                </Button>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {heroContent.badges.map((badge, index) => {
                  const Icon = iconMap[badge.icon];
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-warm-white/10 backdrop-blur-sm rounded-lg px-4 py-3"
                    >
                      <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-warm-white text-sm font-medium">
                        {badge.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content - Featured Product Card */}
            <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border-2 border-gold/30 rounded-3xl" />

                {/* Product Card */}
                <div className="relative bg-warm-white/10 backdrop-blur-md rounded-2xl overflow-hidden">
                  <div className="aspect-[4/3]">
                    <img
                      src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&q=80"
                      alt="Featured: Meja Makan Jawa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-gold text-sm font-medium">Featured Piece</span>
                    <h3 className="font-heading text-2xl text-warm-white font-bold mt-1">
                      Meja Makan Jawa
                    </h3>
                    <p className="text-warm-white/70 text-sm mt-2">
                      Kayu Jati Solid • Traditional Joinery
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-warm-white/20">
                      <span className="text-warm-white font-semibold">
                        Rp 18.500.000
                      </span>
                      <a href="#products" className="flex items-center text-gold text-sm font-medium hover:underline">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-warm-white/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-warm-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
