/* Carrito */

// #1 Base de datos
const db = [
 // Construccion y Ferreteria
 {
  id: 100,
  name: "Techo de Fibrocemento Perfil 4 Gris 3.05 x 1.10 metros",
  price: 49,
  image: "assets/img/featured100.png",
  category: "construction",
  quantity: 7,
},
{
  id: 101,
  name: "Techo traslucido 3 x 1.10 m x 0.9 mm Blanco",
  price: 55.90,
  image: "assets/img/featured101.png",
  category: "construction",
  quantity: 7,
},
{
  id: 110,
  name: "Cemento Sol Portland Tipo I 42.5 kg",
  price: 29,
  image: "assets/img/featured110.png",
  category: "construction",
  quantity: 7,
},
{
  id: 111,
  name: "Cemento Apu Portland GU x 42.5 kg",
  price: 26.80,
  image: "assets/img/featured111.png",
  category: "construction",
  quantity: 7,
},


// Pisos, Pinturas y Acabados
{
  id: 200,
  name: "Latex Pato CPP Blanco 4 galones",
  price: 135,
  image: "assets/img/featured200.png",
  category: "floor",
  quantity: 7,
},
{
  id: 201,
  name: "Latex Duralatex CPP Blanco 1 galón",
  price: 70,
  image: "assets/img/featured201.png",
  category: "floor",
  quantity: 7,
},
{
  id: 202,
  name: "Pintura Látex Blanco 1 galón",
  price: 28,
  image: "assets/img/featured202.png",
  category: "floor",
  quantity: 7,
},

// Herramientas y Maquinarias
{
  id: 300,
  name: "Taladro de Percusion Bosch 650W + 35 accesorios",
  price: 250,
  image: "assets/img/featured300.png",
  category: "machinery",
  quantity: 4,
},
{
  id: 301,
  name: "Taladro Percutor Dewalt 1/2' 650W DWW024",
  price: 240,
  image: "assets/img/featured301.png",
  category: "machinery",
  quantity: 4,
},
{
  id: 310,
  name: "Cortadora de Pisos y Azulejos Irwin",
  price: 300,
  image: "assets/img/featured310.png",
  category: "machinery",
  quantity: 4,
},
{
  id: 311,
  name: "Cortamayolica Fiji ML624R 65cm + caja plástica",
  price: 170,
  image: "assets/img/featured311.png",
  category: "machinery",
  quantity: 4,
},
{
  id: 320,
  name: "Amoladora Black&Decker 4 1/2' 820W G720",
  price: 125,
  image: "assets/img/featured320.png",
  category: "machinery",
  quantity: 4,
},
{
  id: 321,
  name: "Amoladora Dewalt 4 1/2' 700W DWE4010",
  price: 265,
  image: "assets/img/featured321.png",
  category: "machinery",
  quantity: 4,
},
{
  id: 322,
  name: "Tronzadora corte rápido de metal 14' Dewalt 2300W D28730",
  price: 790,
  image: "assets/img/featured322.png",
  category: "machinery",
  quantity: 4,
},



// Jarineria
{
  id: 400,
  name: "Tijera Poda Para Jardinería 8' Truper 18460",
  price: 23.90,
  image: "assets/img/featured400.png",
  category: "gardening",
  quantity: 4,
},
{
  id: 401,
  name: "Tijera para podar flores 12' natural",
  price: 29.90,
  image: "assets/img/featured401.png",
  category: "gardening",
  quantity: 4,
},
{
  id: 401,
  name: "Tijera de jardín con mango de madera 48 cm Pretul",
  price: 19.90,
  image: "assets/img/featured402.png",
  category: "gardening",
  quantity: 4,
},



// Baño
{
  id: 500,
  name: "Manguera para ducha teléfono",
  price: 19.90,
  image: "assets/img/featured500.png",
  category: "bathroom",
  quantity: 4,
},
{
  id: 501,
  name: "Salida de ducha Baru cr",
  price: 35,
  image: "assets/img/featured501.png",
  category: "bathroom",
  quantity: 4,
},
{
  id: 502,
  name: "Llave Para Lavamanos Individual Forza Fina Con Manilla Redonda",
  price: 34.90,
  image: "assets/img/featured502.png",
  category: "bathroom",
  quantity: 4,
},


// Autos
{
  id: 600,
  name: "Lubricante Multiusos WD-40 11 onzas",
  price: 29.90,
  image: "assets/img/featured600.png",
  category: "car",
  quantity: 4,
},
{
  id: 601,
  name: "Aceite 3 en 1 90 mm",
  price: 9.90,
  image: "assets/img/featured601.png",
  category: "car",
  quantity: 4,
},
{
  id: 602,
  name: "Lubricante Multiusos WD-40 11 onzas",
  price: 29.90,
  image: "assets/img/featured602.png",
  category: "car",
  quantity: 4,
},

// Seguridad
{
  id: 700,
  name: "Casco de seguridad c/susp Azul",
  price: 4.90,
  image: "assets/img/featured700.png",
  category: "segurity",
  quantity: 4,
},
{
  id: 701,
  name: "Botas de seguridad con planta de PVC Talla: 43",
  price: 39.90,
  image: "assets/img/featured701.png",
  category: "segurity",
  quantity: 4,
},
{
  id: 702,
  name: "Botas Venus Granjera Negro Talla 36",
  price: 27.50,
  image: "assets/img/featured702.png",
  category: "segurity",
  quantity: 4,
},
];

const products = window.localStorage.getItem("productsDB")
  ? JSON.parse(window.localStorage.getItem("productsDB"))
  : db;

// #2 Pintar los productos en el DOM
const productContainer = document.getElementById("products__content");
function printProducts() {
  let html = "";
  for (const product of products) {
    html += `
    <article class="products__card ${product.category}">
      <div class="products__shape">
        <img src="${product.image}" alt="${product.name}" class="products__img">
      </div>

      <div class="products__data">
        <h2 class="products__name">${product.name}</h2>
        <div class="">
          <h3 class="products__price">$${product.price}</h3>
          <span class="products__quantity">Quedan solo ${product.quantity} unidades</span>
        </div>
        <button type="button" class="button products__button addToCart" data-id="${product.id}">
          <i class="bx bx-plus"></i>
        </button>
      </div>
    </article>
    `;
  }
  productContainer.innerHTML = html;
  window.localStorage.setItem("productsDB", JSON.stringify(products));
}

printProducts();

// #3 Carrito
let cart = window.localStorage.getItem("cartDB")
  ? JSON.parse(window.localStorage.getItem("cartDB"))
  : [];
const cartContainer = document.getElementById("cart__container");
const cartCount = document.getElementById("cart-count");
const itemsCount = document.getElementById("items-count");
const cartTotal = document.getElementById("cart-total");

function printCart() {
  let html = "";
  for (const article of cart) {
    const product = products.find((p) => p.id === article.id);
    html += `
    <article class="cart__card">
        <div class="cart__box">
          <img src="${product.image}" alt="${product.name}" class="cart__img">
        </div>

        <div class="cart__details">
          <h3 class="cart__title">${product.name} <span class="cart__price">$${
      product.price
    }</span></h3>

          <div class="cart__amount">
            <div class="cart__amount-content">
              <span class="cart__amount-box removeToCart" data-id="${
                product.id
              }">
                <i class="bx bx-minus"></i>
              </span>

              <span class="cart__amount-number">${article.qty}</span>

              <span class="cart__amount-box addToCart" data-id="${product.id}">
                <i class="bx bx-plus"></i>
              </span>
            </div>

            <i class="bx bx-trash-alt cart__amount-trash deleteToCart" data-id="${
              product.id
            }"></i>
            </div>
            
            <span class="cart__subtotal">
            <span class="cart__stock">Quedan ${
              product.quantity - article.qty
            } unidades</span>
            <span class="cart__subtotal-price">${
              product.price * article.qty
            }</span>
            </span>
            </div>
            </article>
            `;
  }
  cartContainer.innerHTML = html;
  cartCount.innerHTML = totalArticles();
  itemsCount.innerHTML = totalArticles();
  cartTotal.innerHTML = numberToCurrency(totalAmount());
  checkButtons();
  window.localStorage.setItem('cartDB', JSON.stringify(cart))
}

printCart();
// #4 Agragar al carrito
function addToCart(id, qty = 1) {
  const product = products.find((p) => p.id === id);
  if (product && product.quantity > 0) {
    const article = cart.find((a) => a.id === id);

    if (article) {
      if (checkStock(id, qty + article.qty)) {
        article.qty++;
      } else {
        window.alert("No hay stock suficiente");
      }
    } else {
      cart.push({ id, qty });
    }
  } else {
    window.alert("Producto agotado");
  }
  printCart();
}

function checkStock(id, qty) {
  const product = products.find((p) => p.id === id);
  return product.quantity - qty >= 0;
}

// #5 Remover articulos
function removeFromCart(id, qty = 1) {
  const article = cart.find((a) => a.id === id);

  if (article && article.qty - qty > 0) {
    article.qty--;
  } else {
    const confirm = window.confirm("¿Está usted Seguro?");
    if (confirm) {
      cart = cart.filter((a) => a.id !== id);
    }
  }
  printCart();
}

// #6 Eliminar del carrito
function deleteFromCart(id) {
  const article = cart.find((a) => a.id === id);
  cart.splice(cart.indexOf(article), 1);
  printCart();
}

// #7 Contar Artículos
function totalArticles() {
  return cart.reduce((acc, article) => acc + article.qty, 0);
}

// #8 El total
function totalAmount() {
  return cart.reduce((acc, article) => {
    /* Primero recorre los productos, la base de datos para traer las propiedades y luego busca al producto por su id y lo hace coincidir con el articulo, si lo encuntra multiplica el precio del producto por la cantidad de artículos del carrito*/
    const product = products.find((p) => p.id === article.id);
    return acc + product.price * article.qty;
  }, 0);
}

// #9 Limpiar Carrito
function clearCart() {
  cart = [];
  printCart();
}

// #10 Comprar
function checkout() {
  cart.forEach((article) => {
    const product = products.find((p) => p.id === article.id);

    product.quantity -= article.qty;
  });
  clearCart();
  printProducts();
  printCart();
  window.alert("Gracias por su compra");
}

function checkButtons() {
  if (cart.length > 0) {
    document.getElementById("cart-checkout").removeAttribute("disabled");
    document.getElementById("cart-empty").removeAttribute("disabled");
  } else {
    document
      .getElementById("cart-checkout")
      .setAttribute("disabled", "disabled");
    document.getElementById("cart-empty").setAttribute("disabled", "disabled");
  }
}

function numberToCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

/* Agregando eventos a nuestros botones */
productContainer.addEventListener("click", function (e) {
  const add = e.target.closest(".addToCart");

  if (add) {
    const id = +add.dataset.id;
    addToCart(id);
  }
});

cartContainer.addEventListener("click", function (e) {
  const remove = e.target.closest(".removeToCart");
  const add = e.target.closest(".addToCart");
  const deleteCart = e.target.closest(".deleteToCart");

  if (remove) {
    const id = +remove.dataset.id;
    removeFromCart(id);
  }

  if (add) {
    const id = +add.dataset.id;
    addToCart(id);
  }

  if (deleteCart) {
    const id = +deleteCart.dataset.id;
    deleteFromCart(id);
  }
});

const actionButtons = document.getElementById("action-buttons");

actionButtons.addEventListener("click", function (e) {
  const clear = e.target.closest("#cart-empty");
  const buy = e.target.closest("#cart-checkout");

  if (clear) {
    clearCart();
  }

  if (buy) {
    checkout();
  }
});
