class Api::V1::BidsController < Api::ApplicationController
    before_action :authenticate_user!

    def create
        auction = Auction.find params[:auction_id]
        bid = Bid.new params[:id]
        bid.auction = auction
        bid.user = current_user

        if bid.save
            render json: {id: bid.id}
        else
            render(
                json: {errors: bid.errors},
                status: 422
            )
        end
    end

    def destroy
        bid = Bid.find params[:id]

        if can?(:delete, bid)
            bid.destroy
            render json: {status: 200}, status: 200
        else
            render json: {status: 403}, status: 403
        end
    end
end
