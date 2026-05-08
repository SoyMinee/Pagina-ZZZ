Basado en el Sitio Oficial de Zenless Zone Zero (https://zenless.hoyoverse.com/es-es/main)

Tratar de imitar la escencia y estetica de la pagina para crear una guia para los personajes.

De la pagina lo que quiero llevar seria el apartado de personajes con ese selector que tiene pero a mi estilo. 

Tambien luego crear la pestaña de “Ambientacion” pero adaptado a la guia: que muestren los conjuntos equipables, armas y lista de personajes por ejemplo

PROGRESO DE LA PÁGINA ##############

    1. Expositor de personajes                                     --- Hecho
    2. Acceso a la guía de personajes                              --- Hecho
    3. Implementacion de BBDD para usuarios y control de datos     --- Hecho
    4. Pestaña de introducción al juego, quiero probar a usar 3D   --- Hecho
        -> Accesible desde la Landing Page
        -> Implementación de videos, capas y animaciones.
    5. Registro de usuarios con perfil personalizable              --- Hecho
    6. Animaciones estilizadas con la tematica del juego           --- Hecho
    7. Responsibidad y adaptación a móviles                        --- 90%


SERVIDOR DE NODE.JS ################

    1. Para montarlo instale node.js https://nodejs.org/en/download

    2. Luego creé un server.js

    3. En una terminal escribí en este orden: 
            npm init -y
            npm install express cors
    
    4. Antes de hacer debugging a index.html escribo en la terminal: node server.js



#######################################

DOCUMENTACION

#######################################


1. Ejecución

   Para abrir la página web, se tiene que visitar zenlezzlogic.onrender.com en vez de ejecutarla nativamente con node, para ello habría que cambiar todas las rutas de acceso al servidor de los archivos JavaScript e introducir el puerto local, ya que a la hora de subir la web a Render, tuve que dejar de hacer posible la ejecución local.


2. Funcionalidades

   a) Expositor de personajes
   
   b) Inicio de sesión
   
   c) BBDD Funcional
   
   d) Uso de SVG y capas

   e) Responsividad y adaptación a móvil
   
   f) Deploy de la web para el acceso remoto
   
   g) Perfiles de usuario editables
   
   h) Lista de personajes seleccionable


   2.A
    La landing page muestra todos los personajes del juego, con una breve descripción. Estos se cargan junto a la página al abrirse, el script asignado al index se encarga de acceder al json que almacena toda la información de los personajes: rutas e las imagenes, descripciones, nombre y colores de énfasis.
    Las funciones encontradas en "root/script.js" entre las líneas 8-43 se encargan de almacenar todo el contenido de "root/database/discinfo.json" y de "root/database/proxiesInfo.json" en sus respectivos arrays
    Y la funcion entre las líneas 48-68 actualiza el contenido que reciben de esos arrays cuando sea necesario (al cambiar de personaje, por ej.).

   2.B
    En "root/userpage/userPage.html" se haya el inicio de sesión. Consta de un formulario que compara las cadenas introducidas con las que existen en el archivo "root/database/userData.json". En caso de no coincidir, mostrará un mensaje              indicando qué casilla es incorrecta (usuario o contraseña), en el mismo html, hay un botón para registrarse, solicitando los datos que ahora se escribirán en el JSON. Una vez más cuenta con comprobaciones, de si el usuario ya existe, en caso de que sí, se impedirá continuar. El bloque entre las líneas 43-90 de "root/userpage/userPage.js" maneja toda la lógica de comprobaciones a la hora de inicar sesión y registrar, mientras que el de las líneas 92-111 maneja la carga del perfil en caso de conexión correcta. Por último, existe un mensaje adicional para cuando ocurra algún error inesperado entre el envío de datos y las comprobaciones en el servidor. Mostrando por pantalla "server offline" (líneas 87-88).

   2.C
    La base de datos fue creada usando node, con el set-up que sale en la línea 22 de este documento. tras ello en mi archivo "root/server.js" creé las rutas de api para que posteriormente en mis js pueda usarlas para acceder a los JSON, ya sea para lectura o escritura. Destacar las 5 primeras lineas del archivo, en especial la que importa PATH, ya que gracias a ello puedo crear constantes con los nombres de las rutas y asegurarme de que no den problemas nunca. El resto del archivo se basa en rutas GET y POST, para recibir datos y enviar datos al servidor y sus archivos JSON. En esos bloques se sigue la misma estructura, determinar si es GET/POST, identificar la ruta, el tipo de encode, utf-8 en este caso, el archivo  al que se accede y todo esto dentro de un bloque try-catch para control de excepciones. Por ultimo, las funciones que son algo más complejas y distintas, las de actualizar (líneas 52-71 y 73-88) ya que no se basan en añadir información. Sino en buscar un dato ya existente y reemplazar algun parámetro o valor. Para ello se incluyen unas cuantas líneas más en las que se maneja la busqueda de usuario en este caso, y de lo que se va a reemplazar.

   2.D
    En la página "root/guiapage/guia.html" se encuentra una imagen de un televisor que al scrollear reproduce el trailer de revelación del juego. Para ello creé un render 3d usando blender que luego divií en capas para crear los diferentes           efectos, como por ejemplo, el ruido caracteristico de imagen de un televisor que no sintoniza. Me aproveché de las capas para poner el efecto en toda la pantalla, pero por debajo de ciertos elementos, dando como resultado que solo se ve en la pantalla de mi render, pero por encima del vídeo, usandolo de transición. La página en cuestión no ofrece mucho más, salvo un botón para regresar. La interfaz se oculta al reproducir el vídeo para mayor claridad, salvo el botón de regresión a la página principal.

   2.E
    Para una correcta adaptación a móviles, el layout de la página fue actualizado, creando un segundo css, "root/mobile.css" este esta vinculado también al index junto a su css original "root/style.css", pero a diferencia del original, solo se activa según las condiciones que tiene en su etiqueta de link, media="(max-width: 850px) or (orientation: portrait)", y dentro del css, uso el modificador !important para sobreescribir todo lo que el css por defecto tenga en coincidencia. Así pues por ejemplo, las animaciones de entrada de los personajes, la "O" que se vuelve parte de la interfaz, y las guías de personajes, todas han sido modificadas para no solo ser responsivas si no que además encajen con una navegación cómoda pensando en como se suele usar un teléfono, todo controlable con una sola mano.

   2.F
    Como ya se mencionó antes en la ejecución. La web está mantenida en render. Lo cual indica que podemos ir a la dirección ya dicha y acceder a ella. Si bien tiene desventajas, como que si no se accede en un determinado tiempo, debe inicializarse, y necesita un tiempo de espera (1 min aprox) la web es completamente funcional. Puede tener ciertas fallas como que a veces las imagenes no cargan en un instante, por ejemplo al cargar de personaje, por las limitaciones de recursos que ofrece.
   Para relaizar el deploy, visité render.com e inicié sesión con github. Le di acceso a mi repositorio, y adapté mis rutas eliminando el uso del puerto 3000 de localhost.

   2.G
    Explicado por encima en el apartado 2.C, Una vez se incia sesión es posible modificar tanto la foto como la biografía. Nuevamente, render no almacena permanentemente escrituras nuevas en los archivos. Por lo que serán borrados tras un tiempo. Las 2 funciones que comprenden las líneas 137-201 en "root/userpage/userPage.js" se encargan de: mostrar la lista de personajes, del mismo modo que se podía hacer en el expositor. Solo que en caso de seleccionar un personaje, la segunda funcion de encargará de enviar tanto en usuario que esta activamente conectado como el id de la imagen del personaje seleccionado. Para que la funcion del servidor identifique el usuario y luego edite el valor de su imagen por la nueva. Lo mismo ocurre para la biografía.

   2.H
    Por último, en el expositor, hay un botón que despegará una lista con todos los personajes, para que al seleccionar uno, el indice del array salte directamente al valor de la posición del personaje elegido. Es util para viajar rapido si no quieres recorrer todo el expositor uno a uno. Las funciones encontradas en las líneas 195-228 en "root/script.js" se encargan de abrir la lista al pulsar el botón, y cambiar al personaje elegido. Modificando la posición del array y a su vez llamando a los metodos que actualizan el apartado visual.
