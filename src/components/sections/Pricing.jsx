import { Check, CreditCard } from 'lucide-react';
import { SectionWrapper, Container, SectionHeader } from '../ui/SectionWrapper';
import { pricingContent } from '../../data/content';

export function Pricing() {
  return (
    <SectionWrapper id="pricing" bgColor="warm-white">
      <Container>
        <SectionHeader
          headline={pricingContent.headline}
          subheadline={pricingContent.subheadline}
        />

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingContent.tiers.map((tier, index) => (
            <div
              key={index}
              className={`
                rounded-2xl p-6 border-2 transition-all duration-300
                ${tier.featured
                  ? 'bg-wood text-warm-white border-gold shadow-2xl scale-105'
                  : 'bg-warm-white border-cream hover:border-wood/30 shadow-lg'
                }
              `}
            >
              {tier.featured && (
                <span className="inline-block bg-gold text-charcoal text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className={`font-heading text-xl font-bold mb-1 ${tier.featured ? 'text-warm-white' : 'text-charcoal'}`}>
                {tier.tier}
              </h3>
              <p className={`text-sm mb-4 ${tier.featured ? 'text-gold' : 'text-wood'}`}>
                {tier.wood}
              </p>
              <div className={`text-2xl font-bold mb-4 ${tier.featured ? 'text-warm-white' : 'text-charcoal'}`}>
                {tier.range}
              </div>
              <p className={`text-sm mb-4 ${tier.featured ? 'text-warm-white/80' : 'text-charcoal/70'}`}>
                {tier.products}
              </p>
              <div className={`pt-4 border-t ${tier.featured ? 'border-warm-white/20' : 'border-cream'}`}>
                <p className={`text-xs ${tier.featured ? 'text-warm-white/60' : 'text-charcoal/50'}`}>
                  Best for:
                </p>
                <p className={`text-sm font-medium ${tier.featured ? 'text-gold' : 'text-wood'}`}>
                  {tier.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-cream to-warm-white rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="font-heading text-2xl font-bold text-charcoal text-center mb-8">
            Investasi vs Expense
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            {pricingContent.valueProposition.comparison.map((item, index) => (
              <div
                key={index}
                className={`
                  rounded-xl p-6 text-center
                  ${item.type === 'KayuKarya'
                    ? 'bg-wood text-warm-white'
                    : 'bg-charcoal/5 text-charcoal'
                  }
                `}
              >
                <h4 className={`font-bold text-lg mb-4 ${item.type === 'KayuKarya' ? 'text-gold' : ''}`}>
                  {item.type}
                </h4>
                <div className="space-y-2 text-sm">
                  <p>Harga: <span className="font-bold">{item.price}</span></p>
                  <p>Bertahan: <span className="font-bold">{item.lifespan}</span></p>
                  <div className={`pt-3 mt-3 border-t ${item.type === 'KayuKarya' ? 'border-warm-white/20' : 'border-charcoal/10'}`}>
                    <p className="text-xs opacity-70">Cost per year</p>
                    <p className={`text-xl font-bold ${item.type === 'KayuKarya' ? 'text-gold' : 'text-red-500'}`}>
                      {item.costPerYear}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-charcoal font-heading text-xl font-bold">
            {pricingContent.valueProposition.question}
          </p>
        </div>

        {/* Payment Options */}
        <div className="bg-cream rounded-2xl p-6 md:p-8">
          <div className="flex items-center space-x-3 mb-6">
            <CreditCard className="w-6 h-6 text-wood" />
            <h4 className="font-heading text-lg font-bold text-charcoal">
              Opsi Pembayaran
            </h4>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {pricingContent.paymentOptions.map((option, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <span className="text-charcoal">{option}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
