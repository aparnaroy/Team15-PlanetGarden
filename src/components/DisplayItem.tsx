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
import { ItemView } from "./ItemView";
import { Item } from "../interfaces/Item";
import { Button, Col, Row } from "react-bootstrap";
import { AddItem } from "./AddItem";
import { useDrop } from "react-dnd";
import { DisplayAdminList } from "./AdminList";

export function InventoryDisplay(): JSX.Element {
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
        archStructure,
        spruceTree,
        stonePondStructure,
        birdBathStructure,
        fountainStructure,
        sunflowerFlower,
        tulipFlower,
        ivyGreenery,
        fernGreenery,
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
                        onClick={showItemForm}
                        className="d-flex"
                        variant="success"
                    >
                        Add New Item
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

export function Cart() {
    const [{ isOver }, drop] = useDrop({
        accept: "item",
        drop: (item: Item) => item, //addToCart(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });
    return (
        <div
            className="flex-container-cart"
            ref={drop}
            role={"Cart"}
            style={{ backgroundColor: isOver ? "white" : "#f1f1f1" }}
        >
            {isOver ? "Release to drop" : "Drag a box here"}
        </div>
    );
}

// displayAll is sorted alphabetically by default
export function ShopDisplay(
    itemList: Item[],
    items: Item[],
    setItems: (newItems: Item[]) => void
): JSX.Element {
    return (
        <>
            <div style={{ display: "flex" }}>
                <header className="App-header2">Shop🪴</header>
                <header className="App-header3">Your Cart🛒</header>
            </div>
            <div className="parent-container">
                <div className="flex-container">
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
                <Cart></Cart>
            </div>
            <div>
                <DisplayAdminList
                    items={items}
                    setItems={setItems}
                ></DisplayAdminList>
            </div>
        </>
    );
}
