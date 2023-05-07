import React, { useState } from "react";
import { Button, ButtonToolbar, Card, Col } from "react-bootstrap";
import { Item } from "../interfaces/Item";
import { EditItem } from "./EditItem";
import { useDrag } from "react-dnd";
import { ExpandableSection } from "./Expandable";

export interface ItemViewProps {
    anItem: Item;
    items: Item[];
    setItems: (newItems: Item[]) => void;
}

export function ItemView({
    anItem,
    items,
    setItems
}: ItemViewProps): JSX.Element {
    const [rating, setRating] = useState(4);
    const [newItemForm, setShowItemForm] = useState(false);
    const [{ isDragging }, drag] = useDrag({
        type: "item",
        item: { id: anItem.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    isDragging;

    function changeRating(newRating: number) {
        setRating(newRating);
    }

    function showItemForm() {
        setShowItemForm(!newItemForm);
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
        setShowItemForm(false);
    }

    function showEditButton() {
        if (
            sessionStorage.getItem("Role") === "Super" &&
            window.location.href.endsWith("inventory")
        ) {
            return (
                <div>
                    <br></br>
                    <Button variant="info" onClick={showItemForm}>
                        Edit Item
                    </Button>
                </div>
            );
        } else if (
            (sessionStorage.getItem("Role") === "Super" ||
                sessionStorage.getItem("Role") === "Admin") &&
            window.location.href.endsWith("shop")
        ) {
            return (
                <div>
                    <br></br>
                    <Button variant="info" onClick={showItemForm}>
                        Edit Item
                    </Button>
                </div>
            );
        }
    }

    function editingMode() {
        return (
            <div>
                <br></br>
                {newItemForm && <EditItem item={anItem} onSave={editItem} />}
            </div>
        );
    }

    function showDeleteButton(anItem: Item) {
        if (
            sessionStorage.getItem("Role") === "Super" &&
            window.location.href.endsWith("inventory")
        ) {
            return (
                <div>
                    <br></br>
                    <Button variant="danger" onClick={() => deleteItem(anItem)}>
                        Delete Item
                    </Button>
                </div>
            );
        }
    }

    function showEditAndDelete(anItem: Item) {
        if (
            sessionStorage.getItem("Role") === "Super" &&
            window.location.href.endsWith("inventory")
        ) {
            return (
                <ButtonToolbar className="edit-delete-buttons">
                    &nbsp;&nbsp;&nbsp;&nbsp;{showEditButton()} &nbsp; &nbsp;
                    {showDeleteButton(anItem)}
                    {editingMode()}
                </ButtonToolbar>
            );
        } else if (
            (sessionStorage.getItem("Role") === "Super" ||
                sessionStorage.getItem("Role") === "Admin") &&
            window.location.href.endsWith("shop")
        ) {
            return (
                <ButtonToolbar className="edit-delete-buttons">
                    &nbsp;&nbsp;&nbsp;&nbsp;{showEditButton()} &nbsp; &nbsp;
                    {showDeleteButton(anItem)}
                    {editingMode()}
                </ButtonToolbar>
            );
        }
    }

    return (
        <Col key={anItem.id}>
            <br></br>
            <Card key={anItem.id} ref={drag}>
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
                    <span className="fs-8">
                        Rating: {<>&nbsp;</>}
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
                        })}
                    </span>
                    <Card.Footer>
                        <ExpandableSection>
                            <br></br>
                            <span className="card-subtitle ms-2 text-muted">
                                {anItem.description}
                            </span>
                            <br></br>
                            <br></br>
                            <span className="ms-1">
                                Maintenance Level:
                                <br></br>
                                <span className="ms-2 text-muted">
                                    {anItem.maintenanceLevel} out of 5
                                </span>
                            </span>
                            <br></br>
                            <span>
                                Frequently Bought With:<br></br>
                                <span className="ms-2 text-muted">
                                    {anItem.boughtWith.join(", ")}
                                </span>
                            </span>
                        </ExpandableSection>
                    </Card.Footer>
                    {showEditAndDelete(anItem)}
                </Card.Body>
            </Card>
        </Col>
    );
}
