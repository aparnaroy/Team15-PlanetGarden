import { Item } from "../interfaces/Item";
import Bench from "./Bench.png";
import Bush from "./Bush.png";
import CedarTree from "./cedar-tree.png";
import Chrysanthemum from "./Chrysanthemum.png";
import Gazebo from "./Gazebo.png";
import Iris from "./iris.png";
import LarchTree from "./larch-tree.png";
import LilyPond from "./Lily-Pond.png";
import Oaktree from "./oaktree.png";
import Pansy from "./Pansy.png";
import SequoiaTree from "./Sequoia.png";
import SimplePond from "./Simple-pond.png";
import SpruceTree from "./spruce-tree.png";
import StonePond from "./Stone-pond.png";
import Sunflower from "./Sunflower.png";
import Tulip from "./Tulip.png";

// TREES
export const cedarTree: Item = {
    name: "Cedar Tree",
    description:
        "Can be grown in many different climates. They are large and their leaves extend past the trunk widely.",
    image: CedarTree,
    quantity: 1,
    maintenanceLevel: 3,
    price: 60.0,
    rating: 0,
    type: "Tree",
    boughtWith: ["Stakes", "Soil"]
};
export const larchTree: Item = {
    name: "Larch Tree",
    description:
        "These trees grow from 20-45m tall and are a type of pine tree!",
    image: LarchTree,
    quantity: 1,
    maintenanceLevel: 3,
    price: 50.0,
    rating: 0,
    type: "Tree",
    boughtWith: ["Stakes", "Soil"]
};
export const oakTree: Item = {
    name: "Oak Tree",
    description:
        "One of the most common species in the Northern Hemisphere. Produce lots of acorns!",
    image: Oaktree,
    quantity: 1,
    maintenanceLevel: 1,
    price: 40.0,
    rating: 0,
    type: "Tree",
    boughtWith: ["Stakes", "Soil"]
};
export const sequoiaTree: Item = {
    name: "Sequoia Tree",
    description: "These trees can get as tall as 80m! Perfect for vast areas.",
    image: SequoiaTree,
    quantity: 1,
    maintenanceLevel: 5,
    price: 50.0,
    rating: 0,
    type: "Tree",
    boughtWith: ["Stakes", "Soil"]
};
export const spruceTree: Item = {
    name: "Spruce Tree",
    description:
        "Spruce trees are evergreens with short leaves referred to as needles. They stay alive during the winter and very cold seasons!",
    image: SpruceTree,
    quantity: 1,
    maintenanceLevel: 1,
    price: 60.0,
    rating: 0,
    type: "Tree",
    boughtWith: ["Stakes", "Soil"]
};

// FLOWERS
export const chrysanthemumFlower: Item = {
    name: "Chrysanthemum",
    description:
        "These fall garden flowers are very easy to grow and have a ton of petals!",
    image: Chrysanthemum,
    quantity: 1,
    maintenanceLevel: 1,
    price: 20.0,
    rating: 0,
    type: "Flower",
    boughtWith: ["Flower pot", "Fertilizer", "Watering can", "Soil"]
};
export const irisFlower: Item = {
    name: "Iris",
    description:
        "This beautiful flower is beautiful and easy to grow! There exist around 300 varieties of irises.",
    image: Iris,
    quantity: 1,
    maintenanceLevel: 1,
    price: 25.0,
    rating: 0,
    type: "Flower",
    boughtWith: ["Flower pot", "Fertilizer", "Watering can", "Soil"]
};
export const sunflowerFlower: Item = {
    name: "Sunflower",
    description:
        "These tall plants grow towards the sun, are used to produce sunflower oil, and contain yummy seeds!",
    image: Sunflower,
    quantity: 1,
    maintenanceLevel: 2,
    price: 25.0,
    rating: 0,
    type: "Flower",
    boughtWith: ["Flower pot", "Fertilizer", "Watering can", "Soil"]
};
export const tulipFlower: Item = {
    name: "Tulip",
    description:
        "These spring-blooming flowers come in all types of different colors!",
    image: Tulip,
    quantity: 1,
    maintenanceLevel: 1,
    price: 10.0,
    rating: 0,
    type: "Flower",
    boughtWith: ["Flower pot", "Fertilizer", "Watering can", "Soil"]
};
export const pansyFlower: Item = {
    name: "Pansy",
    description:
        "These flowers are multicolored and fast-growing. They love cool weather!",
    image: Pansy,
    quantity: 1,
    maintenanceLevel: 1,
    price: 10.0,
    rating: 0,
    type: "Flower",
    boughtWith: ["Flower pot", "Fertilizer", "Watering can", "Soil"]
};

// STRUCTURES
export const benchStructure: Item = {
    name: "Bench",
    description:
        "A nice place to sit and relax while observing your beautiful landscape.",
    image: Bench,
    quantity: 1,
    maintenanceLevel: 1,
    price: 30.0,
    rating: 0,
    type: "Structure",
    boughtWith: ["Paint", "Table"]
};
export const gazeboStructure: Item = {
    name: "Gazebo",
    description:
        "A beautiful ornamental addition to your landscape that provides shade, shelter from rain, and a place to rest!",
    image: Gazebo,
    quantity: 1,
    maintenanceLevel: 1,
    price: 80.0,
    rating: 0,
    type: "Structure",
    boughtWith: ["Bench", "Lights", "Gravel"]
};
export const lilyPondStructure: Item = {
    name: "Lily Pond",
    description:
        "A pond full of beautiful lilies to brighten up your landscape.",
    image: LilyPond,
    quantity: 1,
    maintenanceLevel: 3,
    price: 110.0,
    rating: 0,
    type: "Structure",
    boughtWith: ["Flowers", "Fish", "Tall grass"]
};
export const simplePondStructure: Item = {
    name: "Pond",
    description: "A small body of water to bring some life to your landscape!",
    image: SimplePond,
    quantity: 1,
    maintenanceLevel: 4,
    price: 150.0,
    rating: 0,
    type: "Structure",
    boughtWith: ["Flowers", "Fish", "Tall grass"]
};
export const stonePondStructure: Item = {
    name: "Stone Pond",
    description:
        "A small body of water bordered with stones as an artists touch.",
    image: StonePond,
    quantity: 1,
    maintenanceLevel: 2,
    price: 99.0,
    rating: 0,
    type: "Structure",
    boughtWith: ["Flowers", "Fish", "Moss"]
};

// GREENERY
export const bushGreenery: Item = {
    name: "Bush",
    description:
        "What's rustling in the bushes? Oh nothing, it's just the breeze saying hello.",
    image: Bush,
    quantity: 1,
    maintenanceLevel: 1,
    price: 15.0,
    rating: 0,
    type: "Greenery",
    boughtWith: ["Flowers", "Grass"]
};
export const grassGreenery: Item = {
    name: "Grass",
    description: "Something perfect to fill up any empty spots in your yard!",
    image: "grass-image",
    quantity: 1,
    maintenanceLevel: 1,
    price: 15.0,
    rating: 0,
    type: "Greenery",
    boughtWith: ["Moss", "Clovers"]
};
