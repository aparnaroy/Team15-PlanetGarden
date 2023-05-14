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
import Grass from "./grass.png";
import Ivy from "./ivy.png";
import BirdBath from "./bird-bath.png";
import Fountain from "./fountain.png";
import Fern from "./fern.png";
import Arch from "./Arch.png";
import Caladium from "./Caladium.png";
import Bridge from "./bridge.png";
import Budha from "./Budha-Statue.png";
import StonePath from "./Stone-Path.png";
import Trellis from "./Trellis.png";
import HoopTrellis from "./Hoop-Trellis.png";
import Gnome from "./Garden-Gnome.png";
import Lily from "./Lily.png";
import ForgetMeNot from "./Forget-Me-Not.png";
import BlueHydrangea from "./Blue-Hydrangea.png";
import CherryBlossom from "./Cherry-Blossom.png";
// TREES
export const cedarTree: Item = {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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

export const cherryBlossomTree: Item = {
    id: 6,
    name: "Cherry Blossom",
    description:
        "Spruce trees are evergreens with short leaves referred to as needles. They stay alive during the winter and very cold seasons!",
    image: CherryBlossom,
    quantity: 1,
    maintenanceLevel: 1,
    price: 60.0,
    rating: 0,
    type: "Tree",
    boughtWith: ["Stakes", "Soil"]
};

// FLOWERS
export const chrysanthemumFlower: Item = {
    id: 7,
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
    id: 8,
    name: "Iris",
    description:
        "This flower is beautiful and easy to grow! There exist around 300 varieties of irises.",
    image: Iris,
    quantity: 1,
    maintenanceLevel: 1,
    price: 25.0,
    rating: 0,
    type: "Flower",
    boughtWith: ["Flower pot", "Fertilizer", "Watering can", "Soil"]
};
export const sunflowerFlower: Item = {
    id: 9,
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
    id: 10,
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

export const blueHydrangeaFlower: Item = {
    id: 11,
    name: "Blue Hydrangea",
    description:
        "A mesmerizing and elegant flowering shrub that will add a pop of gorgeous blue to your garden",
    image: BlueHydrangea,
    quantity: 1,
    maintenanceLevel: 1,
    price: 10.0,
    rating: 0,
    type: "Flower",
    boughtWith: ["Flower pot", "Fertilizer", "Watering can", "Soil"]
};

export const lilyFlower: Item = {
    id: 12,
    name: "Lily",
    description:
        "Blooming bulbs that add sophistication and a sweet aroma to your outdoor space.",
    image: Lily,
    quantity: 1,
    maintenanceLevel: 1,
    price: 10.0,
    rating: 0,
    type: "Flower",
    boughtWith: ["Flower pot", "Fertilizer", "Watering can", "Soil"]
};
export const pansyFlower: Item = {
    id: 13,
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

export const forgetMeNotFlower: Item = {
    id: 14,
    name: "Forget-Me-Not",
    description:
        "Delicate blooms that evoke feelings of love, friendship, and remembrance while adding a vibrant blue hue to your landscape.",
    image: ForgetMeNot,
    quantity: 1,
    maintenanceLevel: 1,
    price: 10.0,
    rating: 0,
    type: "Flower",
    boughtWith: ["Flower pot", "Fertilizer", "Watering can", "Soil"]
};

// STRUCTURES
export const benchStructure: Item = {
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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

export const birdBathStructure: Item = {
    id: 20,
    name: "Bird Bath",
    description:
        "A refreshing avian water park for a splashing good time. Attract the most majestic creatures into your yard!",
    image: BirdBath,
    quantity: 1,
    maintenanceLevel: 2,
    price: 99.0,
    rating: 0,
    type: "Structure",
    boughtWith: ["Bird seeds", "Bread crumbs"]
};

export const archStructure: Item = {
    id: 21,
    name: "Garden Arch",
    description:
        "Awww, who's getting married? Drape your flowers over this picturesque pathway and leave an impression on all of those who enter!",
    image: Arch,
    quantity: 1,
    maintenanceLevel: 2,
    price: 300.0,
    rating: 0,
    type: "Structure",
    boughtWith: ["Flowers", "Ivy"]
};

export const fountainStructure: Item = {
    id: 22,
    name: "Fountain",
    description:
        "Elevate your garden with this romantic centerpiece! Toss in a coin to make a wish!",
    image: Fountain,
    quantity: 1,
    maintenanceLevel: 1,
    price: 1000.0,
    rating: 0,
    type: "Structure",
    boughtWith: ["Flowers", "Tiles"]
};

export const bridgeStructure: Item = {
    id: 23,
    name: "Bridge",
    description:
        "Enhance your garden with our elegant collection of garden bridges, expertly crafted to add functionality and beauty to your outdoor space.",
    image: Bridge,
    quantity: 1,
    maintenanceLevel: 1,
    price: 1000.0,
    rating: 0,
    type: "Structure",
    boughtWith: ["Lily Pond", "Stone Pond"]
};

export const gardenGnomeStructure: Item = {
    id: 24,
    name: "Gnome",
    description:
        "Bring a whimsical touch to your garden with our charming garden gnome, the perfect companion for your plants and flowers.",
    image: Gnome,
    quantity: 1,
    maintenanceLevel: 1,
    price: 60.0,
    rating: 0,
    type: "Structure",
    boughtWith: ["Flowers", "Mushrooms"]
};

export const budhaStructure: Item = {
    id: 25,
    name: "Buddha Statue",
    description:
        "Find inner peace in your garden with our stunning Buddha statue, crafted to emanate tranquility and mindfulness.",
    image: Budha,
    quantity: 1,
    maintenanceLevel: 1,
    price: 500.0,
    rating: 0,
    type: "Structure",
    boughtWith: ["Fountain", "Lotus"]
};

export const stonePathStructure: Item = {
    id: 26,
    name: "Stone Path",
    description:
        "Upgrade your garden with our high-quality stone path that offers a long-lasting solution for exploring your outdoor space.",
    image: StonePath,
    quantity: 1,
    maintenanceLevel: 1,
    price: 200.0,
    rating: 0,
    type: "Structure",
    boughtWith: ["Flowers", "Grass"]
};

export const hoopTrellisStructure: Item = {
    id: 27,
    name: "Hoop Trellis",
    description:
        "Add elegance to your garden with our hoop trellis, showcasing the beauty of climbing plants and creating a stunning focal point.",
    image: HoopTrellis,
    quantity: 1,
    maintenanceLevel: 1,
    price: 1000.0,
    rating: 0,
    type: "Structure",
    boughtWith: ["Vines", "Roses"]
};

export const trellisStructure: Item = {
    id: 28,
    name: "Trellis",
    description:
        "Designed to support and showcase the natural beauty of climbing plants!",
    image: Trellis,
    quantity: 1,
    maintenanceLevel: 1,
    price: 1000.0,
    rating: 0,
    type: "Structure",
    boughtWith: ["Flowers", "Tiles"]
};

// GREENERY
export const bushGreenery: Item = {
    id: 29,
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
    id: 30,
    name: "Grass",
    description: "Something perfect to fill up any empty spots in your yard!",
    image: Grass,
    quantity: 1,
    maintenanceLevel: 1,
    price: 15.0,
    rating: 0,
    type: "Greenery",
    boughtWith: ["Moss", "Clovers"]
};

export const ivyGreenery: Item = {
    id: 31,
    name: "Ivy",
    description:
        "Ivy's lush and vibrant presence offers a timeless and romantic addition to any garden or setting. Makes you think of Italy or something.",
    image: Ivy,
    quantity: 1,
    maintenanceLevel: 1,
    price: 15.0,
    rating: 0,
    type: "Greenery",
    boughtWith: ["Garden arch", "Brick wall"]
};

export const caladiumGreenery: Item = {
    id: 32,
    name: "Caladium",
    description:
        "Bring the tropical paradise to your space with the exotic and vibrant caladium, featuring stunning heart-shaped leaves in various colors and patterns.",
    image: Caladium,
    quantity: 1,
    maintenanceLevel: 1,
    price: 15.0,
    rating: 0,
    type: "Greenery",
    boughtWith: ["Fern", "Ivy"]
};

export const fernGreenery: Item = {
    id: 33,
    name: "Fern",
    description:
        "Transform your outdoor garden into a lush and vibrant oasis with the verdant and versatile fern, a resilient and easy-to-grow plant that will add a beautiful and refreshing touch to your landscape all year round.",
    image: Fern,
    quantity: 1,
    maintenanceLevel: 1,
    price: 15.0,
    rating: 0,
    type: "Greenery",
    boughtWith: ["Elephant ear", "Grass"]
};
