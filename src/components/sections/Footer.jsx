import { Instagram, Youtube } from 'lucide-react';

const colors = {
  wood: '#5D4037',
  woodLight: '#8D6E63',
  woodDark: '#3E2723',
  charcoal: '#2E2E2E',
  gold: '#D4AF37',
  warmWhite: '#FAF8F5',
};

const PinterestIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

const collections = ["Living Room", "Dining", "Bedroom", "Workspace", "Outdoor"];
const services = ["Custom Order", "Workshop Visit", "Care & Warranty", "Designer Collaboration"];
const socials = [
  { name: "Instagram", url: "https://instagram.com/kayukarya.id", Icon: Instagram },
  { name: "Pinterest", url: "https://pinterest.com/kayukarya", Icon: PinterestIcon },
  { name: "YouTube", url: "https://youtube.com/@kayukarya", Icon: Youtube },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: colors.charcoal, color: colors.warmWhite }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${colors.woodLight}, ${colors.woodDark})` }}
              >
                <span className="font-heading text-xl font-bold" style={{ color: colors.gold }}>K</span>
              </div>
              <span className="font-heading text-xl font-bold">KayuKarya</span>
            </div>
            <p className="text-sm italic mb-2" style={{ color: 'rgba(250,248,245,0.6)' }}>
              &ldquo;Crafted with Soul, Built to Last&rdquo;
            </p>
            <p className="text-sm font-semibold" style={{ color: colors.gold }}>Est. 1995</p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: 'rgba(250,248,245,0.1)' }}
                  aria-label={social.name}
                >
                  <social.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Collections</h4>
            <ul className="space-y-3">
              {collections.map((item) => (
                <li key={item}>
                  <a
                    href="#collections"
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(250,248,245,0.6)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(250,248,245,0.6)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Contact</h4>
            <div className="space-y-3 text-sm" style={{ color: 'rgba(250,248,245,0.6)' }}>
              <p>Jl. Furniture No. 88</p>
              <p>Kelapa Gading, Jakarta Utara 14240</p>
              <p style={{ color: colors.gold }}>Workshop: Jepara, Jawa Tengah</p>
              <div className="pt-3">
                <p>0812-KAYUKARYA</p>
                <p>hello@kayukarya.id</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(250,248,245,0.1)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm" style={{ color: 'rgba(250,248,245,0.5)' }}>
              <span>© 2024 KayuKarya</span>
              <span>•</span>
              <span>Created by Creativism</span>
            </div>
            <div className="flex gap-6 text-sm">
              {["Privacy", "Terms"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition-colors"
                  style={{ color: 'rgba(250,248,245,0.5)' }}
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
