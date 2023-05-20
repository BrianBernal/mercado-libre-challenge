# **Mercado libre frontend (y algo de backend) challenge**

Este es un proyecto inició como [el template y sus respectivas indicaciones](https://github.com/mercadolibre/cx-frontend-challenge) aportadas por el equipo de Mercado Libre. En el desarrollo del ejercicio, el proyecto ha sido construido con el siguiente stack:

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

## **Instalación local**

Este proyecto usa [pnpm](https://pnpm.io/7.x/installation) como administrador de paquetes. En ese sentido, si no tiene instalado pnpm, puede instalarlo de la siguiente manera:

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

## Configuracion de puerto en el servicio de backend

El puerto por defecto al iniciar el backend con el anterior procedimiento es el 4000

En caso de querer cambiar el puerto, la recomendación es hacer una copia los archivos `.env.example` tanto el la carpeta _frontend_ como en la del _backend._

La copia del frontend debe ser nombrada como `.env.local`. La copia del backend debe ser renombrada a `.env`

Posteriormente, en el lado del backend, la variable concerniente al puerto se muestra como `PORT=4000`. El valor _4000_ deberá ser cambiado al nuevo puerto deseado.

Similarmente, en lado del frontend, la variable en cuestión es `VITE_BACKEND_PORT=4000`. Deberá cambiarse el valor \***\*4000\*\*** por el nuevo puerto deseado

Vale destacar que el nuevo puerto indicado tanto en el frontend como en el backend deben ser exactamente el mismo.

### Justificación

Si bien, técnicamente es posible compartir el mismo origen de puerto para frontend y backend, esta redundancia se justifica en el hecho de que el frontend y el backend son sistemas independientes acorde con el modelo cliente-servidor, por lo que para mantener dicha independencia se crean variables de entorno específicamente para cada uno de los lados.

### Forma alternativa

Una segunda forma NO recomendada sería cambiar manualmente el valor de las variables que leen estos valores en frontend y backend. En el caso del backend sería el archivo ********\*********backend/src/index.js********\********* en la constante `PORT`. En el caso del frontend sería el archivo ****************\*\*****************frontend/src/services/httpUtils.ts****************\*\***************** en la constante `BACKEND_BASE_URL`. Para este último se debe incluir la url completa que por defecto es "http://localhost:4000/api/v1". La nueva url deberá incluir el nuevo puerto.

No se recomienda este método puesto que imposibilita un futuro despliegue productivo, teniendo que recurrir igualmente al primer método referente al uso de variables de entorno.
