import { ArrowRight } from 'lucide-react';
import { SectionWrapper, Container, SectionHeader } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { portfolioContent } from '../../data/content';

export function Portfolio() {
  return (
    <SectionWrapper id="portfolio" bgColor="cream">
      <Container>
        <SectionHeader
          headline={portfolioContent.headline}
          subheadline={portfolioContent.subheadline}
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioContent.projects.map((project, index) => (
            <div
              key={project.id}
              className={`
                group bg-warm-white rounded-2xl overflow-hidden shadow-lg card-hover
                ${index === 0 ? 'md:col-span-2' : ''}
              `}
            >
              <div className={`grid ${index === 0 ? 'md:grid-cols-2' : ''}`}>
                {/* Image */}
                <div className={`${index === 0 ? 'aspect-[16/9]' : 'aspect-video'} img-zoom`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-gold text-sm font-medium uppercase tracking-wider mb-2">
                    Project Highlight
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-charcoal mb-4 group-hover:text-wood transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-2 text-sm text-charcoal/70 mb-6">
                    <p>
                      <span className="font-medium text-charcoal">Scope:</span>{' '}
                      {project.scope}
                    </p>
                    <p>
                      <span className="font-medium text-charcoal">Pieces:</span>{' '}
                      {project.pieces}
                    </p>
                    {project.material && (
                      <p>
                        <span className="font-medium text-charcoal">Material:</span>{' '}
                        {project.material}
                      </p>
                    )}
                    {project.style && (
                      <p>
                        <span className="font-medium text-charcoal">Style:</span>{' '}
                        {project.style}
                      </p>
                    )}
                    {project.special && (
                      <p>
                        <span className="font-medium text-charcoal">Special:</span>{' '}
                        {project.special}
                      </p>
                    )}
                    {project.timeline && (
                      <p>
                        <span className="font-medium text-charcoal">Timeline:</span>{' '}
                        {project.timeline}
                      </p>
                    )}
                    {project.designer && (
                      <p className="italic text-wood">{project.designer}</p>
                    )}
                    {project.note && (
                      <p className="text-gold italic">{project.note}</p>
                    )}
                  </div>

                  <button className="flex items-center text-wood font-medium hover:text-wood-dark transition-colors self-start">
                    View Project
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="secondary" size="lg" icon>
            Lihat Portfolio Lengkap
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
}
