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
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/margherita-pizza-4.jpg",
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
    image: "https://www.brotherskitchen.in/wp-content/uploads/2021/03/farmhouse-pizza-vegetarian-pizza-with-mouth-watering-toppings_1024-768-e1616801898805.jpg",
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
    image: "https://italiospizza.com/wp-content/uploads/2022/06/veggie-paradise.jpeg",
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
    image: "https://scontent.fixc1-4.fna.fbcdn.net/v/t1.18169-9/532201_10150950320782745_1521637028_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=e007fa&_nc_ohc=e8ghPaj9iXgAX8Crh_D&_nc_ht=scontent.fixc1-4.fna&oh=00_AfADZJYbHWjXVEPHAQIXh84wtPR8wpEK1tXehkklwgIwaA&oe=648AB2E9",
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
    image: "https://www.aberdeenskitchen.com/wp-content/uploads/2020/08/Cheesy-Pepperoni-Mushroom-Pizza-3.jpg",
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
    image: "https://rasamalaysia.com/wp-content/uploads/2012/06/chicken-tikka-masala-pizza.jpg",
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
    image: "https://previews.123rf.com/images/tbralnina/tbralnina1812/tbralnina181200077/117179616-vegetarian-pizza-with-mushrooms-vegetables-cheese-top-view.jpg",
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
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/indian-paneer-pizza-recipe.jpg",
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
    image: "https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg",
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
    image: "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(17).png",
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
    image: "https://www.dominos.co.in/files/items/Peppy_Paneer.jpg",
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
    image: "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(18).png",
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
    image: "https://www.dominos.co.in/files/items/Deluxe_Veggie.jpg",
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
    image: "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(15).png",
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
    image: "https://www.dominos.co.in/files/items/Veg_Extravaganz.jpg",
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
    image: "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(13).png",

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
    image: "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(11).png",
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
    image: "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(20).png",
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
    image: "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(10).png",
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
    image: "https://i0.wp.com/www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-overhead-sliced.png?resize=768%2C960&ssl=1",
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
    image: "https://5.imimg.com/data5/GW/XW/GLADMIN-15099386/chicken-deluxe-pizza-500x500.png",
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
    image: "https://www.dominos.co.in/files/items/Corn_&_Cheese.jpg",
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
    image: "https://www.dominos.co.in//files/items/Peppy_Paneer.jpg",
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
    image: "https://www.dominos.co.in/files/items/Margherit.jpg",
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
    image: "https://scontent.fixc1-6.fna.fbcdn.net/v/t1.6435-9/131520557_1367017380318348_8368060566403476742_n.jpg?stp=cp0_dst-jpg_e15_p403x403_q65&_nc_cat=104&ccb=1-7&_nc_sid=9e2e56&_nc_ohc=iDaloVFYcVcAX8HBtGr&_nc_ht=scontent.fixc1-6.fna&oh=00_AfC-HdsCQV6VB9nIBoO6_Fb6X6zmO6Ce1I2vBqzKCxWN9Q&oe=648AB79A",
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
    image: "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(17).png",
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
    image: "https://lh3.googleusercontent.com/KO7G-VXNW4cawevWDjzblc4WSlcI9ymfcsegtKpINk82qt6jUnYitT4lA1wZPtoWTXtnmqfZDrYOW1VRhnAO1f2GhVcfno-UAy4OZ50=w512-rw",
    description:
      "Grilled chicken, onion, and capsicum with a tangy peri-peri flavor",
  },
];

// const selectedPizzas = pizzas.slice(0, 25);

export default pizzas;