import React from "react";

const BidDetails = props => {
    return(
        <div style={{
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
            margin: "5px"
        }} >
            <p>{props.bidding_price}</p>
            <p>
                <small> By {props.bidder.full_name}</small> <br/>
                <small>
                    <strong>Created at: </strong>{props.created_at.toLocaleString()}
                </small>
            </p>
        </div>
    );
};

export default BidDetails;