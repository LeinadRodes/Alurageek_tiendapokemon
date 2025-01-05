import { servicesProducts } from "../services/product-services.js";  // Importa servicios
import { getProductList } from '../services/product-services.js';     // Importa la función getProductList

const productsContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");

// Crea estructura HTML para ser renderizada dinámicamente con JS
function createCard({ name, price, image, id }) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <div class="img-container">
      <img src="${image}" alt="${name}">
    </div>
    <div class="card-container--info">
      <p>${name}</p>
      <div class="card-container--value">
        <p>$ ${price}</p>
        <button class="delete-button" data-id="${id}">
          <img src="./assets/trashIcon.svg" alt="Eliminar">
        </button>
      </div>
    </div>
  `;

  // Asigna el evento de eliminación
  addDeleteEvent(card, id);

  return card;
}

// Asigna el evento de eliminar producto a la tarjeta
function addDeleteEvent(card, id) {
  const deleteButton = card.querySelector(".delete-button");
  deleteButton.addEventListener("click", async () => {
    try {
      await servicesProducts.deleteProduct(id);
      card.remove();
      console.log(`Producto con id ${id} eliminado`);
    } catch (error) {
      console.error(`Error al eliminar el producto con id ${id}:`, error);
    }
  });
}

// Renderiza los productos en el DOM
const renderProducts = (products) => {
  productsContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar los productos

  products.forEach((product) => {
    const productCard = createCard(product); // Crear una tarjeta para cada producto
    productsContainer.appendChild(productCard); // Añadir la tarjeta al contenedor
  });
};

// Manejo del evento de envío del formulario
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.querySelector("[data-name]").value;
  const price = document.querySelector("[data-price]").value;
  const image = document.querySelector("[data-image]").value;

  if (name === "" || price === "" || image === "") {
    alert("Por favor, complete todos los campos");
  } else {
    try {
      const newProduct = await servicesProducts.createProduct(name, price, image);
      console.log("Producto creado:", newProduct);
      
      // Crear una tarjeta dinámica con el nuevo producto
      const newCard = createCard(newProduct);
      productsContainer.appendChild(newCard); // Añadir la nueva tarjeta al contenedor
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }

    form.reset(); // Reinicia el formulario
  }
});

// Ejecuta la función de renderizado inicial
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const products = await getProductList(); // Obtener productos desde el servidor
    renderProducts(products); // Renderizar los productos en el DOM
  } catch (error) {
    console.error('Error al cargar los productos:', error);
  }
});

// Seleccionamos el botón de envío y el ícono de la pokébola
const submitButton = document.querySelector(".button-submit");
const pokeballIcon = document.getElementById("pokeball-icon");

// Al pasar el cursor sobre el botón (hover), cambia al ícono semi cerrado
submitButton.addEventListener("mouseenter", () => {
  pokeballIcon.src = "/assets/Pokeball semi.png";  // Cambia a la pokébola semi cerrada
});

// Al quitar el cursor del botón (mouse leave), vuelve al ícono original
submitButton.addEventListener("mouseleave", () => {
  pokeballIcon.src = "/assets/Pokeball.png";  // Vuelve a la pokébola original
});

// Al hacer clic en el botón (active), cambia al ícono cerrado
submitButton.addEventListener("click", () => {
  pokeballIcon.src = "/assets/Pokeball closer.png";  // Cambia a la pokébola cerrada
});
