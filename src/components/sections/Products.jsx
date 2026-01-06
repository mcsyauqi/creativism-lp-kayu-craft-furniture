import { Clock, ArrowRight } from 'lucide-react';
import { SectionWrapper, Container, SectionHeader } from '../ui/SectionWrapper';

const colors = {
  wood: '#5D4037',
  woodDark: '#3E2723',
  charcoal: '#2E2E2E',
  gold: '#D4AF37',
  warmWhite: '#FAF8F5',
  cream: '#F5F0E8',
};

const products = [
  {
    id: 1,
    name: "Meja Makan Jawa",
    material: "Kayu Jati Solid",
    dimensions: "200 x 100 x 75 cm (customizable)",
    price: "Rp 18.500.000",
    leadTime: "4-6 minggu",
    highlights: ["Traditional mortise & tenon joinery", "Hand-rubbed oil finish", "Seats 8"],
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&q=80",
  },
  {
    id: 2,
    name: "Rangka Tempat Tidur Minimalis",
    material: "Kayu Mahoni Solid",
    dimensions: "Queen/King available",
    price: "Mulai Rp 12.500.000",
    leadTime: "3-4 minggu",
    highlights: ["Floating design", "Integrated side tables", "No squeaks guaranteed"],
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
  },
  {
    id: 3,
    name: "Meja Kopi Live Edge",
    material: "Kayu Suar with steel legs",
    dimensions: "Varies (each piece unique)",
    price: "Rp 8.500.000 - 15.000.000",
    leadTime: "2-3 minggu",
    highlights: ["One-of-a-kind live edge", "Resin options available", "Industrial steel base"],
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80",
  },
  {
    id: 4,
    name: "Rak Buku Kolonial",
    material: "Kayu Jati Solid",
    dimensions: "120 x 40 x 200 cm",
    price: "Rp 14.000.000",
    leadTime: "4-5 minggu",
    highlights: ["Adjustable shelves", "Brass hardware", "Heirloom quality"],
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80",
  },
];

export function Products() {
  return (
    <SectionWrapper id="products" bgColor="warm-white">
      <Container>
        <SectionHeader
          headline="Signature Pieces"
          subheadline="Best sellers yang mendefinisikan craftsmanship kami"
        />

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl overflow-hidden shadow-lg card-hover"
              style={{ backgroundColor: colors.cream }}
            >
              {/* Image */}
              <div className="aspect-[16/10] img-zoom relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-4 py-1.5 rounded-full text-xs font-bold"
                    style={{ backgroundColor: 'rgba(46,46,46,0.85)', color: colors.warmWhite }}
                  >
                    Signature
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                {/* Title & Material */}
                <div className="mb-5">
                  <h3
                    className="font-heading text-xl font-bold transition-colors"
                    style={{ color: colors.charcoal }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm font-semibold mt-1" style={{ color: colors.wood }}>
                    {product.material}
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-5 text-sm" style={{ color: 'rgba(46,46,46,0.7)' }}>
                  <p>
                    <span className="font-semibold" style={{ color: colors.charcoal }}>Dimensi:</span>{' '}
                    {product.dimensions}
                  </p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Lead time: {product.leadTime}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {product.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm"
                      style={{ color: 'rgba(46,46,46,0.7)' }}
                    >
                      <span
                        className="w-2 h-2 rounded-full mr-3 shrink-0"
                        style={{ backgroundColor: colors.gold }}
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div
                  className="flex items-center justify-between pt-5"
                  style={{ borderTop: '1px solid rgba(46,46,46,0.1)' }}
                >
                  <div>
                    <span className="text-xs" style={{ color: 'rgba(46,46,46,0.5)' }}>Harga</span>
                    <p className="text-xl font-bold" style={{ color: colors.charcoal }}>
                      {product.price}
                    </p>
                  </div>
                  <button
                    className="flex items-center gap-1 font-semibold transition-colors hover:opacity-80"
                    style={{ color: colors.wood }}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-14">
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 font-bold px-8 py-4 rounded-xl transition-all hover:opacity-80"
            style={{ borderColor: colors.wood, color: colors.wood }}
          >
            Lihat Semua Produk
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </Container>
    </SectionWrapper>
  );
}
