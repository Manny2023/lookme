TEDYCAM PRO v3.1 HORIZONTAL
============================

Esta versión mantiene la conexión que ya funcionó en PRO v3 y añade:
- Captura solicitada en relación 16:9 horizontal.
- PWA configurada con orientación landscape.
- Vista local y remota llenan un cuadro horizontal 16:9.
- Intenta bloquear la orientación de pantalla en horizontal cuando Android lo permite.

IMPORTANTE:
Coloca físicamente el teléfono cámara ACOSTADO (horizontal) antes de ENCENDER la cámara.
Algunos Android ignoran el bloqueo de orientación del navegador; aun así la captura pide 1280x720 y 16:9.

Para actualizar GitHub Pages:
Reemplaza TODOS los archivos de la versión anterior por estos.
Cierra TedyCam y vuelve a abrirla. Arriba debe decir:
PRO v3.1 HORIZONTAL

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
