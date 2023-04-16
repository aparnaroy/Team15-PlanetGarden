import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

interface Item {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

interface ItemProps {
    name: string;
    price: number;
    imageUrl: string;
}

function Item({ name, price, imageUrl }: ItemProps) {
    return (
        <div>
            <img src={imageUrl} alt={imageUrl} />
            <h2>{name}</h2>
            <p>${price}</p>
        </div>
    );
}

interface NewItemProps {
    onSave: (item: Item) => void;
}

function NewItem({ onSave }: NewItemProps) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImage] = useState("");

    function handleSave(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSave({ id: Date.now(), name, price: parseInt(price), imageUrl });
        setName("");
        setPrice("");
        setImage("");
    }

    return (
        <form onSubmit={handleSave}>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <input
                type="text"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            />
            <input
                type="text"
                value={imageUrl}
                onChange={(event) => setImage(event.target.value)}
            />
            <Button type="submit">Save</Button>
        </form>
    );
}

export function LandscapeItems(): JSX.Element {
    const [items, setItems] = useState<Item[]>([
        {
            id: 1,
            name: "Item 1",
            price: 10,
            imageUrl:
                "https://easydrawingguides.com/wp-content/uploads/2017/02/How-to-draw-a-cartoon-tree-20.png"
        },
        {
            id: 2,
            name: "Item 2",
            price: 20,
            imageUrl: "https://example.com/image2.jpg"
        }
    ]);
    const [newItemForm, setShowItemForm] = useState(false);

    function addItem(item: Item) {
        setItems([...items, item]);
        setShowItemForm(false);
    }

    function showItemForm() {
        setShowItemForm(!newItemForm);
    }

    return (
        <div>
            <Button onClick={showItemForm}>Add New Item</Button>
            {newItemForm && <NewItem onSave={addItem} />}
            {items.map((item) => (
                <Card key={item.id}>
                    <Card.Img
                        variant="top"
                        src={item.imageUrl}
                        height="200px"
                        style={{ objectFit: "cover" }}
                    />
                    <Card.Body className="d-flex flex-column">
                        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                            <span className="fs-2">{item.name}</span>
                            <span className="ms-2 text-muted">
                                ${item.price}
                            </span>
                        </Card.Title>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

//export default LandscapeItems;
