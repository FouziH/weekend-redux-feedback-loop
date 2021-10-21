# Weekend-Redux-Feedback-Loop

Duration: 2 days

This is a simple survey app that asks the user for their input regarding their feeling, understanding, support, and finally if they would like to add comments to their feedback before submitting the feed back.

To see the fully functional site, please visit: https://redux-feedback-loop-fouzi.herokuapp.com/

<img width="1378" alt="Screen Shot 2021-08-22 at 7 42 29 PM" src="https://user-images.githubusercontent.com/78863626/130375897-c445531a-d39f-49f1-8a19-ddff022cfb1d.png">

<img width="1374" alt="Screen Shot 2021-08-22 at 7 46 16 PM" src="https://user-images.githubusercontent.com/78863626/130375937-7108831c-ced7-4493-9475-e40e1a6004de.png">

# Prerequisites

1 - Node.js
2 - Editor 

# Installation 

1 - Create a database named "prime_feedback",
2 - The queries in the tables.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3 - Open up your editor of choice and run an npm install
4 - Run npm run server in your terminal
5 - Run npm run client in your terminal
6 - The npm run client command will open up a new browser tab for you!

# Usage

To use the app, you will need to open the app locally using npm run server and npm run client. Once the app opens up in your browser, the app will to you to the home page. There there should be a button named Leave New Feedback. The  user will need to press the button to start the process of leaving their feedback. Once the button is pressed, the user will be directed to another page that will ask the user How are you feelings today? and their should be an input that will ask them to leave a number between 0-5. if the user attempts to go to the next question, they will get a alert asking them to enter a number between 0-5 to proceed to the next page. Similarly, the next three pages will ask for user input and the user will have the ability to go back and change their  numbers and comment before submitting the survey. Once the survey is submitted, the user will be redirected back the home page where they can start a new feed back.

# Build with 
- React JS
- PostgreSQL
- Material UI
- Redux 

# License   

# Acknowledgement

Thanks to Prime Digital Academy who equipped and helped us to make this application a reality.

# Support 
If you have suggestions or questions, contact Sulaiman Bada at sulaimanbada8048@gmail.com
