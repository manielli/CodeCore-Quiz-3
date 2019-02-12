class AuctionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :description,
    :reserve_price,
    :end_time,
    :created_at,
    :updated_at
  )

  belongs_to(:user, key: :seller)
  has_many(:bids)

  class BidSerializer < ActiveModel::Serializer
    attributes(
      :id,
      :bidding_price,
      :created_at,
      :updated_at
    )

    belongs_to(:user, key: :bidder)
  end
end
