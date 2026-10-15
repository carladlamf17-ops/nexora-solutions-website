# Nexora Solutions

Sitio estático de https://www.nexorasolutionsve.com/, publicado con GitHub Pages desde `main`.

## Editar y generar

`tools/build-site.cjs` contiene las plantillas compartidas y `tools/projects.cjs` el contenido y la procedencia de cada captura. Ejecutar `node tools/build-site.cjs` después de editarlo. Genera las portadas ES/EN, diez páginas de proyecto, dos páginas de privacidad, robots y sitemap. Los HTML generados se incluyen en Git para que Pages no necesite dependencias de compilación.

La apariencia vive en `styles.css`; las interacciones en `script.js`. Comprobar `node --check script.js`, `python tools/verify-site.py` y `git diff --check`. La comprobación de archivos no sustituye la revisión visual en escritorio y móvil.

## Marca y capturas

El PNG oficial proporcionado por el propietario se conserva en `assets/nexora-official.png`. Su versión WebP usa compresión sin pérdida. El encuadre se realiza en CSS sin estirar ni redibujar el logo.

- ReacciónGPS: captura de la aplicación publicada, pantalla de catálogo de reportes, tomada el 15/10/2026. La navegación Android procede de una captura de esa misma fecha. No se abrieron expedientes ni documentos de clientes.
- Ferrearca ERP: centro contable de la entrega 1.15.65 y formulario vacío de beneficios laborales, localizados en `G:/Apps Development/ferrearca_app/ferrearca_app/output/finance_delivery_20261013` y `output/usability_20261013`. Son capturas del 13/10/2026; no prueban instalación en SERVER.
- Ferrearca Catálogo: captura directa de https://catalogoferrearca.web.app/catalogo/ferrearca tomada el 15/10/2026, con ficha independiente y enlace al sitio público.
- Rainca: aplicación real compilada y ejecutada en una copia local aislada. Inicio por roles y formulario vacío, sin crear reportes ni tocar datos del proyecto original.
- La Ramireña: pantalla pública de acceso de la aplicación publicada. Se limpiaron los campos antes de capturarla; no contiene credenciales ni datos internos.

Los WebP en `assets/screens` se usan para mostrar las interfaces. Las leyendas explican el contexto y las cifras no se presentan como resultados comerciales. No se usan testimonios, métricas ni pantallas inventadas. Barlow y Barlow Condensed se alojan localmente con su licencia OFL.

## Interacciones y privacidad

La portada alterna entre cinco proyectos cada ocho segundos, con selección manual. La pantalla Android de ReacciónGPS acompaña exclusivamente a su propia diapositiva. El cambio automático se detiene al pasar el cursor, recibir foco, ocultar la pestaña o pausar las animaciones. Se respeta `prefers-reduced-motion`. Las imágenes se pueden ampliar en un diálogo con cierre por botón y Escape.

El sitio conserva contenido y enlaces con JavaScript desactivado. El menú móvil usa un botón accesible; las preguntas usan `details`. No hay analítica, formulario de envío ni mensajes automáticos. Correo y WhatsApp requieren una acción del visitante.

## SEO y publicación

Cada ruta tiene título, descripción, canonical, idiomas recíprocos y datos estructurados de empresa/página; los proyectos añaden breadcrumbs. El sitemap incluye catorce rutas. Mantener el dominio y los datos empresariales consistentes. La imagen social muestra la página real.

Esperar a que la ejecución `pages build and deployment` termine en `success` y revisar la URL pública con una consulta nueva. Comprobar también una ruta interna, el sitemap y las dimensiones reales de la vista móvil.

Se incluyen la etiqueta de Google proporcionada por el propietario en el generador y el archivo `googled07dc9284c04d6fc.html` en la raíz. La propiedad fue verificada y Search Console confirmó la portada indexada y el sitemap correcto el 15/10/2026. La solicitud manual de actualización falló por conexión con reCAPTCHA; no equivale a confirmar el rastreo de esta nueva versión. La optimización técnica no garantiza indexación ni una primera posición.
