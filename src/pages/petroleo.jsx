import { useState } from "react";
//Petroleo
function ExtraccionPetroleo() {
  const [activeTab, setActiveTab] = useState("historia");
  
  const goTo = (link) => {
    window.location.href = `/${link}`;
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Cronología de eventos clave
  const timelineEvents = [
    { year: "1970s", event: "Primeras prospecciones sin resultados comerciales" },
    { year: "1990s", event: "Nuevas exploraciones sin hallazgos significativos" },
    { year: "2010", event: "Rockhopper Exploration anuncia el descubrimiento del yacimiento Sea Lion" },
    { year: "2024", event: "Actualización de recursos estimados por NSAI" },
    { year: "2025", event: "Decisión Final de Inversión (FID) prevista" },
    { year: "2027", event: "Inicio de producción proyectado" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Extracción de Petróleo en Malvinas</h1>
        <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
        <p className="text-gray-600 italic">Exploración, desarrollo y perspectivas del yacimiento Sea Lion</p>
      </header>

      {/* Navegación por pestañas */}
      <div className="flex mb-6 border-b border-gray-200">
        <button 
          onClick={() => handleTabChange("historia")}
          className={`py-2 px-4 font-medium text-sm ${activeTab === "historia" ? "text-black border-b-2 border-black" : "text-gray-500 hover:text-gray-800"}`}
        >
          Historia y Descubrimientos
        </button>
        <button 
          onClick={() => handleTabChange("recursos")}
          className={`py-2 px-4 font-medium text-sm ${activeTab === "recursos" ? "text-black border-b-2 border-black" : "text-gray-500 hover:text-gray-800"}`}
        >
          Recursos y Desarrollo
        </button>
        <button 
          onClick={() => handleTabChange("inversiones")}
          className={`py-2 px-4 font-medium text-sm ${activeTab === "inversiones" ? "text-black border-b-2 border-black" : "text-gray-500 hover:text-gray-800"}`}
        >
          Inversiones y Riesgos
        </button>
      </div>

      {/* Contenido de pestañas */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {activeTab === "historia" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Historia y Descubrimientos</h2>
            
            {/* Línea de tiempo */}
            <div className="relative">
              <div className="absolute left-0 w-1 bg-gray-300 h-full ml-4"></div>
              <div className="space-y-6 relative">
                {timelineEvents.map((item, index) => (
                  <div key={index} className="flex items-start ml-4">
                    <div className="absolute left-0 rounded-full w-8 h-8 flex items-center justify-center -ml-4 bg-gray-800 text-white shadow-md">
                      {index + 1}
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm ml-6 flex-1">
                      <span className="font-bold text-gray-800">{item.year}: </span>
                      <span className="text-gray-700">{item.event}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 bg-gray-50 p-4 rounded-lg border-l-4 border-black">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Descubrimiento de Sea Lion</h3>
              <p className="text-gray-700">En 2010, Rockhopper Exploration anunció el descubrimiento del yacimiento Sea Lion en aguas de la Cuenca Norte de Malvinas, tras flujos de prueba superiores a 2.000 bbl/d y un pozo productor de 53 m de columna de aceite.</p>
            </div>
          </div>
        )}

        {activeTab === "recursos" && (
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recursos y Fases de Desarrollo</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Recursos Estimados</h3>
                <div className="flex flex-col items-center mb-4">
                  <div className="w-32 h-32 rounded-full border-8 border-gray-200 relative mb-2">
                    <div className="absolute inset-0 rounded-full border-8 border-black border-r-transparent border-b-transparent border-l-transparent transform -rotate-45"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="block text-3xl font-bold text-gray-800">917</span>
                        <span className="text-sm text-gray-600">MMbbls</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-600">Recursos 2C recuperables</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border-8 border-gray-200 relative mb-2">
                    <div className="absolute inset-0 rounded-full border-8 border-blue-500 border-r-transparent border-b-transparent border-l-transparent transform -rotate-45"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="block text-2xl font-bold text-gray-800">2.1</span>
                        <span className="text-sm text-gray-600">TCF</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-600">Gas asociado</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Plan de Desarrollo</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    </div>
                    <p className="text-gray-700">307 millones de barriles recuperables en las fases 1 y 2</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    </div>
                    <p className="text-gray-700">Vida proyectada del yacimiento: 30 años</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    </div>
                    <p className="text-gray-700">23 pozos perforados desde una plataforma FPSO</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-800 mb-2">Actualización de Recursos</h3>
              <p className="text-gray-700">Según el informe independiente de NSAI de octubre de 2024, las estimaciones de recursos recuperables aumentaron un 16% respecto a enero de 2024, alcanzando los 917 MMbbls de recursos 2C recuperables y 2,1 TCF de gas.</p>
            </div>
          </div>
        )}

        {activeTab === "inversiones" && (
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Inversiones, Calendario y Riesgos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Inversión y Plazos</h3>
                <div className="mb-4 bg-gray-100 p-3 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div>
                      <span className="font-bold text-gray-800">Coste Estimado Fase 1:</span>
                      <span className="block text-gray-700 text-lg">1.400 millones USD</span>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-medium text-gray-700 mb-2">Fechas Clave:</h4>
                <div className="space-y-2">
                  <div className="flex items-center bg-white p-2 rounded shadow-sm">
                    <div className="w-12 text-center font-bold text-gray-800 border-r border-gray-200 pr-2">2025</div>
                    <div className="pl-3 text-gray-700">Decisión Final de Inversión (FID)</div>
                  </div>
                  <div className="flex items-center bg-white p-2 rounded shadow-sm">
                    <div className="w-12 text-center font-bold text-gray-800 border-r border-gray-200 pr-2">2027</div>
                    <div className="pl-3 text-gray-700">Inicio de producción previsto</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-red-800 mb-2">Riesgos Ambientales</h3>
                <div className="mb-3">
                  <p className="text-gray-700">ONG y científicos advierten sobre potenciales derrames que podrían devastar la rica biodiversidad marina del Atlántico Sur, desde peces bentónicos hasta mamíferos marinos y aves costeras.</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-medium text-gray-700 mb-2">Especies en riesgo:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600">Peces bentónicos</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600">Mamíferos marinos</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600">Aves costeras</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600">Ecosistemas marinos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-lg font-medium text-yellow-800 mb-2">Factores Condicionantes</h3>
              <p className="text-gray-700">La producción prevista para finales de 2027 está condicionada a aprobaciones ambientales y precios internacionales del crudo.</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="bg-white p-2 rounded shadow-sm">
                  <div className="font-medium text-gray-700">Aprobaciones ambientales</div>
                  <div className="text-sm text-yellow-600">Pendientes</div>
                </div>
                <div className="bg-white p-2 rounded shadow-sm">
                  <div className="font-medium text-gray-700">Precios del crudo</div>
                  <div className="text-sm text-yellow-600">Factor crítico</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <button 
          onClick={() => goTo("")}
          className="py-2 px-6 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors duration-200 flex items-center"
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

export default ExtraccionPetroleo;