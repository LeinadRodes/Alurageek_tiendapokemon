## Características
- Agregar productos con nombre, precio e imagen.
- Visualización dinámica de productos con datos simulados.
- Interacción visual con iconos de Pokébola.
- Barra de desplazamiento personalizada en la zona de productos.
- 
## Tecnologías utilizadas

- **HTML**: Estructura del contenido.
- **CSS**: Estilos y diseño visual.
- **JavaScript**: Lógica de funcionalidad para el manejo de productos, eventos y comunicación con la API simulada.
- **JSON Server**: Simulación de un servidor backend para manejar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los productos.
- 
## Estructura
/alurageek
│
├── /assets         # Imágenes y recursos
├── /database       # db.json (datos de productos)
├── /js             # Lógica JavaScript
├── /styles         # Archivos CSS
├── index.html      # Página principal
├── package.json    # Configuración
└── README.md       # Documentación

## 🚀 Instalación

### Requisitos previos

- **Node.js** instalado.

### Pasos

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tuusuario/alurageek.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd alurageek
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor JSON:

   ```bash
   npm start
   ```

5. Abre `index.html` en tu navegador.

## 🛠️ API Simulada

**json-server** simula una API RESTful con las siguientes rutas:

- `GET /products`: Lista los productos.
- `POST /products`: Crea un nuevo producto.
- `DELETE /products/:id`: Elimina un producto.

## 📋 Uso de la Aplicación

1. **Visualizar Productos**: Los productos se cargan automáticamente desde el servidor simulado al abrir la página.
   
2. **Agregar Producto**: Completa el formulario con nombre, precio y URL de la imagen, luego haz clic en **"Enviar"**.
   
3. **Eliminar Producto**: Haz clic en el ícono de la papelera para eliminar un producto.
