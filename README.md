# Erny & Yessica — invitación de boda

Invitación de boda migrada a Next.js 16 con App Router, Tailwind CSS 4 y GSAP.
Cada sección vive en su propio componente para que el contenido y el diseño se
puedan editar de forma independiente.

La estructura principal es:

- `app/`: layout, página principal y `globals.css`.
- `components/invitation/`: header, indicadores de scroll, hook de animaciones y
  secciones de la invitación.
- `public/images/`: los 28 assets originales, conservados sin cambios.

## Desarrollo local

Instala las dependencias e inicia Next.js:

```bash
npm install
npm run dev
```

Después abre `http://localhost:3000`.

## Despliegue en Vercel

Importa este repositorio en Vercel o ejecuta:

```bash
npm run build
npm run start
```

Vercel detectará Next.js automáticamente. La configuración mínima está en
`vercel.json` y no requiere variables de entorno ni servicios adicionales.
