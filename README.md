# Mercado libre frontend (y algo de backend) challenge

Este es un proyecto inició como [el template y sus respectivas indicaciones](https://github.com/mercadolibre/cx-frontend-challenge) aportadas por el equipo de Mercado Libre. En el desarrollo del ejercicio, el proyecto ha sido construido con el siguiente stack:

- Reactjs
- [Vite](https://vitejs.dev/)
- Typescript
- [pnpm](https://pnpm.io/)
- [React router](https://reactrouter.com/en/main)
- [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [raect-paginate](https://www.npmjs.com/package/react-paginate)
- sass
- [vitest-fetch-mock](https://vitest.dev/)
- [avj](https://ajv.js.org/)

Al hacer un fork del proyecto, se recomienda tener instaladas las extensiones Eslint y Prettier en el editor de codigo usado. (originalmente vscode)

## Instalación local

Este proyecto usa [pnpm](https://pnpm.io/7.x/installation) como administrador de paquetes. En ese sentido, si no tiene instalado pnpm, puede instalarlo de la siguiente manera:

`npm install -g pnpm`

1. Despues de estar seguro que ha instalado pnpm en su sitema debe ubicar en su consola sobre la carpeta backend

   `cd backend`

2. Y luego instalar las dependencias del backend

   `pnpm install`

3. Ahora es momento de iniciar el servicio del backend:

   `npm run dev`

4. Ahora, se debe repetir el los pasos anteriores pero ubicados en la carpeta de frontend

   `cd ../frontend`

5. Y luego instalar las dependencias del frontend

   `pnpm install`

6. Finalmente se ejecuta el comando de inicio:

   `npm run dev`

Finalmente, solo queda abrir en un navegador la url de localhost indicada en la consola.
