import React, { ReactElement, useState } from "react";
import { Button, ButtonToolbar, Card, Col } from "react-bootstrap";
import { Item } from "../interfaces/Item";
import { EditItem } from "./EditItem";
import { useDrag } from "react-dnd";

interface AccordionProps {
    children: ReactElement[];
}

function ExpandableSection({ children }: AccordionProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <div onClick={toggleExpand}>
                Show More{" "}
                <span
                    style={{
                        display: "inline-block",
                        transform: isExpanded
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                        fontSize: "16px",
                        marginRight: "4px"
                    }}
                >
                    ▼
                </span>
            </div>
            {isExpanded && <div>{children}</div>}
        </div>
    );
}

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
    const [rating, setRating] = useState(0);
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
                    <Button
                        variant="info"
                        onClick={showItemForm}
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
                    <span className="card-subtitle ms-2 text-muted">
                        {anItem.description}
                    </span>
                    <br></br>
                    <br></br>
                    <span className="fs-8">
                        Rating:{" "}
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
                    <br></br>
                    <Card.Footer>
                        <ExpandableSection>
                            <span className="ms-1">
                                •Maintenance Level: {anItem.maintenanceLevel}{" "}
                                out of 5
                            </span>
                            <br></br>
                            <span>
                                •Frequently Bought With:<br></br>
                                {anItem.boughtWith.join(", ")}
                            </span>
                        </ExpandableSection>
                    </Card.Footer>
                    <ButtonToolbar>
                        {showEditButton()} &nbsp; &nbsp;
                        {showDeleteButton(anItem)}
                        {editingMode()}
                    </ButtonToolbar>
                </Card.Body>
            </Card>
        </Col>
    );
}
