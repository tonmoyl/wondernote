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
second_notebook = Notebook.create(title: "Sec Notebook", author_id: demoUser.id);

Note.destroy_all
first_note = Note.create(
  title:"First Note",
  body:'{}',
  author_id: demoUser.id,
  notebook_id: first_notebook.id
)

# first_note = Note.create(
#   title: "First Note",
#   body: "Some information",
#   notebook_id: first_notebook.id,
#   author_id: demoUser.id
# )
# second_note = Note.create(
#   title: "Second Note",
#   body: "More information",
#   notebook_id: first_notebook.id,
#   author_id: demoUser.id
# )
# third_note = Note.create(
#   title: "Third Note",
#   body: "More information",
#   notebook_id: second_notebook.id,
#   author_id: demoUser.id
# )
