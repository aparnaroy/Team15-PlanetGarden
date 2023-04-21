import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Tree, Flower, Greenery, Structure } from "../interfaces";
import {
    oakTree,
    spruceTree,
    larchTree,
    cedarTree,
    sequoiaTree,
    sunflowerFlower,
    irisFlower,
    tulipFlower,
    chrysanthememFlower,
    pansyFlower,
    grassGreenery,
    pondStructure,
    benchStructure
} from "../assets/instances";

export const items: (Flower | Tree | Greenery | Structure)[] = [
    benchStructure,
    cedarTree,
    chrysanthememFlower,
    grassGreenery,
    irisFlower,
    larchTree,
    oakTree,
    pansyFlower,
    pondStructure,
    sequoiaTree,
    spruceTree,
    sunflowerFlower,
    tulipFlower
];

export function SortButton(): JSX.Element {
    const items: (Flower | Tree | Greenery | Structure)[] = [
        benchStructure,
        cedarTree,
        chrysanthememFlower,
        grassGreenery,
        irisFlower,
        larchTree,
        oakTree,
        pansyFlower,
        pondStructure,
        sequoiaTree,
        spruceTree,
        sunflowerFlower,
        tulipFlower
    ];
    const [option, setOption] = useState<string>("");
    function updateSorting(event: React.ChangeEvent<HTMLSelectElement>) {
        setOption(event.target.value);
    }
    let displayedItems: (Flower | Tree | Greenery | Structure)[] = [];
    let printed = Display(items);
    if (option === "Trees") {
        displayedItems = items.filter(
            (item: Flower | Tree | Greenery | Structure): boolean =>
                item.type === "Tree"
        );
        printed = Display(displayedItems);
    } else if (option === "Flowers") {
        displayedItems = items.filter(
            (item: Flower | Tree | Greenery | Structure): boolean =>
                item.type === "Flower"
        );
        printed = Display(displayedItems);
    } else if (option === "Greenery") {
        displayedItems = items.filter(
            (item: Flower | Tree | Greenery | Structure): boolean =>
                item.type === "Greenery"
        );
        printed = Display(displayedItems);
    } else if (option === "Structures") {
        displayedItems = items.filter(
            (item: Flower | Tree | Greenery | Structure): boolean =>
                item.type === "Structure"
        );
        printed = Display(displayedItems);
    }
    return (
        <div>
            <Form.Label>Sort By: </Form.Label>
            <Form.Select value={option} onChange={updateSorting}>
                <option>Alphabetically</option>
                <option>Price: low to high</option>
                <option>Trees</option>
                <option>Flowers</option>
                <option>Greenery</option>
                <option>Structures</option>
            </Form.Select>
            {option}
            {printed}
        </div>
    );
}

// displayAll is sorted alphabetically by default
export function Display(
    itemList: (Flower | Tree | Greenery | Structure)[]
): JSX.Element {
    return (
        <div className="parent-container">
            <div className="flex-container">
                {itemList.map((anItem: Flower | Tree) => {
                    return (
                        <div key={anItem.name}>
                            <div style={{ textAlign: "center" }}>
                                <img
                                    src={anItem.image}
                                    alt="img"
                                    width="270"
                                    height="270"
                                ></img>
                                <br></br>
                                <h3>{anItem.name}</h3>
                                <span>•{anItem.description}</span>
                                <br></br>
                                <span>•Quantity: {anItem.quantity}</span>
                                <br></br>
                                <span>
                                    •Maintenance level:{" "}
                                    {anItem.maintenanceLevel} out of 5
                                </span>
                                <br></br>
                                <span>•Price: ${anItem.price}</span>
                                <br></br>
                                <span>•Rating: {anItem.rating} out of 5</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export function DisplayTrees(
    itemList: (Flower | Tree | Greenery | Structure)[]
): JSX.Element {
    const allTrees: Tree[] = [
        oakTree,
        spruceTree,
        larchTree,
        cedarTree,
        sequoiaTree
    ];
    return (
        <div className="parent-container">
            <div className="flex-container">
                {allTrees.map((aTree: Tree) => {
                    return (
                        <div key={aTree.name}>
                            <div style={{ textAlign: "center" }}>
                                <img
                                    src={aTree.image}
                                    alt="Oak tree"
                                    width="270"
                                    height="270"
                                ></img>
                                <br></br>
                                <h3>{aTree.name}</h3>
                                <span>•{aTree.description}</span>
                                <br></br>
                                <span>•Quantity: {aTree.quantity}</span>
                                <br></br>
                                <span>
                                    •Maintenance level: {aTree.maintenanceLevel}{" "}
                                    out of 5
                                </span>
                                <br></br>
                                <span>•Price: ${aTree.price}</span>
                                <br></br>
                                <span>•Rating: {aTree.rating} out of 5</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export function DisplayFlowers(
    itemList: (Flower | Tree | Greenery | Structure)[]
): JSX.Element {
    const allFlowers: Flower[] = [
        sunflowerFlower,
        tulipFlower,
        chrysanthememFlower,
        pansyFlower,
        irisFlower
    ];
    return (
        <div className="parent-container">
            <div className="flex-container">
                {allFlowers.map((aFlower: Flower) => {
                    return (
                        <div key={aFlower.name}>
                            <div style={{ textAlign: "center" }}>
                                <img
                                    src={aFlower.image}
                                    alt="Oak tree"
                                    width="270"
                                    height="270"
                                ></img>
                                <br></br>
                                <h3>{aFlower.name}</h3>
                                <span>•{aFlower.description}</span>
                                <br></br>
                                <span>•Quantity: {aFlower.quantity}</span>
                                <br></br>
                                <span>
                                    •Maintenance level:{" "}
                                    {aFlower.maintenanceLevel} out of 5
                                </span>
                                <br></br>
                                <span>•Price: ${aFlower.price}</span>
                                <br></br>
                                <span>•Rating: {aFlower.rating} out of 5</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
