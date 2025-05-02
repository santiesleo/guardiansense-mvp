import React, { useState } from 'react';
import { MapPin, Cloud, CloudRain, Sun, AlertTriangle, Shield, Users, Info } from 'lucide-react';

const GuardianSenseMap = () => {
  const [activeTab, setActiveTab] = useState('map');
  const [currentWeather, setCurrentWeather] = useState('rainy'); // 'rainy', 'cloudy', 'sunny'
  const [showLegend, setShowLegend] = useState(false);
  
  // Datos simulados para el mapa
  const alertPoints = [
    { id: 1, lat: 30, lng: 55, type: 'crime', title: 'Robo reportado', time: '10 min' },
    { id: 2, lat: 40, lng: 20, type: 'traffic', title: 'Accidente de tránsito', time: '5 min' },
    { id: 3, lat: 70, lng: 40, type: 'community', title: 'Zona insegura', time: '15 min' },
    { id: 4, lat: 60, lng: 70, type: 'weather', title: 'Inundación local', time: '7 min' },
  ];
  
  const riskZones = [
    { id: 1, center: { lat: 30, lng: 55 }, radius: 15, type: 'high' }, // Zona roja (alto riesgo)
    { id: 2, center: { lat: 40, lng: 20 }, radius: 20, type: 'medium' }, // Zona amarilla (riesgo medio)
    { id: 3, center: { lat: 60, lng: 70 }, radius: 25, type: 'low' }, // Zona verde (riesgo bajo)
  ];
  
  // Renderiza un punto de alerta en el mapa
  const renderAlertPoint = (alert) => {
    const style = {
      position: 'absolute',
      top: `${alert.lat}%`,
      left: `${alert.lng}%`,
      transform: 'translate(-50%, -50%)',
    };
    
    return (
      <div key={alert.id} className="absolute" style={style}>
        <div className="relative">
          {alert.type === 'crime' && <AlertTriangle className="h-6 w-6 text-red-500" />}
          {alert.type === 'traffic' && <AlertTriangle className="h-6 w-6 text-orange-500" />}
          {alert.type === 'community' && <Users className="h-6 w-6 text-blue-500" />}
          {alert.type === 'weather' && <CloudRain className="h-6 w-6 text-blue-400" />}
          <div className="absolute h-4 w-4 bg-white rounded-full -top-1 -right-1 flex items-center justify-center">
            <span className="text-xs font-bold">{alert.id}</span>
          </div>
        </div>
      </div>
    );
  };
  
  // Renderiza una zona de riesgo en el mapa
  const renderRiskZone = (zone) => {
    let bgColor = "bg-red-500";
    if (zone.type === 'medium') bgColor = "bg-yellow-500";
    if (zone.type === 'low') bgColor = "bg-green-500";
    
    const style = {
      position: 'absolute',
      top: `${zone.center.lat}%`,
      left: `${zone.center.lng}%`,
      width: `${zone.radius * 2}%`,
      height: `${zone.radius * 2}%`,
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      opacity: 0.3,
    };
    
    return (
      <div key={zone.id} className={`${bgColor} absolute`} style={style}></div>
    );
  };

  // Renderiza el icono del clima actual
  const renderWeatherIcon = () => {
    switch(currentWeather) {
      case 'rainy':
        return <CloudRain className="h-6 w-6 text-blue-500" />;
      case 'cloudy':
        return <Cloud className="h-6 w-6 text-gray-500" />;
      case 'sunny':
      default:
        return <Sun className="h-6 w-6 text-yellow-500" />;
    }
  };
  
  // Cambia el clima al hacer clic en el indicador
  const cycleWeather = () => {
    setCurrentWeather(prev => {
      switch(prev) {
        case 'rainy': return 'cloudy';
        case 'cloudy': return 'sunny';
        case 'sunny': return 'rainy';
        default: return 'sunny';
      }
    });
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Tabs de navegación */}
      <div className="flex border-b">
        <button 
          onClick={() => setActiveTab('map')}
          className={`flex-1 py-3 text-center text-sm font-medium ${activeTab === 'map' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Mapa de riesgos
        </button>
        <button 
          onClick={() => setActiveTab('community')}
          className={`flex-1 py-3 text-center text-sm font-medium ${activeTab === 'community' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Alertas comunitarias
        </button>
      </div>
      
      {/* Contenido del mapa */}
      {activeTab === 'map' && (
        <div className="p-4">
          {/* Barra superior con clima e indicadores */}
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm font-medium text-gray-700">Cali, Colombia</div>
            <button 
              onClick={cycleWeather}
              className="flex items-center bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700"
            >
              {renderWeatherIcon()}
              <span className="ml-1">
                {currentWeather === 'rainy' ? 'Lluvioso' : 
                 currentWeather === 'cloudy' ? 'Nublado' : 'Soleado'}
              </span>
            </button>
            <button 
              onClick={() => setShowLegend(!showLegend)}
              className="flex items-center text-gray-500"
            >
              <Info className="h-5 w-5" />
            </button>
          </div>
          
          {/* Leyenda del mapa */}
          {showLegend && (
            <div className="bg-white border rounded-lg p-3 mb-3 text-xs">
              <div className="font-medium mb-2">Leyenda:</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 opacity-50 mr-1"></div>
                  <span>Zona de alto riesgo</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-50 mr-1"></div>
                  <span>Zona de riesgo medio</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 opacity-50 mr-1"></div>
                  <span>Zona segura</span>
                </div>
                <div className="flex items-center">
                  <AlertTriangle className="h-4 w-4 text-red-500 mr-1" />
                  <span>Alertas de seguridad</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-blue-500 mr-1" />
                  <span>Reportes comunitarios</span>
                </div>
                <div className="flex items-center">
                  <CloudRain className="h-4 w-4 text-blue-400 mr-1" />
                  <span>Alertas climáticas</span>
                </div>
              </div>
            </div>
          )}
          
          {/* Mapa con zonas y alertas */}
          <div className="relative h-80 rounded-lg overflow-hidden border border-gray-200">
            {/* Imagen de fondo del mapa */}
            <img 
              src="/images/cali-map.png" 
              alt="Mapa de Cali" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Capa semi-transparente para mejorar la visibilidad de los elementos */}
            <div className="absolute inset-0 bg-white opacity-10"></div>
            
            {/* Renderizar zonas de riesgo */}
            {riskZones.map(zone => renderRiskZone(zone))}
            
            {/* Renderizar puntos de alerta */}
            {alertPoints.map(alert => renderAlertPoint(alert))}
            
            {/* Indicador de tu ubicación */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <MapPin className="h-8 w-8 text-blue-600" />
                <div className="absolute top-0 right-0 h-3 w-3 bg-blue-600 rounded-full border-2 border-white"></div>
              </div>
            </div>
            
            {/* Controles de zoom */}
            <div className="absolute bottom-3 right-3 flex flex-col space-y-2">
              <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-gray-700 font-bold">+</button>
              <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-gray-700 font-bold">-</button>
            </div>
          </div>
          
          {/* Botón de reportar */}
          <div className="mt-3 flex justify-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
              <AlertTriangle className="h-4 w-4 mr-1" />
              Reportar incidente
            </button>
          </div>
        </div>
      )}
      
      {/* Contenido de alertas comunitarias */}
      {activeTab === 'community' && (
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-3 text-gray-700 flex items-center">
            <Users className="h-5 w-5 mr-2 text-blue-500" />
            Alertas de la comunidad
          </h2>
          
          <div className="space-y-3">
            {alertPoints.map(alert => (
              <div key={alert.id} className="flex p-3 bg-gray-50 rounded-lg">
                <div className="mr-3">
                  {alert.type === 'crime' && <AlertTriangle className="h-6 w-6 text-red-500" />}
                  {alert.type === 'traffic' && <AlertTriangle className="h-6 w-6 text-orange-500" />}
                  {alert.type === 'community' && <Users className="h-6 w-6 text-blue-500" />}
                  {alert.type === 'weather' && <CloudRain className="h-6 w-6 text-blue-400" />}
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="font-medium text-gray-800">{alert.title}</p>
                    <span className="text-xs text-gray-500">Hace {alert.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Reportado por 3 usuarios en tu comunidad
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 flex flex-col items-center">
            <div className="flex items-center text-gray-500 text-sm mb-2">
              <Shield className="h-4 w-4 mr-1 text-blue-500" />
              <span>Tu comunidad tiene 42 miembros activos</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
              <Users className="h-4 w-4 mr-1" />
              Invitar a más personas
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuardianSenseMap;