import React, { useState } from "react";
import { ItemView } from "./ItemView";
import { Item } from "../interfaces/Item";
import { useDrop } from "react-dnd";
import { Row } from "react-bootstrap";
//import { ItemViewProps } from "./ItemView";

export interface UserViewProps {
    items: Item[];
    setItems: (newItems: Item[]) => void;
}

export function DisplayUserList({
    items,
    setItems
}: UserViewProps): JSX.Element {
    const [userItems, setUserItems] = useState<Item[]>([]);
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

    if (sessionStorage.getItem("Role") === "User") {
        return (
            <>
                <div
                    className="flex-container-cart"
                    ref={drop}
                    style={{ backgroundColor: "#f1f1f1" }}
                >
                    {isOver ? "Release to drop" : "Drag a box here"}
                    <div className="flex-container-cart">
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
                </div>

                <br></br>
            </>
        );
    }
    return <div></div>;
}
