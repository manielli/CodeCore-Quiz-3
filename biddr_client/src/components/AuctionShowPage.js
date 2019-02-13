import React, { Component } from "react";
import AuctionDetails from "./AuctionDetails";
import BidList from "./BidList";

import { Auction } from "../requests";

class AuctionShowPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            auction: null
        }

        this.deleteAuction = this.deleteAuction.bind(this);
        this.deleteBid = this.deleteBid.bind(this);

    }
    
    componentDidMount() {
        const id = this.props.match.params.id;

        Auction.one(id).then(auction => {
            this.setState({
                auction: auction,
                loading: false
            })
        })
    }

    deleteAuction() {
        this.setState({auction: null});
    }

    deleteBid(id) {
        this.setState((state) => ({
            auction: {
                ...state.auction,
                bids: state.auction.bids.filter(b => b.id !== id)
            }
        }));
    }

    render() {

        if (this.state.loading) {
            return (
                <main>
                    <h2>Loading...</h2>
                </main>
            );
        }

        if (!this.state.auction) {
            return (
                <h2>Auction doesn't exist!</h2>
            );
        }

        return(
            <main>
                <AuctionDetails {...this.state.auction} />
                <button onClick={this.deleteAuction} >Delete</button>
                
                <h2>Previsou Bids:</h2>
                <BidList bids={this.state.auction.bids} onBidDeleteClick={this.deleteBid} />
            </main>
        );
    }
};

export default AuctionShowPage;