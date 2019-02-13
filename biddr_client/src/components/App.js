import "../styles/App.css";
import React, { Component } from "react";
import AuctionShowPage from "./AuctionShowPage";
import AuctionIndexPage from "./AuctionIndexPage";
import { Session } from "../requests";
import NavBar from "./NavBar";
import WelcomePage from "./WelcomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignInPage from "./SignInPage";
import { User } from "../requests";
import AuthRoute from "./AuthRoute";
import AuctionNewPage from "./AuctionNewPage";
import NotFoundPage from "./NotFoundPage"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            loading: true
        }
        this.getCurrentUser = this.getCurrentUser.bind(this);
        this.destroySession = this.destroySession.bind(this);
    }

    destroySession() {
        this.setState({
            currentUser: null
        });
        Session.destroy();
    }

    getCurrentUser() {
        User
            .current().then(data => {
                const { current_user: currentUser } = data;
                if (currentUser) {
                    this.setState({currentUser});
                }
                this.setState({loading: false});
            });
    }

    componentDidMount() {
        this.getCurrentUser();
    }

    render() {
        const { currentUser, loading } = this.state;
        return (
            <BrowserRouter>
                <div>
                    <NavBar currentUser={currentUser} onSignOut={this.destroySession} />
                    {
                        loading ? (
                            <main>
                                <h1>Loading...</h1>
                            </main>
                        ) : (
                            <Switch>
                                <AuthRoute isAuth={currentUser} path="/auctions/new" component={AuctionNewPage} />
                                <Route path="/" exact component={WelcomePage} />
                                <Route path="/auctions" exact component={AuctionIndexPage} />
                                <Route path="/auctions/:id" exact component={AuctionShowPage} />
                                <Route pat="sign_in" render={routeProps => <SignInPage {...routeProps} onSignIn={this.getCurrentUser} />} />
                                <Route component={NotFoundPage} />
                            </Switch>
                        )
                    }
                </div>
            </BrowserRouter>
        );
    }
};

export default App;