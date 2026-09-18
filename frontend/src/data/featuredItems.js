import signatureBurgerImage from '../assets/images/menu/grills/signature-burger.jpg';
import jollofChickenImage from '../assets/images/menu/mains/jollof-chicken.jpg';
import creamyGarlicPastaImage from '../assets/images/menu/mains/creamy-garlic-pasta.jpg';
import chilliGarlicPrawnsImage from '../assets/images/menu/seafood/chilli-garlic-prawns.jpg';
const featuredItems = [
  {
    id: 'chops-signature-burger',
    name: 'Chops Signature Burger',
    category: 'Grills',
    description:
      'Juicy grilled beef, melted cheese, crisp lettuce, tomato, and our house sauce.',
    price: 8500,
    rating: 4.9,
    image: signatureBurgerImage,
    featured: true,
  },
  {
    id: 'jollof-chicken',
    name: 'Smoky Jollof & Chicken',
    category: 'Mains',
    description:
      'Rich smoky jollof rice served with perfectly grilled chicken and fresh vegetables.',
    price: 7500,
    rating: 4.8,
    image: jollofChickenImage,
    featured: true,
  },
  {
    id: 'creamy-pasta',
    name: 'Creamy Garlic Pasta',
    category: 'Mains',
    description:
      'Silky garlic cream sauce tossed with pasta, herbs, parmesan, and tender chicken.',
    price: 7000,
    rating: 4.8,
    image: creamyGarlicPastaImage,
    featured: true,
  },
  {
    id: 'grilled-prawns',
    name: 'Chilli Garlic Prawns',
    category: 'Seafood',
    description:
      'Succulent prawns grilled with chilli, garlic, herbs, and a touch of fresh lemon.',
    price: 9500,
    rating: 4.9,
    image: chilliGarlicPrawnsImage,
    featured: true,
  },
];

export default featuredItems;