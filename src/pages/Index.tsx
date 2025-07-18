import React from 'react';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-custom-dark">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            
            {/* Main bio section */}
            <section className="space-y-4">
              <p className="text-white leading-relaxed font-semibold text-2xl opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                Juan Rodriguez Talavera trabaja en la intersección entre analítica digital, CRO, estrategia de producto y experiencia de usuario. Con base en Madrid, ha trabajado en equipos multidisciplinares con clientes de diferentes industrias y sectores.
              </p>
              
              <p className="text-white leading-relaxed font-semibold text-2xl opacity-0 animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                A lo largo de los años, ha trabajado tanto en cliente final como en agencia, liderando y gestionando proyectos de analítica digital, CRO y desarrollo de producto digital para compañías como Leroy Merlin, Repsol, Zara, Mango, Luzia, Mercadona, Enzo Ventures, Iberia, Hangar 51, El Confidencial o Coopeuch, entre otras.
              </p>
              
              <p className="text-white leading-relaxed font-semibold text-2xl opacity-0 animate-fade-in" style={{animationDelay: '1.0s', animationFillMode: 'forwards'}}>
                Interesado por la cultura organizativa, los procesos de trabajo, el liderazgo, la innovación y las operaciones, escribe y reflexiona sobre estos temas en su newsletter y podcast{" "}
                <a href="https://rodobo.es" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80 transition-colors">
                  Rodobo.es
                </a>
                {", un espacio desde el que explora cómo mejorar la forma en la que trabajamos, decidimos y colaboramos."}
              </p>
              
              <p className="text-white leading-relaxed font-medium text-xl opacity-0 animate-fade-in" style={{animationDelay: '1.4s', animationFillMode: 'forwards'}}>
                <a href="mailto:juanrodrigueztalavera@gmail.com" className="underline hover:text-white/80 transition-colors">
                  juanrodrigueztalavera@gmail.com
                </a>
                {" y "}
                <a href="https://www.linkedin.com/in/juanrodrigueztalavera/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80 transition-colors">
                  LinkedIn
                </a>
              </p>
            </section>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;