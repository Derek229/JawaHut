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
<<<<<<< HEAD


=======
>>>>>>> fdf8f45f32a0ed1fc11c2846eee4576c4d672be9
    10.times do
      
      planet.droids.create(

        name:Faker::Movies::StarWars.droid,
<<<<<<< HEAD

				description:Faker::Movies::StarWars.call_sign,

        price:Faker::Commerce.price
      )
    end
    Job.create( name:'Jedi', company:'Jedi Council', hourly_rate:'2,000' )
    Job.create(name:'Stormtrooper', company:'Galactic Empire', hourly_rate:'5,500' )
    Job.create(name:'BountyHunter', company:'Jabbas Palace', hourly_rate:'6,000' )
    
=======
				description:Faker::Movies::StarWars.call_sign,
        price:Faker::Commerce.price
      )
    end


    
    Job.create( name:'Jedi', company:'Jedi Council', hourly_rate:'2,000' )
    Job.create(name:'Stormtrooper', company:'Galactic Empire', hourly_rate:'5,500' )
    Job.create(name:'BountyHunter', company:'Jabbas Palace', hourly_rate:'6,000' )
>>>>>>> fdf8f45f32a0ed1fc11c2846eee4576c4d672be9
end