import React from "react";

const NewAuctionForm = props => {
    const { errors=[] } = props;

    const handleSubmit = event => {
        event.preventDefault();

        const { currentTarget } = event;
        const formData = new FormData(currentTarget);

        props.onSubmit({
            title: formData.get("title"),
            description: formData.get("description"),
            reserve_price: formData.get("reserve_price"),
            end_time: formData.get("end_time")
        });
    };

    return (
        <form className="AuctionForm" onSubmit={handleSubmit} >
            <p>
                {errors.map(e => e.message).join(", ")}
            </p>
            <div>
                <label htmlFor="title">Title</label> <br/>
                <input name="title" id="title" />
            </div>
            <div>
                <label htmlFor="description">Description</label> <br/>
                <input name="description" id="description" />
            </div>
            <div>
                <label htmlFor="reserve_price">Reserve Price</label> <br/>
                <input name="reserve_price" id="reserve_price" />
            </div>
            <div>
                <label htmlFor="end_time">End Time</label> <br/>
                <input name="end_time" id="end_time" />
                <input type="submit" value="Submit" />
            </div>
        </form>
    );
};

export default NewAuctionForm;
