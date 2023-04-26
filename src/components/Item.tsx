import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

/*import {
    cedarTree,
    larchTree,
    oakTree,
    spruceTree,
    sequoiaTree,
    chrysanthemumFlower,
    irisFlower,
    sunflowerFlower,
    tulipFlower,
    pansyFlower,
    benchStructure,
    gazeboStructure,
    lilyPondStructure,
    simplePondStructure,
    stonePondStructure,
    bushGreenery,
    grassGreenery
} from "../assets/instances";*/
import {
    benchStructure,
    bushGreenery,
    cedarTree,
    chrysanthemumFlower,
    gazeboStructure,
    grassGreenery,
    irisFlower,
    larchTree,
    lilyPondStructure,
    oakTree,
    pansyFlower,
    sequoiaTree,
    simplePondStructure,
    spruceTree,
    stonePondStructure,
    sunflowerFlower,
    tulipFlower
} from "../assets/instances";
import { useSessionStorage } from "../hooks/useSessionStorage";

interface Item {
    name: string;
    image: string;
    price: number;
    description: string;
    quantity: number;
    maintenanceLevel: number;
    rating: number;
    type: string;
}

interface AddItemProps {
    onSave: (item: Item) => void;
}

function AddItem({ onSave }: AddItemProps) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [maintenanceLevel, setMaintenance] = useState("");
    const [rating, setRating] = useState("");
    const [type, setType] = useState("");

    function handleSave(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSave({
            name,
            price: parseInt(price),
            image,
            description,
            quantity: parseInt(quantity),
            maintenanceLevel: parseInt(maintenanceLevel),
            rating: parseInt(rating),
            type
        });
        setName("");
        setPrice("");
        setImage("");
        setDescription("");
        setQuantity("");
        setMaintenance("");
        setRating("");
        setType("");
    }

    return (
        <form onSubmit={handleSave}>
            <input
                placeholder="Name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <input
                placeholder="Price"
                type="text"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            />
            <input
                placeholder="Image URL"
                type="text"
                value={image}
                onChange={(event) => setImage(event.target.value)}
            />
            <input
                placeholder="Description"
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <br></br>
            <input
                placeholder="Quantity"
                type="text"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
            />
            <input
                placeholder="Maintenance Level"
                type="text"
                value={maintenanceLevel}
                onChange={(event) => setMaintenance(event.target.value)}
            />
            <input
                placeholder="Rating"
                type="text"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
            />
            Type:
            <select
                value={type}
                defaultValue={"default"}
                onChange={(event) => setType(event.target.value)}
            >
                <option value={"default"}>Choose a Type</option>
                <option value="Tree">Tree</option>
                <option value="Flower">Flower</option>
                <option value="Structure">Structure</option>
                <option value="Greenery">Greenery</option>
            </select>
            <br></br>
            <br></br>
            <Button type="submit" variant="success">
                Save
            </Button>
            <br></br>
            <br></br>
        </form>
    );
}

export function LandscapeItems(): JSX.Element {
    const [items, setItems] = useSessionStorage<Item[]>("all-items", [
        benchStructure,
        bushGreenery,
        cedarTree,
        chrysanthemumFlower,
        gazeboStructure,
        grassGreenery,
        irisFlower,
        larchTree,
        lilyPondStructure,
        oakTree,
        pansyFlower,
        sequoiaTree,
        simplePondStructure,
        spruceTree,
        stonePondStructure,
        sunflowerFlower,
        tulipFlower
    ]);
    const [newItemForm, setShowItemForm] = useState(false);

    function addItem(item: Item) {
        setItems([...items, item]);
        setShowItemForm(false);
    }

    function deleteItem(item: Item) {
        const updatedItems = items.filter((i) => i.name !== item.name);
        setItems(updatedItems);
    }

    function showItemForm() {
        setShowItemForm(!newItemForm);
    }

    function showAddButton() {
        if (
            sessionStorage.getItem("Role") === "Super" ||
            sessionStorage.getItem("Role") === null
        ) {
            return (
                <div>
                    <Button
                        onClick={showItemForm}
                        className="d-flex"
                        variant="success"
                    >
                        Add New Item
                    </Button>
                </div>
            );
        }
    }

    function showDeleteButton(anItem: Item) {
        if (
            sessionStorage.getItem("Role") === "Super" ||
            sessionStorage.getItem("Role") === null
        ) {
            return (
                <div>
                    <br></br>
                    <Button
                        variant="danger"
                        onClick={() => deleteItem(anItem)}
                        className="w-100 mt-auto"
                    >
                        Delete Item
                    </Button>
                </div>
            );
        }
    }

    return (
        <div>
            {showAddButton()}
            <br></br>
            {newItemForm && <AddItem onSave={addItem} />}
            <Row s={2} md={3} lg={4}>
                {items.map((anItem) => {
                    return (
                        <Col key={anItem.name}>
                            <Card key={anItem.name}>
                                <Card.Img
                                    variant="top"
                                    src={anItem.image}
                                    style={{ objectFit: "cover" }}
                                    height="300px"
                                />
                                <Card.Body className="flex-column">
                                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                                        <span className="fs-2">
                                            {anItem.name}
                                        </span>
                                        <span className="ms-2 text-muted">
                                            ${anItem.price}
                                        </span>
                                    </Card.Title>
                                    <span className="card-subtitle ms-2 text-muted">
                                        {anItem.description}
                                    </span>
                                    <br></br>
                                    <br></br>
                                    <span className="fs-8">
                                        •Quantity: {anItem.quantity}
                                    </span>
                                    <br></br>
                                    <span className="fs-8">
                                        •Maintenance Level:{" "}
                                        {anItem.maintenanceLevel} out of 5
                                    </span>
                                    <br></br>
                                    <span className="fs-8">
                                        •Rating: {anItem.rating} out of 5
                                    </span>
                                    <br></br>
                                    {showDeleteButton(anItem)}
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}

export function SortingButton(): JSX.Element {
    const [items, setItems] = useSessionStorage<Item[]>("all-items", [
        benchStructure,
        bushGreenery,
        cedarTree,
        chrysanthemumFlower,
        gazeboStructure,
        grassGreenery,
        irisFlower,
        larchTree,
        lilyPondStructure,
        oakTree,
        pansyFlower,
        sequoiaTree,
        simplePondStructure,
        spruceTree,
        stonePondStructure,
        sunflowerFlower,
        tulipFlower
    ]);
    setItems;
    const [option, setOption] = useState<string>("");
    function updateSorting(event: React.ChangeEvent<HTMLSelectElement>) {
        setOption(event.target.value);
    }
    let displayedItems: Item[] = [];
    let printed = Display(items);
    if (option === "Trees") {
        displayedItems = items.filter(
            (item: Item): boolean => item.type === "Tree"
        );
        printed = Display(displayedItems);
    } else if (option === "Flowers") {
        displayedItems = items.filter(
            (item: Item): boolean => item.type === "Flower"
        );
        printed = Display(displayedItems);
    } else if (option === "Greenery") {
        displayedItems = items.filter(
            (item: Item): boolean => item.type === "Greenery"
        );
        printed = Display(displayedItems);
    } else if (option === "Structures") {
        displayedItems = items.filter(
            (item: Item): boolean => item.type === "Structure"
        );
        printed = Display(displayedItems);
    } else if (option === "Price low to high") {
        displayedItems = items.sort(
            (item: Item, item2: Item) => item.price - item2.price
        );
        printed = Display(displayedItems);
    } else if (option === "Price high to low") {
        displayedItems = items.sort(
            (item: Item, item2: Item) => item2.price - item.price
        );
        printed = Display(displayedItems);
    } else if (option === "Alphabetically") {
        displayedItems = items.sort((item: Item, item2: Item) =>
            item2.name < item.name ? 1 : -1
        );
        printed = Display(displayedItems);
    }
    const [input, setInput] = useState<string>("");
    //let keywordPrint = Display([spruceTree]);
    function searchLists(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }
    if (option === "By keyword") {
        displayedItems = items.filter((item: Item) =>
            item.name.toLowerCase().includes(input.toLowerCase())
        );
        printed = Display(displayedItems);
    }
    function searchBar(): JSX.Element {
        return (
            <div>
                <Form.Label>Start typing:</Form.Label>
                <Form.Control
                    type="string"
                    value={input}
                    onChange={searchLists}
                ></Form.Control>
            </div>
        );
    }
    // FOR SEARCH BY TEXT INPUT
    return (
        <div>
            <Form.Label>Sort By: </Form.Label>
            <Form.Select value={option} onChange={updateSorting}>
                <option>Alphabetically</option>
                <option>Price low to high</option>
                <option>Price high to low</option>
                <option>Trees</option>
                <option>Flowers</option>
                <option>Greenery</option>
                <option>Structures</option>
                <option>By keyword</option>
            </Form.Select>
            <br></br>
            {option === "By keyword" ? searchBar() : null}
            <br></br>
            {printed}
        </div>
    );
}

// displayAll is sorted alphabetically by default
export function Display(itemList: Item[]): JSX.Element {
    return (
        <div className="flex-container">
            <Row s={1} md={2}>
                {itemList.map((anItem) => {
                    const [rating, setRating] = useState(0);
                    return (
                        <Col key={anItem.name}>
                            <Card key={anItem.name}>
                                <Card.Img
                                    variant="top"
                                    src={anItem.image}
                                    style={{ objectFit: "cover" }}
                                    height="300px"
                                />
                                <Card.Body>
                                    <Card.Title className="d-flex justify-content-between align-items-baseline">
                                        <span className="fs-4">
                                            {anItem.name}
                                        </span>
                                        <span className="ms-2 text-muted">
                                            ${anItem.price}
                                        </span>
                                    </Card.Title>
                                    <br></br>
                                    <span className="ms-1">
                                        •Maintenance Level:{" "}
                                        {anItem.maintenanceLevel} out of 5
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
                                                            index <= rating
                                                                ? "orange"
                                                                : "gray",
                                                        cursor: "pointer"
                                                    }}
                                                    onClick={() =>
                                                        setRating(index)
                                                    }
                                                >
                                                    &#9733;
                                                </span>
                                            );
                                        })}{" "}
                                    </span>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}
