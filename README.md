# Colegio Michelangelo · Rediseño de la página de inicio

Propuesta de mejora para la portada de [michelangelo.cl](https://michelangelo.cl/), hecha como sitio estático (HTML + CSS + JS, sin dependencias ni compilación). Mantiene el contenido, las fotos y los colores de la marca actual, y corrige los problemas detectados en el sitio en producción (WordPress + Elementor).

## Ver en local

Abre `index.html` en el navegador o levanta un servidor estático:

```bash
npx http-server@14.1.1 -p 5173
```

Para publicarlo con GitHub Pages: *Settings → Pages → Deploy from a branch → `main` / root*.

## Problemas encontrados en el sitio actual y cómo se resolvieron

| Problema en michelangelo.cl | Mejora en esta versión |
|---|---|
| La página no tiene etiqueta `<title>` (la pestaña y Google no muestran el nombre del colegio) | `<title>` descriptivo, meta descripción, Open Graph completo y datos estructurados `schema.org/School` |
| 9 de 11 imágenes sin texto alternativo | Todas las imágenes tienen `alt` que describe la foto (o `alt=""` si es decorativa) |
| Teléfono y correo en texto plano | Enlaces `tel:` y `mailto:` con un clic, y la dirección abre Google Maps |
| Ícono de LinkedIn apunta a `linkedin.com` genérico | Eliminado; solo quedan Instagram y Facebook reales |
| La tarjeta «Formación Pedagogía Waldorf» no lleva a ninguna parte | Enlazada a la página de Pedagogía Waldorf |
| Erratas: «adolscente», «la y la naturaleza», comillas sin cerrar, «Eliodoro Yañez» | Textos corregidos |
| Sin un llamado claro a visitar o postular al final de la página | Sección de contacto «Ven a conocernos» con botones de postulación y correo |
| Menú desplegable que depende del *hover* | Menú accesible por teclado y lector de pantalla (`aria-expanded`, Escape para cerrar) y menú móvil a pantalla completa |
| Página de 71 KB de HTML más los scripts de Elementor, jQuery y WordPress | Unos 32 KB en total de HTML, CSS y JS propios, sin librerías; imágenes con `loading="lazy"` y dimensiones fijas para evitar saltos de diseño |
| Contraste y jerarquía tipográfica débiles | Tipografía Fraunces (títulos) y Nunito Sans (texto), paleta de la marca (`#B33335`, `#1C244B`, `#E8E288`, `#8DA7BE`) |

También incluye: enlace «Saltar al contenido», foco visible, respeto a `prefers-reduced-motion` y diseño adaptable a celulares (sin desplazamiento horizontal a 375 px).

## Archivos

- `index.html`: estructura y contenido de la portada
- `styles.css`: estilos, con la paleta definida como variables CSS en `:root`
- `main.js`: menú móvil, submenús y animaciones de aparición

## Notas

- Las imágenes se cargan directamente desde `michelangelo.cl/wp-content/uploads/`. Si este sitio se publica en otro dominio, conviene copiarlas a una carpeta `img/`.
- Los enlaces del menú apuntan a las páginas internas existentes de michelangelo.cl. Por ahora esta propuesta rediseña solo la portada.
- Para llevar estas mejoras al WordPress actual, lo más rápido es: (1) definir el título del sitio en *Ajustes → Generales* o con un plugin SEO, (2) completar el texto alternativo en la *Biblioteca de medios*, (3) corregir las erratas y los enlaces en Elementor.
