# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


require 'faker'

# Create contacts
10.times do
  contact = Contact.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    phone: Faker::PhoneNumber.phone_number,
    city: Faker::Address.city,
    state: Faker::Address.state,
    country: Faker::Address.country,
    status: ['Active', 'Inactive', 'Pending'].sample
  )

  # Create events for each contact
  3.times do
    Event.create!(
      date: Faker::Date.forward(days: 23),
      location: Faker::Address.full_address,
      summary: Faker::Lorem.sentence,
      contact_id: contact.id
    )
  end
end

puts "Seeded 10 contacts with 3 events each!"

10.times do
  video = Video.create!(
    title: Faker::Movie.title,
    description: Faker::Movie.quote,
    video_url: Faker::Internet.url,
    thumbnail_url: Faker::Internet.url
  )
end

puts "Seeded 10 videos to the database"