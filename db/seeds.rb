require 'faker'
puts "🌱 Seeding spices..."

# Seed your database here


# Create 5 users
5.times do
  User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email
  )
end

# Create 10 tasks for each user
User.all.each do |user|
  10.times do
    Task.create(
      title: Faker::Lorem.sentence,
      description: Faker::Lorem.paragraph,
      due_date: Faker::Time.forward(days: 30),
      status: [completed, incomplete].sample,
      user_id: user.id
    )
  end
end

puts "✅ Done seeding!"
