import React, { useState } from "react";
import { ItemView } from "./ItemView";
import { Item } from "../interfaces/Item";
import { useDrop } from "react-dnd";
import { Row } from "react-bootstrap";
//import { ItemViewProps } from "./ItemView";

export interface AdminViewProps {
    items: Item[];
    setItems: (newItems: Item[]) => void;
}

export function DisplayAdminList({
    items,
    setItems
}: AdminViewProps): JSX.Element {
    const [adminItems, setAdminItems] = useState<Item[]>([]);
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
            setAdminItems((adminItems) => [...adminItems, addedItem]);
        }
    }

    if (
        sessionStorage.getItem("Role") === "Super" ||
        sessionStorage.getItem("Role") === "Admin"
    ) {
        return (
            <>
                <div>
                    <header className="App-header-4">Edit Items</header>
                </div>
                <div
                    className="flex-container-admin"
                    ref={drop}
                    style={{ backgroundColor: "#f1f1f1" }}
                >
                    {isOver ? "Release to drop" : "Drag a box here"}
                    <div className="flex-container">
                        <Row s={1} md={2}>
                            {adminItems.map((anItem) => {
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
