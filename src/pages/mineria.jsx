import { useState } from "react";
//mineria
function Mineria() {
  const [activeTab, setActiveTab] = useState("geologia");
  
  const goTo = (link) => {
    window.location.href = `/${link}`;
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-amber-50 rounded-lg shadow-lg">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-amber-800 mb-2">Minería en las Islas Malvinas</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-4"></div>
        <p className="text-gray-600 italic">Exploración, recursos y marco regulatorio</p>
      </header>

      {/* Navegación por pestañas */}
      <div className="flex mb-6 border-b border-gray-200">
        <button 
          onClick={() => handleTabChange("geologia")}
          className={`py-2 px-4 font-medium text-sm ${activeTab === "geologia" ? "text-amber-600 border-b-2 border-amber-600" : "text-gray-500 hover:text-amber-500"}`}
        >
          Contexto Geológico
        </button>
        <button 
          onClick={() => handleTabChange("recursos")}
          className={`py-2 px-4 font-medium text-sm ${activeTab === "recursos" ? "text-amber-600 border-b-2 border-amber-600" : "text-gray-500 hover:text-amber-500"}`}
        >
          Potenciales Recursos
        </button>
        <button 
          onClick={() => handleTabChange("regulacion")}
          className={`py-2 px-4 font-medium text-sm ${activeTab === "regulacion" ? "text-amber-600 border-b-2 border-amber-600" : "text-gray-500 hover:text-amber-500"}`}
        >
          Aspectos Regulatorios
        </button>
      </div>

      {/* Contenido de pestañas */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {activeTab === "geologia" && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-700 mb-4">Contexto Geológico y Exploraciones</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-amber-100 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-amber-800 mb-2">Composición Geológica</h3>
                <p className="text-gray-700">El sustrato de las islas está compuesto por rocas paleozoicas con depósitos de lignito y filones aluviales de oro, además de indicios de cobre, tungsteno y minerales de tierras raras en antiguas terrazas marinas elevadas.</p>
              </div>
              
              <div className="bg-amber-100 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-amber-800 mb-2">Minerales Identificados</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Oro aluvial</li>
                  <li>Lignito</li>
                  <li>Cobre</li>
                  <li>Tungsteno</li>
                  <li>Tierras raras</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
              <h3 className="text-lg font-medium text-amber-800 mb-2">Exploración Reciente</h3>
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center mr-3">
                  <span className="font-bold text-amber-800">2023</span>
                </div>
                <p className="text-gray-700">En julio de 2023, Warrah Resources obtuvo una licencia exclusiva para explorar oro y otros minerales en gran parte del territorio.</p>
              </div>
              <p className="text-gray-700">La empresa ha iniciado muestreos y mapeos geofísicos utilizando métodos de bajo impacto ambiental para preservar el ecosistema local.</p>
            </div>
          </div>
        )}

        {activeTab === "recursos" && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-700 mb-4">Potenciales Recursos y Viabilidad</h2>
            
            <div className="bg-amber-50 p-5 rounded-lg mb-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 rounded-full border-8 border-amber-200"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-red-400 border-t-transparent border-r-transparent border-b-transparent transform rotate-45"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-red-600">Baja</span>
                      <span className="text-sm text-gray-600">Rentabilidad</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-amber-800 mb-3">Evaluación de Viabilidad</h3>
                  <p className="text-gray-700 mb-3">Aunque los estudios indican concentraciones puntuales de oro en turberas y depósitos aluviales, el elevado costo logístico y la dispersión de los yacimientos hacen que, por ahora, la explotación comercial a gran escala no sea rentable.</p>
                  <div className="bg-gray-100 p-3 rounded">
                    <h4 className="font-medium text-gray-700 mb-1">Factores limitantes:</h4>
                    <ul className="list-disc pl-5 text-gray-600 text-sm">
                      <li>Costos logísticos elevados</li>
                      <li>Yacimientos dispersos</li>
                      <li>Concentraciones irregulares</li>
                      <li>Limitaciones de infraestructura</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-green-800 mb-2">Requisitos Ambientales</h3>
              <p className="text-gray-700 mb-3">El Departamento de Recursos Minerales exige Evaluaciones de Impacto Ambiental (EIA) con consulta pública de al menos 42 días y planes de mitigación rigurosos antes de cualquier perforación.</p>
              <div className="flex items-center gap-3 text-sm text-green-700 bg-green-100 p-2 rounded">
                <span>Período de consulta pública: 42 días mínimo</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "regulacion" && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-700 mb-4">Aspectos Regulatorios y Conflictos</h2>
            
            <div className="bg-red-50 p-5 rounded-lg mb-5">
              <h3 className="text-lg font-medium text-red-800 mb-3">Conflicto de Soberanía</h3>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-red-100 flex items-center justify-center">
                </div>
                <div className="flex-1">
                  <p className="text-gray-700">Tal como ocurre con el petróleo y la pesca, Argentina considera ilegítimas las licencias mineras otorgadas por el Reino Unido, pues se dictan en un territorio cuya soberanía disputa con el Estado argentino.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Implicaciones Diplomáticas</h3>
              <p className="text-gray-700 mb-3">Cualquier proyecto sin consenso previo profundizaría el conflicto diplomático y vulneraría el derecho internacional sobre zonas en disputa.</p>
              
              <div className="p-3 bg-white rounded border border-gray-200">
                <h4 className="font-medium text-gray-700 mb-2">Marco Legal Internacional</h4>
                <p className="text-gray-600 text-sm">El desarrollo de actividades extractivas en territorios disputados está regulado por normativas internacionales que promueven la resolución pacífica de disputas territoriales y el respeto a los derechos de los estados involucrados.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <button 
          onClick={() => goTo("")}
          className="py-2 px-6 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center"
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

export default Mineria;