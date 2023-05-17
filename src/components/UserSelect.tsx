import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormSelect, Row } from "react-bootstrap";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { User } from "../interfaces/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { CurrentCart } from "./UserList";
import { Item } from "../interfaces/Item";
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
    fountainStructure,
    archStructure,
    spruceTree,
    stonePondStructure,
    birdBathStructure,
    sunflowerFlower,
    tulipFlower,
    ivyGreenery,
    fernGreenery,
    caladiumGreenery,
    trellisStructure,
    lilyFlower,
    budhaStructure,
    blueHydrangeaFlower,
    stonePathStructure,
    forgetMeNotFlower,
    gardenGnomeStructure,
    bridgeStructure,
    hoopTrellisStructure,
    cherryBlossomTree
} from "../assets/Instances";

export function UserSelect(): JSX.Element {
    const [allUsers, setAllUsers] = useSessionStorage<User[]>("USERS", [
        { id: 1, name: "Sam", cart: [] },
        { id: 2, name: "John", cart: [] },
        { id: 3, name: "Sarah", cart: [] },
        { id: 4, name: "Bob", cart: [] }
    ]);

    const [currId, setCurrId] = useSessionStorage<number>("currID", 4);

    const [selectedUserId, setSelectedUserId] = useSessionStorage<number>(
        "selected",
        0
    );

    const [newUserName, setNewUserName] = useState<string>("");

    const userSelectedID = sessionStorage.getItem("CurrentUserID");

    useEffect(() => {
        if (userSelectedID) {
            setSelectedUserId(selectedUserId);
        }
    }, [selectedUserId]);

    // This is the Control
    function updateUserSelected(e: number) {
        setSelectedUserId(e);
        setCurrId(e);
        sessionStorage.setItem("CurrentUserID", JSON.stringify(e));
        location.reload();
    }

    function updateCurrId() {
        setCurrId(currId + 1);
    }

    const handleAddUser = () => {
        const newUser = {
            id: currId + 1,
            name: newUserName,
            cart: []
        };
        setAllUsers([...allUsers, newUser]);
        setNewUserName("");
        updateCurrId();
        location.reload();
    };

    const handleDeleteUser = (userId: number) => {
        setAllUsers(allUsers.filter((user) => user.id !== userId));
    };

    function labelSelected(id: number) {
        if (selectedUserId === id) {
            return (
                <span
                    style={{
                        marginLeft: "10px",
                        fontWeight: "bold"
                    }}
                >
                    (selected)
                </span>
            );
        }
    }

    const [items, setItems] = useSessionStorage<Item[]>("all-items", [
        irisFlower,
        bushGreenery,
        lilyPondStructure,
        tulipFlower,
        oakTree,
        budhaStructure,
        birdBathStructure,
        forgetMeNotFlower,
        pansyFlower,
        cherryBlossomTree,
        gardenGnomeStructure,
        cedarTree,
        bridgeStructure,
        chrysanthemumFlower,
        grassGreenery,
        gazeboStructure,
        trellisStructure,
        sequoiaTree,
        sunflowerFlower,
        simplePondStructure,
        larchTree,
        fountainStructure,
        hoopTrellisStructure,
        stonePathStructure,
        stonePondStructure,
        archStructure,
        spruceTree,
        lilyFlower,
        blueHydrangeaFlower,
        fernGreenery,
        benchStructure,
        ivyGreenery,
        caladiumGreenery
    ]);
    setItems;

    const [chosenItem, setChosenItem] = useState<number>(0);

    function updateChosenItem(event: React.ChangeEvent<HTMLSelectElement>) {
        setChosenItem(parseInt(event.target.value));
    }

    function showUsersWithItem(userId: number, itemId: number) {
        const itemIncluded = CurrentCart(userId).filter(
            (item: Item): boolean => item.id === itemId
        );
        if (itemIncluded.length !== 0) {
            return "✔";
        } else {
            return "𝘅";
        }
    }

    function showItemDropDown() {
        return (
            <Form.Select
                className="user-item-dropdown"
                value={chosenItem}
                onChange={updateChosenItem}
            >
                <option defaultValue="default">---Item---</option>
                {items.map((anItem) => {
                    return (
                        <option value={anItem.id} key={anItem.id}>
                            {anItem.name}
                        </option>
                    );
                })}
            </Form.Select>
        );
    }

    function superDisplay() {
        if (
            sessionStorage.getItem("Role") === "Super" &&
            window.location.href.endsWith("users")
        ) {
            return (
                <div>
                    <h1 style={{ display: "flex" }}>All Users</h1>

                    <Row className="user-row-title">
                        <Col
                            className="sort-label"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                fontWeight: "bold"
                            }}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Name
                        </Col>
                        <Col
                            className="sort-label"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                fontWeight: "bold"
                            }}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ID #
                        </Col>
                        <Col
                            className="sort-label"
                            style={{
                                alignItems: "center",
                                display: "flex",
                                fontWeight: "bold"
                            }}
                        >
                            Cart Contains {showItemDropDown()}
                        </Col>
                    </Row>

                    {allUsers.map((user) => {
                        return (
                            <Row className="user-row" key={user.id}>
                                <Col
                                    style={{
                                        alignItems: "center",
                                        display: "flex"
                                    }}
                                >
                                    <Button
                                        className="trash-can"
                                        onClick={() =>
                                            handleDeleteUser(user.id)
                                        }
                                    >
                                        <FontAwesomeIcon
                                            className="fas fa-trash-alt"
                                            icon={faTrashAlt}
                                            size="sm"
                                            style={{ color: "#6d4206" }}
                                        />
                                    </Button>
                                    {<>&nbsp;&nbsp;&nbsp;&nbsp;</>}
                                    {user.name}
                                    {<>&nbsp;</>}
                                    {labelSelected(user.id)}
                                </Col>
                                <Col
                                    style={{
                                        alignItems: "center",
                                        display: "flex"
                                    }}
                                >
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {user.id}
                                </Col>
                                <Col
                                    style={{
                                        alignItems: "center",
                                        display: "flex"
                                    }}
                                >
                                    {showUsersWithItem(user.id, chosenItem)}
                                </Col>
                            </Row>
                        );
                    })}
                    <div>
                        <br></br>
                        <input
                            className="user-save"
                            type="text"
                            placeholder="Enter New User Name"
                            value={newUserName}
                            onChange={(e) => setNewUserName(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    handleAddUser();
                                }
                            }}
                        />
                        <br></br>
                        <Button
                            className="save-button"
                            variant="success"
                            onClick={handleAddUser}
                        >
                            Save
                        </Button>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            );
        }
    }

    function userDisplay() {
        if (sessionStorage.getItem("Role") === "User") {
            return (
                <div>
                    <Form.Group controlId="The_Users">
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            User:{<>&nbsp;</>}
                            <FormSelect
                                value={selectedUserId ?? ""}
                                onChange={(event) =>
                                    updateUserSelected(
                                        parseInt(event.target.value)
                                    )
                                }
                            >
                                {allUsers.map((user) => {
                                    return (
                                        <option key={user.id} value={user.id}>
                                            {user.name}
                                        </option>
                                    );
                                })}
                            </FormSelect>
                        </div>
                    </Form.Group>
                </div>
            );
        }
    }

    function redirect() {
        if (
            (sessionStorage.getItem("Role") === "User" &&
                window.location.href.endsWith("users")) ||
            (sessionStorage.getItem("Role") === "Admin" &&
                window.location.href.endsWith("users"))
        ) {
            location.hash = "/";
            location.reload();
        }
        return <></>;
    }

    function redirect2() {
        if (
            sessionStorage.getItem("Role") === "User" &&
            window.location.href.endsWith("item")
        ) {
            location.hash = "/";
            location.reload();
        }
        return <></>;
    }

    return (
        <div>
            {redirect()}
            {redirect2()}
            {superDisplay()}
            {userDisplay()}
        </div>
    );
}
