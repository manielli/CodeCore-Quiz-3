class Auction < ApplicationRecord
belongs_to :user

has_many :bids, dependent: :destroy


validates(
    :title,
    presence: true
)

validates(
    :description,
    presence: true,
    length: { minimum: 10 }
)

before_validation(:set_default_reserve_price)

private
def set_default_reserve_price
    if !reserve_price.present?
        self.reserve_price = 0
    end
end
end
