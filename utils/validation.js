 export const productValidation = (
  titleInput,
  priceInput,
  imgInput,
  descriptionInput,
  locationInput
) => {
  if (
    !titleInput.value ||
    !priceInput.value ||
    !imgInput.value ||
    !descriptionInput.value ||
    !locationInput.value
  ) {
    alert("Please fill all fields.");
    return false;
  }

  if (titleInput.value.length < 4) {
    alert("Title must have at least minimum 4 letters.");
    return false;
  }

  if (isNaN(priceInput.value)) {
    alert("please write a valid number for the price");
    return false;
  }

  if (descriptionInput.value.length < 8) {
    alert("Description must have at least minimum 8 letters.");
    return false;
  }

  // const imageUrlRegex =
  // /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))/i;
  // if (!imageUrlRegex.test(imgInput.value)) {
  //   console.log("Your Img URL adress is not good.");
  //   return false;
  // }
  return true;
};