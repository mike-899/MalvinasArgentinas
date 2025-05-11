import { Canvas } from '@react-three/fiber';
import { Box, Sphere, OrbitControls, useGLTF } from '@react-three/drei';
import { useState } from 'react';

function MainPage() {
  const [hoveredObject, setHoveredObject] = useState(null);
  const [cords, setCords] = useState({ x: 0, y: 0, z: 0 });
  const [cards, setCards] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePointerOver = (object) => {
    setHoveredObject(object);
  };

  const handlePointerOut = () => {
    setHoveredObject(null);
  };

  const handleClick = async (reverse, name, desc, img, url) => {
    if (!reverse) {
      for (let i = cords.x; i >= -3; i -= 0.1) {
        setCords(prev => ({ ...prev, x: i }));
        await new Promise(resolve => setTimeout(resolve, 16));
      }
      generateCard(name, desc, img, url);
    } else {
      for (let i = cords.x; i <= 0; i += 0.1) {
        setCords(prev => ({ ...prev, x: i }));
        await new Promise(resolve => setTimeout(resolve, 16));
        removeCard();
      }
    }
  };
  
  const goTo = (link) => {
    window.location.href = `/${link}`;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function Model({ modelPath, ...props }) {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} {...props} />;
  }

  const generateCard = (name, desc, img, url) => {
    const newCard = {
      title: name,
      image: img,
      content: desc,
      url: url,
    };
    setCards([newCard]);
  };

  const removeCard = () => {
    setCards([]);
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      {/* Header with improved styling */}
      <header className="w-full bg-blue-900 text-white shadow-lg z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Home button */}
            <button 
              onClick={() => goTo("")}
              className="p-2 rounded-full bg-blue-800 hover:bg-blue-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </button>
            <h1 className="text-xl font-bold">Malvinas Argentinas</h1>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded bg-blue-800 hover:bg-blue-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <button 
              className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-600 transition-colors"
              onClick={() => window.location.href = "/malvinas"}
            >
              Islas Malvinas
            </button>
            <button 
              className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-600 transition-colors"
              onClick={() => goTo("pesca")}
            >
              Pesca
            </button>
            <button 
              className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-600 transition-colors"
              onClick={() => goTo("mineria")}
            >
              Minería
            </button>
            <button 
              className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-600 transition-colors"
              onClick={() => goTo("petroleo")}
            >
              Extracción de Petróleo
            </button>
            <button 
              className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-600 transition-colors"
              onClick={() => goTo("aguaDulce")}
            >
              Extracción de Agua Dulce
            </button>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-800 pb-4 px-4">
            <div className="flex flex-col space-y-2">
              <button 
                className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-600 transition-colors text-left"
                onClick={() => window.location.href = "/malvinas"}
              >
                Islas Malvinas
              </button>
              <button 
                className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-600 transition-colors text-left"
                onClick={() => goTo("pesca")}
              >
                Pesca
              </button>
              <button 
                className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-600 transition-colors text-left"
                onClick={() => goTo("mineria")}
              >
                Minería
              </button>
              <button 
                className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-600 transition-colors text-left"
                onClick={() => goTo("petroleo")}
              >
                Extracción de Petróleo
              </button>
              <button 
                className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-600 transition-colors text-left"
                onClick={() => goTo("aguaDulce")}
              >
                Extracción de Agua Dulce
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <div className="flex-1 relative overflow-hidden">
        {/* 3D Canvas */}
        <Canvas
          style={{
            width: '100%',
            height: '100%',
            background: '#1e1e1e'
          }}
        >
          <OrbitControls enableZoom={true} enablePan={true} />
          
          {/* Malvinas map */}
          <Box
            position={[cords.x, cords.y, cords.z+0.1]}    
            args={[4, 3, 0.015]}
            castShadow
            onPointerOver={() => handlePointerOver({ 
              title: 'Malvinas', 
              description: 'Descripción de las islas Malvinas, un archipiélago en el Atlántico Sur reclamado por Argentina.', 
              image: 'malvinas.jpg' 
            })}
            onPointerOut={handlePointerOut}
            onClick={() => handleClick(true)}
          >
            <meshStandardMaterial color="#50afd1" />
          </Box>
          
          <Model 
            modelPath="/src/assets/models/Ocean.glb"
            position={[0, 0, -.21]}   
            rotation={[90 * (Math.PI/180), 0, 0]}
            castShadow
            scale={10}
          />

          <Model 
            modelPath="/src/assets/models/Malvinas.glb"
            position={[cords.x, cords.y, cords.z+0.1]}    
            rotation={[90 * (Math.PI/180), 0, 0]}
            castShadow
            scale={0.0065}
          />
          
          {/* Pesca */}
          <Sphere
            position={[cords.x-2, cords.y+2, cords.z]}
            args={[0.5, 32, 32]}
            onPointerOver={() => handlePointerOver({ 
              title: 'Pesca', 
              description: 'Es el pilar de la economía local, representando cerca del 40% del PIB y garantizando la mayor parte de los ingresos del Gobierno a través de cuotas de calamar y merluza.', 
              image: '/src/assets/images/Pesca.jpg' 
            })}
            onPointerOut={handlePointerOut}
            onClick={() => handleClick(false, 'Pesca', 'La pesca es la principal actividad económica de las Islas Malvinas, representando aproximadamente el 60% de su Producto Bruto Interno (PBI). Las aguas circundantes al archipiélago son ricas en recursos marinos, siendo el calamar, especialmente las especies Illex argentinus y Loligo gahi, el principal recurso explotado. En 2023, se otorgaron 106 licencias de pesca, y las capturas de calamar superaron las 100.000 toneladas, marcando uno de los niveles más altos en décadas. La mayoría de las capturas se exportan a la Unión Europea, principalmente a través del puerto de Vigo, en España. Sin embargo, la actividad pesquera enfrenta desafíos como la sobreexplotación y la pesca ilegal, especialmente en áreas como el "Agujero Azul", donde la falta de regulación ha permitido un aumento significativo de embarcaciones pesqueras, afectando la biodiversidad marina.', '/src/assets/images/Pesca.jpg', 'pesca')}
          >
            <meshStandardMaterial color="#50afd1" />
          </Sphere>
          <Model 
            modelPath="/src/assets/models/Pesca.glb"
            position={[cords.x-2, cords.y+2, cords.z+0.3]}   
            rotation={[90 * (Math.PI/180), 0, 0]}
            castShadow
            scale={1}
          />
          
          {/* Minería */}
          <Sphere
            position={[cords.x+2, cords.y+2, cords.z]}
            args={[0.5, 32, 32]}
            onPointerOver={() => handlePointerOver({ 
              title: 'Minería', 
              description: 'A día de hoy no hay explotaciones comerciales activas; en julio de 2023 se concedió una licencia exclusiva de exploración de oro a Warrah Resources, pero los proyectos en tierra siguen en fase de prospección.', 
              image: '/src/assets/images/Mineria.jpg' 
            })}
            onPointerOut={handlePointerOut}
            onClick={() => handleClick(false, 'Minería', 'A diferencia del petróleo, la minería en las Malvinas aún no se desarrolla a gran escala. Sin embargo, se han realizado estudios exploratorios en busca de minerales como oro, cobre y tierras raras, que son muy valiosos para la industria tecnológica. Si llegara a explotarse, la minería podría generar serios impactos ambientales, especialmente en un ecosistema frágil como el de las islas. Además, cualquier proyecto en este sentido sería igualmente rechazado por Argentina, al considerarlo una violación de su soberanía.', '/src/assets/images/Mineria.jpg', 'mineria')}
          >
            <meshStandardMaterial color="#000000" />
          </Sphere>
          <Model 
            modelPath="/src/assets/models/Mineria.glb"
            position={[cords.x+2, cords.y+2, cords.z+0.5]}   
            rotation={[90 * (Math.PI/180), 0, 0]}
            castShadow
            scale={1}
          />
          
          {/* Petróleo */}
          <Sphere
            position={[cords.x-2, cords.y-2, cords.z]}
            args={[0.5, 32, 32]}
            onPointerOver={() => handlePointerOver({ 
              title: 'Extracción Petróleo', 
              description: 'El proyecto Sea Lion, liderado por Navitas y Rockhopper, apunta a un FID a mediados de 2025 para una primera fase de 55.000 barriles diarios, con el objetivo de ponerlo en producción a finales de esta década.', 
              image: '/src/assets/images/Petroleo.jpg' 
            })}
            onPointerOut={handlePointerOut}
            onClick={() => handleClick(false, 'Extracción de Petróleo', 'En los últimos años, se han identificado importantes reservas de petróleo en el área marítima al norte de las Islas Malvinas. El proyecto más destacado es el yacimiento Sea Lion, ubicado a unos 240 kilómetros al norte de Puerto Argentino. Se estima que contiene alrededor de 1.700 millones de barriles de petróleo, con planes iniciales para extraer 500 millones de barriles en las próximas décadas. La empresa israelí Navitas Petroleum, en asociación con la británica Rockhopper Exploration, lidera este proyecto. Sin embargo, la explotación de estos recursos ha generado tensiones diplomáticas, ya que Argentina considera ilegales estas actividades en un territorio cuya soberanía está en disputa.','/src/assets/images/Petroleo.jpg', 'petroleo')}
          >
            <meshStandardMaterial color="yellow" />
          </Sphere>
          <Model 
            modelPath="/src/assets/models/Petroleo.glb"
            position={[cords.x-2, cords.y-2, cords.z+0.5]}   
            rotation={[90 * (Math.PI/180), 0, 0]}
            castShadow
            scale={1}
          />
          
          {/* Agua Dulce */}
          <Sphere
            position={[cords.x+2, cords.y-2, cords.z+0.4]}
            args={[0.5, 32, 32]}
            onPointerOver={() => handlePointerOver({ 
              title: 'Extracción Agua Dulce', 
              description: 'El suministro de Stanley depende enteramente de la captación de lluvia en los embalses de Murrell y Moody Brook, aprovechando una pluviometría anual suficiente para cubrir la demanda doméstica y pública.', 
              image: '/src/assets/images/AguaDulce.jpg' 
            })}
            onPointerOut={handlePointerOut}
            onClick={() => handleClick(false, 'Extracción de Agua Dulce', 'Las Islas Malvinas, ubicadas en el Atlántico Sur, cuentan con un clima frío y húmedo que facilita la recolección de agua de lluvia. La principal fuente de agua dulce para la población es la captación de agua de lluvia, almacenada en embalses y cisternas. Esta práctica es común en áreas con precipitaciones regulares y baja densidad poblacional, como es el caso de las Malvinas. El Lago Sulivan, situado en la isla Gran Malvina, es el cuerpo de agua dulce más grande del archipiélago, aunque de tamaño modesto. A pesar de su tamaño, no se utiliza para el consumo humano, pero representa una importante reserva natural de agua dulce en la región.', '/src/assets/images/AguaDulce.jpg', 'aguaDulce')}
          >
            <meshStandardMaterial color="purple" />
          </Sphere>
          <Model 
            modelPath="/src/assets/models/AguaDulce.glb"
            position={[cords.x+2, cords.y-2, cords.z+0.6]}   
            rotation={[90 * (Math.PI/180), 0, 0]}
            castShadow
            scale={1}
          />
          
          {/* Lighting */}
          <directionalLight position={[4, 4, 4]} intensity={3} />
          <ambientLight intensity={0.4} />
        </Canvas>

        {/* Hover tooltip with improved styling */}
        {hoveredObject && (
          <div className="absolute top-4 left-4 bg-black bg-opacity-80 text-white p-4 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-lg font-bold mb-2">{hoveredObject.title}</h3>
            <p className="mb-3 text-sm">{hoveredObject.description}</p>
            <img 
              src={hoveredObject.image} 
              alt={hoveredObject.title} 
              className="w-full h-32 object-cover rounded-md"
            />
          </div>
        )}

        {/* Info cards with improved styling */}
        <div className="absolute top-6 right-6 w-96 max-w-full">
          {cards.map(card => (
            <div key={card.title} className="bg-white rounded-xl shadow-xl p-6 transition-all duration-300 transform hover:scale-105">
              <h2 className="text-2xl font-bold text-blue-900 mb-3">{card.title}</h2>
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 shadow"
                />
              )}
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">{card.content}</p>
              <div className="flex justify-between items-center">
                <button 
                  className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md flex items-center"
                  onClick={() => goTo(card.url)}
                >
                  <span>Ver más sobre {card.title}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button 
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                  onClick={() => handleClick(true)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;