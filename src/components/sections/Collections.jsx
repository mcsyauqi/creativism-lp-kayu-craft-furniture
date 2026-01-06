import { ArrowRight } from 'lucide-react';
import { SectionWrapper, Container, SectionHeader } from '../ui/SectionWrapper';

const colors = {
  charcoal: '#2E2E2E',
  gold: '#D4AF37',
  warmWhite: '#FAF8F5',
};

const collections = [
  {
    id: "living-room",
    name: "Living Room",
    products: ["Sofa frames", "Coffee tables", "TV consoles", "Bookshelves", "Side tables"],
    startingPrice: "Rp 3.500.000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    id: "dining",
    name: "Dining",
    products: ["Dining tables", "Dining chairs", "Bench", "Buffet", "Bar stools"],
    startingPrice: "Rp 4.500.000",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
  },
  {
    id: "bedroom",
    name: "Bedroom",
    products: ["Bed frames", "Nightstands", "Wardrobes", "Dressers", "Vanity"],
    startingPrice: "Rp 5.000.000",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
  },
  {
    id: "workspace",
    name: "Workspace",
    products: ["Desks", "Office chairs", "Filing cabinets", "Shelving units"],
    startingPrice: "Rp 2.800.000",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
  },
  {
    id: "outdoor",
    name: "Outdoor",
    products: ["Garden benches", "Outdoor dining", "Planters", "Deck chairs"],
    startingPrice: "Rp 3.000.000",
    note: "Semua outdoor furniture menggunakan kayu jati",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
  },
];

export function Collections() {
  return (
    <SectionWrapper id="collections" bgColor="cream">
      <Container>
        <SectionHeader
          headline="Koleksi Kami"
          subheadline="Ready stock dan made-to-order"
        />

        {/* Collection Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative rounded-2xl overflow-hidden shadow-xl card-hover cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] img-zoom">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(46,46,46,0.95), rgba(46,46,46,0.4), transparent)'
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div>
                  <h3
                    className="font-heading text-2xl font-bold mb-2"
                    style={{ color: colors.warmWhite }}
                  >
                    {collection.name}
                  </h3>
                  <p
                    className="text-sm mb-3"
                    style={{ color: 'rgba(250,248,245,0.7)' }}
                  >
                    {collection.products.join(' • ')}
                  </p>
                  {collection.note && (
                    <p
                      className="text-xs mb-3 italic"
                      style={{ color: colors.gold }}
                    >
                      {collection.note}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <span
                        className="text-xs"
                        style={{ color: 'rgba(250,248,245,0.6)' }}
                      >
                        Starting from
                      </span>
                      <p
                        className="font-bold"
                        style={{ color: colors.warmWhite }}
                      >
                        {collection.startingPrice}
                      </p>
                    </div>
                    <span
                      className="flex items-center gap-1 text-sm font-semibold group-hover:underline"
                      style={{ color: colors.gold }}
                    >
                      Explore
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
