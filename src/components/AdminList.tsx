import React, { useState } from "react";
import { ItemView } from "./ItemView";
import { Item } from "../interfaces/Item";
import { useDrop } from "react-dnd";
import { Row } from "react-bootstrap";
import "../App.css";
import { alignPropType } from "react-bootstrap/esm/types";

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
            setAdminItems([addedItem]);
        }
    }

    if (
        sessionStorage.getItem("Role") === "Super" ||
        sessionStorage.getItem("Role") === "Admin"
    ) {
        return (
            <>
                <div>
                    <header className="App-header4">Edit Item</header>
                </div>
                <div
                    className="flex-container-admin"
                    ref={drop}
                    style={{
                        backgroundColor: isOver ? "white" : "#9eb0b1",
                        width: 648,
                        height: 700,
                        paddingTop: 20,
                        padding: 30,
                        overflow: "auto"
                    }}
                >
                    <div className="flex-container-admin2">
                        {isOver}
                        {adminItems.map((anItem) => {
                            return (
                                <>
                                    <div key={anItem.id}>
                                        <ItemView
                                            anItem={anItem}
                                            items={items}
                                            setItems={setItems}
                                        ></ItemView>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
                <br></br>
            </>
        );
    }
    return <div></div>;
}
