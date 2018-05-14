# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
demoUser = User.create(username: "Demo", password: 'starwars')
user1 = User.create(username: 'Lifazul', password: 'starwars')
user2 = User.create(username: 'Tonmoy', password: 'starwars')


Notebook.destroy_all
first_notebook = Notebook.create(title: "First Notebook", author_id: demoUser.id);
