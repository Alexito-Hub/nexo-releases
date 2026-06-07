# Troubleshooting — problemas comunes

## La app no abre / crashea al iniciar

1. Verificá que tu Android sea **7.0 o superior** (API 24+).
2. Borrá caché y datos:
   - Settings del SO → Apps → Nexo → Almacenamiento → "Borrar datos".
3. Reinstalá desde el APK más reciente.
4. Si persiste, abrí un issue con el log:
   ```bash
   adb logcat -s pe.upla.nexo:* AndroidRuntime:E
   ```

## "No se pudo conectar a SIGMA"

- Probá abrir https://sigma.upla.edu.pe en tu navegador. Si tampoco
  carga ahí → SIGMA está caído, esperá.
- Si SIGMA carga en el navegador pero no en Nexo → posible problema
  TLS. La app bundleа CA roots actualizados pero algunos teléfonos
  muy viejos pueden seguir fallando. Reportá tu modelo de teléfono y
  versión Android.

## "Sesión expirada" todo el tiempo

- El token JWT de SIGMA expira cada cierto tiempo (~2 hs). Nexo lo
  refresca automáticamente.
- Si esto sucede en cada apertura, probá:
  1. Cerrar sesión completa (Perfil → Cerrar sesión).
  2. Volver a iniciar sesión.
  3. Si "Recordarme" está activo, marcarlo de nuevo.

## El horario / cuotas / notas aparecen vacíos

1. Pull-to-refresh (deslizá hacia abajo en la pantalla).
2. Si sigue vacío, verificá que esa data exista en SIGMA web (a veces
   no hay nada por mostrar — ej. estás entre periodos).
3. Si en SIGMA web sí está pero en Nexo no → bug de la app. Issue
   con captura.

## Lumen no descarga el modelo

- **"Sin conexión"** durante la descarga → fijate que tengas wifi
  estable. La descarga es ~290 o ~530 MB, no querés que se corte por
  datos móviles flojos.
- **Descarga llega al 100 % pero falla en "Verificando"** → el archivo
  bajado no coincide con el SHA-256 esperado (corrupción). Probá de
  nuevo — si pasa siempre, abrí issue.
- **"No disponible aún"** → el modelo está temporalmente fuera de
  línea. Esperá unas horas o cambiá a la otra variante.

## Lumen tarda mucho o no responde

1. Verificá que tu teléfono tenga al menos 3 GB de RAM disponible.
2. Si estás usando **Lumen Estándar** (1B) en un teléfono modesto,
   probá cambiar a **Ligero** (270M) — settings de Lumen → Cambiar
   modelo.
3. Cerrá otras apps en segundo plano que consuman RAM (Chrome con
   muchas pestañas, juegos, etc).
4. Reiniciá la app.

## Lumen responde con "**" infinito o basura

Esto era un bug viejo (mode collapse). Si te pasa con la versión
actual, **es bug serio** — abrí issue urgentemente con:
- Versión exacta de Nexo.
- Qué le preguntaste.
- Captura de la respuesta.
- Variante de Lumen (Ligero / Estándar).

## Las notificaciones no llegan

1. Settings del SO → Apps → Nexo → Notificaciones → activar "Permitir
   notificaciones".
2. Algunas marcas (Xiaomi, Huawei, Oppo) **matan apps en segundo
   plano agresivamente** — agregá Nexo a la lista de apps "siempre
   permitidas" o "ejecutar al iniciar".
3. En Android 14+, el SO puede pedir confirmación de notificaciones
   exactas (para recordatorios de clase). Aceptá cuando aparece el
   prompt.

## Microsoft Teams no carga

- Tu cuenta institucional UPLA debe tener Teams activo. Si tu carrera
  no usa Teams (raro pero posible) → no vas a ver nada.
- El admin de Microsoft 365 de UPLA puede haber restringido el
  acceso de apps de terceros. En ese caso, no hay mucho que hacer
  desde Nexo.
- Re-autorizar: Settings → Microsoft → "Cerrar sesión Microsoft" →
  volver a loguearte.

## La app se queda en pantalla blanca

- En Android, mantené presionado el ícono → ⓘ → "Forzar detención".
- Volvé a abrir.
- Si persiste → captura del logcat y reportar.

## Lumen consume mucha batería

- Es normal mientras procesa una respuesta (5-15 seg de CPU al 100 %).
- Si lo notás consumiendo aún cuando NO estás chateando → bug, abrí
  issue.

## Reportar un bug efectivamente

Lo que necesito para arreglarlo rápido:

1. **Versión de Nexo:** Perfil → Acerca de Nexo.
2. **Plataforma:** Android XX, modelo de teléfono.
3. **Qué hiciste:** pasos exactos para reproducir.
4. **Qué esperabas:** lo que debería haber pasado.
5. **Qué pasó:** lo que efectivamente pasó (captura ayuda).
6. **Logs si tenés:**
   ```bash
   adb logcat -s pe.upla.nexo:* flutter:* AndroidRuntime:E
   ```

Abrir issue en
<https://github.com/Alexito-Hub/nexo-releases/issues/new>.
