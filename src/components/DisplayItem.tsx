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
import { DisplayAdminList } from "./AdminList";
import { DisplayUserList } from "./UserList";
import { User } from "../interfaces/User";

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

// export function Cart() {
//     const [{ isOver }, drop] = useDrop({
//         accept: "item",
//         drop: (item: Item) => item, //addToCart(item.id),
//         collect: (monitor) => ({
//             isOver: !!monitor.isOver()
//         })
//     });
//     return (
//         <div
//             className="flex-container-cart"
//             ref={drop}
//             role={"Cart"}
//             style={{ backgroundColor: isOver ? "white" : "#f1f1f1" }}
//         >
//             {isOver ? "Release to drop" : "Drag a box here"}
//         </div>
//     );
// }

// displayAll is sorted alphabetically by default
export function ShopDisplay(
    itemList: Item[],
    items: Item[],
    setItems: (newItems: Item[]) => void
): JSX.Element {
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

    return (
        <>
            <div style={{ display: "flex" }}>
                <header className="App-header2">Shop🪴</header>
                <header className="App-header3">Your Cart🛒</header>
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
                <div>
                    <DisplayUserList
                        items={items}
                        setItems={setItems}
                        selectedUser={userNow}
                    ></DisplayUserList>
                </div>
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
