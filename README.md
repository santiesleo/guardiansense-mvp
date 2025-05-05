# GuardianSense MVP

## Descripción del proyecto

GuardianSense AI es un ecosistema de protección inteligente que transforma fundamentalmente el concepto de seguro tradicional, pasando de un modelo reactivo a uno predictivo y preventivo. Este MVP (Producto Mínimo Viable) demuestra cómo la tecnología puede anticipar necesidades y activar microprotecciones automáticamente, creando una capa de seguridad invisible pero omnipresente.

**Problema:**
- Los seguros actuales son reactivos, no preventivos
- Las personas solo piensan en seguros cuando ya es tarde (60% contratan tras vivir una experiencia crítica)
- 70% de usuarios no comprenden realmente su póliza y lo que incluye
- Experiencia fragmentada: el usuario debe configurar, reclamar y gestionar manualmente
- En Colombia hay una baja penetración del mercado dada por la complejidad percibida y la desconfianza

## Equipo de desarrollo

- Santiago Escobar León
- Alejandro Londoño Bermúdez
- Alejandro Torres Soto

## Instalación y ejecución

### Prerequisitos
- Node.js y npm instalados en tu sistema

### Pasos para ejecutar el proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/santiesleo/guardiansense-mvp.git
   cd guardiansense-mvp
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   npm install lucide-react
   ```

3. **Iniciar la aplicación:**
   ```bash
   npm start
   ```

4. **Acceder a la aplicación:**
   
   Abre tu navegador y ve a `http://localhost:3000`

## Funcionamiento de la solución

### Arquitectura general

GuardianSense AI funciona como un sistema inteligente de protección preventiva que utiliza la combinación de:

1. **Sensores e integraciones**: Conecta con dispositivos wearables, smartphones, vehículos, dispositivos de salud y hogar inteligente para obtener datos contextuales continuos.

2. **Algoritmos predictivos**: Analiza los datos recopilados para identificar patrones de riesgo y necesidades potenciales de protección.

3. **Activación automática de microprotecciones**: En base al contexto detectado, activa coberturas específicas sin intervención del usuario.

4. **Sistema de alertas preventivas**: Notifica al usuario sobre riesgos detectados y medidas de protección activadas.

5. **Plataforma comunitaria**: Permite compartir información sobre riesgos en tiempo real con otros usuarios.

### Tecnología subyacente

El sistema se construye sobre:

- **React y Tailwind CSS**: Para la interfaz de usuario adaptativa y componentes interactivos.
- **API de Geolocalización**: Para la detección de ubicación y zonas de riesgo.
- **Integración IoT**: Permite la comunicación con dispositivos conectados.
- **Análisis de datos en tiempo real**: Procesa la información contextual para tomar decisiones inmediatas.
- **Economía de tokens**: Sistema de incentivos basado en comportamientos seguros.

### Flujo de procesamiento de datos

1. **Recopilación**: Obtiene datos de los dispositivos conectados y sensores (patrones de sueño, ubicación, clima, etc.).
2. **Análisis**: Evalúa los datos contra modelos de riesgo predefinidos.
3. **Decisión**: Determina si existe una situación de riesgo que requiere protección.
4. **Activación**: Inicia automáticamente la cobertura específica necesaria.
5. **Notificación**: Informa al usuario sobre la situación y la protección activada.
6. **Seguimiento**: Continúa monitoreando para ajustar o desactivar la protección según sea necesario.

## Flujo de uso y experiencia del usuario

### Onboarding inicial

1. **Registro e instalación**: El usuario descarga la aplicación GuardianSense y crea una cuenta.
2. **Configuración inicial**: Selecciona un plan (limitado, ilimitado o con inversión) y configura su perfil básico.
3. **Conexión de dispositivos**: Vincula sus dispositivos inteligentes existentes (wearables, apps de salud, sensores del hogar).
4. **Exploración guiada**: Una introducción interactiva muestra las principales funcionalidades y beneficios del sistema.

### Uso diario (ciclo de protección invisible)

#### Mañana
1. **Análisis del sueño**: Al despertar, el sistema analiza los patrones de sueño a través de wearables conectados.
2. **Alerta preventiva**: Si detecta patrones de fatiga, activa automáticamente una protección ampliada contra accidentes.
3. **Planificación de ruta**: Antes de salir, el usuario puede consultar el mapa de riesgos para evitar zonas peligrosas.

#### Durante el día
1. **Adaptación al clima**: Si detecta condiciones climáticas adversas en la ruta del usuario, activa una cobertura temporal.
2. **Protección contextual**: Al entrar en zonas identificadas como de alto riesgo, activa coberturas específicas de movilidad.
3. **Monitoreo de biométrica**: Los dispositivos conectados analizan constantemente signos vitales y niveles de estrés.
4. **Alertas de salud**: Si detecta signos de enfermedad o estrés elevado, activa coberturas médicas ajustadas.
5. **Protección financiera**: Durante actividades de compra, monitorea patrones inusuales y activa protección contra fraudes.

#### Noche
1. **Monitoreo del hogar**: Los sensores domésticos detectan posibles problemas (fugas de agua, problemas eléctricos).
2. **Activación de emergencias**: En caso de detectar incidentes, activa automáticamente la cobertura correspondiente.

### Interacciones con la aplicación

- **Pestaña Inicio**: Visualización de protecciones activas y alertas recientes
- **Pestaña Coberturas**: Exploración de categorías de protección disponibles
- **Pestaña Mapa ("Tu zona")**: Consulta de zonas de riesgo y reporte de incidentes
- **Pestaña Actividad**: Estadísticas, desafíos y historial de eventos
- **Pestaña Configuración/Integraciones**: Gestión de dispositivos conectados y planes
- **Pestaña Perfil**: Información personal, estadísticas y configuración

### Momentos clave de la experiencia

1. **Activación automática**: Protección activada sin acción del usuario
2. **Prevención de riesgo**: Evitar incidentes gracias a alertas preventivas
3. **Recompensa por comportamiento seguro**: Tokens por completar desafíos
4. **Asistencia inmediata**: Soporte prioritario en emergencias
5. **Expansión de protección**: Beneficios por conectar nuevos dispositivos

## Funcionalidades del MVP

### 1. Mapa de riesgos y sistema comunitario ("Tu zona")
**¿Qué es?** Un mapa interactivo estilo Waze que muestra zonas de riesgo, alertas comunitarias y condiciones climáticas en tiempo real.

**¿Cómo funciona?**
- Visualización de zonas coloreadas según nivel de riesgo (rojo: alto riesgo, amarillo: riesgo medio, verde: zonas seguras)
- Puntos de alerta georreferenciados compartidos por la comunidad
- Indicador de condiciones climáticas actuales (lluvioso, nublado, soleado)
- Pestaña de "Alertas Comunitarias" para ver detalles de reportes cercanos
- Función para reportar nuevos incidentes desde el mapa

**Problema que resuelve:** Crea un sistema de prevención colectiva donde los usuarios comparten información en tiempo real, permitiendo evitar zonas de riesgo y estar informados sobre eventos cercanos que podrían afectar su seguridad.

### 2. Simulación temporal y contextual
**¿Qué es?** Una representación del día a día de María (usuaria ejemplo) donde el sistema anticipa sus necesidades según el contexto.

**¿Cómo funciona?** 
- El botón "Avanzar tiempo +1h" permite simular diferentes momentos del día
- A cada hora, el sistema detecta diferentes situaciones de riesgo o necesidad
- Las protecciones se activan y desactivan automáticamente

**Problema que resuelve:** Elimina la necesidad de que el usuario piense en su protección y realice gestiones manuales. El seguro se convierte en una capa invisible que funciona en segundo plano.

### 3. Protecciones adaptativas
**¿Qué es?** Microprotecciones que se activan automáticamente según la situación detectada.

**¿Cómo funciona?**
- Se muestran en la pestaña "Inicio" como tarjetas activas
- Cada protección incluye un icono relevante, título y periodo de validez
- Se adaptan al contexto (ej. cobertura ampliada por fatiga, protección en zonas de alto riesgo)

**Problema que resuelve:** Reemplaza las pólizas estáticas con coberturas dinámicas y contextuales, optimizando tanto la protección como los costos.

### 4. Sistema de alertas preventivas
**¿Qué es?** Notificaciones contextuales que informan al usuario sobre riesgos detectados.

**¿Cómo funciona?**
- Se muestran en la pestaña "Inicio" como alertas recientes
- Cada alerta incluye un icono según categoría, título, hora y descripción
- Proporcionan información sobre el riesgo y la acción tomada

**Problema que resuelve:** Facilita la prevención activa y la educación del usuario sobre riesgos, aumentando su comprensión y confianza.

### 5. Catálogo de coberturas
**¿Qué es?** Una visualización organizada de todas las protecciones disponibles por categoría.

**¿Cómo funciona?**
- Se accede desde la pestaña "Coberturas"
- Organiza las protecciones en 4 categorías: Salud Personal, Movilidad Inteligente, Hogar Conectado y Protección Financiera
- Cada categoría muestra descripción y detalles de las coberturas incluidas

**Problema que resuelve:** Simplifica la comprensión de las pólizas tradicionales complejas mediante una interfaz visual e intuitiva.

### 6. Sistema de gamificación y motivación
**¿Qué es?** Un ecosistema de incentivos que recompensa comportamientos seguros.

**¿Cómo funciona?**
- Se visualiza en las pestañas "Actividad" y "Perfil"
- Incluye tokens acumulados, desafíos activos con progreso y recompensas
- Establece un sistema de "racha" por días consecutivos con protección

**Problema que resuelve:** Incentiva comportamientos preventivos mediante una economía de tokens y mecánicas de gamificación.

### 7. Estadísticas y seguimiento
**¿Qué es?** Métricas sobre la actividad y efectividad de la protección.

**¿Cómo funciona?**
- Se muestra en la pestaña "Actividad"
- Incluye días protegidos, alertas preventivas y riesgos evitados
- Proporciona un historial cronológico de eventos

**Problema que resuelve:** Ofrece transparencia total y visualización del valor aportado, reduciendo la desconfianza hacia las aseguradoras.

### 8. Comunidad protegida
**¿Qué es?** Un sistema social de prevención colectiva.

**¿Cómo funciona?**
- Se visualiza en la pestaña "Perfil"
- Muestra estadísticas de comunidad: miembros y alertas compartidas
- Establece un sentido de protección colectiva

**Problema que resuelve:** Crea un sentido de comunidad dentro del ámbito de los seguros, aumentando la colaboración y el valor compartido.

### 9. Planes e integraciones personalizadas
**¿Qué es?** Un sistema flexible de planes y conexión con dispositivos inteligentes.

**¿Cómo funciona?**
- Ofrece tres planes diferentes: limitado pospago, ilimitado pospago y con inversión
- Permite conectar diversos dispositivos inteligentes (wearables, smartphones, vehículos, etc.)
- Incluye un marketplace para adquirir dispositivos compatibles

**Problema que resuelve:** Proporciona flexibilidad y personalización según las necesidades y presupuesto de cada usuario, eliminando la rigidez de los planes tradicionales.

## Arquitectura técnica

El MVP está construido utilizando:

- **React.js**: Para la interfaz de usuario y componentes interactivos
- **Tailwind CSS**: Para el estilo y diseño responsivo
- **Lucide Icons**: Proporciona iconos consistentes para la interfaz
- **Gestión de Estado**: Utilizando useState y useEffect de React para simular el comportamiento dinámico
- **Mapas interactivos**: Visualización espacial de riesgos y alertas comunitarias

## Propuesta de valor diferenciada

- **De reactivo a predictivo**: En lugar de responder después del siniestro, previene activamente los riesgos.
- **De complejo a simple**: Reemplaza pólizas complejas con protecciones automáticas y visualmente comprensibles.
- **De estático a dinámico**: Las coberturas se ajustan en tiempo real según el contexto y necesidades.
- **De individual a comunitario**: Crea un ecosistema de prevención colectiva donde todos contribuyen.
- **De costoso a optimizado**: Paga solo por la protección que realmente necesita en cada momento.

## Próximos pasos

Este MVP representa una primera fase de implementación. Las futuras iteraciones incluirían:

1. Integración con dispositivos reales (wearables, sensores IoT)
2. Implementación de modelos de IA predictiva
3. Desarrollo del sistema de contratos inteligentes con blockchain
4. Creación de una API para desarrolladores externos
5. Expansión del sistema comunitario de prevención
6. Integración con APIs de mapas en tiempo real (Google Maps, Mapbox)
7. Sistema avanzado de notificaciones georreferenciadas

---

*"No es un seguro que compras, es protección que siempre está contigo"*
