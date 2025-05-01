# GuardianSense AI MVP

## Descripción del Proyecto

GuardianSense AI es un ecosistema de protección inteligente que transforma fundamentalmente el concepto de seguro tradicional, pasando de un modelo reactivo a uno predictivo y preventivo. Este MVP (Producto Mínimo Viable) demuestra cómo la tecnología puede anticipar necesidades y activar microprotecciones automáticamente, creando una capa de seguridad invisible pero omnipresente.

**Problema:**
- Los seguros actuales son reactivos, no preventivos
- Las personas solo piensan en seguros cuando ya es tarde (60% contratan tras vivir una experiencia crítica)
- 70% de usuarios no comprenden realmente su póliza y lo que incluye
- Experiencia fragmentada: el usuario debe configurar, reclamar y gestionar manualmente
- En Colombia hay una baja penetración del mercado dada por la complejidad percibida y la desconfianza

## Equipo de Desarrollo

- Santiago Escobar León
- Alejandro Londoño Bermúdez
- Alejandro Torres Soto

## Instalación y Ejecución

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

3. **Añadir Tailwind CSS:**
   
   Edita el archivo `public/index.html` y añade lo siguiente dentro de la etiqueta `<head>`:
   ```html
   <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
   ```

4. **Iniciar la aplicación:**
   ```bash
   npm start
   ```

5. **Acceder a la aplicación:**
   
   Abre tu navegador y ve a `http://localhost:3000`

## Funcionalidades del MVP

### 1. Simulación Temporal y Contextual
**¿Qué es?** Una representación del día a día de María (usuaria ejemplo) donde el sistema anticipa sus necesidades según el contexto.

**¿Cómo funciona?** 
- El botón "Avanzar tiempo +1h" permite simular diferentes momentos del día
- A cada hora, el sistema detecta diferentes situaciones de riesgo o necesidad
- Las protecciones se activan y desactivan automáticamente

**Problema que resuelve:** Elimina la necesidad de que el usuario piense en su protección y realice gestiones manuales. El seguro se convierte en una capa invisible que funciona en segundo plano.

### 2. Protecciones Adaptativas
**¿Qué es?** Microprotecciones que se activan automáticamente según la situación detectada.

**¿Cómo funciona?**
- Se muestran en la pestaña "Inicio" como tarjetas activas
- Cada protección incluye un icono relevante, título y periodo de validez
- Se adaptan al contexto (ej. cobertura ampliada por fatiga, protección en zonas de alto riesgo)

**Problema que resuelve:** Reemplaza las pólizas estáticas con coberturas dinámicas y contextuales, optimizando tanto la protección como los costos.

### 3. Sistema de Alertas Preventivas
**¿Qué es?** Notificaciones contextuales que informan al usuario sobre riesgos detectados.

**¿Cómo funciona?**
- Se muestran en la pestaña "Inicio" como alertas recientes
- Cada alerta incluye un icono según categoría, título, hora y descripción
- Proporcionan información sobre el riesgo y la acción tomada

**Problema que resuelve:** Facilita la prevención activa y la educación del usuario sobre riesgos, aumentando su comprensión y confianza.

### 4. Catálogo de Coberturas
**¿Qué es?** Una visualización organizada de todas las protecciones disponibles por categoría.

**¿Cómo funciona?**
- Se accede desde la pestaña "Coberturas"
- Organiza las protecciones en 4 categorías: Salud Personal, Movilidad Inteligente, Hogar Conectado y Protección Financiera
- Cada categoría muestra descripción y detalles de las coberturas incluidas

**Problema que resuelve:** Simplifica la comprensión de las pólizas tradicionales complejas mediante una interfaz visual e intuitiva.

### 5. Sistema de Gamificación y Motivación
**¿Qué es?** Un ecosistema de incentivos que recompensa comportamientos seguros.

**¿Cómo funciona?**
- Se visualiza en las pestañas "Actividad" y "Perfil"
- Incluye tokens acumulados, desafíos activos con progreso y recompensas
- Establece un sistema de "racha" por días consecutivos con protección

**Problema que resuelve:** Incentiva comportamientos preventivos mediante una economía de tokens y mecánicas de gamificación.

### 6. Estadísticas y Seguimiento
**¿Qué es?** Métricas sobre la actividad y efectividad de la protección.

**¿Cómo funciona?**
- Se muestra en la pestaña "Actividad"
- Incluye días protegidos, alertas preventivas y riesgos evitados
- Proporciona un historial cronológico de eventos

**Problema que resuelve:** Ofrece transparencia total y visualización del valor aportado, reduciendo la desconfianza hacia las aseguradoras.

### 7. Comunidad Protegida
**¿Qué es?** Un sistema social de prevención colectiva.

**¿Cómo funciona?**
- Se visualiza en la pestaña "Perfil"
- Muestra estadísticas de comunidad: miembros y alertas compartidas
- Establece un sentido de protección colectiva

**Problema que resuelve:** Crea un sentido de comunidad dentro del ámbito de los seguros, aumentando la colaboración y el valor compartido.

## Arquitectura Técnica

El MVP está construido utilizando:

- **React.js**: Para la interfaz de usuario y componentes interactivos
- **Tailwind CSS**: Para el estilo y diseño responsivo
- **Lucide Icons**: Proporciona iconos consistentes para la interfaz
- **Gestión de Estado**: Utilizando useState y useEffect de React para simular el comportamiento dinámico

## Próximos Pasos

Este MVP representa una primera fase de implementación. Las futuras iteraciones incluirían:

1. Integración con dispositivos reales (wearables, sensores IoT)
2. Implementación de modelos de IA predictiva
3. Desarrollo del sistema de contratos inteligentes con blockchain
4. Creación de una API para desarrolladores externos
5. Expansión del sistema comunitario de prevención

---

*"No es un seguro que compras, es protección que siempre está contigo"*