import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
    const { currentUser, onSignOut = () => {} } = props;

    const handleSignOutClick = event => {
        event.preventDefault();

        onSignOut();
    }

    return (
        <nav>
            <NavLink exact to="/" >Home</NavLink>
            <NavLink exact to="/auctions">Auctions</NavLink>
            { currentUser ? (
                <NavLink exact to="/auctions/new" >Create an Auction</NavLink>
            ) : null
            }
            {
                currentUser ? (
                    <>
                        <span>Hi, {currentUser.full_name}</span>
                        <a href="#not-used" onClick={handleSignOutClick} >Sign Out</a>
                    </>
                ) : (
                    <NavLink exact to="/sign_in" >Sign In</NavLink>
                )
            }
        </nav>
    )
}

export default NavBar;