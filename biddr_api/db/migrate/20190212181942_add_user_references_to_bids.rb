class AddUserReferencesToBids < ActiveRecord::Migration[5.2]
  def change
    add_reference :bids, :user, foreign_key: true
  end
end
