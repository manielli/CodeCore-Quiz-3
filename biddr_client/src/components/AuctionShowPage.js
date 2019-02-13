import react, { Component } from "react";
import AuctionDetails from "./AuctionDetails";
import BidList from "./BidList";

import { Auction } from "../requests";

class AuctionShowPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            auction: null
        }
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
                
                <h2>Bids</h2>
                <BidList bids={this.state.auction.bids} />
            </main>
        );
    }
};

export default AuctionShowPage;