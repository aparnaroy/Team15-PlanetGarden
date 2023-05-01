import React, { useState } from "react";
import { Button, ButtonToolbar, Card, Col } from "react-bootstrap";
import { Item } from "../interfaces/Item";
import { EditItem } from "./EditItem";

interface ItemViewProps {
    anItem: Item;
    items: Item[];
    setItems: (newItems: Item[]) => void;
}

export function ItemView({
    anItem,
    items,
    setItems
}: ItemViewProps): JSX.Element {
    const [rating, setRating] = useState(0);
    const [editingItem, updateItem] = useState<Item>();

    function changeRating(newRating: number) {
        setRating(newRating);
    }

    function deleteItem(item: Item) {
        if (items && setItems) {
            const updatedItems = items.filter((i) => i.name !== item.name);
            setItems(updatedItems);
        }
    }

    function editItem(name: string, editedItem: Item) {
        setItems(
            items.map(
                (item: Item): Item => (item.name === name ? editedItem : item)
            )
        );
    }

    function showEditButton(anItem: Item) {
        if (
            sessionStorage.getItem("Role") === "Super" &&
            window.location.href.endsWith("inventory")
        ) {
            return (
                <div>
                    <br></br>
                    <Button
                        variant="info"
                        onClick={() => editItem(anItem.name, anItem)}
                        className="w-100 mt-auto"
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            marginLeft: 10,
                            justifyContent: "space-evenly"
                        }}
                    >
                        Edit Item
                    </Button>
                </div>
            );
        }
    }

    function showDeleteButton(anItem: Item) {
        if (
            sessionStorage.getItem("Role") === "Super" &&
            window.location.href.endsWith("inventory")
        ) {
            return (
                <div>
                    <br></br>
                    <Button
                        variant="danger"
                        onClick={() => deleteItem(anItem)}
                        className="w-100 mt-auto"
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            marginLeft: 20,
                            justifyContent: "space-evenly"
                        }}
                    >
                        Delete Item
                    </Button>
                </div>
            );
        }
    }

    return (
        <Col key={anItem.name}>
            <br></br>
            <Card key={anItem.name}>
                <Card.Img
                    variant="top"
                    src={anItem.image}
                    style={{ objectFit: "cover" }}
                />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between align-items-baseline">
                        <span className="fs-4">{anItem.name}</span>
                        <span className="ms-2 text-muted">${anItem.price}</span>
                    </Card.Title>
                    <span className="card-subtitle ms-2 text-muted">
                        {anItem.description}
                    </span>
                    <br></br>
                    <br></br>
                    <span className="ms-1">
                        •Maintenance Level: {anItem.maintenanceLevel} out of 5
                    </span>
                    <br></br>
                    <span className="fs-8">
                        •Rating:{" "}
                        {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (
                                <span
                                    key={index}
                                    style={{
                                        color:
                                            index <= rating ? "orange" : "gray",
                                        cursor: "pointer"
                                    }}
                                    onClick={() => changeRating(index)}
                                >
                                    &#9733;
                                </span>
                            );
                        })}{" "}
                    </span>
                    <br></br>
                    <ButtonToolbar>
                        {showEditButton(anItem)} &nbsp; &nbsp;
                        {showDeleteButton(anItem)}
                    </ButtonToolbar>
                    <EditItem item={anItem} onSave={editItem} />
                </Card.Body>
            </Card>
        </Col>
    );
}
