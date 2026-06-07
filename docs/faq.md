# Preguntas frecuentes

## Sobre Nexo

### ¿Es oficial de UPLA?
No. Es un proyecto personal de un estudiante (Alessandro Villogas
Gaspar, U01025B, Sistemas Huancayo). La universidad no patrocina ni
respalda Nexo.

### ¿Es seguro meter mi contraseña? <a name="contraseña"></a>
Sí. Tu contraseña:
- Se envía **solo** a los servidores oficiales de UPLA (SIGMA e
  Intranet) por HTTPS, igual que cuando entrás al sitio web.
- Si elegís "Recordarme", se guarda **localmente** en el almacenamiento
  privado de la app, ofuscada en base64.
- **Nunca** se envía a ningún servidor mío, porque no tengo servidor.
- Nadie más que el sistema operativo del teléfono y los servidores de
  UPLA la ven.

Si querés extra-seguridad, no marqués "Recordarme" — vas a tener que
loguearte cada vez, pero la contraseña no queda guardada.

### ¿Es gratis? ¿Tiene anuncios?
Gratis, sin anuncios, sin compras integradas, sin suscripciones. Es
un proyecto personal.

### ¿Cómo gana plata el desarrollador?
No gana plata con Nexo. Lo mantengo en mi tiempo libre como aporte a
la comunidad estudiantil UPLA. Si encontrás muy útil la app y querés
apoyar, podés:
- Compartirla con otros alumnos.
- Reportar bugs / sugerir features en los issues.
- Dejar un café via PayPal (link próximamente, opcional).

### ¿Hay versión iPhone?
La app compila para iOS pero no la distribuyo en App Store por costos
($99/año del Developer Program). Si tenés Mac + Xcode y querés
sideloadearla, abrí un issue y vemos.

### ¿Por qué Nexo se llama "Nexo"?
Porque conecta — es el nexo entre vos y los sistemas dispersos de UPLA
(SIGMA, Intranet, Teams) en un solo lugar.

### ¿Funciona sin internet?
Parcialmente. La primera carga necesita internet (login + bajar tu
data). Después, los datos cacheados siguen visibles offline. Algunas
acciones (refrescar notas, ver una constancia recién generada) sí
requieren conexión.

Lumen funciona 100 % offline después de la descarga inicial del modelo.

### ¿Y si UPLA cambia algo y la app deja de funcionar?
Pasa. Cuando UPLA actualiza un endpoint o cambia el formato JSON,
algo de Nexo aparece roto. La solución es publicar una versión
parchada — generalmente entre horas y días. Reportá el problema en
issues para que vaya rápido.

### ¿Por qué la app pesa tanto?
~140 MB para el APK arm64. El peso viene mayoritariamente de las
librerías nativas C++ que Lumen necesita (MediaPipe + TensorFlow Lite).
La app de Nexo sola serían ~60 MB. Si nunca usás Lumen, igual está
esa porción del peso porque el código nativo va embebido.

---

## Sobre Lumen

### ¿Lumen ve mi data UPLA?
Sí, pero **solo dentro de tu teléfono**. Lumen lee la data que Nexo
ya tiene cargada (perfil, horario, cuotas, notas) y la usa para
responder tus preguntas. Nada de esto sale del dispositivo.

### ¿Puedo usar Nexo sin Lumen?
Sí, totalmente. Lumen es **opt-in** — no se descarga ni se activa
hasta que vos lo decidas. Si nunca tocás el FAB de Lumen, la app
funciona como un cliente UPLA "normal" sin asistente.

### ¿Cuánto pesa el modelo de Lumen?
- **Lumen Ligero:** ~290 MB.
- **Lumen Estándar:** ~530 MB.

Es descarga **única** — una vez bajado no se repite (a menos que
cambies de variante).

### ¿Por qué Lumen no recuerda lo que le pregunté antes?
En v1 cada pregunta es independiente. Lo hicimos así para evitar
que el modelo se "confunda" entre temas distintos y para que cada
respuesta tenga exactamente el contexto que necesita.

En v1.3 vamos a agregar historial persistente.

### Lumen me responde mal / a veces se "queda pensando"
Los modelos pequeños no son perfectos. Probá:
1. **Reformular** la pregunta con palabras clave más específicas
   ("¿cuál es mi próxima clase?" en vez de "¿qué tengo ahora?").
2. **Cambiar de modelo** (Settings de Lumen → Cambiar modelo) — si
   estás en Ligero, probá Estándar.
3. **Limpiar historial** (refresh icon arriba del chat).

Si pasa siempre con cierta pregunta, abrí un issue con el ejemplo.

### ¿Puedo entrenar a Lumen con mis datos?
No con la app actual. Es un modelo pre-entrenado que solo lee tu data
en runtime. Fine-tuning requeriría infraestructura que no tenemos.

### ¿Lumen consume mucha batería?
Mientras procesa una respuesta, sí — usa CPU/GPU intensivamente
durante ~5-15 segundos. Pero como no está corriendo todo el tiempo
(solo cuando le preguntás algo), el impacto diario es mínimo: unos
1-3 % extra de batería si lo usás varias veces.

### ¿Funciona en cualquier teléfono Android?
- Android 7.0 (API 24) o superior — bumpeamos el min SDK por Lumen.
- Recomendado: 3 GB RAM o más.
- Procesador ARM64 (la mayoría desde 2016).

Si tu teléfono no cumple, podés usar Nexo sin Lumen — el resto de
la app sigue funcionando.

---

## Privacidad

### ¿Tienen analytics? ¿Saben cuántas personas usan la app?
No. Cero analytics, cero telemetría. No sé si la app la usan 10 o
10,000 personas — me entero solo por los issues abiertos.

### ¿Se almacenan logs en algún lado?
No fuera de tu teléfono. La app loguea cosas para debugging local
(visibles con `adb logcat`), pero esos logs nunca se envían a ningún
lado.

### ¿Microsoft / Google ven mi data académica?
- Google solo si activás Lumen → recibe la descarga del modelo desde
  GitHub (que usa CDN de Microsoft Azure btw). No saben qué hacés
  después.
- Microsoft solo si activás la integración Teams → vos les das
  permiso explícito de leer tu lista de clases y tareas de Teams. No
  comparten esto con SIGMA ni viceversa.

### ¿Qué pasa si pierdo el teléfono?
- Tu sesión queda en el teléfono. Si alguien lo agarra y desbloquea,
  podría abrir Nexo y ver tu data.
- Para mitigar: cambiá tu contraseña SIGMA desde otro dispositivo
  (eso invalida el token guardado).
- En el próximo login automático de Nexo en el teléfono perdido,
  fallará y se cerrará la sesión.

### ¿Puedo bajar todos mis datos?
Sí. Desde Perfil podés generar PDFs de:
- Constancia de matrícula.
- Cronograma de pagos.
- (Roadmap) Historial completo en JSON.

---

## Trámites y datos académicos

### ¿Las notas que veo en Nexo son las oficiales?
Sí — vienen directo de SIGMA. Si hay una diferencia con lo que ves
en el sitio web oficial, refrescá (pull-to-refresh) y probá de nuevo.
Si persiste, es bug de Nexo → abrí issue.

### ¿Puedo pagar mis cuotas desde Nexo?
No. Nexo es solo lectura. Para pagar usás los medios oficiales
(Intranet de pagos, banca online, ventanilla).

### ¿Puedo matricularme desde Nexo?
No. La matrícula es proceso oficial vía SIGMA Web. Nexo no automatiza
trámites administrativos.

### ¿Por qué algunas notas no aparecen?
Pueden estar:
- Aún no publicadas por el docente (esperá unos días después del examen).
- En la "boleta legacy" — algunas pantallas viejas de SIGMA tienen
  data que la API moderna no expone. Si pasa, abrí issue.

---

## Desarrollo y contribuciones

### ¿El código es open source?
La documentación que ves en este repo (`nexo-releases`) sí — CC BY 4.0.
El código fuente de la app es **privado**. Si te interesa contribuir
bajo NDA, escribime por issue.

### ¿Por qué no es open source?
Decisión personal por ahora. Tres razones:
1. Tiene tokens / credenciales hardcodeadas que requeriría limpiar
   antes de abrir.
2. Si hago la app open source, alguien podría forkearla con malware
   y distribuirla como "Nexo oficial" — quiero evitar esa confusión.
3. Cuando sea más maduro, lo considero abrir.

### ¿Puedo reportar un bug?
Sí, por favor:
<https://github.com/Alexito-Hub/nexo-releases/issues/new>.

Incluí:
- Pasos para reproducir.
- Captura si aplica.
- Modelo de teléfono + versión Android.
- Versión de Nexo (Perfil → Acerca de Nexo).

### ¿Puedo sugerir features?
Sí, en issues. No prometo implementar todo, pero leo todo.
