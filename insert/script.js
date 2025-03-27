import { addProduct } from "../utils/fetch.js";
import { productValidation } from "../utils/validation.js";

const addButton = document.getElementById("add-btn");
const titleInput = document.getElementById("title-input");
const priceInput = document.getElementById("price-input");
const imgInput = document.getElementById("imgUrl-input");
const descriptionInput = document.getElementById("description-input");
const locationInput = document.getElementById("location-input");
const successMessage = document.getElementById("success-message");
const backToMainPageBtn = document.getElementById("back-btn");

backToMainPageBtn.addEventListener("click", () => {
  window.location.href = `../index.html`;
});

addButton.addEventListener("click", async () => {
  const isValidationPassed = productValidation(
    titleInput,
    priceInput,
    imgInput,
    descriptionInput,
    locationInput
  );
  if (!isValidationPassed) {
    
    return;
  }

  const product = {
    title: titleInput.value,
    price: priceInput.value,
    imgUrl: imgInput.value,
    description: descriptionInput.value,
    location: locationInput.value,
  };
  console.log(product);



  const response = await addProduct(product);

  if (response.status === 201 || response.ok) {
    successMessage.style.display = "block";
  }

  titleInput.value = "";
  priceInput.value = "";
  imgInput.value = "";
  descriptionInput.value = "";
  locationInput.value = "";

  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);
});
