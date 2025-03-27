const baseUrl = "https://67de9242471aaaa74284e84b.mockapi.io"

// 1 fetch -main
export const fetchData = async () => {
  try {
    const response = await fetch(`${baseUrl}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 2 fetch-get product
export const fetchProductById = async () => {
  try {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("productId");

    const response = await fetch(`${baseUrl}/products/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

// 3 fetch- delete product
export const deleteProduct = async () => {
  try {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("productId");
    const response = await fetch(`${baseUrl}/products/${id}`,
      {
        method: "DELETE",
      }
    );

    return response.ok;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// 4 fetch add prodcut
export const addProduct = async (data) => {
  try {
  const response = await fetch(
    `${baseUrl}/products`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }
  );
  return response;
} catch (error) {
  console.log(error);
  return null;
}
};