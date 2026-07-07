# Alerta Máxima

Landing page comercial desarrollada con React para presentar soluciones de seguridad y monitoreo. El sitio está enfocado en convertir visitas en contactos, mostrando los servicios principales, la cobertura, testimonios y una sección de cotización.

## Funcionalidades

- Hero principal con propuesta de valor clara.
- Sección de servicios con alarmas, CCTV, videoporteros y cámaras certificadas.
- Bloques de cobertura, ubicación y testimonios.
- Llamado a la acción para solicitar cotización.
- Diseño con componentes reutilizables y estilos centralizados con styled-components.

## Tecnologías

- React 19
- Create React App
- styled-components
- styled-reset

## Requisitos

- Node.js 18 o superior.
- pnpm recomendado, aunque también puedes usar npm.

## Instalación

```bash
pnpm install
```

Si prefieres npm:

```bash
npm install
```

## Scripts disponibles

### pnpm start

Inicia la aplicación en modo desarrollo en http://localhost:3000.

### pnpm test

Ejecuta el entorno interactivo de pruebas.

### pnpm build

Genera la versión optimizada para producción dentro de la carpeta build.

### pnpm eject

Expone toda la configuración de Create React App. Es una acción irreversible.

## Estructura del proyecto

```text
src/
  App.js
  index.js
  COMPONENTS/
    Header/
    Main/
    SERVICES/
    COBERTURA/
    UBICACION/
    TESTIMONIOS/
    COTIZACION/
    FOOTER/
  theme/
```

## Flujo de la página

La aplicación renderiza una sola landing con navegación por secciones:

1. Encabezado con menú y CTA.
2. Sección principal con el mensaje de la marca.
3. Servicios ofrecidos.
4. Cobertura geográfica.
5. Ubicación.
6. Testimonios.
7. Cotización.
8. Pie de página.

## Notas

- Los assets gráficos se sirven desde public/assets/img.
- El tema global se aplica desde src/theme usando ThemeProvider.
