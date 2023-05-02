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
    spruceTree,
    stonePondStructure,
    sunflowerFlower,
    tulipFlower
} from "../assets/instances";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { ItemView } from "./ItemView";
import { Item } from "../interfaces/Item";
import { Button, Col, Row } from "react-bootstrap";
import { AddItem } from "./AddItem";

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
        spruceTree,
        stonePondStructure,
        sunflowerFlower,
        tulipFlower
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
                        <Col key={anItem.name}>
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

// displayAll is sorted alphabetically by default
export function ShopDisplay(
    itemList: Item[],
    items: Item[],
    setItems: (newItems: Item[]) => void
): JSX.Element {
    return (
        <div className="flex-container">
            <Row s={1} md={2}>
                {itemList.map((anItem) => {
                    return (
                        <div key={anItem.name}>
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
    );
}
