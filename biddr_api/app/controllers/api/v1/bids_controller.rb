class Api::V1::BidsController < Api::ApplicationController
    before_action :authenticate_user!

    def create
        bid = Bid.new params.require(:bid).permit(:bidding_price, :auction_id)
        auction = Auction.find params[:auction_id]
        bid.auction = auction
        bid.user = current_user

        if !can?(:bid, auction)
            render(
                json: {errors: bid.errors},
                status: 403
            )
        elsif bid.save
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
