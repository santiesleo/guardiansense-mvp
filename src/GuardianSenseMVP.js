import React, { useState, useEffect } from 'react';
import { Bell, Shield, Home, User, Activity, MapPin, Calendar, AlertTriangle, ChevronRight, Award, Clock, Heart, Zap, CreditCard, Settings } from 'lucide-react';

import GuardianSenseMap from './GuardianSenseMap';
import GuardianSenseIntegrations from './GuardianSenseIntegrations'; // Importamos el nuevo componente

const GuardianSenseMVP = () => {
  const [currentTime, setCurrentTime] = useState(new Date('2025-04-30T07:00:00'));
  const [activeProtections, setActiveProtections] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [currentTab, setCurrentTab] = useState('home');
  const [userState, setUserState] = useState({
    sleep: 'poor',
    stress: 'normal',
    location: 'home',
    weather: 'clear',
    schedule: []
  });
  
  // Datos para la pestaña de perfil
  const userProfile = {
    name: 'María García',
    type: 'Profesional',
    age: 35,
    tokens: 320,
    streak: 14,
    joinDate: '15 de febrero de 2025',
    settings: [
      { id: 1, title: 'Privacidad y datos', icon: 'Shield' },
      { id: 2, title: 'Notificaciones', icon: 'Bell' },
      { id: 3, title: 'Dispositivos conectados', icon: 'Activity' },
      { id: 4, title: 'Método de pago', icon: 'CreditCard' }
    ]
  };
  
  // Datos para la pestaña de coberturas
  const coverageData = [
    { 
      id: 'health',
      title: 'Salud personal', 
      description: 'Protección basada en biométrica y análisis predictivo',
      icon: 'Heart',
      coverages: [
        'Asistencia médica ampliada',
        'Cobertura por fatiga',
        'Asistencia psicológica',
        'Detección temprana de enfermedad'
      ]
    },
    { 
      id: 'mobility',
      title: 'Movilidad inteligente', 
      description: 'Protección contextual basada en ubicación y rutas',
      icon: 'MapPin',
      coverages: [
        'Zonas de alto riesgo',
        'Clima adverso',
        'Transporte seguro',
        'Accidentes en tránsito'
      ]
    },
    { 
      id: 'home',
      title: 'Hogar conectado', 
      description: 'Protección para tu vivienda con sensores IoT',
      icon: 'Home',
      coverages: [
        'Fugas de agua',
        'Emergencias eléctricas',
        'Asistencia de plomería',
        'Monitoreo ambiental'
      ]
    },
    { 
      id: 'finance',
      title: 'Protección financiera', 
      description: 'Seguridad para transacciones y compras',
      icon: 'CreditCard',
      coverages: [
        'Fraude en compras',
        'Transacciones sospechosas',
        'Robo de identidad',
        'Protección de datos bancarios'
      ]
    }
  ];
  
  // Datos para la pestaña de actividad
  const activityData = {
    stats: [
      { title: 'Días protegidos', value: '32', icon: 'Shield' },
      { title: 'Alertas preventivas', value: '18', icon: 'Bell' },
      { title: 'Riesgos evitados', value: '7', icon: 'AlertTriangle' }
    ],
    history: [
      { 
        date: '30 de abril', 
        events: [
          { time: '7:00 AM', title: 'Protección por fatiga activada', type: 'protection' },
          { time: '8:30 AM', title: 'Alerta: clima adverso en ruta', type: 'alert' },
          { time: '10:30 AM', title: 'Protección en zona de alto riesgo', type: 'protection' }
        ]
      },
      { 
        date: '29 de abril', 
        events: [
          { time: '9:15 AM', title: 'Tokens ganados: comportamiento seguro', type: 'reward' },
          { time: '2:45 PM', title: 'Alerta: calidad del aire deficiente', type: 'alert' },
          { time: '6:20 PM', title: 'Riesgo evitado: accidente de tráfico', type: 'prevention' }
        ]
      }
    ],
    challenges: [
      { title: 'Semana sin estrés', progress: 70, reward: 50 },
      { title: 'Rutas seguras', progress: 40, reward: 30 },
      { title: 'Hogar protegido', progress: 90, reward: 45 }
    ]
  };

  // Avanza el tiempo en intervalos
  const advanceTime = () => {
    setCurrentTime(prevTime => {
      const newTime = new Date(prevTime.getTime());
      newTime.setHours(newTime.getHours() + 1);
      return newTime;
    });
  };

  // Simula el día de María del documento
  useEffect(() => {
    const hour = currentTime.getHours();
    
    // Reset notifications and protections when day restarts
    if (hour === 7) {
      setNotifications([]);
      setActiveProtections([]);
    }

    // Actualiza el estado del usuario según la hora
    let newUserState = {...userState};
    
    switch(hour) {
      case 7:
        newUserState = {
          sleep: 'poor',
          stress: 'normal',
          location: 'home',
          weather: 'clear',
          schedule: ['Reunión 10:30 - Zona de alto riesgo']
        };
        
        setNotifications(prev => [
          ...prev,
          {
            id: Date.now(),
            time: '7:00 AM',
            title: 'Fatiga detectada',
            message: 'Tus patrones de sueño indican fatiga. Se ha activado protección ampliada por accidentes hoy.',
            type: 'health'
          }
        ]);
        
        setActiveProtections(prev => [
          ...prev,
          {
            id: 'acc-protection',
            title: 'Protección ampliada por accidentes',
            icon: 'Shield',
            expiresAt: '23:59'
          }
        ]);
        break;
      
      case 8:
        newUserState = {
          ...newUserState,
          location: 'commuting',
          weather: 'rainy'
        };
        
        setNotifications(prev => [
          ...prev,
          {
            id: Date.now(),
            time: '8:30 AM',
            title: 'Clima adverso detectado',
            message: 'Lluvia fuerte en tu ruta. Se ha activado cobertura para clima adverso.',
            type: 'weather'
          }
        ]);
        
        setActiveProtections(prev => [
          ...prev,
          {
            id: 'weather-protection',
            title: 'Cobertura para clima adverso',
            icon: 'Cloud',
            expiresAt: '10:30'
          }
        ]);
        break;
      
      case 10:
        newUserState = {
          ...newUserState,
          location: 'high-risk-zone',
          weather: 'clear'
        };
        
        setNotifications(prev => [
          ...prev,
          {
            id: Date.now(),
            time: '10:30 AM',
            title: 'Zona de alto riesgo',
            message: 'Estas en una zona con alto índice de accidentes. Se ha activado cobertura de movilidad especial.',
            type: 'location'
          }
        ]);
        
        setActiveProtections(prev => [
          ...prev.filter(p => p.id !== 'weather-protection'),
          {
            id: 'mobility-protection',
            title: 'Cobertura de movilidad especial',
            icon: 'MapPin',
            expiresAt: '12:30'
          }
        ]);
        break;
      
      case 14:
        newUserState = {
          ...newUserState,
          location: 'office',
          stress: 'high'
        };
        
        setNotifications(prev => [
          ...prev,
          {
            id: Date.now(),
            time: '2:00 PM',
            title: 'Nivel de estrés elevado',
            message: 'Detectamos aumento de estrés. Se ha activado asistencia psicológica temporal.',
            type: 'health'
          }
        ]);
        
        setActiveProtections(prev => [
          ...prev.filter(p => p.id !== 'mobility-protection'),
          {
            id: 'psychological-assistance',
            title: 'Asistencia psicológica inmediata',
            icon: 'Activity',
            expiresAt: '4:00'
          }
        ]);
        break;
      
      case 16:
        newUserState = {
          ...newUserState,
          location: 'shopping',
          stress: 'normal'
        };
        
        setNotifications(prev => [
          ...prev,
          {
            id: Date.now(),
            time: '4:30 PM',
            title: 'Compras inusuales detectadas',
            message: 'Detectamos patrones de compra inusuales. Se ha activado protección contra fraudes.',
            type: 'financial'
          }
        ]);
        
        setActiveProtections(prev => [
          ...prev.filter(p => p.id !== 'psychological-assistance'),
          {
            id: 'fraud-protection',
            title: 'Protección contra fraudes financieros',
            icon: 'Shield',
            expiresAt: '6:30'
          }
        ]);
        break;
      
      case 17:
        newUserState = {
          ...newUserState,
          location: 'commuting',
          health: 'signs-of-illness'
        };
        
        setNotifications(prev => [
          ...prev,
          {
            id: Date.now(),
            time: '5:30 PM',
            title: 'Posibles signos de enfermedad',
            message: 'Tus indicadores biométricos muestran posibles signos tempranos de enfermedad. Se ha ajustado temporalmente tu cobertura médica.',
            type: 'health'
          }
        ]);
        
        setActiveProtections(prev => [
          ...prev.filter(p => p.id !== 'fraud-protection'),
          {
            id: 'medical-coverage',
            title: 'Cobertura médica ajustada',
            icon: 'Activity',
            expiresAt: '23:59'
          }
        ]);
        break;
      
      case 19:
        newUserState = {
          ...newUserState,
          location: 'home',
          homeStatus: 'water-leak'
        };
        
        setNotifications(prev => [
          ...prev,
          {
            id: Date.now(),
            time: '7:00 PM',
            title: 'Fuga de agua detectada',
            message: 'Detectamos una pequeña fuga de agua en la cocina. Se ha activado cobertura de emergencia doméstica.',
            type: 'home'
          }
        ]);
        
        setActiveProtections(prev => [
          ...prev,
          {
            id: 'home-emergency',
            title: 'Cobertura de emergencia doméstica',
            icon: 'Home',
            expiresAt: '23:59'
          }
        ]);
        break;
      
      default:
        break;
    }
    
    setUserState(newUserState);
    
  }, [currentTime]);

  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'Shield': return <Shield className="h-6 w-6 text-blue-500" />;
      case 'Cloud': return <AlertTriangle className="h-6 w-6 text-yellow-500" />;
      case 'MapPin': return <MapPin className="h-6 w-6 text-red-500" />;
      case 'Activity': return <Activity className="h-6 w-6 text-green-500" />;
      case 'Home': return <Home className="h-6 w-6 text-purple-500" />;
      default: return <Shield className="h-6 w-6 text-blue-500" />;
    }
  };

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'health': return <Activity className="h-6 w-6 text-green-500" />;
      case 'weather': return <AlertTriangle className="h-6 w-6 text-yellow-500" />;
      case 'location': return <MapPin className="h-6 w-6 text-red-500" />;
      case 'financial': return <Shield className="h-6 w-6 text-blue-500" />;
      case 'home': return <Home className="h-6 w-6 text-purple-500" />;
      default: return <Bell className="h-6 w-6 text-gray-500" />;
    }
  };

  // Renderiza el contenido según la pestaña activa
  const renderContent = () => {
    switch(currentTab) {
      case 'home':
        return (
          <>
            {/* Active Protections */}
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold mb-3 text-gray-700 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-500" />
                Protecciones activas
              </h2>
              {activeProtections.length > 0 ? (
                <div className="space-y-3">
                  {activeProtections.map(protection => (
                    <div key={protection.id} className="flex items-center p-3 bg-blue-50 rounded-lg">
                      {renderIcon(protection.icon)}
                      <div className="ml-3">
                        <p className="font-medium text-gray-800">{protection.title}</p>
                        <p className="text-sm text-gray-500">Activa hasta: {protection.expiresAt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">No hay protecciones activas actualmente</p>
              )}
            </div>
            
            {/* Recent Notifications */}
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-3 text-gray-700 flex items-center">
                <Bell className="h-5 w-5 mr-2 text-blue-500" />
                Alertas recientes
              </h2>
              {notifications.length > 0 ? (
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {notifications.slice().reverse().map(notification => (
                    <div key={notification.id} className="flex p-3 bg-gray-50 rounded-lg">
                      <div className="mr-3">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <p className="font-medium text-gray-800">{notification.title}</p>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">No hay alertas recientes</p>
              )}
            </div>
          </>
        );
        
      case 'coverages':
        return (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Tus coberturas inteligentes</h2>
            
            <div className="space-y-4">
              {coverageData.map(coverage => (
                <div key={coverage.id} className="bg-white border rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4 flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      {coverage.icon === 'Heart' ? <Heart className="h-6 w-6 text-red-500" /> :
                       coverage.icon === 'MapPin' ? <MapPin className="h-6 w-6 text-blue-500" /> :
                       coverage.icon === 'Home' ? <Home className="h-6 w-6 text-purple-500" /> :
                       <CreditCard className="h-6 w-6 text-green-500" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{coverage.title}</h3>
                      <p className="text-sm text-gray-600">{coverage.description}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="px-4 pb-4">
                    <div className="text-xs font-medium text-gray-500 mb-2">INCLUYE:</div>
                    <div className="grid grid-cols-2 gap-2">
                      {coverage.coverages.map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'activity':
        return (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Tu actividad</h2>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {activityData.stats.map((stat, idx) => (
                <div key={idx} className="bg-white border rounded-lg p-3 text-center">
                  <div className="flex justify-center mb-1">
                    {stat.icon === 'Shield' ? <Shield className="h-5 w-5 text-blue-500" /> :
                     stat.icon === 'Bell' ? <Bell className="h-5 w-5 text-yellow-500" /> :
                     <AlertTriangle className="h-5 w-5 text-red-500" />}
                  </div>
                  <div className="text-xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.title}</div>
                </div>
              ))}
            </div>
            
            {/* Challenges */}
            <div className="mb-6">
              <h3 className="text-md font-semibold mb-3 text-gray-700 flex items-center">
                <Award className="h-5 w-5 mr-2 text-yellow-500" />
                Desafíos activos
              </h3>
              
              <div className="space-y-4">
                {activityData.challenges.map((challenge, idx) => (
                  <div key={idx} className="bg-white border rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium text-gray-800">{challenge.title}</div>
                      <div className="text-xs font-medium text-yellow-600 flex items-center">
                        <Zap className="h-4 w-4 mr-1" />
                        {challenge.reward} tokens
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${challenge.progress}%` }}></div>
                    </div>
                    <div className="text-xs text-right mt-1 text-gray-500">{challenge.progress}% completado</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* History */}
            <div>
              <h3 className="text-md font-semibold mb-3 text-gray-700 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-500" />
                Historial
              </h3>
              
              <div className="space-y-4">
                {activityData.history.map((day, dayIdx) => (
                  <div key={dayIdx}>
                    <div className="text-sm font-medium text-gray-600 mb-2">{day.date}</div>
                    <div className="space-y-2">
                      {day.events.map((event, eventIdx) => (
                        <div key={eventIdx} className="flex items-center bg-white border rounded-lg p-3">
                          <div className="mr-3 text-xs text-gray-500">{event.time}</div>
                          <div className="text-sm text-gray-800">{event.title}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'profile':
        return (
          <div className="p-4">
            {/* Profile Header with logo */}
            <div className="flex justify-end mb-2">
              <img 
                src="images/Logo-GS.png" 
                alt="Global Seguros" 
                className="h-6"
              />
            </div>
            <div className="flex items-center mb-6">
              <div className="mr-4 relative">
                <img 
                  src="/images/profile.png" 
                  alt="Foto de perfil" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{userProfile.name}</h2>
                <p className="text-sm text-gray-600">{userProfile.type}, {userProfile.age} años</p>
                <div className="flex items-center mt-1">
                  <Zap className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="text-sm font-medium text-gray-700">{userProfile.tokens} tokens</span>
                  <div className="mx-2 text-gray-300">•</div>
                  <Award className="h-4 w-4 text-blue-500 mr-1" />
                  <span className="text-sm font-medium text-gray-700">{userProfile.streak} días de racha</span>
                </div>
              </div>
            </div>
            
            {/* Plan Actual - Nuevo */}
            <div className="mb-6 bg-blue-50 rounded-lg p-4">
              <h3 className="text-md font-semibold mb-2 text-blue-800">Tu plan actual</h3>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium text-gray-800">Cobertura Ilimitada pospago</div>
                  <div className="text-sm text-gray-600">Renovación: 15 de mayo, 2025</div>
                </div>
                <button 
                  onClick={() => setCurrentTab('integrations')}
                  className="text-blue-600 text-sm font-medium flex items-center"
                >
                  Cambiar
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
            
            {/* Community Stats */}
            <div className="mb-6 bg-blue-50 rounded-lg p-4">
              <h3 className="text-md font-semibold mb-3 text-blue-800">Comunidad protegida</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <div className="text-xl font-bold text-blue-600">42</div>
                  <div className="text-xs text-gray-600">Miembros</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <div className="text-xl font-bold text-green-600">18</div>
                  <div className="text-xs text-gray-600">Alertas compartidas</div>
                </div>
              </div>
            </div>
            
            {/* Settings */}
            <h3 className="text-md font-semibold mb-3 text-gray-700">Configuración</h3>
            <div className="space-y-2">
              {userProfile.settings.map(setting => (
                <div key={setting.id} className="flex items-center justify-between p-3 bg-white border rounded-lg">
                  <div className="flex items-center">
                    {setting.icon === 'Shield' ? <Shield className="h-5 w-5 text-blue-500 mr-3" /> :
                     setting.icon === 'Bell' ? <Bell className="h-5 w-5 text-yellow-500 mr-3" /> :
                     setting.icon === 'Activity' ? <Activity className="h-5 w-5 text-green-500 mr-3" /> :
                     <CreditCard className="h-5 w-5 text-purple-500 mr-3" />}
                    <span className="text-gray-800">{setting.title}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Miembro desde: {userProfile.joinDate}</p>
            </div>
          </div>
        );
      
      case 'map':
        return <GuardianSenseMap />;
      
      case 'integrations':
        return <GuardianSenseIntegrations />; // Renderizamos nuestro nuevo componente
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">GuardianSense</h1>
            <p className="text-sm">Protección inteligente</p>
          </div>
          <div className="flex items-center space-x-2">
            <img 
              src="images/Logo-GS.png" 
              alt="Global Seguros" 
              className="h-10"
            />
            <button
              onClick={advanceTime}
              className="bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-medium"
            >
              Avanzar tiempo +1h
            </button>
          </div>
        </div>
        
        {/* Current Time */}
        <div className="bg-blue-100 p-3 text-center">
          <div className="flex items-center justify-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <p className="text-blue-800 font-semibold">
              {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </p>
          </div>
        </div>
        
        {/* Tab Content */}
        {renderContent()}
        
        {/* Footer Navigation */}
        <div className="bg-gray-50 p-4 flex justify-around border-t">
          <button 
            onClick={() => setCurrentTab('home')}
            className={`flex flex-col items-center ${currentTab === 'home' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Inicio</span>
          </button>
          <button 
            onClick={() => setCurrentTab('coverages')}
            className={`flex flex-col items-center ${currentTab === 'coverages' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <Shield className="h-6 w-6" />
            <span className="text-xs mt-1">Coberturas</span>
          </button>
          <button 
            onClick={() => setCurrentTab('map')}
            className={`flex flex-col items-center ${currentTab === 'map' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <MapPin className="h-6 w-6" />
            <span className="text-xs mt-1">Tu zona</span>
          </button>
          <button 
            onClick={() => setCurrentTab('integrations')}
            className={`flex flex-col items-center ${currentTab === 'integrations' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <Settings className="h-6 w-6" />
            <span className="text-xs mt-1">Planes</span>
          </button>
          <button 
            onClick={() => setCurrentTab('activity')}
            className={`flex flex-col items-center ${currentTab === 'activity' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <Activity className="h-6 w-6" />
            <span className="text-xs mt-1">Actividad</span>
          </button>
          <button 
            onClick={() => setCurrentTab('profile')}
            className={`flex flex-col items-center ${currentTab === 'profile' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <User className="h-6 w-6" />
            <span className="text-xs mt-1">Perfil</span>
          </button>
        </div>
      </div>
      
      {/* Context Panel - Un vistazo al sistema */}
      <div className="max-w-md mx-auto mt-6 bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Simulación: Un día con GuardianSense</h2>
            <p className="text-sm">Sigue a María durante un día con protección inteligente</p>
          </div>
          <img 
            src="images/Logo-GS.png" 
            alt="Global Seguros" 
            className="h-8"
          />
        </div>
        <div className="p-4 text-sm">
          <p className="mb-2">
            Este MVP simula cómo GuardianSense AI funciona a lo largo del día, 
            activando automáticamente coberturas específicas según el contexto detectado.
          </p>
          <div className="space-y-2 mt-3">
            <div className="flex items-center text-gray-700">
              <div className="font-medium w-16">7:00 AM</div>
              <div>Detección de fatiga por patrones de sueño</div>
            </div>
            <div className="flex items-center text-gray-700">
              <div className="font-medium w-16">8:30 AM</div>
              <div>Lluvia en la ruta al trabajo</div>
            </div>
            <div className="flex items-center text-gray-700">
              <div className="font-medium w-16">10:30 AM</div>
              <div>Reunión en zona de alto riesgo</div>
            </div>
            <div className="flex items-center text-gray-700">
              <div className="font-medium w-16">2:00 PM</div>
              <div>Detección de estrés elevado</div>
            </div>
            <div className="flex items-center text-gray-700">
              <div className="font-medium w-16">4:30 PM</div>
              <div>Compras inusuales detectadas</div>
            </div>
            <div className="flex items-center text-gray-700">
              <div className="font-medium w-16">5:30 PM</div>
              <div>Signos tempranos de enfermedad</div>
            </div>
            <div className="flex items-center text-gray-700">
              <div className="font-medium w-16">7:00 PM</div>
              <div>Detección de fuga de agua en casa</div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="italic text-gray-600">
              Presiona "Avanzar tiempo" para simular el transcurso del día.
            </p>
            {/* <button
              onClick={() => setCurrentTab('integrations')}
              className="text-blue-600 text-sm font-medium flex items-center"
            >
              Ver Planes e Integraciones
              <ChevronRight className="h-4 w-4 ml-1" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuardianSenseMVP;