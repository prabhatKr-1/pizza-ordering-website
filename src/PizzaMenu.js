const pizzas = [
  {
    name: "Margherita",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 99,
        medium: 199,
        large: 399,
      },
    ],
    category: "veg",
    image: "/images/margherita.jpg",
    description: "Classic delight with 100% real mozzarella cheese",
  },
  {
    name: "Farmhouse",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 229,
        medium: 399,
        large: 599,
      },
    ],
    category: "veg",
    image: "/images/farmhouse.jpg",
    description:
      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
  },
  {
    name: "Veggie Paradise",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 180,
        medium: 290,
        large: 460,
      },
    ],
    category: "veg",
    description:
      "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
    image: "/images/veggie_paradise.jpg",
  },
  {
    name: "Chicken Golden Delight",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 249,
        medium: 349,
        large: 599,
      },
    ],
    category: "nonveg",
    image: "/images/chicken_golden_delight.jpg",
    description:
      "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
  },
  {
    name: "Chicken Pepperoni",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 320,
        medium: 580,
        large: 800,
      },
    ],
    category: "nonveg",
    image: "/images/cheesepepperoni.jpg",
    description:
      "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
  },
  {
    name: "Indi Chicken Tikka",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 250,
        medium: 380,
        large: 500,
      },
    ],
    category: "nonveg",
    image: "/images/IndianTandooriChickenTikka.jpg",
    description:
      "The wholesome flavor of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
  },
  {
    name: "Cheese Burst",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 299,
        medium: 499,
        large: 799,
      },
    ],
    category: "veg",
    image: "/images/cheese_burst.jpg",
    description:
      "The ultimate cheesy delight with double-layered crust and oozing cheese",
  },
  {
    name: "Paneer Makhani",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 249,
        medium: 399,
        large: 599,
      },
    ],
    category: "veg",
    image: "/images/paneer_makhani.jpg",
    description: "Rich and creamy paneer with a flavorful tomato-based gravy",
  },
  {
    name: "Mexican Wave",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 279,
        medium: 429,
        large: 649,
      },
    ],
    category: "veg",
    image: "/images/mexican_wave.jpg",
    description:
      "A fiesta of flavors! Tangy salsa, jalapenos, and a burst of Mexican spices",
  },
  {
    name: "Chicken Sausage",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 299,
        medium: 459,
        large: 699,
      },
    ],
    category: "nonveg",
    image: "/images/chicken_sausage.jpg",
    description:
      "Juicy chicken sausage slices with a perfect blend of herbs and spices",
  },
  {
    name: "Peppy Paneer",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 249,
        medium: 399,
        large: 599,
      },
    ],
    category: "veg",
    image: "/images/peppy_paneer.jpg",
    description: "Loaded with paneer, crunchy capsicum, and tangy red paprika",
  },
  {
    name: "Chicken Tikka",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 279,
        medium: 439,
        large: 649,
      },
    ],
    category: "nonveg",
    image: "/images/chicken_tikka.jpg",
    description: "Juicy chicken tikka, onion, red paprika, and mint mayo",
  },
  {
    name: "Deluxe Veggie",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 249,
        medium: 399,
        large: 599,
      },
    ],
    category: "veg",
    image: "/images/deluxe_veggie.jpg",
    description: "A combination of black olives, onion, capsicum, and mushroom",
  },
  {
    name: "Pepper Barbecue Chicken",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 299,
        medium: 449,
        large: 699,
      },
    ],
    category: "nonveg",
    image: "/images/pepper_barbecue_chicken.jpg",
    description:
      "Savory chicken, onion, and capsicum with a tangy barbecue flavor",
  },
  {
    name: "Vegetable Extravaganza",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 249,
        medium: 399,
        large: 599,
      },
    ],
    category: "veg",
    image: "/images/vegetable_extravaganza.jpg",
    description:
      "A delightful mix of crisp capsicum, succulent mushrooms, and fresh tomatoes",
  },
  {
    name: "Non-Veg Supreme",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 299,
        medium: 449,
        large: 699,
      },
    ],
    category: "nonveg",
    image: "/images/nonveg_supreme.jpg",

    description:
      "A supreme combination of chicken sausage, pepperoni, mushrooms, onions, capsicum, and olives",
  },
  {
    name: "Chicken Dominator",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 299,
        medium: 449,
        large: 699,
      },
    ],
    category: "nonveg",
    image: "/images/chicken_dominator.jpg",
    description:
      "Loaded with a variety of chicken toppings for the ultimate dominator experience",
  },
  {
    name: "Pepperoni",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 279,
        medium: 429,
        large: 649,
      },
    ],
    category: "nonveg",
    image: "/images/pepperoni.jpg",
    description: "A classic choice with spicy pepperoni and extra cheese",
  },
  {
    name: "Chicken Fiesta",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 279,
        medium: 429,
        large: 649,
      },
    ],
    category: "nonveg",
    image: "/images/chicken_fiesta.jpg",
    description:
      "A delightful combination of grilled chicken rashers, peri-peri chicken, and onion",
  },
  {
    name: "Veggie Supreme",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 249,
        medium: 399,
        large: 599,
      },
    ],
    category: "veg",
    image: "/images/veggie_supreme.jpg",
    description:
      "A veggie lover's delight with a variety of colorful vegetables",
  },
  {
    name: "Deluxe Chicken",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 279,
        medium: 429,
        large: 649,
      },
    ],
    category: "nonveg",
    image: "/images/deluxe_chicken.jpg",
    description:
      "A chicken lover's dream with chicken sausage, chicken tikka, and grilled chicken rashers",
  },
  {
    name: "Cheese n Corn",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 249,
        medium: 399,
        large: 599,
      },
    ],
    category: "veg",
    image: "/images/cheese_n_corn.jpg",
    description: "Mouth-watering combination of sweet corn and extra cheese",
  },
  {
    name: "Peppy Panner",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 249,
        medium: 399,
        large: 599,
      },
    ],
    category: "veg",
    image: "/images/peppy_panner.jpg",
    description:
      "A delightful combination of paneer, crispy capsicum, and tangy red paprika",
  },
  {
    name: "Margerita",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 199,
        medium: 399,
        large: 599,
      },
    ],
    category: "veg",
    image: "/images/margerita.jpg",
    description:
      "A classic pizza with a perfect blend of mozzarella cheese and tangy tomato sauce",
  },

  {
    name: "Country Feast",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 249,
        medium: 399,
        large: 599,
      },
    ],
    category: "veg",
    image: "/images/country_feast.jpg",
    description: "A combination of onion, capsicum, mushroom, and sweet corn",
  },
  {
    name: "Chicken Sausage Pizza",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 299,
        medium: 449,
        large: 649,
      },
    ],
    category: "nonveg",
    image: "/images/chicken_sausage_pizza.jpg",
    description:
      "Savory chicken sausage slices with a perfect blend of herbs and spices",
  },
  {
    name: "Peri Peri Chicken",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 299,
        medium: 449,
        large: 649,
      },
    ],
    category: "nonveg",
    image: "/images/peri_peri_chicken.jpg",
    description:
      "Grilled chicken, onion, and capsicum with a tangy peri-peri flavor",
  },
];

// const selectedPizzas = pizzas.slice(0, 25);

export default pizzas;
