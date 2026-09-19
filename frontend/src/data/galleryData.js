import aboutHero from '../assets/images/about/about-hero.jpg';
import chopsExperience from '../assets/images/about/chops-exprience.jpg';
import chopsHero from '../assets/images/hero/chops-hero.jpg';

import signatureBurger from '../assets/images/menu/grills/signature-burger.jpg';

import loadedChopsPlatter from '../assets/images/menu/menu-menu/loaded-chops-platter.jpg';
import jollofChicken from '../assets/images/menu/menu-menu/jollof-chicken.jpg';
import grilledChickenRice from '../assets/images/menu/menu-menu/grilled-chicken-rice.jpg';
import chopsPeperoniPizza from '../assets/images/menu/menu-menu/chops-peperoni-pizza.jpg';
import crispyChickenWings from '../assets/images/menu/menu-menu/crispy-chicken-wings.jpg';
import chopsChickenWrap from '../assets/images/menu/menu-menu/chops-chicken-wrap.jpg';
import chocolateLavaCake from '../assets/images/menu/menu-menu/chocolate-lava-cake.jpg';
import tropicalJuice from '../assets/images/menu/menu-menu/tropical-juice.jpg';

const galleryItems = [
  {
    id: 'chops-hero',
    image: chopsHero,
    category: 'Atmosphere',
    title: 'The Chops Experience',
    featured: true,
  },
  {
    id: 'about-hero',
    image: aboutHero,
    category: 'Atmosphere',
    title: 'A Place to Gather',
    featured: true,
  },
  {
    id: 'chops-experience',
    image: chopsExperience,
    category: 'Experience',
    title: 'Good Food, Good Company',
    featured: true,
  },
  {
    id: 'loaded-chops-platter',
    image: loadedChopsPlatter,
    category: 'Food',
    title: 'Loaded Chops Platter',
    featured: true,
  },
  {
    id: 'jollof-chicken',
    image: jollofChicken,
    category: 'Food',
    title: 'Chops Jollof & Chicken',
    featured: false,
  },
  {
    id: 'grilled-chicken-rice',
    image: grilledChickenRice,
    category: 'Food',
    title: 'Grilled Chicken & Rice',
    featured: false,
  },
  {
    id: 'signature-burger',
    image: signatureBurger,
    category: 'Food',
    title: 'Signature Burger',
    featured: false,
  },
  {
    id: 'chops-peperoni-pizza',
    image: chopsPeperoniPizza,
    category: 'Food',
    title: 'Chops Pepperoni Pizza',
    featured: false,
  },
  {
    id: 'crispy-chicken-wings',
    image: crispyChickenWings,
    category: 'Food',
    title: 'Crispy Chicken Wings',
    featured: false,
  },
  {
    id: 'chops-chicken-wrap',
    image: chopsChickenWrap,
    category: 'Food',
    title: 'Chops Chicken Wrap',
    featured: false,
  },
  {
    id: 'chocolate-lava-cake',
    image: chocolateLavaCake,
    category: 'Desserts',
    title: 'Chocolate Lava Cake',
    featured: false,
  },
  {
    id: 'tropical-juice',
    image: tropicalJuice,
    category: 'Drinks',
    title: 'Tropical Fruit Juice',
    featured: false,
  },
];

export default galleryItems;