# Nexora Solutions

Sitio estático de https://www.nexorasolutionsve.com/, publicado con GitHub Pages desde `main`.

## Editar y generar

`tools/build-site.cjs` contiene las plantillas compartidas y `tools/projects.cjs` el contenido y la procedencia de cada captura. Ejecutar `node tools/build-site.cjs` después de editarlo. Genera 32 páginas: portadas ES/EN, diez páginas de proyecto, dos páginas de privacidad, dos directorios de servicios y dieciséis páginas de servicios; además de robots y sitemap. Los HTML generados se incluyen en Git para que Pages no necesite dependencias de compilación.

El contenido de los servicios vive en `tools/services.cjs` y `tools/more-services.cjs`; sus plantillas en `tools/service-pages.cjs`. `tools/service-design.cjs` define colores, iconos y referencias a capturas reales por servicio. Las cabeceras enlazan a la ficha del proyecto y conservan su leyenda de contexto; ciberseguridad presenta la formación del personal. No se utilizan diagramas conceptuales como sustitutos de las pantallas del portafolio. `tools/home-offer.cjs` presenta en la portada un resumen breve de las dos áreas de servicio, sin repetir el catálogo de funciones.

La apariencia vive en `styles.css`; las interacciones en `script.js`. Comprobar `node --check script.js`, `python tools/verify-site.py` y `git diff --check`. La comprobación de archivos no sustituye la revisión visual en escritorio y móvil.

## Marca y capturas

El PNG oficial proporcionado por el propietario se conserva en `assets/nexora-official.png`. Su versión WebP usa compresión sin pérdida. El encuadre se realiza en CSS sin estirar ni redibujar el logo.

- ReacciónGPS: pantalla de Inicio proporcionada expresamente por el propietario el 15/10/2026. El PNG original se conserva sin cambios y se sirve una copia WebP sin pérdida. La navegación Android procede de una captura de esa misma fecha. Las cantidades visibles no se presentan como resultados comerciales.
- Ferrearca ERP: centro contable de la entrega 1.15.65 y formulario vacío de beneficios laborales, localizados en `G:/Apps Development/ferrearca_app/ferrearca_app/output/finance_delivery_20261013` y `output/usability_20261013`. Son capturas del 13/10/2026; no prueban instalación en SERVER.
- Ferrearca Catálogo: captura directa de https://catalogoferrearca.web.app/catalogo/ferrearca tomada el 15/10/2026, con ficha independiente y enlace al sitio público.
- Rainca: aplicación real compilada y ejecutada en una copia local aislada. Inicio por roles y formulario vacío, sin crear reportes ni tocar datos del proyecto original.
- La Ramireña: pantalla pública de acceso de la aplicación publicada. Se limpiaron los campos antes de capturarla; no contiene credenciales ni datos internos.

Los WebP en `assets/screens` se usan para mostrar las interfaces. Las leyendas explican el contexto y las cifras no se presentan como resultados comerciales. No se usan testimonios, métricas ni pantallas inventadas. Barlow y Barlow Condensed se alojan localmente con su licencia OFL.

## Interacciones y privacidad

La portada alterna entre cinco proyectos cada ocho segundos, con selección manual. La pantalla Android de ReacciónGPS acompaña exclusivamente a su propia diapositiva. El cambio automático se detiene al pasar el cursor, recibir foco, ocultar la pestaña o pausar las animaciones. Se respeta `prefers-reduced-motion`. Las imágenes se pueden ampliar en un diálogo con cierre por botón y Escape.

El sitio conserva contenido y enlaces con JavaScript desactivado. El menú móvil usa un botón accesible; las preguntas usan `details`. No hay analítica, formulario de envío ni mensajes automáticos. Correo y WhatsApp requieren una acción del visitante.

El carrete de `tools/logo-reel.cjs` usa animación CSS continua con dos grupos idénticos; el duplicado es `aria-hidden` e `inert`. Se pausa al pasar el cursor, recibir foco o utilizar el control global de animación. Con `prefers-reduced-motion` se muestra una cuadrícula estática con los seis logos. Los cuatro proyectos enlazan a sus fichas; Cisco y Lone Star College enlazan a la formación del equipo en la página de ciberseguridad.

Las certificaciones personales Cisco CCNA y CyberOps y la formación académica en Lone Star College fueron confirmadas por el propietario el 28/10/2026. No se suministró un enlace público de verificación. El contenido no atribuye una certificación empresarial ni una relación de partner a Nexora. Logo Cisco, sin modificar: https://commons.wikimedia.org/wiki/File:Cisco_logo_blue_2016.svg (autor Cisco). Logo Lone Star College, sin modificar: https://www.lonestar.edu/images/lsc-logo/lsc-logo-horizontal-stacked-blue.svg. Referencias de marca: https://www.cisco.com/c/en/us/about/brand-center/logo-usage-guidelines.html y https://www.lonestar.edu/college-departments/marketing-communications/brand-and-logo-styleguide.htm.

## Organización de la información

`tools/delivery-support.cjs` concentra en la portada, bajo `#entrega` y `#soporte`, la explicación de entregables de desarrollo, puesta en marcha, orientación al equipo, incidencias, mantenimiento y ampliaciones. Las páginas de desarrollo enlazan a esas secciones sin repetir su contenido. Las condiciones se remiten a la propuesta y al acuerdo de soporte; no se publican plazos, cobertura ni capacitación universalmente incluidos.

El menú distingue **Servicios** (lo que puede contratar la empresa), **Portafolio** (proyectos ya desarrollados) y **Cómo trabajamos** (etapas del proyecto), con un acceso a Contacto. Ciberseguridad forma parte de Servicios, junto a Desarrollo de sistemas a medida. El directorio explica primero estas dos áreas; el desarrollo agrupa seis especialidades y enlaza a la página general de desarrollo a medida. La portada presenta servicios, portafolio, proceso y contacto en ese orden. No repite las preguntas frecuentes ni los listados completos de funciones de las páginas interiores. Las rutas existentes y sus canonical se conservan. Los títulos de las páginas de servicio distinguen necesidad, funciones y alcance; ciberseguridad utiliza títulos propios de una revisión de seguridad.

## SEO y publicación

Cada ruta tiene título, descripción, canonical, idiomas recíprocos y datos estructurados de empresa/página; los proyectos y servicios añaden breadcrumbs. Los servicios añaden `Service` con cobertura El Tigre, Anzoátegui y Venezuela; los directorios añaden `ItemList`. El sitemap incluye 32 rutas. Mantener el dominio y los datos empresariales consistentes. La imagen social muestra la página real.

Las páginas nuevas cubren sistemas a medida, contables, administrativos, comerciales, de inventario, operativos y documentales, automatización y ciberseguridad. Cada una tiene una URL propia bajo `/servicios/` y su equivalente en inglés. El directorio está en `/servicios/` y enlaza desde el menú principal. La portada presenta dos resúmenes de servicios y enlaza al catálogo. Los detalles de módulos y funciones viven en las páginas de servicios; las capturas y el alcance de trabajos realizados se explican en las fichas del portafolio. Los enlaces a trabajos relacionados en cada servicio se muestran como referencias compactas, sin repetir la ficha completa.

Auditoría Search Console del 28/10/2026: período 29/07–26/10, búsqueda Web, país Venezuela: 2 clics, 284 impresiones, CTR 0,7 %, posición media 5,8. Es una media de consultas, no prueba de posición para un servicio. General sin filtro de país: 10 clics y 518 impresiones. Informe de indexación actualizado al 22/10: 8 indexadas y 4 descubiertas sin indexar. Sitemap correcto, leído el 25/10, 14 rutas descubiertas. Son informes con fechas y coberturas diferentes. Las nuevas rutas locales no quedan indexadas por generarlas. Evidencias en `../evidence/seo-2026-10-28/`.

Esperar a que la ejecución `pages build and deployment` termine en `success` y revisar la URL pública con una consulta nueva. Comprobar también una ruta interna, el sitemap y las dimensiones reales de la vista móvil.

Se incluyen la etiqueta de Google proporcionada por el propietario en el generador y el archivo `googled07dc9284c04d6fc.html` en la raíz. La propiedad fue verificada y Search Console confirmó la portada indexada y el sitemap correcto el 15/10/2026. La solicitud manual de actualización falló por conexión con reCAPTCHA; no equivale a confirmar el rastreo de esta nueva versión. La optimización técnica no garantiza indexación ni una primera posición.

Los fondos de capturas del portafolio utilizan gris azulado uniforme (#edf2fa); las imágenes originales se conservan. La portada usa una sola descripción por proyecto. El directorio de servicios orienta por necesidad y no utiliza un proyecto como imagen de la oferta. Las páginas interiores no repiten el párrafo general de ubicación, presente en el pie del sitio.
