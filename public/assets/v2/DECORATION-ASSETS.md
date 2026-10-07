# Hero nocturno V2

Tres recortes creados con la herramienta integrada ImageGen, inspirados en la fotografía de decoración proporcionada por el usuario. La referencia sirve como inspiración visual, no como fondo de la web.

## Especificaciones de generación

- **Luna:** luna llena dorada realista, textura lunar detallada, luz ámbar cálida y halo suave. Un único objeto centrado, circular, completo, aislado sobre transparencia real; sin paisaje, texto, marcas ni otros elementos.
- **Globos:** guirnalda vertical de globos pastel rosa empolvado, marfil y champagne, diferentes tamaños, algunos transparentes con pequeñas luces cálidas; rosas marfil discretas en la base. Recorte fotográfico elegante sobre fondo transparente, sin soporte, personas, texto ni marcas. Composición diagonal para los extremos del hero.
- **Luces:** guirnaldas decorativas de pequeñas bombillas ámbar suspendidas en curvas por la zona superior, hilos de luces descendiendo en los laterales. Centro libre para los nombres. Recorte panorámico aislado sobre transparencia real, sin escenario, personas, letras ni marcas.

## Archivos

| Capa | Original transparente | Web optimizada |
| --- | --- | --- |
| Luna | `decor-moon.png` | `decor-moon.webp` (800 × 800) |
| Globos verticales actuales | `decor-balloons-vertical.png` | `decor-balloons-vertical.webp` (560 × 840) |
| Globos diagonales anteriores (sin uso) | `decor-balloons.png` | `decor-balloons.webp` (560 × 840) |
| Luces | `decor-lights.png` | `decor-lights.webp` (1100 × 619) |

Se conserva la transparencia y la proporción original. Los WebP utilizados en la página suman aproximadamente 426 KiB. La noche se construye en CSS; no requiere otra descarga. Luna y luces conservan la composición de hasta 1100 px. Los globos se anclan ahora a los bordes del viewport y salen hacia los lados sin escalar ni desplazarse verticalmente. Las luces usan una máscara de transparencia gradual en los extremos laterales e inferiores para evitar bordes de recorte visibles.

## Prompt del nuevo asset vertical (ImageGen integrado)

Cada lado utiliza una sola imagen, sin repeticiones. Se escala proporcionalmente según la altura del hero y se centra en el borde del viewport, dejando el 50 % de su ancho fuera de la sección con overflow hidden. Un pequeño sobreescaneo vertical compensa los márgenes transparentes del archivo. Ambas imágenes conservan su salida lateral en GSAP, sincronizada con el scroll y reversible al subir.

Use case: product-mockup. Asset type: transparent photographic cutout for wedding website hero. Primary request: ONE perfectly upright vertical narrow balloon column, NOT diagonal, NOT arch, NOT curved. Tall portrait composition. Blush pink, ivory and pale champagne pastel balloons in varied sizes closely stacked around a straight vertical central axis from top to bottom. A few translucent balloons with warm delicate fairy lights, subtle ivory roses at the base. Warm nighttime wedding lighting, refined realistic latex texture. Entire column fully visible with generous transparent margins on all four sides. Column occupies center 45% of canvas width and 85% of height. No leaning, no horizontal garland, no landscape, no people, no text, no logo, no watermark. Actual transparent alpha background.
