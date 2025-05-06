import React, { useState } from 'react';
import { 
  Watch, Smartphone, Car, HeartPulse, Home, Shield, 
  Plus, Zap, Check, ShoppingBag, CreditCard, Star, ChevronRight
} from 'lucide-react';

const GuardianSenseIntegrations = () => {
  const [activeTab, setActiveTab] = useState('integrations');
  const [selectedPlan, setSelectedPlan] = useState('unlimited');
  const [showMarketplace, setShowMarketplace] = useState(false);
  
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
        { name: 'Sensores de agua', connected: true, tokens: 12 },
        { name: 'Cámaras de seguridad', connected: false, tokens: 18 },
        { name: 'Detector de humo', connected: false, tokens: 15 }
      ]
    }
  ];
  
  // Datos para los planes
  const planData = [
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
      ],
      recommended: true
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
  
  // Datos para el marketplace
  const marketplaceData = [
    {
      id: 'health-devices',
      title: 'Dispositivos de salud',
      devices: [
        { 
          name: 'FitSmart watch pro', 
          price: '$289.900', 
          description: 'Monitoreo avanzado de salud 24/7',
          financing: '12 cuotas de $24.158',
          tokens: 25,
          image: '/images/fitwatch.jpg'
        },
        { 
          name: 'Glucómetro inteligente', 
          price: '$159.900', 
          description: 'Conectividad inmediata con la app',
          financing: '6 cuotas de $26.650',
          tokens: 15,
          image: '/images/glucose.jpg'
        },
        { 
          name: 'Tensiómetro digital pro', 
          price: '$119.900', 
          description: 'Medición precisa con historial en la nube',
          financing: '6 cuotas de $19.983',
          tokens: 12,
          image: '/images/bp-monitor.jpg'
        }
      ]
    },
    {
      id: 'home-devices',
      title: 'Dispositivos para el hogar',
      devices: [
        { 
          name: 'Pack sensores de agua (x3)', 
          price: '$99.900', 
          description: 'Detecta fugas y previene inundaciones',
          financing: '3 cuotas de $33.300',
          tokens: 18,
          image: '/images/water-sensors.jpg'
        },
        { 
          name: 'Cámara de seguridad 360°', 
          price: '$179.900', 
          description: 'Visión nocturna y alertas en tiempo real',
          financing: '12 cuotas de $14.992',
          tokens: 20,
          image: '/images/security-cam.jpg'
        },
        { 
          name: 'Detector de humo inteligente', 
          price: '$79.900', 
          description: 'Conectividad WiFi y alertas remotas',
          financing: '3 cuotas de $26.633',
          tokens: 15,
          image: '/images/smoke-detector.jpg'
        }
      ]
    },
    {
      id: 'vehicle-devices',
      title: 'Dispositivos para vehículos',
      devices: [
        { 
          name: 'Rastreador GPS avanzado', 
          price: '$149.900', 
          description: 'Seguimiento en tiempo real con geofencing',
          financing: '6 cuotas de $24.983',
          tokens: 22,
          image: '/images/gps-tracker.jpg'
        },
        { 
          name: 'OBD-II diagnóstico smart', 
          price: '$129.900', 
          description: 'Monitoreo de salud del vehículo',
          financing: '6 cuotas de $21.650',
          tokens: 18,
          image: '/images/obd-scanner.jpg'
        },
        { 
          name: 'Dashcam HD con alertas de desastres', 
          price: '$199.900', 
          description: 'Grabación continua y detección',
          financing: '12 cuotas de $16.658',
          tokens: 25,
          image: '/images/dashcam.png'
        }
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
  
  // Renderiza el contenido del marketplace
  const renderMarketplaceContent = () => (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <ShoppingBag className="h-5 w-5 mr-2 text-blue-600" />
          Marketplace de dispositivos
        </h2>
        <button 
          onClick={() => setShowMarketplace(false)}
          className="text-sm text-blue-600 font-medium"
        >
          Volver a integraciones
        </button>
      </div>
      
      <div className="bg-blue-50 p-3 rounded-lg mb-4 flex items-center">
        <CreditCard className="h-5 w-5 text-blue-600 mr-2" />
        <p className="text-sm text-blue-700">
          Financiación disponible hasta en 12 cuotas sin interés y envío gratis en compras mayores a $100.000
        </p>
      </div>
      
      <div className="space-y-6">
        {marketplaceData.map(category => (
          <div key={category.id} className="border rounded-lg overflow-hidden bg-white">
            <div className="p-4 border-b bg-gray-50">
              <h3 className="font-semibold text-gray-800">{category.title}</h3>
            </div>
            
            <div className="p-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.devices.map((device, idx) => (
                <div key={idx} className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-32 bg-gray-100 flex items-center justify-center overflow-hidden">
                    {device.image ? (
                      <img 
                        src={device.image} 
                        alt={device.name} 
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Shield className="h-16 w-16 text-blue-300" />
                    )}
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-gray-800">{device.name}</h4>
                    <p className="text-xs text-gray-600 mb-2">{device.description}</p>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-blue-600">{device.price}</span>
                      {/* <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full flex items-center">
                        <Zap className="h-3 w-3 mr-1" />
                        {device.tokens} tokens
                      </span> */}
                    </div>
                    <p className="text-xs text-gray-500 mb-3">
                      Financiación: {device.financing}
                    </p>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Renderiza el contenido de la pestaña de integraciones
  const renderIntegrationsContent = () => (
    <div className="p-4">
      {/* Call to Action para el Marketplace */}
      <div className="mb-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg overflow-hidden shadow-md">
        <div className="p-4 text-white">
          <div className="flex items-start">
            <ShoppingBag className="h-12 w-12 mr-4 text-white bg-blue-600 p-2 rounded-lg" />
            <div>
              <h3 className="font-bold text-xl mb-1">¿No tienes los dispositivos?</h3>
              <p className="text-blue-100 mb-3">
                Explora nuestro marketplace de dispositivos compatibles con financiación flexible y gana tokens por cada compra.
              </p>
              <button 
                onClick={() => setShowMarketplace(true)}
                className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center hover:bg-blue-50"
              >
                Explorar dispositivos
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

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
                    <div className="flex items-center">
                      <button className="flex items-center bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium">
                        <Plus className="h-3 w-3 mr-1" />
                        Conectar
                        <span className="ml-1.5 bg-blue-700 text-white px-1.5 py-0.5 rounded-full flex items-center">
                          <Zap className="h-3 w-3 mr-0.5" />
                          {device.tokens}
                        </span>
                      </button>
                    </div>
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
            Cobertura ilimitada pospago
          </div>
        </div>
      </div>
      
      {/* Layout de planes vertical, con el premium en el medio */}
      <div className="space-y-4 max-w-lg mx-auto">
        {/* Plan Limitado */}
        <div className="border rounded-lg overflow-hidden flex flex-col bg-white">
          <div className="p-3 text-center border-b">
            <div className="text-base font-bold text-blue-700">Cobertura <span className="text-blue-900">$39.</span><span className="text-sm align-top">900</span></div>
            <div className="text-xs text-gray-600">limitada pospago</div>
          </div>
          
          <div className="p-3 text-sm">
            <p className="text-gray-700 mb-3 text-xs">
              Cobertura hasta un valor base con acumulación mensual
            </p>
            
            <div className="space-y-2 mb-4 text-xs">
              <div className="flex items-start">
                <Check className="h-3 w-3 mr-1 mt-0.5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Cobertura hasta $5.000.000</span>
              </div>
              <div className="flex items-start">
                <Check className="h-3 w-3 mr-1 mt-0.5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Soporte 24/7</span>
              </div>
              <div className="flex items-start">
                <Check className="h-3 w-3 mr-1 mt-0.5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Hasta 3 integraciones</span>
              </div>
              <div className="flex items-start">
                <Check className="h-3 w-3 mr-1 mt-0.5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">El saldo no utilizado pasa al siguiente mes</span>
              </div>
              <div className="flex items-start">
                <Check className="h-3 w-3 mr-1 mt-0.5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Reportes trimestrales</span>
              </div>
            </div>
          </div>
          
          <div className="mt-auto p-3 pt-0">
            <button 
              onClick={() => setSelectedPlan('limited')}
              className="w-full bg-white border border-blue-600 text-blue-600 py-2 rounded-lg text-sm font-medium hover:bg-blue-50"
            >
              Cambiar a este plan
            </button>
          </div>
        </div>
        
        {/* Plan Premium (Destacado) */}
        <div className="border-2 border-blue-500 rounded-lg overflow-hidden flex flex-col bg-blue-50 shadow-md transform scale-105 z-10">
          <div className="bg-yellow-400 text-center py-1">
            <div className="flex items-center justify-center text-xs font-bold text-gray-800">
              <Star className="h-3 w-3 mr-1 text-yellow-600" fill="currentColor" />
              RECOMENDADO
            </div>
          </div>
          
          <div className="p-3 text-center border-b">
            <div className="text-base font-bold text-blue-700">Cobertura <span className="text-blue-900">$59.</span><span className="text-sm align-top">900</span></div>
            <div className="text-xs text-gray-600">ilimitada pospago</div>
          </div>
          
          <div className="p-3 text-sm">
            <p className="text-blue-700 mb-3 text-xs font-medium">
              Cobertura total sin límites para todas tus necesidades
            </p>
            
            <div className="space-y-2 mb-4 text-xs">
              <div className="flex items-start">
                <Check className="h-3 w-3 mr-1 mt-0.5 text-blue-600 flex-shrink-0" />
                <span className="text-blue-800">Cobertura ilimitada</span>
              </div>
              <div className="flex items-start">
                <Check className="h-3 w-3 mr-1 mt-0.5 text-blue-600 flex-shrink-0" />
                <span className="text-blue-800">Soporte prioritario 24/7</span>
              </div>
              <div className="flex items-start">
                <Check className="h-3 w-3 mr-1 mt-0.5 text-blue-600 flex-shrink-0" />
                <span className="text-blue-800">Todas las integraciones incluidas</span>
              </div>
              <div className="flex items-start">
                <Check className="h-3 w-3 mr-1 mt-0.5 text-blue-600 flex-shrink-0" />
                <span className="text-blue-800">Asistencia premium en emergencias</span>
              </div>
              <div className="flex items-start">
                <Check className="h-3 w-3 mr-1 mt-0.5 text-blue-600 flex-shrink-0" />
                <span className="text-blue-800">Reportes mensuales personalizados</span>
              </div>
            </div>
          </div>
          
          <div className="mt-auto p-3 pt-0">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
              Plan Actual
            </button>
          </div>
        </div>
        
        {/* Plan Inversión */}
        <div className="border rounded-lg overflow-hidden flex flex-col bg-white">
          <div className="p-3 text-center border-b">
            <div className="text-base font-bold text-blue-700">Cobertura <span className="text-blue-900">$49.</span><span className="text-sm align-top">900</span></div>
            <div className="text-xs text-gray-600">con inversión</div>
          </div>
          
          <div className="p-3 text-sm">
            <p className="text-gray-700 mb-3 text-xs">
              Tu protección genera rendimientos a largo plazo
            </p>
            
            <div className="space-y-2 mb-4 text-xs">
              <div className="flex items-start">
                <Check className="h-3 w-3 mr-1 mt-0.5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Cobertura hasta $3.000.000</span>
              </div>
              <div className="flex items-start">
                <Check className="h-3 w-3 mr-1 mt-0.5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">El saldo no utilizado genera intereses</span>
              </div>
              <div className="flex items-start">
                <Check className="h-3 w-3 mr-1 mt-0.5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Tasa mínima garantizada de 3%</span>
              </div>
              <div className="flex items-start">
                <Check className="h-3 w-3 mr-1 mt-0.5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Hasta 5 integraciones</span>
              </div>
              <div className="flex items-start">
                <Check className="h-3 w-3 mr-1 mt-0.5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Asesoría financiera incluida</span>
              </div>
            </div>
          </div>
          
          <div className="mt-auto p-3 pt-0">
            <button 
              onClick={() => setSelectedPlan('investment')}
              className="w-full bg-white border border-blue-600 text-blue-600 py-2 rounded-lg text-sm font-medium hover:bg-blue-50"
            >
              Cambiar a este plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Renderiza el contenido según la pestaña activa
  const renderContent = () => {
    if (showMarketplace) {
      return renderMarketplaceContent();
    }
    
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
          onClick={() => {setActiveTab('integrations'); setShowMarketplace(false);}}
          className={`flex-1 py-3 text-center text-sm font-medium ${activeTab === 'integrations' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Integraciones
        </button>
        <button 
          onClick={() => {setActiveTab('plans'); setShowMarketplace(false);}}
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