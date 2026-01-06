import { Leaf } from 'lucide-react';
import { SectionWrapper, Container, SectionHeader } from '../ui/SectionWrapper';
import { WoodCard } from '../ui/Card';

const colors = {
  charcoal: '#2E2E2E',
  warmWhite: '#FAF8F5',
};

const woods = [
  {
    id: "jati",
    name: "Kayu Jati",
    latin: "Tectona grandis",
    origin: "Perhutani certified, Jawa Tengah",
    characteristics: "Golden brown, extremely durable, natural oils resist insects & moisture",
    bestFor: "Outdoor furniture, dining tables, beds",
    priceTier: "Premium",
    funFact: "Makin tua, warna makin deep dan character makin kuat",
    color: "#B8860B",
  },
  {
    id: "mahoni",
    name: "Kayu Mahoni",
    latin: "Swietenia macrophylla",
    origin: "Sustainable plantation, Jawa Barat",
    characteristics: "Reddish-brown, straight grain, easy to work with",
    bestFor: "Cabinets, bookshelves, classic furniture",
    priceTier: "Mid-Premium",
    funFact: "Favorite wood untuk furniture klasik sejak era kolonial",
    color: "#8B4513",
  },
  {
    id: "merbau",
    name: "Kayu Merbau",
    latin: "Intsia bijuga",
    origin: "Certified sustainable, Papua",
    characteristics: "Deep red-brown, very hard, beautiful natural luster",
    bestFor: "Flooring, heavy-duty furniture, accent pieces",
    priceTier: "Premium",
    funFact: "Salah satu kayu terkeras dari Indonesia",
    color: "#5D3A1A",
  },
  {
    id: "sungkai",
    name: "Kayu Sungkai",
    latin: "Peronema canescens",
    origin: "Sumatra & Kalimantan",
    characteristics: "Light colored, strong, takes stain well",
    bestFor: "Contemporary furniture, painted pieces",
    priceTier: "Value",
    funFact: "Pilihan tepat untuk furniture modern minimalis",
    color: "#D2B48C",
  },
];

export function Materials() {
  return (
    <SectionWrapper id="materials" bgColor="warm-white">
      <Container>
        <SectionHeader
          headline="Kayu Pilihan dari Hutan Indonesia"
          subheadline="Setiap kayu punya karakteristik unik"
        />

        {/* Wood Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {woods.map((wood) => (
            <WoodCard key={wood.id} wood={wood} />
          ))}
        </div>

        {/* Sustainability Note */}
        <div
          className="mt-14 rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-5"
          style={{ background: 'linear-gradient(to right, #dcfce7, #F5F0E8)' }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: '#bbf7d0' }}
          >
            <Leaf className="w-7 h-7" style={{ color: '#16a34a' }} />
          </div>
          <div>
            <h4
              className="font-heading font-bold text-lg mb-2"
              style={{ color: colors.charcoal }}
            >
              Komitmen Keberlanjutan
            </h4>
            <p style={{ color: 'rgba(46,46,46,0.7)' }}>
              Semua kayu kami bersumber dari hutan yang dikelola berkelanjutan (SVLK certified) atau plantation. Kami menolak kayu dari illegal logging.
            </p>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
