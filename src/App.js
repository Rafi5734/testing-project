import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import SignIn from "./Components/SignIn/SignIn";
import Register from "./Components/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Cart from "./Components/Cart/Cart";
import Desktop from "./Components/Desktop/Desktop";
import Laptop from "./Components/Laptop/Laptop";
import Monitor from "./Components/Monitor/Monitor";
import Details from "./Components/Details/Details";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/service">
                            <Services></Services>
                        </Route>
                        <Route path="/about">
                            <About></About>
                        </Route>
                        <Route path="/signin">
                            <SignIn></SignIn>
                        </Route>
                        <Route path="/register">
                            <Register></Register>
                        </Route>
                        <PrivateRoute path="/cart">
                            <Cart></Cart>
                        </PrivateRoute>
                        <Route path="/desktop">
                            <Desktop></Desktop>
                        </Route>
                        <Route path="/laptop">
                            <Laptop></Laptop>
                        </Route>
                        <Route path="/monitor">
                            <Monitor></Monitor>
                        </Route>
                        <Route path="/details/:detailsId">
                            <Details></Details>
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
