# SchnauZaar

## Descripcion
SchnauZaar es un proyecto de pagina e-commerce de venta de articulos de mascotas.

## Installacion
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/EmmaCarro/coder-emma-react.git
   ```
2. Instalar las dependencias:
   ```bash
    * ReactJS -> Vite instalado en modo Javascript 
    * Firebase (npm install firebase)
    * React Icons (npm install react-icons)
    * Bootstrap (npm install react-bootstrap)
    * SweetAlert2 (npm install react-sweetalert2)
   ```
3. Iniciar la aplicacion:
   ```bash
   npm run dev
   ```

### 4. **Ejecucion**
    * Si tu browser no abre automaticamente con la pagina copiar el link localhost a una ventana del mismo, por ejemplo `localhost:3000`


### 5. Modificaciones desde la branch preentrega2 o main
    * Se limpio el código y se rehizo desde el inicio para estructurar mejor todo. Ademas, se comento organizadamente que hace cada elemento.
    * Ya no hay un CSS general sino que cada componente tiene el suyo.
    * Se utilizo menos bootstrap para que el codigo quede mas limpio, y se trasladaron esos valores a los CSS.
    * Se agregaron componentes: Cart, el carrito de compras.
    * Se agregaron componentes: Form, para hacer el checkout del carrito de compras.
    * Se agregaron componentes: Counter, para el contador de articulos agregados al carrito.
    * Se eliminaron todos los componentes en la carpeta pages, y se movio de ahi solamente el componente Error a su propia carpeta, para su uso en el error 404.
    * Se elimino el componente index.js y se reemplazo por main.jsx, ahora contiene tambien firebase.
    * Se creo una firebase con algunos articulos inventados.
    * Se reemplazo el asyncMock por el firebase. La firebase puede guardar las ordenes con su numero de orden y usuario.
    * El carrito se mantiene localmente durante la sesion, no hay usuario y contraseña.
    * Se redujo el codigo y se mejoro la navegacion eliminando componentes como Layout, y el uso de Outlet. Ahora se utiliza solo el ItemListContainer como componente principal.
    * Se instalo React Icons para no hacer uso de archivos de imagenes locales para el carrito y el logo de la pagina
    * Se agregaron chequeos al formulario para los errores, y se reemplazaron algunos con alertas de SweetAlert2. Tambien, se utilizo para confirmar el checkout y dar el numero de orden.
    * Se agrego el contexto para el carrito que debe estar presente siempre, y sus componentes de Context
