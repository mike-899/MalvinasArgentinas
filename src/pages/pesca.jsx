import { useState } from "react";
//pesca
function Pesca() {

  const [activeTab, setActiveTab] = useState("especies");
  
  const goTo = (link) => {
    window.location.href = `/${link}`;
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-50 rounded-lg shadow-lg" >
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Pesca en las Islas Malvinas</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600 italic">Recursos marinos, gestión y economía</p>
      </header>

      {/* Navegación por pestañas */}
      <div className="flex mb-6 border-b border-gray-200">
        <button 
          onClick={() => handleTabChange("especies")}
          className={`py-2 px-4 font-medium text-sm ${activeTab === "especies" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"}`}
        >
          Especies y Volúmenes
        </button>
        <button 
          onClick={() => handleTabChange("gestion")}
          className={`py-2 px-4 font-medium text-sm ${activeTab === "gestion" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"}`}
        >
          Gestión y Sostenibilidad
        </button>
        <button 
          onClick={() => handleTabChange("economia")}
          className={`py-2 px-4 font-medium text-sm ${activeTab === "economia" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"}`}
        >
          Impacto Económico
        </button>
      </div>

      {/* Contenido de pestañas */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {activeTab === "especies" && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Especies y Volúmenes</h2>
            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 p-4 rounded-lg flex-1">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Calamar de Illex</h3>
                <p className="text-gray-700">Las aguas frías circundantes son especialmente ricas en calamar (<em>Illex argentinus</em>), que alcanza un calibre óptimo de 27–32 cm con un rendimiento premium del 80% en mercados europeos de alta gama.</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg flex-1">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Calamar de Loligo</h3>
                <p className="text-gray-700">El <em>Loligo gahi</em> es otra especie importante; la flota moderna procesa alrededor de 800 toneladas diarias de calamar combinado.</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-yellow-800">
                <strong>Alerta de conservación:</strong> En la temporada 2023, se cerró anticipadamente la pesca de L. gahi tras estudios que estimaron la biomasa por debajo del umbral seguro, medida que busca preservar la reproducción de la especie.
              </p>
            </div>
          </div>
        )}

        {activeTab === "gestion" && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Gestión y Sostenibilidad</h2>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-medium text-green-800 mb-2">Sistema de Cuotas</h3>
              <p className="text-gray-700">El Departamento de Pesca de las Islas Malvinas aplica un sistema de Cuotas Individuales Transferibles (ITQ) para 15 pesquerías diferentes.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-medium text-green-800 mb-2">Evaluaciones Científicas</h3>
              <p className="text-gray-700">Se realizan evaluaciones científicas pos-temporada basadas en estudios de arrastre fijos que en 2023 midieron capturas científicas de 41,38 t de <em>Doryteuthis gahi</em>.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-green-800 mb-2">Protección Ecológica</h3>
              <p className="text-gray-700">Las evaluaciones incluyen monitoreo de poblaciones de aves marinas y mamíferos, y protocolo de cierre de zonas (por ejemplo, la "Zona de Conservación Interior de Malvinas") cuando se detectan riesgos ecológicos.</p>
            </div>
          </div>
        )}

        {activeTab === "economia" && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Impacto Económico y Geopolítico</h2>
            <div className="flex gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg flex-1">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Importancia Económica</h3>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-32 h-32 rounded-full bg-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      <span className="block text-3xl font-bold text-blue-800">60%</span>
                      <span className="text-sm text-blue-600"> del PIB</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">La pesca aporta cerca del 60% del PIB insular y constituye más del 70% del presupuesto del gobierno local.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg flex-1">
                <h3 className="text-lg font-medium text-red-800 mb-2">Controversia Geopolítica</h3>
                <p className="text-gray-700">Las licencias son otorgadas por las autoridades británicas, lo que Argentina denuncia como una violación de su soberanía en foros internacionales.</p>
                <p className="text-gray-700 mt-2">Empresas de España, Taiwán y China operan bajo estas licencias, generando tensiones diplomáticas y pérdidas de regalías para Argentina, que reclama la titularidad de los derechos pesqueros.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <button 
          onClick={() => goTo("")}
          className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Volver a Islas Malvinas
        </button>
        
        <div className="text-sm text-gray-500">
          Última actualización: Mayo 2025
        </div>
      </div>
    </div>
  );
}

export default Pesca;