TEDYCAM V2
============

Esta versión corrige el problema del visor.

CAMBIO IMPORTANTE:
- La laptop NO pide cámara ni micrófono.
- El visor usa una pista de audio silenciosa generada por software para iniciar correctamente la llamada WebRTC.
- Antes de llamar, primero hace un handshake por canal de datos con la cámara.
- Reintenta automáticamente varias veces.
- PeerJS está configurado explícitamente con conexión segura.

USO:
1) Publica toda esta carpeta en HTTPS.
2) En cada celular cámara: TRANSMITIR > misma clave > nombre único (puerta, ventana, patio) > ACTIVAR.
3) En laptop: VER CÁMARAS > misma clave > nombres separados por comas > BUSCAR CÁMARAS.
4) Cuando aparezca EN VIVO, toca SONIDO si quieres escuchar.

IMPORTANTE:
No abrir como content://.
