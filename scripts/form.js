const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      avgragerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

let productNames = document.getElementById("productName");

products.forEach(product => {
  let selector = document.createElement("option");
  selector.value = product.id;
  selector.text = product.name;
  productNames.appendChild(selector);
});

