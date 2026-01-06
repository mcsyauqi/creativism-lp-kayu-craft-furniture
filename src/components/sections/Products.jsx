import { Clock, ArrowRight } from 'lucide-react';
import { SectionWrapper, Container, SectionHeader } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { productsContent } from '../../data/content';

export function Products() {
  return (
    <SectionWrapper id="products" bgColor="warm-white">
      <Container>
        <SectionHeader
          headline={productsContent.headline}
          subheadline={productsContent.subheadline}
        />

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {productsContent.products.map((product) => (
            <div
              key={product.id}
              className="group bg-cream rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              {/* Image */}
              <div className="aspect-[16/10] img-zoom relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-charcoal/80 text-warm-white px-3 py-1 rounded-full text-xs font-medium">
                    Signature
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title & Material */}
                <div className="mb-4">
                  <h3 className="font-heading text-xl font-bold text-charcoal group-hover:text-wood transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-wood text-sm font-medium">
                    {product.material}
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4 text-sm text-charcoal/70">
                  <p>
                    <span className="font-medium text-charcoal">Dimensi:</span>{' '}
                    {product.dimensions}
                  </p>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Lead time: {product.leadTime}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-1 mb-6">
                  {product.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-sm text-charcoal/70">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-charcoal/10">
                  <div>
                    <span className="text-xs text-charcoal/50">Harga</span>
                    <p className="text-xl font-bold text-charcoal">
                      {product.price}
                    </p>
                  </div>
                  <button className="flex items-center text-wood font-medium hover:text-wood-dark transition-colors">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="secondary" size="lg" icon>
            Lihat Semua Produk
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
}
