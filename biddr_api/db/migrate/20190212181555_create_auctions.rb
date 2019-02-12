class CreateAuctions < ActiveRecord::Migration[5.2]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.date :end_time
      t.integer :reserve_price

      t.timestamps
    end
  end
end
