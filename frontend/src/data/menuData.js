import BBQChickenWings from '../assets/images/menu/menu-menu/BBQ-chicken-wings.jpg';
import BeefBurger from '../assets/images/menu/menu-menu/beef-burger.jpg';
import CaramelCheesecake from '../assets/images/menu/menu-menu/caramel-cheesecaske.jpg';
import ChocolateLavaCake from '../assets/images/menu/menu-menu/chocolate-lava-cake.jpg';
import ChopsChickenWrap from '../assets/images/menu/menu-menu/chops-chicken-wrap.jpg';
import ChopsPepperoniPizza from '../assets/images/menu/menu-menu/chops-peperoni-pizza.jpg';
import ClassicLemonade from '../assets/images/menu/menu-menu/classic-lemonade.jpg';
import CrispyChickenBurger from '../assets/images/menu/menu-menu/crispy-chicken-burger.jpg';
import CrispyChickenWings from '../assets/images/menu/menu-menu/crispy-chicken-wings.jpg';
import GardenVeggiePizza from '../assets/images/menu/menu-menu/garden-veggie-pizza.jpg';
import GrilledChickenRice from '../assets/images/menu/menu-menu/grilled-chicken-rice.jpg';
import JollofChicken from '../assets/images/menu/menu-menu/jollof-chicken.jpg';
import LoadedCheeseFries from '../assets/images/menu/menu-menu/loaded-cheese-fries.jpg';
import LoadedChopsPlatter from '../assets/images/menu/menu-menu/loaded-chops-platter.jpg';
import SeasonedFries from '../assets/images/menu/menu-menu/seasoned-fries.jpg';
import TropicalJuice from '../assets/images/menu/menu-menu/tropical-juice.jpg';

import GrilledChickenRiceCloseup from '../assets/images/gallery/food-gallery-thumbs/grilled-chicken-rice-closeup.jpg';
import GrilledChickenRiceSide from '../assets/images/gallery/food-gallery-thumbs/grilled-chicken-rice-side.jpg';
import GrilledChickenRice2 from '../assets/images/gallery/food-gallery-thumbs/grilled-chicken-rice2.jpg';

/* -------------------------------------------------------------------------- */
/* Customization data                                                         */
/* -------------------------------------------------------------------------- */

const wingsCustomization = {
  sizes: [],
  addOns: [
    {
      id: 'extra-sauce',
      name: 'Extra Sauce',
      price: 500,
    },
    {
      id: 'extra-wings',
      name: 'Extra Wings',
      price: 2500,
    },
  ],
};

const platterCustomization = {
  sizes: [],
  addOns: [
    {
      id: 'extra-chicken',
      name: 'Extra Chicken',
      price: 2500,
    },
    {
      id: 'extra-sauce',
      name: 'Extra Sauce',
      price: 500,
    },
  ],
};

const burgerCustomization = {
  sizes: [
    {
      id: 'regular',
      name: 'Regular',
      price: 0,
    },
  ],
  addOns: [
    {
      id: 'extra-cheese',
      name: 'Extra Cheese',
      price: 1000,
    },
    {
      id: 'extra-patty',
      name: 'Extra Patty',
      price: 2500,
    },
    {
      id: 'extra-sauce',
      name: 'Extra Sauce',
      price: 500,
    },
  ],
};

const chickenBurgerCustomization = {
  sizes: [
    {
      id: 'regular',
      name: 'Regular',
      price: 0,
    },
  ],
  addOns: [
    {
      id: 'extra-cheese',
      name: 'Extra Cheese',
      price: 1000,
    },
    {
      id: 'extra-chicken',
      name: 'Extra Chicken',
      price: 2500,
    },
    {
      id: 'extra-sauce',
      name: 'Extra Sauce',
      price: 500,
    },
  ],
};

const riceCustomization = {
  sizes: [
    {
      id: 'regular',
      name: 'Regular',
      price: 0,
    },
    {
      id: 'large',
      name: 'Large',
      price: 2000,
    },
  ],
  addOns: [
    {
      id: 'extra-chicken',
      name: 'Extra Chicken',
      price: 2500,
    },
    {
      id: 'extra-sauce',
      name: 'Extra Sauce',
      price: 500,
    },
  ],
};

const jollofCustomization = {
  sizes: [
    {
      id: 'regular',
      name: 'Regular',
      price: 0,
    },
    {
      id: 'large',
      name: 'Large',
      price: 2000,
    },
  ],
  addOns: [
    {
      id: 'extra-chicken',
      name: 'Extra Chicken',
      price: 2500,
    },
    {
      id: 'extra-sauce',
      name: 'Extra Sauce',
      price: 500,
    },
  ],
};

const pizzaCustomization = {
  sizes: [
    {
      id: 'medium',
      name: 'Medium',
      price: 0,
    },
    {
      id: 'large',
      name: 'Large',
      price: 3000,
    },
  ],
  addOns: [
    {
      id: 'extra-cheese',
      name: 'Extra Cheese',
      price: 1200,
    },
    {
      id: 'extra-pepperoni',
      name: 'Extra Pepperoni',
      price: 1500,
    },
  ],
};

const veggiePizzaCustomization = {
  sizes: [
    {
      id: 'medium',
      name: 'Medium',
      price: 0,
    },
    {
      id: 'large',
      name: 'Large',
      price: 3000,
    },
  ],
  addOns: [
    {
      id: 'extra-cheese',
      name: 'Extra Cheese',
      price: 1200,
    },
    {
      id: 'extra-vegetables',
      name: 'Extra Vegetables',
      price: 1000,
    },
  ],
};

const friesCustomization = {
  sizes: [
    {
      id: 'regular',
      name: 'Regular',
      price: 0,
    },
    {
      id: 'large',
      name: 'Large',
      price: 1500,
    },
  ],
  addOns: [
    {
      id: 'extra-cheese',
      name: 'Extra Cheese',
      price: 1000,
    },
    {
      id: 'extra-sauce',
      name: 'Extra Sauce',
      price: 500,
    },
  ],
};

const chocolateCakeCustomization = {
  sizes: [],
  addOns: [
    {
      id: 'extra-chocolate-sauce',
      name: 'Extra Chocolate Sauce',
      price: 700,
    },
  ],
};

const cheesecakeCustomization = {
  sizes: [],
  addOns: [
    {
      id: 'extra-caramel-sauce',
      name: 'Extra Caramel Sauce',
      price: 700,
    },
  ],
};

const chickenWrapCustomization = {
  sizes: [
    {
      id: 'regular',
      name: 'Regular',
      price: 0,
    },
    {
      id: 'large',
      name: 'Large',
      price: 2000,
    },
  ],
  addOns: [
    {
      id: 'extra-chicken',
      name: 'Extra Chicken',
      price: 2500,
    },
    {
      id: 'extra-sauce',
      name: 'Extra Sauce',
      price: 500,
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Menu categories                                                            */
/* -------------------------------------------------------------------------- */

export const menuCategories = [
  {
    id: 'all',
    label: 'All',
  },
  {
    id: 'starters',
    label: 'Starters',
  },
  {
    id: 'mains',
    label: 'Mains',
  },
  {
    id: 'burgers',
    label: 'Burgers',
  },
  {
    id: 'pizza',
    label: 'Pizza',
  },
  {
    id: 'sides',
    label: 'Sides',
  },
  {
    id: 'desserts',
    label: 'Desserts',
  },
  {
    id: 'drinks',
    label: 'Drinks',
  },
];

/* -------------------------------------------------------------------------- */
/* Menu items                                                                 */
/* -------------------------------------------------------------------------- */

export const menuItems = [
  {
    id: 'crispy-chicken-wings',
    name: 'Crispy Chicken Wings',
    category: 'starters',
    description:
      'Crispy golden chicken wings seasoned with our signature blend and served with a flavourful dipping sauce.',
    price: 8500,
    rating: 4.8,
    reviews: 124,
    featured: true,
    image: CrispyChickenWings,
    images: [
      CrispyChickenWings,
    ],
    frequentlyOrderedWith: [
      'seasoned-fries',
      'classic-lemonade',
    ],
    customization: wingsCustomization,
  },

  {
    id: 'loaded-chops-platter',
    name: 'Loaded Chops Platter',
    category: 'starters',
    description:
      'A generous selection of our favourite bites, perfect for sharing with friends and family.',
    price: 12500,
    rating: 4.9,
    reviews: 96,
    featured: true,
    image: LoadedChopsPlatter,
    images: [
      LoadedChopsPlatter,
    ],
    frequentlyOrderedWith: [
      'classic-lemonade',
      'tropical-juice',
    ],
    customization: platterCustomization,
  },

  {
    id: 'grilled-chicken-rice',
    name: 'Grilled Chicken & Rice',
    category: 'mains',
    description:
      'Tender grilled chicken served with seasoned rice and fresh vegetables for a satisfying, balanced meal.',
    price: 11000,
    rating: 4.9,
    reviews: 187,
    featured: true,
    image: GrilledChickenRice,
    images: [
      GrilledChickenRice,
      GrilledChickenRiceCloseup,
      GrilledChickenRiceSide,
      GrilledChickenRice2,
    ],
    details: {
      ingredients: [
        'Grilled chicken',
        'Seasoned rice',
        'Fresh vegetables',
        'House seasoning',
      ],
      serving: '1 person',
      preparation: 'Grilled fresh to order',
      dietary: ['High protein'],
    },
    frequentlyOrderedWith: [
      'seasoned-fries',
      'classic-lemonade',
    ],
    customization: riceCustomization,
  },

  {
    id: 'jollof-chicken',
    name: 'Chops Jollof & Chicken',
    category: 'mains',
    description:
      'Rich, flavourful jollof rice served with perfectly grilled chicken for a classic West African favourite.',
    price: 9500,
    rating: 4.8,
    reviews: 231,
    featured: true,
    image: JollofChicken,
    images: [
      JollofChicken,
    ],
    frequentlyOrderedWith: [
      'seasoned-fries',
      'tropical-juice',
    ],
    customization: jollofCustomization,
  },

  {
    id: 'beef-burger',
    name: 'Classic Chops Beef Burger',
    category: 'burgers',
    description:
      'A juicy beef patty layered with fresh vegetables, cheese and our signature burger sauce.',
    price: 9000,
    rating: 4.7,
    reviews: 142,
    featured: false,
    image: BeefBurger,
    images: [
      BeefBurger,
    ],
    frequentlyOrderedWith: [
      'seasoned-fries',
      'classic-lemonade',
    ],
    customization: burgerCustomization,
  },

  {
    id: 'crispy-chicken-burger',
    name: 'Crispy Chicken Burger',
    category: 'burgers',
    description:
      'Crunchy fried chicken, fresh vegetables and creamy sauce packed into a soft toasted bun.',
    price: 8500,
    rating: 4.8,
    reviews: 118,
    featured: true,
    image: CrispyChickenBurger,
    images: [
      CrispyChickenBurger,
    ],
    frequentlyOrderedWith: [
      'loaded-cheese-fries',
      'classic-lemonade',
    ],
    customization: chickenBurgerCustomization,
  },

  {
    id: 'chops-pepperoni-pizza',
    name: 'Chops Pepperoni Pizza',
    category: 'pizza',
    description:
      'A cheesy, oven-baked pizza topped with rich tomato sauce and generous slices of pepperoni.',
    price: 13500,
    rating: 4.9,
    reviews: 103,
    featured: true,
    image: ChopsPepperoniPizza,
    images: [
      ChopsPepperoniPizza,
    ],
    frequentlyOrderedWith: [
      'bbq-chicken-wings',
      'tropical-juice',
    ],
    customization: pizzaCustomization,
  },

  {
    id: 'garden-veggie-pizza',
    name: 'Garden Veggie Pizza',
    category: 'pizza',
    description:
      'Fresh vegetables, melted cheese and rich tomato sauce come together on a crisp golden base.',
    price: 12000,
    rating: 4.7,
    reviews: 74,
    featured: false,
    image: GardenVeggiePizza,
    images: [
      GardenVeggiePizza,
    ],
    frequentlyOrderedWith: [
      'seasoned-fries',
      'classic-lemonade',
    ],
    customization: veggiePizzaCustomization,
  },

  {
    id: 'seasoned-fries',
    name: 'Seasoned Fries',
    category: 'sides',
    description:
      'Golden crispy fries tossed in our signature seasoning for a simple and satisfying side.',
    price: 4500,
    rating: 4.6,
    reviews: 88,
    featured: false,
    image: SeasonedFries,
    images: [
      SeasonedFries,
    ],
    frequentlyOrderedWith: [
      'crispy-chicken-wings',
      'classic-lemonade',
    ],
    customization: friesCustomization,
  },

  {
    id: 'loaded-cheese-fries',
    name: 'Loaded Cheese Fries',
    category: 'sides',
    description:
      'Crispy seasoned fries loaded with melted cheese and delicious toppings.',
    price: 6000,
    rating: 4.8,
    reviews: 91,
    featured: true,
    image: LoadedCheeseFries,
    images: [
      LoadedCheeseFries,
    ],
    frequentlyOrderedWith: [
      'classic-lemonade',
      'tropical-juice',
    ],
    customization: friesCustomization,
  },

  {
    id: 'chocolate-lava-cake',
    name: 'Chocolate Lava Cake',
    category: 'desserts',
    description:
      'A rich chocolate cake with a warm molten centre, made for serious chocolate lovers.',
    price: 5500,
    rating: 4.9,
    reviews: 67,
    featured: true,
    image: ChocolateLavaCake,
    images: [
      ChocolateLavaCake,
    ],
    frequentlyOrderedWith: [
      'classic-lemonade',
    ],
    customization: chocolateCakeCustomization,
  },

  {
    id: 'caramel-cheesecake',
    name: 'Caramel Cheesecake',
    category: 'desserts',
    description:
      'Creamy cheesecake finished with a smooth caramel topping for a sweet and indulgent finish.',
    price: 5000,
    rating: 4.7,
    reviews: 52,
    featured: false,
    image: CaramelCheesecake,
    images: [
      CaramelCheesecake,
    ],
    frequentlyOrderedWith: [
      'tropical-juice',
    ],
    customization: cheesecakeCustomization,
  },

  {
    id: 'classic-lemonade',
    name: 'Fresh Lemonade',
    category: 'drinks',
    description:
      'Refreshing freshly prepared lemonade with the perfect balance of citrus and sweetness.',
    price: 3000,
    rating: 4.6,
    reviews: 45,
    featured: false,
    image: ClassicLemonade,
    images: [
      ClassicLemonade,
    ],
    frequentlyOrderedWith: [
      'grilled-chicken-rice',
      'seasoned-fries',
    ],
  },

  {
    id: 'tropical-juice',
    name: 'Tropical Fruit Juice',
    category: 'drinks',
    description:
      'A refreshing blend of tropical fruit flavours served chilled for a naturally sweet finish.',
    price: 3500,
    rating: 4.7,
    reviews: 61,
    featured: true,
    image: TropicalJuice,
    images: [
      TropicalJuice,
    ],
    frequentlyOrderedWith: [
      'jollof-chicken',
      'loaded-chops-platter',
    ],
  },

  {
    id: 'bbq-chicken-wings',
    name: 'BBQ Chicken Wings',
    category: 'starters',
    description:
      'Tender chicken wings glazed in smoky BBQ sauce and finished with a rich, savoury kick.',
    price: 9000,
    rating: 4.8,
    reviews: 109,
    featured: true,
    image: BBQChickenWings,
    images: [
      BBQChickenWings,
    ],
    frequentlyOrderedWith: [
      'seasoned-fries',
      'tropical-juice',
    ],
    customization: wingsCustomization,
  },

  {
    id: 'chops-chicken-wrap',
    name: 'Chops Chicken Wrap',
    category: 'mains',
    description:
      'Grilled chicken, crisp vegetables and creamy sauce wrapped in a warm, soft flatbread.',
    price: 8500,
    rating: 4.7,
    reviews: 86,
    featured: false,
    image: ChopsChickenWrap,
    images: [
      ChopsChickenWrap,
    ],
    frequentlyOrderedWith: [
      'seasoned-fries',
      'tropical-juice',
    ],
    customization: chickenWrapCustomization,
  },
];