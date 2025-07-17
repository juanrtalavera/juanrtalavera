
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
              <p className="text-white text-lg leading-relaxed font-light">
                Laura San Segundo (b. 1990, Madrid) is an artist, freelance photographer, art director and educator, currently based in Madrid after different stays in London, Paris, Reykjavik and Tokyo.
              </p>
              
              <p className="text-white text-lg leading-relaxed font-light">
                She studied Fine Arts at Madrid's Complutense University and Photography at London's Camberwell College of Arts, followed by an MA at Efti International School of Photography and Cinema, where she was awarded a scholarship. Her personal projects have since run alongside commissioned work for brands and clients in the fields of art and design, alongside her teaching roles at institutions such as the European Institute of Design, Lens School of Visual Arts, the Polytechnic University of Madrid, The New York University and the University of Design, Innovation and Technology (UDIT).
              </p>
              
              <p className="text-white text-lg leading-relaxed font-light">
                In the last years, she has been the recipient of several grants and fellowships and has participated in many exhibitions and festivals both in Spain and internationally, like the <em>London Serpentine Galleries 89+Marathon</em>, the <em>Korean International Photography Festival</em> or the <em>Portfolio Days & Night</em> of the Luxembourg Centre National de l'audiovisuel, among others. In 2023, she was nominated by PhotoESPAÑA to be part of the European Photography Platform <em>FUTURES</em> and was awarded with the Prize Fotolibro &lt;40 to publish her first photobook, shortlisted in 2024 in the <em>PhotoESPAÑA Award for Best Photography Book of the Year</em> and the <em>APHF Pick:24 Book Award</em> of the Athens Photo Festival.
              </p>
            </section>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
