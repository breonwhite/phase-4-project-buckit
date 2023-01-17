# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "🌱 Seeding Users..."

User.create(
    email: "bishop@mailinator.com", 
    first_name: "Bishop", 
    last_name: "Bourque"
)

User.create(
    email: "twilight@mailinator.com", 
    first_name: "Twilight", 
    last_name: "Bourque"
)

User.create(
    email: "papas@mailinator.com", 
    first_name: "Breon", 
    last_name: "White"
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
    description: "Air Bud"
)

Item.create(
    user_id: 1,
    category_id: 2,
    description: "Pet Store"
)

Item.create(
    user_id: 1,
    category_id: 3,
    description: "Peanut Butter"
)

Item.create(
    user_id: 1,
    category_id: 4,
    description: 'Run really fast at the park'
)

Item.create(
    user_id: 1,
    category_id: 5,
    description: 'A Dogs Life, by Beethoven'
)

puts "Complete! Now seeding Items for User 2..."

Item.create(
    user_id: 2,
    category_id: 1,
    description: "Rupaul"
)

Item.create(
    user_id: 2,
    category_id: 2,
    description: "Paris"
)

Item.create(
    user_id: 2,
    category_id: 3,
    description: "Buffalo Wings"
)

Item.create(
    user_id: 2,
    category_id: 4,
    description: 'Scuba Diving'
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
    description: "Drake"
)

Item.create(
    user_id: 3,
    category_id: 2,
    description: "Mexico",
)

Item.create(
    user_id: 3,
    category_id: 3,
    description: "Expensive steak",
)

Item.create(
    user_id: 3,
    category_id: 4,
    description: 'Skydiving',
)

Item.create(
    user_id: 3,
    category_id: 5,
    description: 'The Bible',
)

puts "✅ Done seeding!"