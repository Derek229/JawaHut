# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



require 'faker'


Planet.destroy_all
Droid.destroy_all
Job.destroy_all



3.times do
   planet= Planet.create(
    name:Faker::Movies::StarWars.planet)
    

    10.times do
      planet.droids.create(
        name:Faker::Movies::StarWars.droid,
        description:Fa
        price:Faker::Commerce.price
      )
    end


    Job.create( name:'Jedi', description:'swings laser sword' )
    Job.create(name:'Stormtrooper', description:'misses all the time')
    Job.create(name:'BountyHunter', description:'Shoots second')
  
end