import React, { useState } from "react";
import { Button, ButtonToolbar, Card, Col } from "react-bootstrap";
import { Item } from "../interfaces/Item";
import { EditItem } from "./EditItem";
import { useDrag } from "react-dnd";
import { ExpandableSection } from "./Expandable";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { User } from "../interfaces/User";
import { DeleteFromAllUserCarts } from "./UserCart";
import { DeleteFromAdminList } from "./AdminList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { CalculateTotalOccurrences } from "./UserCart";

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
    const [rating, setRating] = useState(anItem.rating);
    //const [rating, setRating] = useState(4);
    const [newItemForm, setShowItemForm] = useState(false);
    const [{ isDragging }, drag] = useDrag({
        type: "item",
        item: { id: anItem.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    isDragging;
    const [allUsers, setAllUsers] = useSessionStorage<User[]>("USERS", [
        { id: 1, name: "Sam", cart: [] },
        { id: 2, name: "John", cart: [] },
        { id: 3, name: "Sarah", cart: [] },
        { id: 4, name: "Bob", cart: [] }
    ]);
    setAllUsers;

    const [adminItems, setAdminItems] = useSessionStorage<Item[]>(
        "adminItems",
        []
    );
    setAdminItems;

    function changeRating(selectedRating: number) {
        if (
            sessionStorage.getItem("Role") === "Super" ||
            sessionStorage.getItem("Role") === "Admin"
        ) {
            setRating(selectedRating);
            const updatedItems = items.map((item) =>
                item.id === anItem.id
                    ? { ...item, rating: selectedRating }
                    : item
            );
            setItems(updatedItems);
        }
    }

    function showItemForm() {
        setShowItemForm(!newItemForm);
    }

    function deleteItem(item: Item) {
        if (items && setItems) {
            const updatedItems = items.filter((i) => i.id !== item.id);
            setItems(updatedItems);
            DeleteFromAllUserCarts(item.id, allUsers);
            DeleteFromAdminList(item.id, adminItems);
            location.reload();
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
                    <Button
                        className="pencil-button-super"
                        variant="info"
                        onClick={showItemForm}
                    >
                        <FontAwesomeIcon
                            icon={faPencil}
                            size="1x"
                            style={{ color: "#6d4206" }}
                        />
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
                    <Button
                        className="trash-can-super"
                        variant="danger"
                        onClick={() => deleteItem(anItem)}
                    >
                        <FontAwesomeIcon
                            className="fas fa-trash-alt"
                            icon={faTrashAlt}
                            size="sm"
                            style={{ color: "#6d4206" }}
                        />
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
                    {showEditButton()}
                    {showDeleteButton(anItem)}
                    {editingMode()}
                </ButtonToolbar>
            );
        }
    }

    function chooseBackgroundColor(anItem: Item) {
        const adminItemsString = sessionStorage.getItem("adminItems");
        if (adminItemsString !== null) {
            const allAdminItems = JSON.parse(adminItemsString);
            const inList = allAdminItems.find(
                (item: Item) => item.id === anItem.id
            );
            if (
                inList &&
                window.location.href.endsWith("shop") &&
                sessionStorage.getItem("Role") === "Admin"
            ) {
                return "#D3D3D3";
            } else if (
                inList &&
                window.location.href.endsWith("shop") &&
                sessionStorage.getItem("Role") === "Super"
            ) {
                return "#D3D3D3";
            }
        }
        return "white";
    }

    const totalOccurrencesMap = CalculateTotalOccurrences();
    if (totalOccurrencesMap) {
        items.map((anItem: Item) => {
            const occurrences = totalOccurrencesMap.get(anItem.name);
            const appearsInCart = occurrences !== undefined ? occurrences : 0;
            return { ...anItem, appearsInCart };
        });
        //console.log(totalOccurrencesMap);
    }

    function showAppearsInCart(item: Item) {
        if (
            sessionStorage.getItem("Role") === "Super" &&
            totalOccurrencesMap.get(item.id)
        ) {
            return (
                <div style={{ backgroundColor: "LightBlue" }}>
                    Added to carts {totalOccurrencesMap.get(item.id)} times.
                </div>
            );
        } else if (sessionStorage.getItem("Role") === "Super") {
            return (
                <div style={{ backgroundColor: "LightBlue" }}>
                    Added to carts 0 times.
                </div>
            );
        }
    }

    return (
        <Col key={anItem.id}>
            <br></br>
            <Card key={anItem.id} ref={drag} data-testid="card">
                <Card.Img
                    variant="top"
                    src={anItem.image}
                    style={{ objectFit: "cover" }}
                />
                <Card.Body
                    style={{ backgroundColor: chooseBackgroundColor(anItem) }}
                >
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
                    <br></br>
                    {showAppearsInCart(anItem)}
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
