import React from "react";

const AuctionDetails = props => {
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>By {props.seller.full_name}</p>
            <p>
                <small>Reserve Price {props.reserve_price.toLocaleString()}</small> •
                <small>Auction was created {props.created_at.toLocaleString()}</small>
            </p>
        </div>
    );
};

export default AuctionDetails;