// Question: Using array methods (like map, filter, reduce), can you write code to:

// Find all electronics products
// Calculate their total price
// Return an array of their names in uppercase

const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics" },
  { id: 2, name: "Book", price: 19, category: "Books" },
  { id: 3, name: "Smartphone", price: 699, category: "Electronics" },
  { id: 4, name: "Notebook", price: 5, category: "Books" },
  { id: 5, name: "Headphones", price: 199, category: "Electronics" },
];
// returning an array of names in uppercase

const upperName = () => {
  let namesOnly = [];

  products.forEach((product) => namesOnly.push(product.name.toUpperCase()));

  return namesOnly;
};
upperName();

// calculating the total price of all the items.

const totalprice = () => {
  let price = 0;

  products.forEach((product) => {
    price += product.price;
  });

  return price;
};

totalprice();

// finding electronics only!
const electronics = () => {
  const electroOnly = products.map((product) => {
    if (product.category === "Electronics") {
      return product;
    }
  });

  return electroOnly;
};
electronics();
