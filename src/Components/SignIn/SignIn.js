import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";
const SignIn = () => {
    const { user, signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || "/home";
    // console.log(location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle().then(() => {
            history.push(redirect_uri);
        });
    };
    return (
        <Container>
            <h1> SignIn.</h1>
            <Form onSubmit="">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>
                New to this application?{" "}
                <Link to="/register">Create a new account.</Link>
            </p>
            <div>--------------or----------------</div>
            <button
                type="button"
                class="btn btn-outline-success"
                onClick={handleGoogleLogin}
            >
                Google Sign In
            </button>
        </Container>
    );
};

export default SignIn;
