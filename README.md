# CenGot

Este proyecto fue desarrollado en lenguage TypeScript con el Framework Angular 7

## Pre-Requisitos

Para poder correr este proyecto es necesario tener instalada una version de **NodeJs 8** o puperior.


## Levantar APP

Para levantar la aplicacion de forma local primero se debe instalar las dependencias del proyecto con el comando `npm i` desde la carpeta raíz.

Una vez instaladas las dependencias del proyeto debe ejecutar el comando `npm start` desde la raíz del proyecto. Esto levantara un servidor local en el puerto 4200 y podra acceder a la aplicación desde la URL `http://localhost:4200/`.

## Test Unitarios

Para correr los test unitarios debe correr desde la carpeta raíz el comando `npm test`. Al finalizar puede revisar el reporte de covertura en la ruta `/coverage/cen-got/index.html`

El criterio que se definio para las pruebas unitarias de este proyecto fueron las siguientes:

- Comprobar que las funciones que realizan transformaciones de ojetos JSON a objetos de dominio cumplan con lo deseado.
- Tener un minimo de 90 % de covertura en el codigo del proyecto.


