
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
            <section className="space-y-8">
              <p 
                className="text-white leading-relaxed font-semibold text-xl"
                contentEditable
                suppressContentEditableWarning={true}
              >
                Juan Rodriguez Talavera trabaja en la intersección entre analítica digital, CRO, estrategia de producto y experiencia de usuario. Con base en Madrid, ha trabajado en equipos multidisciplinares con clientes de diferentes industrias y sectores.

Con formación multidisciplinar y un perfil entre datos, experiencia de usuario, negocio y tecnología, a lo largo de los años, ha trabajado tanto en cliente final como en agencia, liderando y gestionando proyectos de analítica digital, CRO y producto digital. Entre los clientes para los que ha trabajado se encuentran compañías como Leroy Merlin, Repsol, Zara, Mango, Luzia, Mercadona, Enzo Ventures, Iberia, Hangar 51, El Confidencial o Coopeuch, entre otras.

Interesado por la cultura organizativa, los procesos de trabajo, el liderazgo, la innovación y las operaciones, escribe y reflexiona sobre estos temas en su newsletter y podcast Rodobo.es, un espacio desde el que explora cómo mejorar la forma en la que trabajamos, decidimos y colaboramos.
              </p>
              
              <p 
                className="text-white leading-relaxed font-semibold text-xl"
                contentEditable
                suppressContentEditableWarning={true}
              >
                Su enfoque se centra en combinar metodologías ágiles con análisis de datos para optimizar la experiencia del usuario y maximizar las conversiones. Ha desarrollado frameworks propios para la medición del impacto de las mejoras en producto digital, trabajando estrechamente con equipos de desarrollo, diseño y marketing.
              </p>
              
              <p 
                className="text-white leading-relaxed font-semibold text-xl"
                contentEditable
                suppressContentEditableWarning={true}
              >
                Como consultor independiente, Juan ayuda a organizaciones a establecer procesos de optimización continua y a construir culturas data-driven. Su trabajo abarca desde la implementación de herramientas de analítica hasta la formación de equipos en metodologías de experimentación y testing.
              </p>
              
            </section>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
