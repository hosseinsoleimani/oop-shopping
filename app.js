import Cart from "./models/Cart.js";
import Products from "./models/Products.js";
import { fetchData } from "./utils/httpReq.js";

const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPriceNode = document
  .getElementById("total-price")
  .querySelector("span");

const render = async () => {
  const productsData = await fetchData();

  const cartInstant = new Cart(cartListNode, totalPriceNode);
  const productsInstant = new Products(productsNode, productsData, cartInstant);

  productsInstant.showProducts();
};

document.addEventListener("DOMContentLoaded", render);
