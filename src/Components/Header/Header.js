import React, { useContext, useEffect, useState } from "react";
import {
    Navbar,
    Container,
    Nav,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { RingContext } from "../../App";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";
import useNumber from "../../Hooks/useNumber";
import "./header.css";
const Header = () => {
    // const { user, googleSignOut } = useFirebase();
    const { user, googleSignOut, btn } = useAuth();

    // useEffect(() => {}, [handleBtn]);
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Link to="/home" className="navbar-link">
                                Home
                            </Link>
                            <Link to="/service" className="navbar-link">
                                Services
                            </Link>

                            <Link to="/about" className="navbar-link">
                                About Us
                            </Link>

                            <Link to="/cart" className="navbar-link">
                                <i className="fas fa-shopping-cart the-cart">
                                    {btn}
                                </i>
                            </Link>
                        </Nav>
                        <Form className="d-flex">
                            <img
                                src={user.photoURL}
                                className="sign-in-img img-fluid"
                            ></img>
                            {user.displayName ? (
                                <div>
                                    <Button
                                        variant="outline-success sign-btn text-nowrap"
                                        onClick={googleSignOut}
                                    >
                                        Sign Out
                                    </Button>
                                </div>
                            ) : (
                                <div>
                                    <Button variant="outline-success sign-btn text-nowrap">
                                        <Link to="/signin">Sign In</Link>
                                    </Button>
                                </div>
                            )}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
