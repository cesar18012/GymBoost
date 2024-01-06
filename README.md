# GymBoost - Tienda de Suplementos Deportivos

## Descripción
GymBoost es una tienda en línea especializada en la venta de suplementos deportivos para ayudar a los usuarios a alcanzar sus metas fitness. El proyecto consta de diversas carpetas para organizar los archivos relacionados con HTML, CSS, JavaScript, JSON e imágenes.

## Estructura de Carpetas
- **html:** Contiene archivos HTML para diferentes secciones como el índice, el carrito de compras y páginas específicas de productos.
- **css:** Almacena los estilos CSS para la apariencia visual de la tienda.
- **js:** Incluye archivos JavaScript para la funcionalidad interactiva, como la gestión del carrito y la carga dinámica de contenido.
- **json:** Contiene archivos JSON que podrían utilizarse para almacenar información sobre productos, precios, etc.
- **img:** Guarda las imágenes utilizadas en la tienda.



## Tecnologías Utilizadas
- HTML
- CSS
- JavaScript
- Bootstrap (versión 5.3.2)

## Instrucciones de Ejecución
1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador para acceder a la tienda web.

## Colaboradores
- [César Del Castillo Martín]

## Estructura para todos los archivos HTML

- **Encabezado**
  - Logotipo
  - Formulario de búsqueda
  - Menú desplegable
  - Ícono de carrito de compras

- **Pie de página**
  - Redes Sociales
  - Formulario boletín
  - Texto descriptivo
  
---

## Archivos HTML:
# Index
 -*Carrusel realizado con BootStrap*
    ![image](https://github.com/cesar18012/GymBoost/assets/122441597/ba771932-29c4-4a5c-bf19-f1812e2773f2)
    
 -*Cartas de recomendaciones*
  - Consta de un contenedor para guardar las cartas y desde el id row1 pintamos las cartas desde el Jquery
    ![image](https://github.com/cesar18012/GymBoost/assets/122441597/ea97b490-b1ca-4580-8be2-685a666fe13f)

# Carrito
 -*Productos Seleccionados*
  En el id lista-carrito pintamos los porductos seleccionados y el id total-container pintamos la suma del precio de los productos
 ![image](https://github.com/cesar18012/GymBoost/assets/122441597/141b5ec5-227b-4817-a060-248d2bf3f11c)

# Productos (Proteina, Vitaminas, Creatina, Snacks): Son todos iguales
-*Desplegable de productos*
Tenemos un dropdown que es un desplegable de bootstrap en el que pintamos los tipos de porductos que tenemos en el json.

-*Cartas*
Pintamos los porductos que tenemos en nuestro json.
![image](https://github.com/cesar18012/GymBoost/assets/122441597/7fdc0d05-cbc9-4f87-8768-9e7ad63ac89d)

## Archivos JS:
## Carrito

# Funcionalidad 
Este script jQuery utiliza `$(document).ready()` para asegurarse de que el código se ejecute después de que el DOM esté completamente cargado. Su principal función es gestionar la visualización y funcionalidad del carrito de compras en la página `carrito.html`.

# Elementos Manipulados
- **carritoContainer**: El contenedor del carrito en la página, identificado como `$("#lista-carrito")`.
- **totalContainer**: El contenedor del total del carrito, identificado como `$("#total")`.

# Funciones Principales
- **cargarCarrito()**: Carga y muestra los productos almacenados en el carrito desde el almacenamiento local. Calcula el total del carrito y actualiza la interfaz de usuario en consecuencia. También maneja la lógica para eliminar productos del carrito.
  
- **eliminarDelCarrito(productId)**: Elimina un producto específico del carrito según el índice proporcionado. Actualiza el carrito en el almacenamiento local y vuelve a cargar la interfaz del carrito.

# Almacenamiento Local
El script utiliza `localStorage` para almacenar y recuperar la información del carrito, asegurando que los datos persistan incluso después de recargar la página.

# Eventos
- Se utiliza el evento `click` en los botones "Eliminar" dentro de la lista de productos en el carrito para invocar la función `eliminarDelCarrito(productId)`.

# Uso
Este código se integra en la página `carrito.html` para gestionar de manera dinámica la presentación y manipulación de productos en el carrito de compras.

![image](https://github.com/cesar18012/GymBoost/assets/122441597/dd5b006f-7fa5-4f94-9640-9659c6780d26)



¡Gracias por utilizar GymBoost! Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nosotros.
