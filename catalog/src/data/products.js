const API_SERVER = "http://localhost:4242";

export const getProducts = () => {
  return fetch(`${API_SERVER}/get-products`).then((res) => res.json());
};

export const getProductById = (id) => {
  return fetch(`${API_SERVER}/get-products/${id}`).then((res) => res.json());
};

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
