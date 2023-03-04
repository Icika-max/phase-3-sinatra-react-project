require 'faker'
puts "🌱 Seeding spices..."
# Create 3 users
user1 = User.create!(
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'password'
)
user2 = User.create!(
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  password: 'password'
)
user3 = User.create!(
  name: 'Bob Johnson',
  email: 'bob.johnson@example.com',
  password: 'password'
)

# Create some tasks for each user
task1 = Task.create!(
  user: user1,
  title: 'Buy groceries',
  description: 'Milk, bread, eggs, cheese',
  due_date: Date.today + 3.days,
  status: false
)
task2 = Task.create!(
  user: user1,
  title: 'Clean the house',
  description: 'Vacuum, dust, clean the bathroom',
  due_date: Date.today + 1.week,
  status: false
)
task3 = Task.create!(
  user: user2,
  title: 'Finish the project',
  description: 'Complete the final report and submit it',
  due_date: Date.today + 2.days,
  status: false
)
task4 = Task.create!(
  user: user3,
  title: 'Go for a run',
  description: 'Run 5km',
  due_date: Date.today + 1.day,
  status: true
)

# Seed your database here


# Create 5 users
# 5.times do
#   User.create(
#     name: Faker::Name.name,
#     email: Faker::Internet.email
#   )
# end

# # Create 10 tasks for each user
# User.all.each do |user|
#   10.times do
#     Task.create(
#       title: Faker::Lorem.sentence,
#       description: Faker::Lorem.paragraph,
#       due_date: Faker::Time.forward(days: 30),
#       status: [true, false].sample,
#       user_id: user.id
#     )
#   end
# end

puts "✅ Done seeding!"
