# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Auction.destroy_all
Bid.destroy_all
User.destroy_all

PASSWORD = "supersecret"

super_user = User.create(
    first_name: "Jon",
    last_name: "Snow",
    email: "js@winterfell.gov",
    password: "daenerystargaryen",
    admin: true
)

10.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name

    User.create(
        first_name: first_name,
        last_name: last_name,
        email: "#{first_name.downcase}-#{last_name.downcase}@example.com",
        password: PASSWORD
    )
end

users = User.all

100.times do
    created_at = Faker::Date.backward(180)
    reserve_price = rand(0..1_000)

    a = Auction.create(
        title: Faker::Device.model_name,
        description: Faker::Lorem.paragraph(1, true, 3),
        end_time: Faker::Date.forward(14),
        reserve_price: reserve_price,
        created_at: created_at,
        updated_at: created_at,
        user: users.sample
    )

    if a.valid?
        rand(0..25).times do
            bidding_created_at = Faker::Date.backward(30)

            a.bids << Bid.new(
                bidding_price: rand(0..2_000),
                created_at: bidding_created_at,
                updated_at: bidding_created_at,
                user: users.sample
            )
        end
    end
end