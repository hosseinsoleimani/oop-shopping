import Products from "./models/Products.js";
import { fetchData } from "./utils/httpReq.js";

const productsNode = document.getElementById("products");

const render = async () => {
  const productsData = await fetchData();
  const productsInstant = new Products(productsNode, productsData);

  productsInstant.showProducts();
};

document.addEventListener("DOMContentLoaded", render);
