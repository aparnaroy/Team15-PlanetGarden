/* eslint-disable no-extra-parens */
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
    const [sortBy, setSortBy] = useState("price");
    const [sortBy2, setSortBy2] = useState("boughtWith");
    const [newBought, setNewBought] = useState("");

    useEffect(() => {
        const storageCheckout: Item[] = CurrentCart(selectedUser.id);
        let sortedItems: Item[] = [];

        if (sortBy === "price") {
            sortedItems = storageCheckout.sort((a, b) => b.price - a.price);
        } else if (sortBy2 === "boughtWith") {
            const filteredItems = storageCheckout.filter((item) =>
                item.boughtWith.includes("Flowers")
            );
            sortedItems = filteredItems.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
        } else {
            sortedItems = storageCheckout.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
        }

        setUserItems(sortedItems);
    }, [selectedUser, sortBy, sortBy2]);

    // useEffect(() => {
    //     const storageCheckout: Item[] = CurrentCart(selectedUser.id);
    //     let sortedItems: Item[] = [];

    //     if (sortBy2 === "boughtWith") {
    //         sortedItems = storageCheckout.sort((a, b) => {
    //             const aHasFlowers = a.boughtWith.includes("Flowers");
    //             const bHasFlowers = b.boughtWith.includes("Flowers");

    //             if (aHasFlowers && !bHasFlowers) {
    //                 return -1;
    //             } else if (!aHasFlowers && bHasFlowers) {
    //                 return 1;
    //             } else {
    //                 return 0;
    //             }
    //         });
    //     } else {
    //         sortedItems = storageCheckout.sort((a, b) =>
    //             a.name.localeCompare(b.name)
    //         );
    //     }

    //     setUserItems(sortedItems);
    // }, [selectedUser, sortBy]);

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        const value2 = event.target.value;
        setSortBy(value);
        setSortBy2(value2);
        const storageCheckout: Item[] = CurrentCart(selectedUser.id);
        let sortedItems: Item[] = [];
        if (value === "Grass") {
            sortedItems = storageCheckout.sort((a, b) => {
                const nameA = a.name;
                const nameB = b.name;
                if (
                    nameA.includes("Grass") ||
                    (nameA.includes("grass") && !nameB.includes("Grass")) ||
                    !nameB.includes("grass")
                ) {
                    return -1;
                }
                if (
                    nameB.includes("Grass") ||
                    (nameB.includes("grass") && !nameA.includes("Grass"))
                ) {
                    return 1;
                }
                return 0;
            });
        } else {
            sortedItems = storageCheckout.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
        }
        setUserItems(sortedItems);
    };

    const [allUsers, setAllUsers] = useSessionStorage<User[]>("USERS", [
        { id: 1, name: "Sam", cart: [] },
        { id: 2, name: "John", cart: [] },
        { id: 3, name: "Sarah", cart: [] },
        { id: 4, name: "Bob", cart: [] }
    ]);
    setAllUsers;

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
            const index = userItems.findIndex((item) => item.id === id);
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
            const itemsToUpdate = userItems.filter((item) => item.id === id);
            if (itemsToUpdate.length > 0) {
                const newCart = [...userItems];
                itemsToUpdate.forEach((itemToUpdate) => {
                    const indexToUpdate = newCart.findIndex(
                        (item) => item.id === itemToUpdate.id
                    );
                    const updatedItem = {
                        ...itemToUpdate,
                        boughtWith: [...boughtWith, newWord]
                    };
                    newCart[indexToUpdate] = updatedItem;
                });
                sessionStorage.setItem(
                    `CART_${selectedUser.id}`,
                    JSON.stringify(newCart)
                );
                const newUser = { ...selectedUser, cart: newCart };
                sessionStorage.setItem(
                    "CurrentUserID",
                    JSON.stringify(newUser)
                );
                const userIndex = allUsers.findIndex(
                    (user) => newUser.id === user.id
                );
                if (userIndex > -1) {
                    allUsers.splice(userIndex, 1, newUser);
                    sessionStorage.setItem("USERS", JSON.stringify(allUsers));
                }
                setNewBought("");
                return newCart;
            }
            return userItems;
        });
    }

    function handleChangeName(id: number, name: string, price: number) {
        setUserItems((userItems) => {
            const itemsToUpdate = userItems.filter((item) => item.id === id);
            if (itemsToUpdate.length > 0) {
                const newCart = [...userItems];
                itemsToUpdate.forEach((itemToUpdate) => {
                    const indexToUpdate = newCart.findIndex(
                        (item) => item.id === itemToUpdate.id
                    );
                    const updatedItem = { ...itemToUpdate, name, price };
                    newCart[indexToUpdate] = updatedItem;
                });
                sessionStorage.setItem(
                    `CART_${selectedUser.id}`,
                    JSON.stringify(newCart)
                );
                const newUser = { ...selectedUser, cart: newCart };
                sessionStorage.setItem(
                    "CurrentUserID",
                    JSON.stringify(newUser)
                );
                const userIndex = allUsers.findIndex(
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

    // function handleChangePrice(id: number, price: number) {
    //     setUserItems((userItems) => {
    //         const itemsToUpdate = userItems.filter((item) => item.id === id);
    //         if (itemsToUpdate.length > 0) {
    //             const newCart = [...userItems];
    //             itemsToUpdate.forEach((itemToUpdate) => {
    //                 const indexToUpdate = newCart.findIndex(
    //                     (item) => item.id === itemToUpdate.id
    //                 );
    //                 if (itemToUpdate.price !== price) {
    //                     const updatedItem = { ...itemToUpdate, price };
    //                     newCart[indexToUpdate] = updatedItem;
    //                 }
    //             });
    //             sessionStorage.setItem(
    //                 `CART_${selectedUser.id}`,
    //                 JSON.stringify(newCart)
    //             );
    //             const newUser = { ...selectedUser, cart: newCart };
    //             sessionStorage.setItem(
    //                 "CurrentUserID",
    //                 JSON.stringify(newUser)
    //             );
    //             const userIndex = allUsers.findIndex(
    //                 (user) => newUser.id === user.id
    //             );
    //             if (userIndex > -1) {
    //                 allUsers.splice(userIndex, 1, newUser);
    //                 sessionStorage.setItem("USERS", JSON.stringify(allUsers));
    //             }
    //             return newCart;
    //         }
    //         return userItems;
    //     });
    // }
    function addToCart(itemID: number) {
        const addedItem = items.find((i) => itemID === i.id);
        if (addedItem) {
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
                        handleChangeName(anItem.id, newName, newPrice);
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
                    <Button type="submit" variant="success">
                        Update
                    </Button>
                </form>
            );
        }
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
                    <div>
                        <select
                            className="user-sort-dropdown"
                            value={sortBy}
                            onChange={handleSortChange}
                        >
                            <option value="default">
                                ---Sort or Filter Items in Cart---
                            </option>
                            <option value="price">Price (high to low)</option>
                            <option value="name">Name (A-Z)</option>
                            <option value="boughtWith">
                                Frequently Bought with Flowers
                            </option>
                        </select>
                    </div>
                    <div>
                        {sortBy !== "boughtWith" && (
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
                        )}
                    </div>
                    <Row sm={1} md={2}>
                        {userItems.map((anItem) => {
                            return (
                                <div key={anItem.id}>
                                    <ItemView
                                        anItem={anItem}
                                        items={items}
                                        setItems={setItems}
                                    />
                                    {sortBy !== "boughtWith" && (
                                        <div className="button-container">
                                            {showEditButton()}
                                            <br />
                                            <Button
                                                className="trash-can"
                                                onClick={() =>
                                                    handleRemoveItem(anItem.id)
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    className="fas fa-trash-alt"
                                                    icon={faTrashAlt}
                                                    size="1x"
                                                    style={{ color: "#6d4206" }}
                                                />
                                            </Button>
                                        </div>
                                    )}
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            handleChangeBoughtWith(
                                                anItem.id,
                                                [],
                                                newBought
                                            );
                                        }}
                                    >
                                        {sortBy !== "boughtWith" && (
                                            <>
                                                <label htmlFor="newBoughtInput">
                                                    Change frequently bought
                                                    with:
                                                </label>
                                                <input
                                                    id="newBoughtInput"
                                                    type="text"
                                                    value={newBought}
                                                    onChange={(e) =>
                                                        setNewBought(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <button type="submit">
                                                    Add
                                                </button>
                                            </>
                                        )}
                                    </form>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            handleChangeName(
                                                anItem.id,
                                                newName,
                                                newPrice
                                            );
                                        }}
                                    >
                                        {/* Form content here */}
                                    </form>
                                    {sortBy !== "boughtWith"
                                        ? showEditForm(anItem)
                                        : null}
                                </div>
                            );
                        })}
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

export function RemoveFromCart(
    itemID: number,
    { items, setItems, selectedUser }: UserViewProps
) {
    const [userItems, setUserItems] = useState<Item[]>(
        CurrentCart(selectedUser.id)
    );

    const [allUsers, setAllUsers] = useSessionStorage<User[]>("USERS", [
        { id: 1, name: "Sam", cart: [] },
        { id: 2, name: "John", cart: [] },
        { id: 3, name: "Sarah", cart: [] },
        { id: 4, name: "Bob", cart: [] }
    ]);
    setAllUsers;
    setItems;
    userItems;

    const removedItem = items.find((i) => itemID === i.id);
    if (removedItem) {
        setUserItems((userItems) => {
            const newCart: Item[] = [
                ...userItems.filter((anItem: Item) => ({
                    ...anItem
                }))
            ];
            sessionStorage.setItem(
                `CART_${selectedUser.id}`,
                JSON.stringify(newCart)
            );
            const newUser = {
                ...selectedUser,
                cart: newCart
            };
            sessionStorage.setItem("CurrentUserID", JSON.stringify(newUser));
            const userIndex: number = allUsers.findIndex(
                (user) => newUser.id === user.id
            );
            allUsers.splice(userIndex, 1, newUser);
            // console.log(allUsers);
            sessionStorage.setItem("USERS", JSON.stringify(allUsers));
            return newCart;
        });
    }
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
