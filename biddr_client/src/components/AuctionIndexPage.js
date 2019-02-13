import React from "react";
import { Auction } from "../requests";
import { Link } from "react-router-dom";

class AuctionIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auctions: null
        };
    }

    componentDidMount() {
        Auction.all().then(auctions => {
            this.setState({
                auctions: auctions
            });
        });
    }

    render() {
        if (!this.state.auctions) {
            return(
                <main>
                    <h1>Loading...</h1>
                </main>
            );
        }

        return(
            <main>
                <h1>Auctions</h1>
                <ul style={{
                    margin: "2px",
                    listStyle: "none"
                }} >

                    {this.state.auctions.map(auction => (
                        <li key={auction.id} >
                            <Link to={`/auctions/${auction.id}`}>{auction.title} </Link> {" "} <br/>

                        </li>
                    ))}

                </ul>
            </main>
        );
    }
};

export default AuctionIndexPage;