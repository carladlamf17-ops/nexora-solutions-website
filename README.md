# Nexora Solutions

Sitio estático de https://www.nexorasolutionsve.com/, publicado con GitHub Pages desde `main`.

## Editar y generar

`tools/build-site.cjs` contiene el contenido y las plantillas compartidas. Ejecutar `node tools/build-site.cjs` después de editarlo. Genera las portadas ES/EN, ocho páginas de proyecto, dos páginas de privacidad, robots y sitemap. Los HTML generados se incluyen en Git para que Pages no necesite dependencias de compilación.

La apariencia vive en `styles.css`; las interacciones en `script.js`. Comprobar `node --check script.js`, `python tools/verify-site.py` y `git diff --check`. La comprobación de archivos no sustituye la revisión visual en escritorio y móvil.

## Marca y capturas

El PNG oficial proporcionado por el propietario se conserva en `assets/nexora-official.png`. Su versión WebP usa compresión sin pérdida. El encuadre se realiza en CSS sin estirar ni redibujar el logo.

- ReacciónGPS: captura existente de una prueba visual de escritorio. Los clientes y las cantidades son datos de prueba.
- Ferrearca: captura de una prueba visual Flutter de la pantalla de conteo móvil. Metas y cantidades son ejemplos de prueba.
- Rainca: aplicación real compilada y ejecutada en una copia local aislada. Inicio por roles y formulario vacío, sin crear reportes ni tocar datos del proyecto original.
- La Ramireña: pantalla pública de acceso de la aplicación publicada. Se limpiaron los campos antes de capturarla; no contiene credenciales ni datos internos.

Los WebP en `assets/screens` se usan para mostrar las interfaces. Las leyendas explican el contexto y las cifras no se presentan como resultados comerciales. No se usan testimonios, métricas ni pantallas inventadas. Barlow y Barlow Condensed se alojan localmente con su licencia OFL.

## Interacciones y privacidad

La portada alterna entre tres capturas de escritorio cada ocho segundos, con selección manual. Ferrearca aparece como pantalla móvil. El cambio automático se detiene al pasar el cursor, recibir foco, ocultar la pestaña o pausar las animaciones. Se respeta `prefers-reduced-motion`. Las imágenes se pueden ampliar en un diálogo con cierre por botón y Escape.

El sitio conserva contenido y enlaces con JavaScript desactivado. El menú móvil usa un botón accesible; las preguntas usan `details`. No hay analítica, formulario de envío ni mensajes automáticos. Correo y WhatsApp requieren una acción del visitante.

## SEO y publicación

Cada ruta tiene título, descripción, canonical, idiomas recíprocos y datos estructurados de empresa/página; los proyectos añaden breadcrumbs. El sitemap incluye doce rutas. Mantener el dominio y los datos empresariales consistentes. La imagen social muestra la página real.

Esperar a que la ejecución `pages build and deployment` termine en `success` y revisar la URL pública con una consulta nueva. Comprobar también una ruta interna, el sitemap y las dimensiones reales de la vista móvil.

Se incluyen la etiqueta de Google proporcionada por el propietario en el generador y el archivo `googled07dc9284c04d6fc.html` en la raíz. Search Console necesita que el propietario complete la verificación desde su sesión. No se puede inferir esa verificación a partir de que el sitio esté publicado. La optimización técnica no garantiza indexación ni una primera posición.
