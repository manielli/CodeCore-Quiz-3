class Bid < ApplicationRecord
  belongs_to :auction

  validates(
    :bidding_price,
    presence: true,
    numericality: {
      greater_than_or_equal_to: 0
    }
  )
end
