import React, { useState } from "react";
import {
    benchStructure,
    bushGreenery,
    cedarTree,
    chrysanthemumFlower,
    gazeboStructure,
    grassGreenery,
    irisFlower,
    larchTree,
    lilyPondStructure,
    oakTree,
    pansyFlower,
    sequoiaTree,
    simplePondStructure,
    fountainStructure,
    archStructure,
    spruceTree,
    stonePondStructure,
    birdBathStructure,
    sunflowerFlower,
    tulipFlower,
    ivyGreenery,
    fernGreenery,
    caladiumGreenery
} from "../assets/instances";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { Item } from "../interfaces/Item";
import { Form } from "react-bootstrap";
import { ShopDisplay } from "./DisplayItem";

export function SortButton(): JSX.Element {
    const [items, setItems] = useSessionStorage<Item[]>("all-items", [
        benchStructure,
        bushGreenery,
        cedarTree,
        chrysanthemumFlower,
        gazeboStructure,
        grassGreenery,
        irisFlower,
        larchTree,
        lilyPondStructure,
        oakTree,
        pansyFlower,
        sequoiaTree,
        simplePondStructure,
        fountainStructure,
        archStructure,
        spruceTree,
        stonePondStructure,
        birdBathStructure,
        sunflowerFlower,
        tulipFlower,
        ivyGreenery,
        fernGreenery,
        caladiumGreenery
    ]);
    setItems;
    const [option, setOption] = useState<string>("");
    function updateSorting(event: React.ChangeEvent<HTMLSelectElement>) {
        setOption(event.target.value);
    }
    let displayedItems: Item[] = [];
    let printed = ShopDisplay(items, items, setItems);
    if (option === "Trees") {
        displayedItems = items.filter(
            (item: Item): boolean => item.type === "Tree"
        );
        printed = ShopDisplay(displayedItems, items, setItems);
    } else if (option === "Flowers") {
        displayedItems = items.filter(
            (item: Item): boolean => item.type === "Flower"
        );
        printed = ShopDisplay(displayedItems, items, setItems);
    } else if (option === "Greenery") {
        displayedItems = items.filter(
            (item: Item): boolean => item.type === "Greenery"
        );
        printed = ShopDisplay(displayedItems, items, setItems);
    } else if (option === "Structures") {
        displayedItems = items.filter(
            (item: Item): boolean => item.type === "Structure"
        );
        printed = ShopDisplay(displayedItems, items, setItems);
    } else if (option === "Price low to high") {
        displayedItems = items.sort(
            (item: Item, item2: Item) => item.price - item2.price
        );
        printed = ShopDisplay(displayedItems, items, setItems);
    } else if (option === "Price high to low") {
        displayedItems = items.sort(
            (item: Item, item2: Item) => item2.price - item.price
        );
        printed = ShopDisplay(displayedItems, items, setItems);
    } else if (option === "Alphabetically") {
        displayedItems = items.sort((item: Item, item2: Item) =>
            item2.name < item.name ? 1 : -1
        );
        printed = ShopDisplay(displayedItems, items, setItems);
    }
    const [input, setInput] = useState<string>("");
    //let keywordPrint = Display([spruceTree]);
    function searchLists(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }
    if (option === "By keyword") {
        displayedItems = items.filter((item: Item) =>
            item.name.toLowerCase().includes(input.toLowerCase())
        );
        printed = ShopDisplay(displayedItems, items, setItems);
    }
    function searchBar(): JSX.Element {
        return (
            <div>
                <Form.Label>Start typing:</Form.Label>
                <Form.Control
                    type="string"
                    value={input}
                    onChange={searchLists}
                ></Form.Control>
            </div>
        );
    }
    // FOR SEARCH BY TEXT INPUT
    return (
        <div>
            <Form.Label>Sort By: </Form.Label>
            <Form.Select value={option} onChange={updateSorting}>
                <option>Alphabetically</option>
                <option>Price low to high</option>
                <option>Price high to low</option>
                <option>Trees</option>
                <option>Flowers</option>
                <option>Greenery</option>
                <option>Structures</option>
                <option>By keyword</option>
            </Form.Select>
            <br></br>
            {option === "By keyword" ? searchBar() : null}
            <br></br>
            {printed}
        </div>
    );
}
