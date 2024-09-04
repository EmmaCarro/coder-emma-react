Dia 1:
* Eliminado el archivo "/img/cart.png" y reemplazado por un icono de la libreria react icon
* Pasado el estilo hardcodeado de itemlistcontainer al css
* Modificado el NavBar para que sea modular y su .css
* Modificado el NavBar para acomodar links, en vez de href
* Eliminado el slogan
* Movido el titulo "Schnau-bar" a ser parte de la NavBar
* Agregada carpeta "/pages/" para contener las paginas
* Agregado: pages/Error.jsx, pages/Home.jsx
* App.jsx modificada para tener BrowserRouter. La pagina por defecto es el componente ItemListContainer (como indica la consigna, pero yo le pondria un layout en ese lugar). Y se agregaron todos los links de categorias: Home, Error, Juguetes, Alimentos, Trasnporte, Cuidado, Contacto

Dia 2:
* Creacion de los componentes para la tarjeta de producto
* Arreglos de css y bootstrap
* Creacion de contador ItemCount de productos para el carrito con su boton Agregar al carrito (no funcional por ahora)
* Creacion de archivo clave asyncMock para los productos
* App.jsx modificada para no usar el ItemListContainer como pagina default, sino el Layout.jsx. Ambos archivos modificados para hacer esto posible tambien (si, el tutorial decia hacerlo con ItemListContainer pero me gusta tenerlo mas organizado/separado porque esto ya es un choclo enorme)

Dia 3:
* Modificacion de los Router links para que funcionen con categorias y no con links a paginas de /pages/, y modificacion de la NavBar para que tambien lo tenga
* Creacion de componentes faltantes para el detalle de producto
* Arreglos en Item, ItemList, ItemListContainer, ItemDetail, ItemDetailContainer, asyncMock para sincronizar todo y que funcione
* Agregado de nuevo uso de prop greeting en ItemListContainer (pensaba transformarlo en el titulo de cada categoria mas adelante pero por ahora queda aca muertito)
* El ItemDetail fue lo ultimo que hice y me lo hice con article como debe ser asi que a futuro voy a cambiar el choclo de divs que hay por todos lados en algo similar porque es un asco sino
* Modificacion de bootstrap y css para arreglar lo viejo y lo nuevo. (El css de item detail super facil, pero las cards no, siempre tenian un problema. Al final todo funcionaba pero no pude lograr que el texto sea truncado con "..." y con wrap de un par de lineas. El que sepa arreglarlo sin que explote todo me avisa. ChatGPT?? ChatGPT no sirve porque asume que deberia funcionar bien y te tira fruta. Y por eso estoy seguro que la IA nunca va a reemplazar a nadie, porque en la practica la teoria se cae)

Dia 4:
* Escena perdida

Dia 5:
* Cambiado el ItemListContainer para que pueda ser mostrado en la pantalla de inicio (equivaldria a tenerlo en el path "/" por defecto, pero me gusta mas organizado)
* Agregado un listado de titulos de categorias para que el titulo cambie segun donde nos encontramosProyecto ReactJS de coderhouse
