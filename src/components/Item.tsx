import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface Item {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface ItemProps {
    name: string;
    price: number;
    image: string;
}

function Item({ name, price, image }: ItemProps): JSX.Element {
    return (
        <div>
            <img src={image} alt={image} />
            <h2>{name}</h2>
            <p>${price}</p>
        </div>
    );
}

interface NewItemProps {
    onSave: (item: Item) => void;
}

function NewItem({ onSave }: NewItemProps): JSX.Element {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSave({ id: Date.now(), image, name, price: parseInt(price) });
        setName("");
        setPrice("");
        setImage("");
    }

    return (
        <form onSubmit={handleSubmit}>
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
                value={image}
                onChange={(event) => setImage(event.target.value)}
            />
            <Button type="submit">Save</Button>
        </form>
    );
}

function Items(): JSX.Element {
    const [items, setItems] = useState<Item[]>([
        {
            id: 1,
            name: "Item 1",
            price: 10,
            image: "https://example.com/image1.jpg"
        },
        {
            id: 2,
            name: "Item 2",
            price: 20,
            image: "https://example.com/image2.jpg"
        }
    ]);
    const [showNewItemForm, setShowNewItemForm] = useState(false);

    function handleAddItem(item: Item) {
        setItems([...items, item]);
        setShowNewItemForm(false);
    }

    function toggleNewItemForm() {
        setShowNewItemForm(!showNewItemForm);
    }

    return (
        <div>
            <Button onClick={toggleNewItemForm}>Add New Item</Button>
            {showNewItemForm && <NewItem onSave={handleAddItem} />}
            {items.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    );
}

export default Items;
