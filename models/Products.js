class Products {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
  }

  showProducts() {
    this.products.forEach((product) => this.creatCard(product));
  }

  creatCard(data) {
    const cardEle = document.createElement("div");
    const imgEle = this.productImg(data);
    const infoEle = this.productInfo(data);

    cardEle.appendChild(imgEle);
    // cardEle.innerHTML = imgEle;

    cardEle.innerHTML += infoEle;

    this.parent.appendChild(cardEle);
  }

  productImg(data) {
    const { image, alt } = data;
    const imgJsx = document.createElement("img");
    // const imgJsx = `<img alt=${alt} src=${image}/>`;
    imgJsx.src = image;
    imgJsx.alt = alt;

    return imgJsx;
  }

  productInfo(data) {
    const { name, price, id } = data;
    const infoJsx = `
    <div id="product-info">
      <h3>${name}</h3>
      <div>
        <span>${price}</span>
        <button data-id=${id}>+</button>
      </div>
    </div>`;

    return infoJsx;
  }
}

export default Products;
