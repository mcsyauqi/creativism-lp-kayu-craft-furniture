import { Check, X } from 'lucide-react';
import { SectionWrapper, Container, SectionHeader } from '../ui/SectionWrapper';

const colors = {
  wood: '#5D4037',
  woodDark: '#3E2723',
  charcoal: '#2E2E2E',
  gold: '#D4AF37',
  warmWhite: '#FAF8F5',
};

const paragraphs = [
  "Ada alasan kenapa furniture antik bisa bertahan ratusan tahun - mereka dibuat dari kayu solid dengan teknik joinery yang benar. Di KayuKarya, kami tidak mengambil shortcut. Tidak ada particle board yang disembunyikan, tidak ada staples yang akan lepas.",
  "Kayu solid bukan hanya lebih kuat. Ia punya karakter - grain yang unik, warna yang makin indah seiring waktu, aroma yang khas. Setiap piece adalah one-of-a-kind karena tidak ada dua pohon yang identik.",
  "Memang lebih mahal dari furniture factory-made. Tapi cost-per-year sebenarnya lebih murah karena bisa bertahan puluhan tahun. Dan yang tidak bisa diukur dengan uang - kebanggaan memiliki sesuatu yang dibuat dengan care.",
];

const comparisons = [
  { title: "Real Wood vs Particle Board", kayukarya: "Kayu solid utuh, kuat, tahan lama", others: "Serbuk kayu dipress, mudah rusak" },
  { title: "Traditional Joinery vs Screws", kayukarya: "Mortise & tenon, sambungan permanen", others: "Sekrup & staples, longgar seiring waktu" },
  { title: "Aging Beautifully vs Deteriorating", kayukarya: "Patina indah, character bertambah", others: "Mengelupas, bengkak, rusak" },
];

export function Philosophy() {
  return (
    <SectionWrapper id="philosophy" bgColor="cream">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Master craftsman selecting wood"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div
              className="absolute -bottom-6 -right-6 p-7 rounded-2xl shadow-xl"
              style={{ backgroundColor: colors.wood }}
            >
              <div className="text-4xl font-heading font-bold" style={{ color: colors.gold }}>
                30+
              </div>
              <div className="text-base" style={{ color: colors.warmWhite }}>
                Tahun Pengalaman
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <SectionHeader
              headline="Kenapa Kayu Solid?"
              subheadline="Dalam dunia furniture particle board dan veneer, kami tetap bertahan dengan kayu solid"
              centered={false}
            />

            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="leading-relaxed text-base"
                  style={{ color: 'rgba(46,46,46,0.8)' }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Comparisons */}
        <div className="mt-24">
          <h3
            className="font-heading text-2xl font-bold text-center mb-12"
            style={{ color: colors.charcoal }}
          >
            Perbedaan yang Terlihat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {comparisons.map((comparison, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg"
                style={{ backgroundColor: colors.warmWhite }}
              >
                <div
                  className="p-6"
                  style={{
                    background: `linear-gradient(to right, ${colors.wood}, ${colors.woodDark})`
                  }}
                >
                  <h4
                    className="font-heading font-bold text-lg"
                    style={{ color: colors.warmWhite }}
                  >
                    {comparison.title}
                  </h4>
                </div>
                <div className="p-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: '#dcfce7' }}
                    >
                      <Check className="w-4 h-4" style={{ color: '#16a34a' }} />
                    </div>
                    <div>
                      <span
                        className="text-xs uppercase tracking-wider font-bold"
                        style={{ color: colors.gold }}
                      >
                        KayuKarya
                      </span>
                      <p className="font-medium mt-1" style={{ color: colors.charcoal }}>
                        {comparison.kayukarya}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: '#fee2e2' }}
                    >
                      <X className="w-4 h-4" style={{ color: '#dc2626' }} />
                    </div>
                    <div>
                      <span
                        className="text-xs uppercase tracking-wider font-bold"
                        style={{ color: 'rgba(46,46,46,0.5)' }}
                      >
                        Lainnya
                      </span>
                      <p className="mt-1" style={{ color: 'rgba(46,46,46,0.6)' }}>
                        {comparison.others}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
