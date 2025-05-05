import React, { useState } from 'react';
import { 
  Watch, Smartphone, Car, HeartPulse, Home, Shield, 
  Plus, Zap, Check
} from 'lucide-react';

const GuardianSenseIntegrations = () => {
  const [activeTab, setActiveTab] = useState('integrations');
  const [selectedPlan, setSelectedPlan] = useState('unlimited');
  // Datos para las integraciones
  const integrationData = [
    {
      id: 'wearables',
      title: 'Wearables',
      description: 'Conecta tus dispositivos vestibles para monitoreo constante',
      icon: 'Watch',
      devices: [
        { name: 'Apple Watch', connected: true, tokens: 15 },
        { name: 'Fitbit Sense', connected: false, tokens: 10 },
        { name: 'Samsung Galaxy Watch', connected: false, tokens: 12 }
      ]
    },
    {
      id: 'smartphones',
      title: 'Smartphones',
      description: 'Conecta tus aplicaciones móviles para protección en movimiento',
      icon: 'Smartphone',
      devices: [
        { name: 'Health App', connected: true, tokens: 8 },
        { name: 'Sleep Tracker', connected: true, tokens: 5 },
        { name: 'Finanzas App', connected: false, tokens: 10 }
      ]
    },
    {
      id: 'vehicles',
      title: 'Vehículos Inteligentes',
      description: 'Conéctate a tu auto para protección en tránsito',
      icon: 'Car',
      devices: [
        { name: 'Toyota Connected', connected: false, tokens: 20 },
        { name: 'Tesla App', connected: false, tokens: 25 },
        { name: 'GPS Tracker', connected: true, tokens: 15 }
      ]
    },
    {
      id: 'health',
      title: 'Salud Digital',
      description: 'Aplicaciones y dispositivos para monitorear tu salud',
      icon: 'HeartPulse',
      devices: [
        { name: 'Glucómetro Smart', connected: false, tokens: 15 },
        { name: 'Presión Arterial', connected: true, tokens: 10 },
        { name: 'Historia Clínica', connected: true, tokens: 20 }
      ]
    },
    {
      id: 'home',
      title: 'Hogar Conectado',
      description: 'Dispositivos para la seguridad de tu hogar',
      icon: 'Home',
      devices: [
        { name: 'Sensores de Agua', connected: true, tokens: 12 },
        { name: 'Cámaras de Seguridad', connected: false, tokens: 18 },
        { name: 'Detector de Humo', connected: false, tokens: 15 }
      ]
    }
  ];
  
  // Datos para los planes
  const planData = [
    {
      id: 'unlimited',
      title: 'Cobertura ilimitada pospago',
      price: '$59.900',
      description: 'Cobertura total sin límites para todas tus necesidades',
      features: [
        'Cobertura ilimitada',
        'Soporte prioritario 24/7',
        'Todas las integraciones incluidas',
        'Asistencia premium en emergencias',
        'Reportes mensuales personalizados'
      ]
    },
    {
      id: 'limited',
      title: 'Cobertura limitada pospago',
      price: '$39.900',
      description: 'Cobertura hasta un valor base con acumulación mensual',
      features: [
        'Cobertura hasta $5.000.000',
        'Soporte 24/7',
        'Hasta 3 integraciones',
        'El saldo no utilizado pasa al siguiente mes',
        'Reportes trimestrales'
      ]
    },
    {
      id: 'investment',
      title: 'Cobertura con inversión',
      price: '$49.900',
      description: 'Tu protección genera rendimientos a largo plazo',
      features: [
        'Cobertura hasta $3.000.000',
        'El saldo no utilizado genera intereses',
        'Tasa mínima garantizada de 3%',
        'Hasta 5 integraciones',
        'Asesoría financiera incluida'
      ]
    }
  ];
  
  // Renderiza el icono según el nombre
  const renderIcon = (iconName, className = "h-6 w-6") => {
    switch(iconName) {
      case 'Watch': return <Watch className={`${className} text-blue-500`} />;
      case 'Smartphone': return <Smartphone className={`${className} text-green-500`} />;
      case 'Car': return <Car className={`${className} text-red-500`} />;
      case 'HeartPulse': return <HeartPulse className={`${className} text-pink-500`} />;
      case 'Home': return <Home className={`${className} text-purple-500`} />;
      default: return <Shield className={`${className} text-blue-500`} />;
    }
  };
  
  // Renderiza el contenido de la pestaña de integraciones
  const renderIntegrationsContent = () => (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Integraciones disponibles</h2>
        <span className="text-sm text-blue-600 font-medium flex items-center">
          <Zap className="h-4 w-4 mr-1" />
          Gana tokens al conectar
        </span>
      </div>
      
      <div className="space-y-4">
        {integrationData.map(category => (
          <div key={category.id} className="border rounded-lg overflow-hidden bg-white">
            <div className="p-4 border-b flex items-start">
              <div className="bg-gray-100 p-2 rounded-lg mr-3">
                {renderIcon(category.icon)}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </div>
            
            <div className="divide-y">
              {category.devices.map((device, index) => (
                <div key={index} className="p-3 flex justify-between items-center">
                  <div className="flex-1">
                    <p className="font-medium text-gray-700">{device.name}</p>
                    <p className="text-xs text-gray-500">
                      {device.connected ? 'Conectado' : 'No conectado'}
                    </p>
                  </div>
                  
                  {device.connected ? (
                    <span className="text-green-500 text-xs font-medium flex items-center">
                      <Check className="h-4 w-4 mr-1" />
                      Activo
                    </span>
                  ) : (
                    <button className="flex items-center bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium">
                      <Plus className="h-3 w-3 mr-1" />
                      Conectar
                      <span className="ml-1.5 bg-blue-700 text-white px-1.5 py-0.5 rounded-full flex items-center">
                        <Zap className="h-3 w-3 mr-0.5" />
                        {device.tokens}
                      </span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  // Renderiza el contenido de la pestaña de planes
  const renderPlansContent = () => (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <img 
          src="/images/Logo-GS.png" 
          alt="Global Seguros" 
          className="h-8 mr-2"
        />
        <h2 className="text-lg font-semibold text-gray-800">Planes de cobertura</h2>
      </div>
      
      <div className="mb-6 bg-blue-50 rounded-lg p-3 flex items-center">
        <Shield className="h-6 w-6 text-blue-500 mr-3" />
        <div>
          <div className="text-sm font-medium text-gray-800">Tu plan actual:</div>
          <div className="text-base font-semibold text-blue-700">
            {planData.find(plan => plan.id === selectedPlan)?.title}
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {planData.map(plan => (
          <div 
            key={plan.id} 
            className={`border rounded-lg overflow-hidden ${selectedPlan === plan.id ? 'border-blue-500 bg-blue-50' : 'bg-white'}`}
          >
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-800">{plan.title}</h3>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-700">{plan.price}</div>
                  <div className="text-xs text-gray-500">mensual</div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{plan.description}</p>
              
              <div className="space-y-2 mb-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              {selectedPlan === plan.id ? (
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium">
                  Plan Actual
                </button>
              ) : (
                <button 
                  onClick={() => setSelectedPlan(plan.id)}
                  className="w-full bg-white border border-blue-600 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50"
                >
                  Cambiar a este plan
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  
  // Renderiza el contenido de la pestaña de perfil mejorada
//   const renderEnhancedProfileContent = () => {
//     // Datos para la pestaña de perfil
//     const userProfile = {
//       name: 'María García',
//       type: 'Profesional',
//       age: 35,
//       tokens: 320,
//       streak: 14,
//       joinDate: '15 de febrero de 2025',
//       plan: planData.find(plan => plan.id === selectedPlan)?.title,
//       settings: [
//         { id: 1, title: 'Privacidad y datos', icon: 'Shield' },
//         { id: 2, title: 'Notificaciones', icon: 'Bell' },
//         { id: 3, title: 'Dispositivos conectados', icon: 'Activity' },
//         { id: 4, title: 'Método de pago', icon: 'CreditCard' }
//       ]
//     };
    
//     return (
//       <div className="p-4">
//         {/* Logo de Global Seguros en la parte superior */}
//         <div className="flex justify-end mb-2">
//           <img 
//             src="/images/Logo-GS.png" 
//             alt="Global Seguros" 
//             className="h-6"
//           />
//         </div>
        
//         {/* Profile Header */}
//         <div className="flex items-center mb-6">
//           <div className="mr-4 relative">
//             <img 
//               src="images/profile-picture.jpg" 
//               alt="Foto de perfil" 
//               className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
//             />
//             <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1">
//               <Plus className="h-3 w-3 text-white" />
//             </div>
//           </div>
//           <div>
//             <h2 className="text-lg font-semibold text-gray-800">{userProfile.name}</h2>
//             <p className="text-sm text-gray-600">{userProfile.type}, {userProfile.age} años</p>
//             <div className="flex items-center mt-1">
//               <Zap className="h-4 w-4 text-yellow-500 mr-1" />
//               <span className="text-sm font-medium text-gray-700">{userProfile.tokens} tokens</span>
//               <div className="mx-2 text-gray-300">•</div>
//               <Award className="h-4 w-4 text-blue-500 mr-1" />
//               <span className="text-sm font-medium text-gray-700">{userProfile.streak} días de racha</span>
//             </div>
//           </div>
//         </div>
        
//         {/* Plan actual */}
//         <div className="mb-6 bg-blue-50 rounded-lg p-4">
//           <h3 className="text-md font-semibold mb-2 text-blue-800">Tu plan actual</h3>
//           <div className="flex justify-between items-center">
//             <div>
//               <div className="font-medium text-gray-800">{userProfile.plan}</div>
//               <div className="text-sm text-gray-600">Renovación: 15 de mayo, 2025</div>
//             </div>
//             <button 
//               onClick={() => setActiveTab('plans')}
//               className="text-blue-600 text-sm font-medium flex items-center"
//             >
//               Cambiar
//               <ChevronRight className="h-4 w-4 ml-1" />
//             </button>
//           </div>
//         </div>
        
//         {/* Community Stats */}
//         <div className="mb-6 bg-gray-50 rounded-lg p-4">
//           <h3 className="text-md font-semibold mb-3 text-gray-800">Comunidad protegida</h3>
//           <div className="grid grid-cols-2 gap-3">
//             <div className="bg-white rounded-lg p-3 text-center shadow-sm border">
//               <div className="text-xl font-bold text-blue-600">42</div>
//               <div className="text-xs text-gray-600">Miembros</div>
//             </div>
//             <div className="bg-white rounded-lg p-3 text-center shadow-sm border">
//               <div className="text-xl font-bold text-green-600">18</div>
//               <div className="text-xs text-gray-600">Alertas compartidas</div>
//             </div>
//           </div>
//         </div>
        
//         {/* Dispositivos conectados */}
//         <div className="mb-6">
//           <div className="flex justify-between items-center mb-3">
//             <h3 className="text-md font-semibold text-gray-700">Dispositivos conectados</h3>
//             <button 
//               onClick={() => setActiveTab('integrations')}
//               className="text-blue-600 text-sm font-medium flex items-center"
//             >
//               Ver todos
//               <ChevronRight className="h-4 w-4 ml-1" />
//             </button>
//           </div>
          
//           <div className="space-y-2">
//             <div className="flex justify-between items-center p-3 bg-white border rounded-lg">
//               <div className="flex items-center">
//                 <Watch className="h-5 w-5 text-blue-500 mr-3" />
//                 <span className="text-gray-800">Apple Watch</span>
//               </div>
//               <span className="text-xs text-green-500 font-medium">Conectado</span>
//             </div>
//             <div className="flex justify-between items-center p-3 bg-white border rounded-lg">
//               <div className="flex items-center">
//                 <Smartphone className="h-5 w-5 text-green-500 mr-3" />
//                 <span className="text-gray-800">Health App</span>
//               </div>
//               <span className="text-xs text-green-500 font-medium">Conectado</span>
//             </div>
//           </div>
//         </div>
        
//         {/* Settings */}
//         <h3 className="text-md font-semibold mb-3 text-gray-700">Configuración</h3>
//         <div className="space-y-2">
//           {userProfile.settings.map(setting => (
//             <div key={setting.id} className="flex items-center justify-between p-3 bg-white border rounded-lg">
//               <div className="flex items-center">
//                 {setting.icon === 'Shield' ? <Shield className="h-5 w-5 text-blue-500 mr-3" /> :
//                  setting.icon === 'Bell' ? <Bell className="h-5 w-5 text-yellow-500 mr-3" /> :
//                  setting.icon === 'Activity' ? <Activity className="h-5 w-5 text-green-500 mr-3" /> :
//                  <CreditCard className="h-5 w-5 text-purple-500 mr-3" />}
//                 <span className="text-gray-800">{setting.title}</span>
//               </div>
//               <ChevronRight className="h-5 w-5 text-gray-400" />
//             </div>
//           ))}
//         </div>
        
//         <div className="mt-6 text-center text-sm text-gray-500">
//           <p>Miembro desde: {userProfile.joinDate}</p>
//         </div>
//       </div>
//     );
//   };
  
  // Renderiza el contenido según la pestaña activa
  const renderContent = () => {
    switch(activeTab) {
      case 'integrations':
        return renderIntegrationsContent();
      case 'plans':
        return renderPlansContent();
      default:
        return null;
    }
  };
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      
      {/* Tabs de navegación */}
      <div className="flex border-b">
        <button 
          onClick={() => setActiveTab('integrations')}
          className={`flex-1 py-3 text-center text-sm font-medium ${activeTab === 'integrations' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Integraciones
        </button>
        <button 
          onClick={() => setActiveTab('plans')}
          className={`flex-1 py-3 text-center text-sm font-medium ${activeTab === 'plans' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Planes
        </button>
      </div>
      
      {/* Tab Content */}
      {renderContent()}
    </div>
  );
};

export default GuardianSenseIntegrations;