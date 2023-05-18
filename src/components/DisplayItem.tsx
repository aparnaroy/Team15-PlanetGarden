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
import { ItemView } from "./ItemView";
import { Item } from "../interfaces/Item";
import { Button, Col, Row } from "react-bootstrap";
import { AddItem } from "./AddItem";
import { DisplayAdminList } from "./AdminList";
import { DisplayUserList } from "./UserCart";
import { User } from "../interfaces/User";

export function InventoryDisplay(): JSX.Element {
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
    const [newItemForm, setShowItemForm] = useState(false);

    function addItem(item: Item) {
        setItems([...items, item]);
        setShowItemForm(false);
    }

    function showItemForm() {
        setShowItemForm(!newItemForm);
    }

    function showAddButton() {
        if (sessionStorage.getItem("Role") === "Super") {
            return (
                <div>
                    <Button
                        className="add-item-super d-flex"
                        onClick={showItemForm}
                        variant="success"
                    >
                        + Add New
                    </Button>
                </div>
            );
        }
    }

    return (
        <div>
            {showAddButton()}
            {newItemForm && <AddItem onSave={addItem} />}
            <Row s={2} md={3} lg={4}>
                {items.map((anItem) => {
                    return (
                        <Col key={anItem.id}>
                            <ItemView
                                anItem={anItem}
                                items={items}
                                setItems={setItems}
                            ></ItemView>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}

export function displayCartOrAdmin(
    items: Item[],
    setItems: (newItems: Item[]) => void,
    userNow: User
): JSX.Element {
    if (
        sessionStorage.getItem("Role") === "Admin" ||
        sessionStorage.getItem("Role") === "Super"
    ) {
        return (
            <DisplayAdminList
                items={items}
                setItems={setItems}
            ></DisplayAdminList>
        );
    }
    return (
        <DisplayUserList
            items={items}
            setItems={setItems}
            selectedUser={userNow}
        ></DisplayUserList>
    );
}

export function chooseHeader(): string {
    if (
        sessionStorage.getItem("Role") === "Admin" ||
        sessionStorage.getItem("Role") === "Super"
    ) {
        return "Edit ✏️";
    } else {
        return "Your Cart 🛒";
    }
}

export function ShopDisplay(
    itemList: Item[],
    items: Item[],
    setItems: (newItems: Item[]) => void,
    userNow: User
): JSX.Element {
    return (
        <>
            <div style={{ display: "flex" }}>
                <header className="App-header2">Shop 🪴</header>
                <header className="App-header3">{chooseHeader()}</header>
            </div>
            <div className="parent-container">
                <div className="flex-container-shop">
                    <Row s={1} md={2}>
                        {itemList.map((anItem) => {
                            return (
                                <div key={anItem.id}>
                                    <ItemView
                                        anItem={anItem}
                                        items={items}
                                        setItems={setItems}
                                    ></ItemView>
                                </div>
                            );
                        })}
                    </Row>
                </div>
                <div>{displayCartOrAdmin(items, setItems, userNow)}</div>
            </div>
        </>
    );
}
