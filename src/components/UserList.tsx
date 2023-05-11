import React, { useEffect, useState } from "react";
import { ItemView } from "./ItemView";
import { Item } from "../interfaces/Item";
import { useDrop } from "react-dnd";
import { Button, Row } from "react-bootstrap";
import { User } from "../interfaces/User";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

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

export function CurrentItemdesc(itemId: number): Item[] {
    const catalo = sessionStorage.getItem(`CART_${itemId}`);
    const cartToParse = catalo !== null && catalo !== undefined ? catalo : "";
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
                <Button
                    onClick={showItemForm}
                    className="d-flex"
                    variant="success"
                >
                    Edit User Item
                </Button>
            </div>
        );
    }

    function showEditForm(anItem: Item) {
        if (newItemForm) {
            return (
                <form
                    className="edit-item"
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
                    <div
                        style={{
                            backgroundColor: "#EFE8AB",
                            color: "#6d4206",
                            fontSize: 40
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
                    <Row s={1} md={2}>
                        {userItems.map((anItem) => {
                            return (
                                <>
                                    <div key={anItem.id}>
                                        <ItemView
                                            anItem={anItem}
                                            items={items}
                                            setItems={setItems}
                                        ></ItemView>
                                        <br></br>
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
                                        {showEditButton()}
                                        {showEditForm(anItem)}
                                    </div>
                                </>
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
            console.log(allUsers);
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