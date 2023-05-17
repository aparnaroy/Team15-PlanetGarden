import React, { useEffect, useState } from "react";
import { ItemView } from "./ItemView";
import { Item } from "../interfaces/Item";
import { useDrop } from "react-dnd";
import { Button, Row } from "react-bootstrap";
import { User } from "../interfaces/User";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export interface UserViewProps {
    items: Item[];
    setItems: (newItems: Item[]) => void;
    selectedUser: User;
}

export function CurrentCart(userId: number): Item[] {
    const cart = sessionStorage.getItem(`CART_${userId}`);
    const cartToParse = cart !== null && cart !== undefined ? cart : "";
    return cartToParse ? JSON.parse(cartToParse) : [];
}

export function DisplayUserList({
    items,
    setItems,
    selectedUser
}: UserViewProps): JSX.Element {
    const [userItems, setUserItems] = useState<Item[]>(
        CurrentCart(selectedUser.id)
    );
    const [newName, setNewName] = useState("");
    const [newPrice, setNewPrice] = useState(0);
    const [newBought, setNewBought] = useState("");

    const [allUsers, setAllUsers] = useSessionStorage<User[]>("USERS", [
        { id: 1, name: "Sam", cart: [] },
        { id: 2, name: "John", cart: [] },
        { id: 3, name: "Sarah", cart: [] },
        { id: 4, name: "Bob", cart: [] }
    ]);
    setAllUsers;

    const [filter, setFilter] = useState(""); // State variable for filter selection

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "item",
        drop: (anItem: Item) => addToCart(anItem.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }));

    function handleRemoveAllItems() {
        setUserItems([]);
        sessionStorage.setItem(`CART_${selectedUser.id}`, JSON.stringify([]));
        const newUser = { ...selectedUser, cart: [] };
        sessionStorage.setItem("CurrentUserID", JSON.stringify(newUser));
        const userIndex: number = allUsers.findIndex(
            (user) => newUser.id === user.id
        );
        if (userIndex > -1) {
            allUsers.splice(userIndex, 1, newUser);
            sessionStorage.setItem("USERS", JSON.stringify(allUsers));
        }
    }

    function handleRemoveItem(id: number) {
        setUserItems((userItems) => {
            const index = userItems.findIndex((item) => item.cartId === id);
            if (index > -1) {
                const newCart = [...userItems];
                newCart.splice(index, 1);
                sessionStorage.setItem(
                    `CART_${selectedUser.id}`,
                    JSON.stringify(newCart)
                );
                const newUser = {
                    ...selectedUser,
                    cart: newCart
                };
                sessionStorage.setItem(
                    "CurrentUserID",
                    JSON.stringify(newUser)
                );
                const userIndex: number = allUsers.findIndex(
                    (user) => newUser.id === user.id
                );
                if (userIndex > -1) {
                    allUsers.splice(userIndex, 1, newUser);
                    sessionStorage.setItem("USERS", JSON.stringify(allUsers));
                }
                return newCart;
            }
            return userItems;
        });
    }

    useEffect(() => {
        const storageCheckout: Item[] = CurrentCart(selectedUser.id);
        setUserItems(storageCheckout);
    }, [selectedUser]);

    function handleChangeBoughtWith(
        id: number,
        boughtWith: string[],
        newWord: string
    ) {
        setUserItems((userItems) => {
            const updatedCart = [...userItems];
            let updated = false;

            for (let i = 0; i < updatedCart.length; i++) {
                const item = updatedCart[i];
                if (item.cartId === id && !updated) {
                    updated = true;
                    const updatedItem = {
                        ...item,
                        boughtWith: [...boughtWith, newWord]
                    };
                    updatedCart[i] = updatedItem;
                }
            }

            sessionStorage.setItem(
                `CART_${selectedUser.id}`,
                JSON.stringify(updatedCart)
            );

            const newUser = { ...selectedUser, cart: updatedCart };
            sessionStorage.setItem("CurrentUserID", JSON.stringify(newUser));

            const userIndex = allUsers.findIndex(
                (user) => newUser.id === user.id
            );
            if (userIndex > -1) {
                const updatedUsers = [...allUsers];
                updatedUsers[userIndex] = newUser;
                sessionStorage.setItem("USERS", JSON.stringify(updatedUsers));
            }

            return updatedCart;
        });
    }

    function handleEditUserItem(id: number, name: string, price: number) {
        setUserItems((userItems) => {
            let updated = false;

            const updatedCart = userItems.map((item) => {
                if (!updated && item.cartId === id) {
                    updated = true;
                    return { ...item, name, price };
                }
                return item;
            });

            sessionStorage.setItem(
                `CART_${selectedUser.id}`,
                JSON.stringify(updatedCart)
            );

            const newUser = { ...selectedUser, cart: updatedCart };
            sessionStorage.setItem("CurrentUserID", JSON.stringify(newUser));

            const userIndex = allUsers.findIndex(
                (user) => newUser.id === user.id
            );
            if (userIndex > -1) {
                const updatedUsers = [...allUsers];
                updatedUsers[userIndex] = newUser;
                sessionStorage.setItem("USERS", JSON.stringify(updatedUsers));
            }

            return updatedCart;
        });
    }

    function addToCart(itemID: number) {
        const addedItem = items.find((i) => itemID === i.id);
        if (addedItem) {
            addedItem.cartId = Date.now();

            setUserItems((userItems) => {
                const newCart: Item[] = [
                    ...userItems.map((anItem: Item) => ({
                        ...anItem
                    })),
                    addedItem
                ];
                sessionStorage.setItem(
                    `CART_${selectedUser.id}`,
                    JSON.stringify(newCart)
                );
                const newUser = {
                    ...selectedUser,
                    cart: newCart
                };
                sessionStorage.setItem(
                    "CurrentUserID",
                    JSON.stringify(newUser)
                );
                const userIndex: number = allUsers.findIndex(
                    (user) => newUser.id === user.id
                );
                allUsers.splice(userIndex, 1, newUser);
                console.log(allUsers);
                sessionStorage.setItem("USERS", JSON.stringify(allUsers));
                return newCart;
            });
        }
        console.log(userItems);
    }

    const [total, setTotal] = useState(0);
    useEffect(() => {
        let sum = 0;
        userItems.forEach((item) => {
            sum += item.price;
        });
        setTotal(sum);
    }, [userItems]);

    const [newItemForm, setShowItemForm] = useState(false);

    function showItemForm() {
        setShowItemForm(!newItemForm);
    }

    function showEditButton() {
        return (
            <div>
                <Button onClick={showItemForm} className="pencil-button">
                    <FontAwesomeIcon
                        icon={faPencil}
                        size="1x"
                        style={{ color: "#6d4206" }}
                    />
                </Button>
            </div>
        );
    }

    function showEditForm(anItem: Item) {
        if (newItemForm) {
            return (
                <form
                    className="edit-item-user"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleEditUserItem(anItem.cartId, newName, newPrice);
                        handleChangeBoughtWith(anItem.cartId, [], newBought);
                    }}
                >
                    <input
                        type="text"
                        placeholder="Name"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={newPrice}
                        onChange={(e) =>
                            setNewPrice(parseFloat(e.target.value))
                        }
                    />
                    <input
                        placeholder="Frequently Bought With"
                        type="text"
                        value={newBought}
                        onChange={(e) => setNewBought(e.target.value)}
                    />
                    <Button type="submit" variant="success">
                        Update
                    </Button>
                </form>
            );
        }
    }

    function displayCartItems() {
        let filteredItems = userItems;

        if (filter === "greaterThan100") {
            filteredItems = filteredItems.filter((item) => item.price > 100);
        } else if (filter === "lessThan100") {
            filteredItems = filteredItems.filter((item) => item.price < 100);
        } else if (filter === "boughtWithFlowers") {
            filteredItems = filteredItems.filter((item) =>
                item.boughtWith.includes("Flowers")
            );
        }
        return (
            <>
                {filteredItems.map((anItem) => {
                    return (
                        <div key={anItem.cartId}>
                            <ItemView
                                anItem={anItem}
                                items={items}
                                setItems={setItems}
                            />

                            <div className="button-container">
                                {showEditButton()}
                                <br />
                                <Button
                                    className="trash-can"
                                    onClick={() => {
                                        handleRemoveItem(anItem.cartId);
                                    }}
                                >
                                    <FontAwesomeIcon
                                        className="fas fa-trash-alt"
                                        icon={faTrashAlt}
                                        size="1x"
                                        style={{
                                            color: "#6d4206"
                                        }}
                                    />
                                </Button>
                            </div>
                            {showEditForm(anItem)}
                        </div>
                    );
                })}
            </>
        );
    }

    if (sessionStorage.getItem("Role") === "User") {
        return (
            <>
                <div
                    ref={drop}
                    role="Cart"
                    style={{
                        backgroundColor: isOver ? "#85cacd" : "#6aa1a3",
                        width: 648,
                        height: 700,
                        paddingTop: 38,
                        padding: 30,
                        overflow: "auto"
                    }}
                >
                    {" "}
                    <div
                        style={{
                            backgroundColor: "#EFE8AB",
                            color: "#6d4206",
                            fontSize: 34
                        }}
                    >
                        Total: ${total}
                    </div>
                    <br></br>
                    <div>
                        <Button
                            className="remove-button"
                            onClick={handleRemoveAllItems}
                        >
                            Empty Cart{" "}
                            <FontAwesomeIcon
                                className="fas fa-trash-alt"
                                icon={faTrashAlt}
                                size="sm"
                                style={{ color: "#6d4206" }}
                            />
                        </Button>
                    </div>
                    <div>
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="greaterThan100">
                                Price greater than 100
                            </option>
                            <option value="lessThan100">
                                Price less than 100
                            </option>
                            <option value="boughtWithFlowers">
                                Bought with Flowers
                            </option>
                        </select>
                    </div>
                    <Row sm={1} md={2}>
                        {displayCartItems()}
                    </Row>
                </div>
            </>
        );
    } else if (sessionStorage.getItem("Role")) {
        return (
            <div
                style={{
                    backgroundColor: "#6aa1a3",
                    width: 648,
                    height: 700,
                    paddingTop: 20,
                    padding: 30,
                    overflow: "auto"
                }}
            ></div>
        );
    }
    return <div></div>;
}

export function deleteFromAllUserCarts(itemID: number, allUsers: User[]) {
    const updatedUsers = allUsers.map((user) => ({
        ...user,
        cart: user.cart.filter((i) => i.id !== itemID)
    }));
    updatedUsers.map((user) => {
        sessionStorage.setItem(`CART_${user.id}`, JSON.stringify(user.cart));
    });

    sessionStorage.setItem("USERS", JSON.stringify(updatedUsers));
}
