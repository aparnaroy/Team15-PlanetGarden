import React, { useState } from "react";
import { ItemView } from "./ItemView";
import { Item } from "../interfaces/Item";
import { useDrop } from "react-dnd";
import { Row } from "react-bootstrap";
import "../App.css";
import { useSessionStorage } from "../hooks/useSessionStorage";

export interface AdminViewProps {
    items: Item[];
    setItems: (newItems: Item[]) => void;
}

export function DisplayAdminList({
    items,
    setItems
}: AdminViewProps): JSX.Element {
    const [adminItems, setAdminItems] = useState<Item[]>([]);
    const [inAdminList, setInAdminList] = useSessionStorage<boolean>(
        "inAdmin",
        false
    );
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
            setInAdminList(!inAdminList);
        }
    }
    function handleRemoveItem() {
        setAdminItems([]);
        setInAdminList(!inAdminList);
    }
    if (
        sessionStorage.getItem("Role") === "Super" ||
        sessionStorage.getItem("Role") === "Admin"
    ) {
        return (
            <>
                <div
                    ref={drop}
                    style={{
                        backgroundColor: isOver ? "white" : "#6aa1a3",
                        width: 648,
                        height: 700,
                        paddingTop: 20,
                        padding: 30,
                        overflow: "auto"
                    }}
                >
                    <Row>
                        {isOver}
                        {adminItems.map((anItem) => {
                            return (
                                <>
                                    <div key={anItem.id} id="child">
                                        <ItemView
                                            anItem={anItem}
                                            items={items}
                                            setItems={setItems}
                                        ></ItemView>
                                        <button
                                            onClick={() => handleRemoveItem()}
                                        >
                                            Remove Item
                                        </button>
                                    </div>
                                </>
                            );
                        })}
                    </Row>
                </div>
            </>
        );
    }
    return <div></div>;
}
