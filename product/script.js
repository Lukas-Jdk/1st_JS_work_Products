import { fetchProductById, deleteProduct } from "../utils/fetch.js";

const productTitle = document.getElementById("title");
const productDescription = document.getElementById("description");
const productPrice = document.getElementById("price");
const productImg = document.getElementById("product-img");

const insertBtn = document.getElementById("insert-btn");

const backBtn = document.getElementById("back-btn");

const deleteMessage = document.getElementById("delete-message");


const aboutProduct = (data) => {
  productTitle.innerText = data.title;
  productDescription.innerText = data.description;
  productPrice.innerText = `${data.price} €`;
  productImg.src = data.imgUrl;
};

const startApp = async () => {
  const data = await fetchProductById();
  if (!data) {
    console.log("Cant get product");
    return;
  }
  aboutProduct(data);

 
  const deleteBtn = document.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", async () => {
    const deleted = await deleteProduct();
    if (deleted) {
      deleteMessage.style.display = "block";
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 1500);
    } else {
      alert("Cannot delete product");
    }
  });

  insertBtn.addEventListener("click", () => {
    window.location.href = `../insert/index.html`;
  });

  backBtn.addEventListener("click", () => {
    window.location.href = `../index.html`;
  });
};

startApp();
