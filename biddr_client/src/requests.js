const BASE_URL = `http://localhost:3000/api/v1`;

export const Auction = {
    all() {
        return fetch(`${BASE_URL}/auctions`, {credentials: "include"}).then(res => res.json());
    },
    one(id) {
        return fetch(`${BASE_URL}/auctions/${id}`, {credentials: "include"}).then(res => res.son());
    },
    create(params) {
        return fetch(
            `${BASE_URL}/auctions`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
            }
        ).then(res => res.json());
    }
};

export const Bid = {
    create(params) {
        return fetch(
            `${BASE_URL}/auctions/${auction_id}/bids`, { 
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
            }
        ).then(res => res.json());
    },
    destroy(params) {
        return fetch(
            `${BASE_URL}/auctions/${auction_id}/bids/${id}`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
            }
        ).then(res => res.json());
    }
};

export const Session = {
    create(params) {
        return fetch(
            `${BASE_URL}/session`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
            }
        ).then(res => res.json());
    },
    destroy() {
        return fetch(`${BASE_URL}/session`, {
            method: "DELETE",
            credentials: "include"
        }).then(res => res.json());
    }
};

export const User = {
    current() {
        return fetch(`${BASE_URL}/users/current`, {
            credentials: "include"
        }).then(res => res.json());
    }
}