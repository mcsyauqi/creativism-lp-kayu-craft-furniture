import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Send } from 'lucide-react';
import { SectionWrapper, Container, SectionHeader } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { contactContent } from '../../data/content';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    inquiryType: '',
    category: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Terima kasih! Kami akan menghubungi Anda segera.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SectionWrapper id="contact" bgColor="warm-white">
      <Container>
        <SectionHeader
          headline={contactContent.headline}
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Nama *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream rounded-lg bg-warm-white text-charcoal placeholder-charcoal/40 focus:border-wood focus:ring-2 focus:ring-wood/20 transition-colors"
                    placeholder="Nama lengkap"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream rounded-lg bg-warm-white text-charcoal placeholder-charcoal/40 focus:border-wood focus:ring-2 focus:ring-wood/20 transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* WhatsApp */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream rounded-lg bg-warm-white text-charcoal placeholder-charcoal/40 focus:border-wood focus:ring-2 focus:ring-wood/20 transition-colors"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Jenis Inquiry *
                  </label>
                  <select
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream rounded-lg bg-warm-white text-charcoal focus:border-wood focus:ring-2 focus:ring-wood/20 transition-colors"
                  >
                    <option value="">Pilih jenis inquiry</option>
                    {contactContent.inquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Kategori Furniture
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream rounded-lg bg-warm-white text-charcoal focus:border-wood focus:ring-2 focus:ring-wood/20 transition-colors"
                  >
                    <option value="">Pilih kategori</option>
                    {contactContent.categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream rounded-lg bg-warm-white text-charcoal focus:border-wood focus:ring-2 focus:ring-wood/20 transition-colors"
                  >
                    <option value="">Pilih budget</option>
                    {contactContent.budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Pesan / Requirements
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-cream rounded-lg bg-warm-white text-charcoal placeholder-charcoal/40 focus:border-wood focus:ring-2 focus:ring-wood/20 transition-colors resize-none"
                  placeholder="Ceritakan kebutuhan furniture Anda..."
                />
              </div>

              {/* Submit */}
              <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
                <Send className="w-5 h-5 mr-2" />
                Kirim Inquiry
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Showroom */}
            <div className="bg-cream rounded-2xl p-6">
              <h4 className="font-heading font-bold text-charcoal text-lg mb-4">
                {contactContent.showroom.name}
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-wood flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-charcoal">{contactContent.showroom.address}</p>
                    <p className="text-charcoal">{contactContent.showroom.city}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-wood flex-shrink-0 mt-0.5" />
                  <p className="text-charcoal/70">{contactContent.showroom.hours}</p>
                </div>
              </div>
            </div>

            {/* Workshop */}
            <div className="bg-wood rounded-2xl p-6 text-warm-white">
              <h4 className="font-heading font-bold text-lg mb-4">
                Workshop
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p>{contactContent.workshop.location}</p>
                </div>
                <p className="text-warm-white/70 italic">
                  {contactContent.workshop.note}
                </p>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-cream rounded-2xl p-6">
              <h4 className="font-heading font-bold text-charcoal text-lg mb-4">
                Hubungi Langsung
              </h4>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/62812KAYUKARYA`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-charcoal hover:text-wood transition-colors"
                >
                  <Phone className="w-5 h-5 text-wood" />
                  <span>{contactContent.contact.whatsapp}</span>
                </a>
                <a
                  href={`mailto:${contactContent.contact.email}`}
                  className="flex items-center space-x-3 text-charcoal hover:text-wood transition-colors"
                >
                  <Mail className="w-5 h-5 text-wood" />
                  <span>{contactContent.contact.email}</span>
                </a>
                <a
                  href={`https://instagram.com/kayukarya.id`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-charcoal hover:text-wood transition-colors"
                >
                  <Instagram className="w-5 h-5 text-wood" />
                  <span>{contactContent.contact.instagram}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
