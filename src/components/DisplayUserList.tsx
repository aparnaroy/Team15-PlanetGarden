import React, { useState, useEffect } from "react";
import { ItemView } from "./ItemView";
import { Item } from "../interfaces/Item";
import { useDrop } from "react-dnd";
import { Row, Button } from "react-bootstrap";

export interface UserViewProps {
    items: Item[];
    setItems: (newItems: Item[]) => void;
}

export function DisplayUserList({
    items,
    setItems
}: UserViewProps): JSX.Element {
    const [userItems, setUserItems] = useState<Item[]>([]);

    useEffect(() => {
        // Load userItems from localStorage on mount
        const savedItems = localStorage.getItem("userItems");
        if (savedItems) {
            setUserItems(JSON.parse(savedItems));
        }
    }, []);

    useEffect(() => {
        // Save userItems to localStorage when it changes
        localStorage.setItem("userItems", JSON.stringify(userItems));
    }, [userItems]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "item",
        drop: (anItem: Item) => displayedList(anItem.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }));

    function displayedList(id: number) {
        const addedItem = items.find((anItem) => anItem.id === id);
        if (addedItem !== undefined) {
            setUserItems((userItems) => [...userItems, addedItem]);
        }
    }

    function handleClearCart() {
        setUserItems([]);
    }

    if (sessionStorage.getItem("Role") === "User") {
        return (
            <>
                <div
                    ref={drop}
                    role="Cart"
                    style={{
                        backgroundColor: isOver ? "white" : "#6aa1a3",
                        width: 648,
                        height: 700,
                        paddingTop: 20,
                        padding: 30,
                        overflow: "auto"
                    }}
                >
                    <Row s={1} md={2}>
                        {userItems.map((anItem) => {
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
                <Button onClick={handleClearCart}>Clear Cart</Button>
            </>
        );
    }
    return <div></div>;
}
