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
              <p className="text-white leading-relaxed font-semibold text-xl">
                Juan Rodriguez Talavera trabaja en la intersección entre analítica digital, CRO, estrategia de producto y experiencia de usuario. Con base en Madrid, ha trabajado en equipos multidisciplinares con clientes de diferentes industrias y sectores.
              </p>
              
              <p className="text-white leading-relaxed font-semibold text-xl">
                Escribe el segundo párrafo aquí...
              </p>
              
              <p className="text-white leading-relaxed font-semibold text-xl">
                Escribe el tercer párrafo aquí...
              </p>
              
              <p contentEditable style={{}} className="text-white leading-relaxed font-semibold text-xl" suppressContentEditableWarning={true}>
                Escribe el cuarto párrafo aquí...
              </p>
            </section>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;