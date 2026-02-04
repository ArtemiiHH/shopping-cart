fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    const watches = data.products.filter((product) =>
      product.title.toLowerCase().includes("watch"),
    );

    console.log(watches);
  })
  .catch((error) => console.error(error));
