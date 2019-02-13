import React, { Component } from "react";
import NewAuctionForm from "./NewAuctionForm";
import { Auction } from "../requests";

class AuctionNewPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            errors: []
        };

        this.createAuction = this.createAuction.bind(this);
    }

    createAuction(params) {
        Auction
            .create(params)
            .then(data => {
                if (data.errors) {
                    this.setState({errors: data.errors});
                } else {
                    this.props.history.push(`/auctions/${data.id}`);
                }
            });
    }
    render() {
        return(
            <main>
                <h1>New Auction</h1>
                <NewAuctionForm onSubmit={this.createAuction} errors={this.state.errors} /> 
            </main>
        );
    }

}

export default AuctionNewPage;