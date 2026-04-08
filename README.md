# PrismJS Custom Build

Una versión personalizada de PrismJS diseñada por Pirulug, optimizada para un rendimiento ligero, con un diseño de alta calidad y funcionalidades extendidas como una barra de herramientas con botón de copiado.

## Características

- Diseño Moderno: Temas oscuros y claros con soporte nativo para el modo oscuro de Bootstrap.
- Barra de Herramientas Integrada: Etiquetas automáticas de lenguaje y botón "Copiar" con respuesta visual.
- Optimizado: Empaquetado con Webpack para minimizar el tamaño del archivo final.
- Extensible: Compatibilidad total con el ecosistema de lenguajes y complementos de PrismJS.

## Instalación rápida

### CDN (v0.0.12)

Puede utilizar los archivos directamente desde JSDelivr:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/pirulug/prismjs@v0.0.12/dist/css/prism.css">

<!-- JS -->
<script src="https://cdn.jsdelivr.net/gh/pirulug/prismjs@v0.0.12/dist/js/prism.js"></script>
```

## Desarrollo Local

Para realizar modificaciones en el proyecto, siga estos pasos:

1. Instale las dependencias:
   ```bash
   npm install
   ```

2. Inicie el servidor de desarrollo:
   ```bash
   npm start
   ```
   El entorno de prueba estará disponible en http://localhost:9000.

3. Genere la versión de producción:
   ```bash
   npm run build
   ```

## Uso

Envuelva el fragmento de código en etiquetas pre y code con la clase de lenguaje correspondiente:

```html
<pre><code class="language-javascript">
const saludo = "hola mundo";
console.log(saludo);
</code></pre>
```

La barra de herramientas se inicializará automáticamente al cargar el documento. Para contenido cargado de forma dinámica, puede forzar la inicialización mediante:

```javascript
PrismToolbar.init();
```

## Licencia

Este proyecto se distribuye bajo la licencia MIT. PrismJS es una creación original de Lea Verou.