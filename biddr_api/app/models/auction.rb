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

validates(
    :end_time,
    presence: true
)

validate(:end_time_cannot_be_in_the_past)

before_validation(:set_default_reserve_price)
private
def set_default_reserve_price
    if !reserve_price.present?
        self.reserve_price = 0
    end
end

def end_time_cannot_be_in_the_past
    if end_time.present? && end_time < Date.today
        errors.add(:end_time, "can not be in the past")
    end
end

end
