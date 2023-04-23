// tree imports
import { Tree, Flower, Structure, Greenery } from "../interfaces";
import Oaktree from "./oaktree.png";
import Spruce from "./spruce-tree.png";
import Larch from "./larch-tree.png";
import Cedar from "./cedar-tree.png";
import Sequoia from "./Sequoia.png";
import Pansy from "./Pansy.png";
import iris from "./iris.png";
import sunflower from "./Sunflower.png";
import Chrysanthemem from "./Chrysanthemum.png";
import Tulip from "./Tulip.png";

// STRUCTURES
export const pondStructure: Structure = {
    name: "Pond",
    description: "A small body of water to bring some life to your landscape!",
    image: Oaktree,
    quantity: 1,
    maintenanceLevel: 1,
    price: 70.0,
    rating: 0,
    type: "Structure"
};
export const benchStructure: Structure = {
    name: "Bench",
    description:
        "A nice place to sit and relax while observing your beautiful landscape.",
    image: Oaktree,
    quantity: 1,
    maintenanceLevel: 1,
    price: 30.0,
    rating: 0,
    type: "Structure"
};
// GREENERY
export const grassGreenery: Greenery = {
    name: "Grass",
    description: "Something perfect to fill up any empty spots in your yard!",
    image: Oaktree,
    quantity: 1,
    maintenanceLevel: 1,
    price: 15.0,
    rating: 0,
    type: "Greenery"
};
// FLOWERS
export const tulipFlower: Flower = {
    name: "Tulip",
    description:
        "These spring-blooming flowers come in all types of different colors!",
    image: Tulip,
    quantity: 1,
    maintenanceLevel: 1,
    price: 10.0,
    rating: 0,
    type: "Flower"
};
export const chrysanthememFlower: Flower = {
    name: "Chrysanthemum",
    description:
        "These fall garden flowers are very easy to grow and have a ton of petals!",
    image: Chrysanthemem,
    quantity: 1,
    maintenanceLevel: 1,
    price: 20.0,
    rating: 0,
    type: "Flower"
};
export const sunflowerFlower: Flower = {
    name: "Sunflower",
    description:
        "These tall plants grow towards the sun, are used to produce sunflower oil, and contain yummy seeds!",
    image: sunflower,
    quantity: 1,
    maintenanceLevel: 2,
    price: 25.0,
    rating: 0,
    type: "Flower"
};
export const irisFlower: Flower = {
    name: "Iris",
    description:
        "This beautiful flower is beautiful and easy to grow! There exist around 300 varieties of irises.",
    image: iris,
    quantity: 1,
    maintenanceLevel: 1,
    price: 25.0,
    rating: 0,
    type: "Flower"
};
export const pansyFlower: Flower = {
    name: "Pansy",
    description:
        "These flowers are multicolored and fast-growing. They love cool weather!",
    image: Pansy,
    quantity: 1,
    maintenanceLevel: 1,
    price: 10.0,
    rating: 0,
    type: "Flower"
};
// TREES
export const sequoiaTree: Tree = {
    name: "Sequoia Tree",
    description: "These trees can get as tall as 80m! Perfect for vast areas.",
    image: Sequoia,
    quantity: 1,
    maintenanceLevel: 5,
    price: 50.0,
    rating: 0,
    type: "Tree"
};
export const oakTree: Tree = {
    name: "Oak Tree",
    description:
        "One of the most common species in the Northern Hemisphere. Produce lots of acorns!",
    image: Oaktree,
    quantity: 1,
    maintenanceLevel: 1,
    price: 40.0,
    rating: 0,
    type: "Tree"
};
export const spruceTree: Tree = {
    name: "Spruce Tree",
    description:
        "Spruce trees are evergreens with short leaves referred to as needles. They stay alive during the winter and very cold seasons!",
    image: Spruce,
    quantity: 1,
    maintenanceLevel: 1,
    price: 60.0,
    rating: 0,
    type: "Tree"
};
export const larchTree: Tree = {
    name: "Larch Tree",
    description:
        "These trees grow from 20-45m tall and are a type of pine tree!",
    image: Larch,
    quantity: 1,
    maintenanceLevel: 3,
    price: 50.0,
    rating: 0,
    type: "Tree"
};
export const cedarTree: Tree = {
    name: "Cedar Tree",
    description:
        "Can be grown in many different climates. They are large and their leaves extend past the trunk widely.",
    image: Cedar,
    quantity: 1,
    maintenanceLevel: 3,
    price: 60.0,
    rating: 0,
    type: "Tree"
};
