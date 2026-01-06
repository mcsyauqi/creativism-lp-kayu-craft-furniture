import { Instagram, Youtube } from 'lucide-react';
import { footerContent } from '../../data/content';

// Pinterest icon component since lucide doesn't have it
const PinterestIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-wood-light to-wood-dark rounded-lg flex items-center justify-center">
                <span className="font-heading text-xl font-bold text-gold">K</span>
              </div>
              <span className="font-heading text-xl font-bold">
                {footerContent.brand.name}
              </span>
            </div>
            <p className="text-warm-white/60 text-sm italic mb-2">
              &ldquo;{footerContent.brand.tagline}&rdquo;
            </p>
            <p className="text-gold text-sm font-medium">
              {footerContent.brand.established}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {footerContent.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-warm-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors"
                  aria-label={social.name}
                >
                  {social.name === 'Instagram' && <Instagram className="w-5 h-5" />}
                  {social.name === 'Pinterest' && <PinterestIcon />}
                  {social.name === 'YouTube' && <Youtube className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Collections</h4>
            <ul className="space-y-2">
              {footerContent.collections.map((item) => (
                <li key={item}>
                  <a
                    href={`#collections`}
                    className="text-warm-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerContent.services.map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="text-warm-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-warm-white/60">
              <p>Jl. Furniture No. 88</p>
              <p>Kelapa Gading, Jakarta Utara 14240</p>
              <p className="text-gold">Workshop: Jepara, Jawa Tengah</p>
              <div className="pt-2">
                <p>0812-KAYUKARYA</p>
                <p>hello@kayukarya.id</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-warm-white/50">
              <span>{footerContent.copyright}</span>
              <span>•</span>
              <span>{footerContent.createdBy}</span>
            </div>
            <div className="flex space-x-6 text-sm">
              {footerContent.legal.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-warm-white/50 hover:text-gold transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
