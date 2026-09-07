TEDYCAM PRO v4.4 — LOOKME
================================
Esta versión está hecha específicamente para:
https://manny2023.github.io/lookme/

PWA:
- Manifest, start_url, scope, iconos y Service Worker usan /lookme/ explícitamente.
- El botón INSTALAR sólo aparece cuando Chrome entrega su instalador nativo.
- No hay alertas falsas de instalación.

AUDIO:
- Cámara y micrófono se solicitan por separado.
- Luego se combinan en el mismo stream WebRTC.
- Ya no se muestra el texto engañoso “silenciado origen”.
- En el visor: si Audio dice “Recibido · toca Sonido”, pulsa Sonido.
- Si Android pregunta por Micrófono, toca PERMITIR.

SUBIDA:
Reemplaza TODOS los archivos dentro del repositorio/página lookme.
No cambies de carpeta: esta versión está enlazada a /lookme/.
