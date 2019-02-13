import React, { Component } from "react";
import { Session } from "../requests";

class SignInPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: []
        };

        this.createSession = this.createSession.bind(this);
    }

    createSession(event) {
        event.preventDefault();

        const { currentTarget } = event;
        const formData = new FormData(currentTarget);

        Session.create({
            email: formData.get("email"),
            password: formData.get("password")
        }).then( data => {
            const { onSignIn = () => {} } = this.props;

            if (typeof data.id === "number") {
                this.props.history.push("/");

                onSignIn();
            } else {
                this.setState({errors: [{message: "Wrong email or password"}]})
            }
        });
    }

    render() {
        const { errors } = this.state;

        return(
            <main>
                <h1>Sign In</h1>
                <form onSubmit={this.createSession} >
                    {
                        errors.length > 0 ? (
                            <div className="FormErrors" >{
                                errors.map(e => e.message).join(", ")}
                            </div>
                        ) : null
                    }
                    <div>
                        <label htmlFor="email">Email</label> <br/>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label> <br/>
                        <input type="password" name="password" id="password" />
                    </div> 
                    <br/>
                    <input type="submit" value="Sign In" />
                </form>
            </main>
        )
    }

}

export default SignInPage;