# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: You can add the foreign key by making a new migration for the rails apps, by using the rails generate model command in the rails console. In this case the foreign key would be named Student since Cohort has_many students. This means that Student would have belong_to cohort. This means that foreign key would be on the Student Model. 

  Researched answer: The reason to use a foreign key is to uniquely identify a row in the referenced table. Since we have a Cohort model with a Student model where there are many students, we want to link that student to their Cohort. a foreign key is simply linked to the primary key before it. the students model would be considered a "sub model" of Cohort, because we are linking the students to their Cohort. the foreign key would be named "student_id" which would link the "student" to the "Cohort" model id.



2. Which RESTful routes must always be passed params? Why?

  Your answer: Out of the seven routes, I believe only four require params. Those four are get, new, edit, and delete. The reason for this is these four require specific params in order to properly call upon them inside of the rails appliction.

  Researched answer: Show, update and destroy are the routes that always require params so the specific post of data can be edited/deleted



3. Name three rails generator commands. What is created by each?

  Your answer: Rails g controller (name) generates a named controller for the developer to use to run routes through. Rails g model (name) creates a user model with certain key:values that the developer determines. And finally rails g db generates a database to store and create all user information. 

  Researched answer: Three generator commands with a bit more information are rails scaffold, which generates a controller, model and new route. Rails g model creates a table, resource creates models with routes. And rails g controller creates a new controller file that can be modified for specific requests.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          
Index. Will return a list of all students

action: "POST"   location: /students       
Create. Makes a new instance of students

action: "GET"    location: /students/new
New. Returns a form for makeing new students

action: "GET"    location: /students/2  
Show. Returns from the students instance that has id of 2

action: "GET"    location: /students/2/edit    
Edit. Returns a form to edit students

action: "PATCH"  location: /students/2      
Update. Updates all the information for student with an id of 2

action: "DELETE" location: /students/2      
Destroy. Deletes all information from student with an id of 2


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user I can create a to do list
As a user I can read the to do list
As a user I can update the to do list
As a user I can delete the to do list
As a user I can create multiple to do list
As a user I can read multiple to do list
As a user I can update multiple to do list with different items
As a user I can delete a single to do list or all of them
As a user I can reload a preivously deleted to do list