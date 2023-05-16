import React from "react";
import { Item } from "../interfaces/Item";
import { useDrop } from "react-dnd";
import { Row } from "react-bootstrap";
import "../App.css";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { EditItem } from "./EditItem";

export interface AdminViewProps {
    items: Item[];
    setItems: (newItems: Item[]) => void;
}

export function DisplayAdminList({
    items,
    setItems
}: AdminViewProps): JSX.Element {
    const [adminItems, setAdminItems] = useSessionStorage<Item[]>(
        "adminItems",
        []
    );
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

    let adminItemsSet = new Set(adminItems.map((item) => item.id));

    function displayedList(id: number) {
        const addedItem = items.find((anItem) => anItem.id === id);
        if (addedItem !== undefined && !adminItemsSet.has(addedItem.id)) {
            setAdminItems((adminItems) => [...adminItems, addedItem]);
            setInAdminList(!inAdminList);
            adminItemsSet.add(addedItem.id);
        }
    }

    function handleRemoveItem(id: number) {
        const adminListItems = adminItems.filter((item) => item.id !== id);
        setAdminItems(adminListItems);
        setInAdminList(!inAdminList);
        adminItemsSet = new Set(adminListItems.map((item) => item.id));
        location.reload();
    }

    function editItem(name: string, editedItem: Item) {
        setItems(
            items.map(
                (item: Item): Item => (item.name === name ? editedItem : item)
            )
        );
        handleRemoveItem(editedItem.id);
    }

    function displayAdminList() {
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
                        <Row s={1} md={2}>
                            {isOver}
                            {adminItems.map((anItem) => {
                                return (
                                    <div key={anItem.id}>
                                        <EditItem
                                            item={anItem}
                                            onSave={editItem}
                                        ></EditItem>

                                        <button
                                            onClick={() =>
                                                handleRemoveItem(anItem.id)
                                            }
                                        >
                                            Remove Item
                                        </button>
                                        <br></br>
                                        <br></br>
                                    </div>
                                );
                            })}
                        </Row>
                    </div>
                </>
            );
        }
    }

    return <div>{displayAdminList()}</div>;
}
