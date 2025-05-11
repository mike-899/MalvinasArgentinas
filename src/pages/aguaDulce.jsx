import { useState } from "react";
// aguaDulce
function AbastecimientoAgua() {
  const [activeTab, setActiveTab] = useState("fuentes");
  
  const goTo = (link) => {
    window.location.href = `/${link}`;
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-50 rounded-lg shadow-lg">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Abastecimiento de Agua Dulce</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600 italic">Captación, tratamiento y distribución en las Islas Malvinas</p>
      </header>

      {/* Navegación por pestañas */}
      <div className="flex mb-6 border-b border-gray-200">
        <button 
          onClick={() => handleTabChange("fuentes")}
          className={`py-2 px-4 font-medium text-sm ${activeTab === "fuentes" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"}`}
        >
          Fuentes y Captación
        </button>
        <button 
          onClick={() => handleTabChange("tratamiento")}
          className={`py-2 px-4 font-medium text-sm ${activeTab === "tratamiento" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"}`}
        >
          Tratamiento y Distribución
        </button>
        <button 
          onClick={() => handleTabChange("retos")}
          className={`py-2 px-4 font-medium text-sm ${activeTab === "retos" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"}`}
        >
          Retos Futuros
        </button>
      </div>

      {/* Contenido de pestañas */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {activeTab === "fuentes" && (
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fuentes y Captación</h2>
            
            <div className="bg-blue-50 p-5 rounded-lg mb-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 rounded-full border-8 border-blue-100"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-blue-400 border-t-transparent border-r-transparent transform rotate-225"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-blue-600">545-645</span>
                      <span className="text-sm text-gray-600">mm/año</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-blue-800 mb-3">Precipitaciones Anuales</h3>
                  <p className="text-gray-700 mb-3">Las Islas Malvinas no tienen grandes ríos ni lagos. La principal fuente de agua dulce son las precipitaciones, con una media anual de 545-645 mm según datos registrados entre 1992 y 2021.</p>
                  <div className="bg-blue-100 p-3 rounded">
                    <h4 className="font-medium text-blue-700 mb-1">Régimen de lluvias:</h4>
                    <ul className="list-disc pl-5 text-gray-600 text-sm">
                      <li>Distribución relativamente uniforme durante el año</li>
                      <li>Mayor intensidad en otoño e invierno</li>
                      <li>Periodos ocasionales de sequía</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Embalse de Murrell</h3>
                <div className="flex items-center mb-3">
                  <div>
                    <p className="text-gray-700">Capacidad aproximada:</p>
                    <p className="font-bold text-blue-800">100.000 galones</p>
                  </div>
                </div>
                <p className="text-gray-700">Principal reservorio para el abastecimiento de agua potable en Stanley, la capital de las islas.</p>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Embalse de Moody Brook</h3>
                <div className="flex items-center mb-3">
                  <div>
                    <p className="text-gray-700">Fuente secundaria</p>
                    <p className="font-bold text-blue-800">Suministro complementario</p>
                  </div>
                </div>
                <p className="text-gray-700">Reservorio adicional que complementa el suministro durante periodos de mayor demanda o cuando el embalse principal requiere mantenimiento.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "tratamiento" && (
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Tratamiento y Distribución</h2>
            
            <div className="p-5 bg-blue-50 rounded-lg mb-6">
              <h3 className="text-lg font-medium text-blue-800 mb-3">Proceso de Potabilización</h3>
              
              <div className="relative">
                <div className="absolute left-0 w-1 bg-blue-200 h-full ml-4"></div>
                <div className="space-y-6 relative ml-10">
                  <div className="flex items-start">
                    <div className="absolute left-0 rounded-full w-8 h-8 flex items-center justify-center -ml-4 bg-blue-500 text-white">
                      1
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm ml-6 flex-1">
                      <h4 className="font-medium text-blue-700">Captación</h4>
                      <p className="text-gray-600 text-sm">Recolección de agua desde embalses Murrell y Moody Brook</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="absolute left-0 rounded-full w-8 h-8 flex items-center justify-center -ml-4 bg-blue-500 text-white">
                      2
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm ml-6 flex-1">
                      <h4 className="font-medium text-blue-700">Ultrafiltración</h4>
                      <p className="text-gray-600 text-sm">Eliminación de partículas y microorganismos mediante membranas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="absolute left-0 rounded-full w-8 h-8 flex items-center justify-center -ml-4 bg-blue-500 text-white">
                      3
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm ml-6 flex-1">
                      <h4 className="font-medium text-blue-700">Filtros de Medios</h4>
                      <p className="text-gray-600 text-sm">Filtración adicional para mejorar calidad y sabor</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="absolute left-0 rounded-full w-8 h-8 flex items-center justify-center -ml-4 bg-blue-500 text-white">
                      4
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm ml-6 flex-1">
                      <h4 className="font-medium text-blue-700">Ósmosis Inversa (casos puntuales)</h4>
                      <p className="text-gray-600 text-sm">Tratamiento adicional cuando se detecta salinidad elevada</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="absolute left-0 rounded-full w-8 h-8 flex items-center justify-center -ml-4 bg-blue-500 text-white">
                      5
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm ml-6 flex-1">
                      <h4 className="font-medium text-blue-700">Distribución</h4>
                      <p className="text-gray-600 text-sm">Bombeo y distribución desde Reservoir Hill</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Marco Regulatorio</h3>
                <div className="flex items-center mb-3">
                  <div>
                    <p className="text-gray-700">Normativa vigente:</p>
                    <p className="font-bold text-blue-800">Ordenanza de Suministro de Agua de Stanley (1973)</p>
                  </div>
                </div>
                <p className="text-gray-700">Establece los estándares de potabilidad y requisitos técnicos para garantizar agua segura para consumo humano.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-blue-800 mb-2">Gestión Operativa</h3>
                <div className="flex items-center mb-3">
                  <div>
                    <p className="text-gray-700">Departamento de Agua de Stanley:</p>
                    <p className="font-bold text-blue-800">7 técnicos especializados</p>
                  </div>
                </div>
                <p className="text-gray-700">Equipo responsable del bombeo, tratamiento y distribución desde la planta ubicada en Reservoir Hill, cerca de la central eléctrica.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "retos" && (
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Retos Futuros y Sostenibilidad</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-lg font-medium text-yellow-800 mb-2">Desafíos Climáticos</h3>
                <div className="mb-3">
                  <p className="text-gray-700">Con variabilidad climática y episodios de sequía, la sobreexplotación de nacientes y humedales podría menguar niveles de los embalses y encarecer la operación.</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-medium text-gray-700 mb-1">Principales amenazas:</h4>
                  <ul className="list-disc pl-5 text-gray-600 text-sm">
                    <li>Periodos prolongados de sequía</li>
                    <li>Cambio en patrones de precipitación</li>
                    <li>Aumento de la demanda por crecimiento poblacional</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h3 className="text-lg font-medium text-red-800 mb-2">Desafíos Energéticos</h3>
                <div className="mb-3">
                  <p className="text-gray-700">Las plantas desalinizadoras, necesarias en casos de escasez, consumen gran cantidad de energía, lo que aumenta los costos operativos y la huella de carbono.</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-medium text-gray-700 mb-1">Impacto energético:</h4>
                  <ul className="list-disc pl-5 text-gray-600 text-sm">
                    <li>Alto consumo eléctrico de ósmosis inversa</li>
                    <li>Dependencia de combustibles fósiles</li>
                    <li>Necesidad de integración con energías renovables</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium text-green-800 mb-3">Iniciativas de Sostenibilidad</h3>
              
              <div className="p-4 bg-white rounded-lg shadow-sm mb-4 flex items-start">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                </div>
                <div>
                  <h4 className="font-medium text-green-700 mb-1">Campaña "Be Water Wise"</h4>
                  <p className="text-gray-700">Iniciativa que promueve la reducción de consumo en sectores residenciales e industriales durante picos de demanda.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-medium text-green-700 mb-1">Residencial</h4>
                  <p className="text-gray-600 text-sm">Campañas de concientización sobre el uso racional del agua en hogares.</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-medium text-green-700 mb-1">Industrial</h4>
                  <p className="text-gray-600 text-sm">Medidas de optimización y reciclaje de agua en procesos industriales.</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-medium text-green-700 mb-1">Agrícola</h4>
                  <p className="text-gray-600 text-sm">Técnicas de riego eficiente y captación de agua de lluvia.</p>
                </div>
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

export default AbastecimientoAgua;