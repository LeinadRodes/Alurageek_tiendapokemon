const BASE_URL = "http://localhost:3001/products";

// Función para obtener la lista de productos (GET)
const productList = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener la lista de productos:", error);
  }
};

// Función para crear un nuevo producto (POST)
const createProduct = async (name, price, image) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price, image }),
    });

    const data = await response.json();
    console.log("Solicitud POST exitosa:", data);
    return data;  // Devuelve el producto creado
  } catch (error) {
    console.error("Error en la solicitud POST:", error);
  }
};

// Función para eliminar un producto (DELETE)
const deleteProduct = async (id) => {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(`Producto con id ${id} eliminado exitosamente`);
  } catch (error) {
    console.error("Error en la solicitud DELETE:", error);
  }
};

// Exporta las funciones
export const servicesProducts = {
  productList,
  createProduct,
  deleteProduct,
};

// Función para obtener la lista de productos
export async function getProductList() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    return [];  // Devuelve un array vacío en caso de error
  }
}
