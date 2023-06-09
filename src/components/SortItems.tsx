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
    caladiumGreenery,
    trellisStructure,
    lilyFlower,
    budhaStructure,
    blueHydrangeaFlower,
    stonePathStructure,
    forgetMeNotFlower,
    gardenGnomeStructure,
    bridgeStructure,
    hoopTrellisStructure,
    cherryBlossomTree
} from "../assets/instances";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { Item } from "../interfaces/Item";
import { Form } from "react-bootstrap";
import { ShopDisplay } from "./DisplayItem";
import { User } from "../interfaces/User";

export function SortDropDown(): JSX.Element {
    const [items, setItems] = useSessionStorage<Item[]>("all-items", [
        irisFlower,
        bushGreenery,
        lilyPondStructure,
        tulipFlower,
        oakTree,
        budhaStructure,
        birdBathStructure,
        forgetMeNotFlower,
        pansyFlower,
        cherryBlossomTree,
        gardenGnomeStructure,
        cedarTree,
        bridgeStructure,
        chrysanthemumFlower,
        grassGreenery,
        gazeboStructure,
        trellisStructure,
        sequoiaTree,
        sunflowerFlower,
        simplePondStructure,
        larchTree,
        fountainStructure,
        hoopTrellisStructure,
        stonePathStructure,
        stonePondStructure,
        archStructure,
        spruceTree,
        lilyFlower,
        blueHydrangeaFlower,
        fernGreenery,
        benchStructure,
        ivyGreenery,
        caladiumGreenery
    ]);
    setItems;

    const [option, setOption] = useState<string>("");
    function updateSorting(event: React.ChangeEvent<HTMLSelectElement>) {
        setOption(event.target.value);
    }

    const [allUsers, setAllUsers] = useSessionStorage<User[]>("USERS", [
        { id: 1, name: "Sam", cart: [] },
        { id: 2, name: "John", cart: [] },
        { id: 3, name: "Sarah", cart: [] },
        { id: 4, name: "Bob", cart: [] }
    ]);
    setAllUsers;

    function selectedUser() {
        const curr = sessionStorage.getItem("CurrentUserID") ?? "0";
        const currentUser = allUsers.find(
            (user) => user.id === parseInt(curr)
        ) ?? { id: 1, name: "Sam", cart: [] };
        return currentUser;
    }

    const userNow = selectedUser();

    let displayedItems: Item[] = [];
    let printed = ShopDisplay(items, items, setItems, userNow);
    if (option === "Trees") {
        displayedItems = items.filter(
            (item: Item): boolean => item.type === "Tree"
        );
        printed = ShopDisplay(displayedItems, items, setItems, userNow);
    } else if (option === "Flowers") {
        displayedItems = items.filter(
            (item: Item): boolean => item.type === "Flower"
        );
        printed = ShopDisplay(displayedItems, items, setItems, userNow);
    } else if (option === "Greenery") {
        displayedItems = items.filter(
            (item: Item): boolean => item.type === "Greenery"
        );
        printed = ShopDisplay(displayedItems, items, setItems, userNow);
    } else if (option === "Structures") {
        displayedItems = items.filter(
            (item: Item): boolean => item.type === "Structure"
        );
        printed = ShopDisplay(displayedItems, items, setItems, userNow);
    } else if (option === "Price (low to high)") {
        displayedItems = items.sort(
            (item: Item, item2: Item) => item.price - item2.price
        );
        printed = ShopDisplay(displayedItems, items, setItems, userNow);
    } else if (option === "Price (high to low)") {
        displayedItems = items.sort(
            (item: Item, item2: Item) => item2.price - item.price
        );
        printed = ShopDisplay(displayedItems, items, setItems, userNow);
    } else if (option === "Alphabetically") {
        displayedItems = items.sort((item: Item, item2: Item) =>
            item2.name < item.name ? 1 : -1
        );
        printed = ShopDisplay(displayedItems, items, setItems, userNow);
    }
    const [input, setInput] = useState<string>("");
    function searchLists(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }
    if (option === "By Keyword") {
        displayedItems = items.filter((item: Item) =>
            item.name.toLowerCase().includes(input.toLowerCase())
        );
        printed = ShopDisplay(displayedItems, items, setItems, userNow);
    }
    function searchBar(): JSX.Element {
        return (
            <div>
                <Form.Control
                    className="sort-search d-flex"
                    type="string"
                    placeholder="Start typing..."
                    value={input}
                    onChange={searchLists}
                ></Form.Control>
                <br></br>
            </div>
        );
    }
    return (
        <div>
            <Form.Label className="sort-label d-flex">
                &nbsp;Sort / Filter:
            </Form.Label>
            <Form.Select
                className="sort-dropdown"
                value={option}
                onChange={updateSorting}
            >
                <option defaultValue="default">
                    ---Sort or Filter Items---
                </option>
                <option>Alphabetically</option>
                <option>Price (low to high)</option>
                <option>Price (high to low)</option>
                <option>Trees</option>
                <option>Flowers</option>
                <option>Greenery</option>
                <option>Structures</option>
                <option>By Keyword</option>
            </Form.Select>
            <br></br>
            {option === "By Keyword" ? searchBar() : null}
            {printed}
        </div>
    );
}
