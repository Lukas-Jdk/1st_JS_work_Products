import {fetchData} from "./utils/fetch.js"

const cardsWrapper = document.getElementById("cards-wrapper");

// =============cards build=====================
const buildCards = (items) => {
  cardsWrapper.innerHTML = "";
  items.forEach((item) => {
    // card.
    const card = document.createElement("a");
    card.setAttribute("class", "card");
    card.href = `./product/product.html?productId=${item.id}`;

    // card title.
    const cardTitle = document.createElement("h2");
    cardTitle.textContent = item.title;

    // card img.
    const cardImg = document.createElement("img");
    cardImg.src = item.imgUrl;

    // card price.
    const cardPrice = document.createElement("p");
    cardPrice.textContent = `${item.price} €`;

    card.append(cardImg);
    card.append(cardTitle);
    card.append(cardPrice);
    cardsWrapper.append(card);
  });
};
// ===================================


const sortProducts = (products) => {
  return products.sort((a, b) => a.price - b.price);
};

const startApp = async () => {
  const products = await fetchData();
  
  buildCards(products);

document.getElementById("insert-btn").addEventListener("click", () => {
  window.location.href = "./insert/index.html";
})

  document.getElementById("sort-btn").addEventListener("click", () => {
    const sortedProducts = sortProducts(products);
    buildCards(sortedProducts);
  });
};

startApp();
