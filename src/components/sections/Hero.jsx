import { ArrowRight, TreeDeciduous, Hammer, Award, Shield } from 'lucide-react';

const colors = {
  wood: '#5D4037',
  charcoal: '#2E2E2E',
  gold: '#D4AF37',
  warmWhite: '#FAF8F5',
};

const badges = [
  { icon: TreeDeciduous, text: "100% Kayu Solid" },
  { icon: Hammer, text: "Handmade Joinery" },
  { icon: Award, text: "30+ Tahun Pengalaman" },
  { icon: Shield, text: "Garansi 10 Tahun" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80"
          alt="KayuKarya Furniture"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(46,46,46,0.95), rgba(46,46,46,0.75), rgba(46,46,46,0.5))'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left */}
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-0.5 w-14" style={{ backgroundColor: colors.gold }} />
                <span
                  className="font-bold tracking-widest text-sm uppercase"
                  style={{ color: colors.gold }}
                >
                  Handcrafted in Jepara, Indonesia Since 1995
                </span>
              </div>

              <h1
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8"
                style={{ color: colors.warmWhite }}
              >
                Furniture yang Diwariskan Lintas Generasi
              </h1>

              <p
                className="text-lg lg:text-xl mb-10 leading-relaxed max-w-xl"
                style={{ color: 'rgba(250,248,245,0.85)' }}
              >
                Setiap piece KayuKarya dibuat by hand oleh master craftsmen dengan kayu solid pilihan dan joinery tradisional. Bukan furniture yang diganti setiap 5 tahun - ini adalah investasi yang bisa Anda wariskan.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="#collections"
                  className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 btn-shine"
                  style={{ backgroundColor: colors.gold, color: colors.charcoal }}
                >
                  Lihat Koleksi
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#custom-order"
                  className="inline-flex items-center gap-2 border-2 font-bold px-8 py-4 rounded-xl transition-all hover:opacity-90"
                  style={{ borderColor: colors.warmWhite, color: colors.warmWhite }}
                >
                  Custom Order
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 backdrop-blur-sm rounded-xl px-5 py-4"
                    style={{ backgroundColor: 'rgba(250,248,245,0.12)' }}
                  >
                    <badge.icon className="w-6 h-6 shrink-0" style={{ color: colors.gold }} />
                    <span
                      className="text-sm font-semibold"
                      style={{ color: colors.warmWhite }}
                    >
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Featured Product */}
            <div className="hidden lg:block animate-fade-in">
              <div className="relative">
                <div
                  className="absolute -inset-5 rounded-3xl"
                  style={{ border: `2px solid rgba(212,175,55,0.3)` }}
                />
                <div
                  className="relative backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl"
                  style={{ backgroundColor: 'rgba(250,248,245,0.12)' }}
                >
                  <div className="aspect-[4/3]">
                    <img
                      src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&q=80"
                      alt="Meja Makan Jawa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-7">
                    <span className="text-sm font-bold" style={{ color: colors.gold }}>
                      Featured Piece
                    </span>
                    <h3
                      className="font-heading text-2xl font-bold mt-2"
                      style={{ color: colors.warmWhite }}
                    >
                      Meja Makan Jawa
                    </h3>
                    <p className="text-sm mt-2" style={{ color: 'rgba(250,248,245,0.7)' }}>
                      Kayu Jati Solid • Traditional Joinery
                    </p>
                    <div
                      className="flex items-center justify-between mt-5 pt-5"
                      style={{ borderTop: '1px solid rgba(250,248,245,0.2)' }}
                    >
                      <span className="font-bold text-xl" style={{ color: colors.warmWhite }}>
                        Rp 18.500.000
                      </span>
                      <a
                        href="#products"
                        className="flex items-center gap-1 text-sm font-bold hover:underline"
                        style={{ color: colors.gold }}
                      >
                        View Details <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div
          className="w-8 h-12 rounded-full flex justify-center pt-2"
          style={{ border: '2px solid rgba(250,248,245,0.5)' }}
        >
          <div
            className="w-2 h-3 rounded-full"
            style={{ backgroundColor: 'rgba(250,248,245,0.7)' }}
          />
        </div>
      </div>
    </section>
  );
}
