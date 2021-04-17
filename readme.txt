

1. descargue el archivo comprimido
2. descomprimalo con el programa de su preferencia
3. Abra la carpeta music_app con el editor de codigo, de preferencia VSC

4. Encontrará dos carpetas una llamada backend y otra frontend
5. Para inicalizar el front abra una nueva terminal en vsc (ctrl+ñ)

copie los siguientes comandos: 

cd frontend    //para acceder a la carpeta
npm start      //para correr el servidor

6. Para inicializar el backend:

Abra otra consola y copie los siguientes comandos

cd backend      //para acceder a la carpeta
cd src          //para acceder a la carpeta raiz
nodemon index   //para correr el servidor


una vez hecho esto el proyecto se abrirá en el navegador por defecto

Tecologias Utilizadas

* Backend:

- Nodejs v 15.5.1
- Express (framework) v 4.17.1

  Paquetes

  - Cors
  - Node-fecth
  - Nodemon
 
Frontend

- React v 17.0.1
- HTML5
- CSS 3
- JS
- Bootstrap (framework css) v 4.6.0 

  Paquetes
  
  - Axios


## Consideraciones

1. Segun el Documento las busquedad no se deberian autenticar, sin embargo todos los endpoints estan protegidos y fue necesario autenticar al usuario primero para obtener el 
   token y poder realizar la consulta
2. Lastimosamente por ahora no manejo aplicaciones de testeo, por  lo que no pude cumplir ese requerimiento.
3. la configuracion del backend incluye un archivo de configuracion del servidor en
   backend/server/config en caso de que otra aplicación este usando el puerto lo pude cambiar
   en dicho archivo
4. las rutas y el controlador que las maneja estan en archivos diferentes
   backend/src/controllers/search.js
   backend/routes/index


Gracias por tener en cuenta mi aplicación, Feliz día.
   




