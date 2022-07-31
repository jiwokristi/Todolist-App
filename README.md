# Todolist App

## A. Brief Overview

<br>

<b>Todolist App</b> is a simple web app that features the <b>CRUD elements</b> which you can use to add and save to your to-do list, to mark them as finished, unfinished, or delete the said to-do.

This app is created using:

- Sequelize ORM
- PostgreSQL DBMS
- React.js
- Redux
- Tailwind CSS
- React Hot Toast

Make sure you have [PostgreSQL](https://www.postgresql.org/download/) set up already in your computer, and [nodemon](https://www.npmjs.com/package/nodemon) installed globally or within the devDependencies to hit the REST APIs more easily. You can also use a database administration tool like [Dbeaver](https://dbeaver.io/) if you'd like to see if the data are truly stored in the database.

[How to Connect PostgreSQL Database with DBeaver](https://www.youtube.com/watch?v=zYhv1Dj8Gmw&ab_channel=E-MultiSkillsDatabaseTutorials) => 3:49-6:19

[How to install PostgreSQL and setup its password in Linux CLI](https://www.youtube.com/watch?v=ayd2iEV-glY&t=252s&ab_channel=OSTechHelp)

<br>

## B. Steps

<br>

1. Inside each repositories use the following command `npm i`
2. Change the server config using your credentials
3. Inside the <i>server</i> repository use the following command `nodemon app.js`
4. Inside the <i>client</i> repository use the following command `npm start`

<br>

```json
For Linux/MacOS change the "scripts" object in the package.json file from:

"scripts": {
    "start": "set PORT=3001 && react-scripts start",
    ...
  }

into:

"scripts": {
    "start": "PORT=3001 react-scripts start",
    ...
  }

```

<br>

4. Start using the web app by saving a to-do to your todo list, use the left button inside each card to mark them as finished, click them again to mark them as unfinished, and use the right button to delete the to-do

5. See what happens when you enter the focus mode by pressing tab twice to target the "save" button, or pressing tab once to target the input

6. See what happens when you try to save a to-do that has more than 50 characters

7. See what happens if you try to save a to-do using an empty input

<br>

## C. Extra Notes

<br>

- The Back End handles <b>400 & 403 error codes</b> using Sequelize validation and constraints, <b>404 error code</b> using "throw", and <b>500 error code</b> as the default error "Internal Server Error"

- The Client side only shows 400 error code if the form returns an empty string & 403 error code if there's already a to-do with the same name, because the app doesn't have a navigation system. Therefore, <b>a user won't be able to hit an API from the URL</b> that could trigger the 404 error code

- You can see the <b>loading animation</b> before the data is fetched by right clicking the screen, inspect, more tabs (>>), Network, and change the "no throttling" setting to "Slow 3G". Then refresh the page

<br>

# Contact Me

## Jiwo Kristi

- +62-821-3036-3110
- jiwokristi@gmail.com
- [LinkedIn](https://www.linkedin.com/in/jiwokristi/)
- [Github](https://github.com/jiwokristi)
