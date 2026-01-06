import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

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
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-warm-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-wood-light to-wood-dark rounded-lg flex items-center justify-center">
              <span className="font-heading text-xl font-bold text-gold">K</span>
            </div>
            <div>
              <span className={`font-heading text-xl font-bold ${isScrolled ? 'text-charcoal' : 'text-warm-white'}`}>
                KayuKarya
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                  text-sm font-medium transition-colors duration-200
                  ${isScrolled
                    ? 'text-charcoal hover:text-wood'
                    : 'text-warm-white/90 hover:text-gold'
                  }
                `}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/62812KAYUKARYA"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center space-x-2 text-sm font-medium transition-colors
                ${isScrolled ? 'text-charcoal hover:text-wood' : 'text-warm-white hover:text-gold'}
              `}
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <Button variant={isScrolled ? 'primary' : 'white'} size="sm">
              Inquiry
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-charcoal' : 'text-warm-white'}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-warm-white rounded-2xl shadow-xl animate-fade-in">
            <div className="px-4 py-3 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-charcoal hover:text-wood py-2 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-cream" />
              <div className="flex flex-col space-y-3 pt-2">
                <a
                  href="https://wa.me/62812KAYUKARYA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-charcoal hover:text-wood"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <Button variant="primary" size="sm" className="w-full">
                  Inquiry
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
