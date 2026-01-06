import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const colors = {
  wood: '#5D4037',
  woodLight: '#8D6E63',
  woodDark: '#3E2723',
  charcoal: '#2E2E2E',
  gold: '#D4AF37',
  warmWhite: '#FAF8F5',
  cream: '#F5F0E8',
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Koleksi', href: '#collections' },
    { name: 'Produk', href: '#products' },
    { name: 'Custom Order', href: '#custom-order' },
    { name: 'Workshop', href: '#workshop' },
    { name: 'Tentang Kami', href: '#philosophy' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(250,248,245,0.97)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
        padding: isScrolled ? '12px 0' : '20px 0',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${colors.woodLight}, ${colors.woodDark})`
              }}
            >
              <span className="font-heading text-xl font-bold" style={{ color: colors.gold }}>
                K
              </span>
            </div>
            <span
              className="font-heading text-xl font-bold"
              style={{ color: isScrolled ? colors.charcoal : colors.warmWhite }}
            >
              KayuKarya
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold transition-colors duration-200"
                style={{
                  color: isScrolled ? colors.charcoal : 'rgba(250,248,245,0.9)',
                }}
                onMouseEnter={(e) => e.target.style.color = colors.gold}
                onMouseLeave={(e) => e.target.style.color = isScrolled ? colors.charcoal : 'rgba(250,248,245,0.9)'}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="https://wa.me/62812KAYUKARYA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: isScrolled ? colors.charcoal : colors.warmWhite }}
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg text-sm font-bold transition-all"
              style={{
                backgroundColor: isScrolled ? colors.wood : colors.warmWhite,
                color: isScrolled ? colors.warmWhite : colors.wood,
              }}
            >
              Inquiry
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg"
            style={{ color: isScrolled ? colors.charcoal : colors.warmWhite }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="lg:hidden mt-4 pb-4 rounded-2xl shadow-xl animate-fade-in"
            style={{ backgroundColor: colors.warmWhite }}
          >
            <div className="px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 font-semibold transition-colors"
                  style={{ color: colors.charcoal }}
                >
                  {link.name}
                </a>
              ))}
              <hr style={{ borderColor: colors.cream, margin: '12px 0' }} />
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="https://wa.me/62812KAYUKARYA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold"
                  style={{ color: colors.charcoal }}
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="#contact"
                  className="block text-center py-3 rounded-lg font-bold"
                  style={{ backgroundColor: colors.wood, color: colors.warmWhite }}
                >
                  Inquiry
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
