import React from "react";
import BidDetails from "./BidDetails";

const BidList = props => {
    return(
        <ul>
            {props.bids.map(bid => (
                <li key={bid.id} >
                    <BidDetails {...bid} onDeleteClick={(id) => props.onBidDeleteClick(id)} />
                </li>
            ))}
        </ul>
    );
};

export default BidList;