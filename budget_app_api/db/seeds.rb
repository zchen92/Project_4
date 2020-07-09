# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.create([
#   { name: "Sam", monthly_income: 3000 },
#   { name: "Jimmy", monthly_income: 4000 },
#   { name: "Adam", monthly_income: 2500 }
# ])

Spending.create([
  { activity: "rent", cost: 1000, month: "January", user_id: 1},
  { activity: "entertainment", cost: 20, month: "January", user_id: 1 },
  { activity: "groceries", cost: 300, month: "January", user_id: 1 },
  { activity: "shopping", cost: 150, month: "January", user_id: 1 },
  { activity: "travel", cost: 50, month: "January", user_id: 1 },
  { activity: "bills", cost: 300, month: "January", user_id: 1 },
  { activity: "rent", cost: 1000, month: "February", user_id: 1 },
  { activity: "entertainment", cost: 0, month: "February", user_id: 1 },
  { activity: "groceries", cost: 350, month: "February", user_id: 1 },
  { activity: "shopping", cost: 200, month: "February", user_id: 1 },
  { activity: "travel", cost: 30, month: "February", user_id: 1 },
  { activity: "bills", cost: 400, month:"February", user_id: 1 },
  { activity: "rent", cost: 1000, month: "March", user_id: 1 },
  { activity: "entertainment", cost: 0, month: "March", user_id: 1 },
  { activity: "groceries", cost: 350, month: "March", user_id: 1 },
  { activity: "shopping", cost: 200, month: "March", user_id: 1 },
  { activity: "travel", cost: 30, month: "March", user_id: 1 },
  { activity: "bills", cost: 400, month: "March", user_id: 1 },
  { activity: "rent", cost: 1500, month: "January", user_id: 2 },
  { activity: "entertainment", cost: 300, month: "January", user_id: 2 },
  { activity: "groceries", cost: 400, month: "January", user_id: 2 },
  { activity: "shopping", cost: 100, month: "January", user_id: 2 },
  { activity: "travel", cost: 100, month: "January", user_id: 2 },
  { activity: "bills", cost: 500, month: "January", user_id: 2 },
  { activity: "rent", cost: 1500, month:"February", user_id: 2 },
  { activity: "entertainment", cost: 400, month:"February", user_id: 2 },
  { activity: "groceries", cost: 300, month:"February", user_id: 2 },
  { activity: "shopping", cost: 50, month:"February", user_id: 2 },
  { activity: "travel", cost: 50, month:"February", user_id: 2 },
  { activity: "bills", cost: 400, month:"February", user_id: 2 },
  { activity: "rent", cost: 1500, month: "March", user_id: 2 },
  { activity: "entertainment", cost: 600, month: "March", user_id: 2 },
  { activity: "groceries", cost: 400, month: "March", user_id: 2 },
  { activity: "shopping", cost: 100, month: "March", user_id: 2 },
  { activity: "travel", cost: 1000, month: "March", user_id: 2 },
  { activity: "bills", cost: 300, month: "March", user_id: 2 },
  { activity: "rent", cost: 800, month: "January", user_id: 2 },
  { activity: "entertainment", cost: 50, month: "January", user_id: 3 },
  { activity: "groceries", cost: 150, month: "January", user_id: 3 },
  { activity: "shopping", cost: 50, month: "January", user_id: 3 },
  { activity: "travel", cost: 50, month: "January", user_id: 3 },
  { activity: "bills", cost: 200, month: "January", user_id: 3 },
  { activity: "rent", cost: 800, month:"February", user_id: 3 },
  { activity: "entertainment", cost: 30, month:"February", user_id: 3 },
  { activity: "groceries", cost: 150, month:"February", user_id: 3 },
  { activity: "shopping", cost: 70, month:"February", user_id: 3 },
  { activity: "travel", cost: 50, month:"February", user_id: 3 },
  { activity: "bills", cost: 200, month:"February", user_id: 3 },
  { activity: "rent", cost: 800, month: "March", user_id: 3 },
  { activity: "entertainment", cost: 150, month: "March", user_id: 3},
  { activity: "groceries", cost: 130, month: "March", user_id: 3 },
  { activity: "shopping", cost: 20, month: "March", user_id: 3 },
  { activity: "travel", cost: 50, month: "March", user_id: 3 },
  { activity: "bills", cost: 200, month: "March", user_id: 3 }
])
