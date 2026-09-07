TEDYCAM PRO v3
================

ESTA ES LA VERSIÓN CORREGIDA PARA EL PROBLEMA:
"El celular dice TRANSMITIENDO y la laptop dice EN VIVO, pero el cuadro se queda negro."

QUÉ CAMBIÓ
----------
1. El visor ya NO llama con un stream vacío o solo audio.
2. El visor crea internamente una pista de VIDEO falsa y una pista de AUDIO silenciosa.
3. Eso obliga a WebRTC a negociar correctamente video + audio desde el principio.
4. La laptop/celular visor NO abre su cámara ni su micrófono.
5. TedyCam ya no muestra "EN VIVO" solo por recibir la conexión:
   espera hasta comprobar que el video remoto tiene ancho y alto reales.
6. Se añadieron diagnósticos visibles: video recibido, audio recibido y estado.
7. El Service Worker ahora elimina caches viejas y usa red primero para index.html.
   Esto evita quedarse atrapado usando una versión anterior.

USO
---
TELÉFONO CÁMARA:
1. Abre TedyCam desde HTTPS.
2. CÁMARA.
3. Código, por ejemplo Oso123.
4. ENCENDER.
5. Acepta cámara y micrófono.
6. Debe decir "ENCENDIDA · esperando conexión".

LAPTOP O CELULAR VISOR:
1. Abre TedyCam desde HTTPS.
2. VER.
3. Escribe el MISMO código.
4. CONECTAR.
5. Cuando llegue imagen real debe decir "EN VIVO" y mostrar la resolución.

MUY IMPORTANTE AL SUBIR A GITHUB PAGES
---------------------------------------
Reemplaza TODOS los archivos viejos por los de esta carpeta:
- index.html
- manifest.json
- sw.js
- logo.png
- carpeta icons

Después, en cada dispositivo:
- Cierra la pestaña anterior.
- Vuelve a abrir la URL.
- Confirma que arriba diga "PRO v3".
Si no aparece "PRO v3", todavía estás viendo la versión vieja.

REQUISITOS
----------
- HTTPS
- Internet
- Cámara/micrófono permitidos en el teléfono cámara
- PeerJS público accesible desde ambas redes

NOTA
----
Para una cámara adicional simultánea, usa otro código distinto en otro teléfono.
