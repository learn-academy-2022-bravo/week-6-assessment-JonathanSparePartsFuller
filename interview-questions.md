# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: You can add the foreign key by making a new migration for the rails apps, by using the rails generate model command in the rails console. In this case the foreign key would be named Student since Cohort has_many students. This means that Student would have belong_to cohort. This means that foreign key would be on the Student Model. 

  Researched answer:



2. Which RESTful routes must always be passed params? Why?

  Your answer: Out of the seven routes, I believe only four require params. Those four are get, new, edit, and delete. The reason for this is these four require specific params in order to properly call upon them inside of the rails appliction.

  Researched answer:



3. Name three rails generator commands. What is created by each?

  Your answer: Rails g controller (name) generates a named controller for the developer to use to run routes through. Rails g model (name) creates a user model with certain key:values that the developer determines. And finally rails g db generates a database to store and create all user information. 

  Researched answer:



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          

action: "POST"   location: /students       

action: "GET"    location: /students/new

action: "GET"    location: /students/2  

action: "GET"    location: /students/2/edit    

action: "PATCH"  location: /students/2      

action: "DELETE" location: /students/2      



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
