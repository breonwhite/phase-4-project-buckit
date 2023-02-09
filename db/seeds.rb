# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "🌱 Seeding Users..."

User.create(
    email: "badbunny@mailinator.com", 
    first_name: "Bad", 
    last_name: "Bunny",
    password_digest: BCrypt::Password.create('Password')
)

User.create(
    email: "beyonceknowles@mailinator.com", 
    first_name: "Beyonce", 
    last_name: "Knowles",
    password_digest: BCrypt::Password.create('Password')
)

User.create(
    email: "barakobama@mailinator.com", 
    first_name: "Barak", 
    last_name: "Obama",
    password_digest: BCrypt::Password.create('Password')
)

puts "Done seeding Users! Now seeding Categories..."

Category.create(
    title: 'People I Want to Meet'
)

Category.create(
    title: 'Places I Want to Travel To'
)

Category.create(
    title: 'Foods I Want to Try'
)

Category.create(
    title: 'Adventures I Want to Take'
)

Category.create(
    title: 'Books I Want to Read'
)

puts "Done seeding Categories! Now seeding Items..."
puts "Seeding Items for User 1..."

Item.create(
    user_id: 1,
    category_id: 1,
    description: "Cardi B"
)

Item.create(
    user_id: 1,
    category_id: 2,
    description: "Puerto Rico"
)

Item.create(
    user_id: 1,
    category_id: 3,
    description: "Mofongo"
)

Item.create(
    user_id: 1,
    category_id: 4,
    description: 'Hike El Yunque National Forest'
)

Item.create(
    user_id: 1,
    category_id: 5,
    description: 'Harry Potter'
)

puts "Complete! Now seeding Items for User 2..."

Item.create(
    user_id: 2,
    category_id: 1,
    description: "Jay-Z"
)

Item.create(
    user_id: 2,
    category_id: 2,
    description: "Houston, Texas"
)

Item.create(
    user_id: 2,
    category_id: 3,
    description: "BBQ"
)

Item.create(
    user_id: 2,
    category_id: 4,
    description: 'Swim with Whales'
)

Item.create(
    user_id: 2,
    category_id: 5,
    description: 'Harry Potter',
)

puts "Complete! Now seeding Items for User 3..."

Item.create(
    user_id: 3,
    category_id: 1,
    description: "Michelle Obama"
)

Item.create(
    user_id: 3,
    category_id: 2,
    description: "Chicago, IL",
)

Item.create(
    user_id: 3,
    category_id: 3,
    description: "Fancy Steak",
)

Item.create(
    user_id: 3,
    category_id: 4,
    description: 'Speak in front of thousands of people',
)

Item.create(
    user_id: 3,
    category_id: 5,
    description: 'Harry Potter',
)

puts "✅ Done seeding!"