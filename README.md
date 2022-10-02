# Favorite Derivers App

## How to start?

```
npm install
```

```
npm start
```

## How to run?

Open http://localhost:3000 with your browser to see the result.

## Used technologies:

- Frontend: React Js -> Redux, Redux Thunk, Axios, React Router v-6, Ant Design
- Git: GitHub
- Hosting: Netlify

## Instructions:

You have 2 pages

Page One - Drivers

You get drivers from API and fill the table. Your table has 5 columns. ( Driver Name, Permanent Number, Nationality, DOB, Information)
* When you click on the Information column, it will go to the driver's wikipedia address. You can look at the example in the API.
* If the driver does not have  Permanent Number information, that raw have to be red.
* Each row have an "add to favorite" button. When you click "add to favorite" button, you add the "driver object" to your favorite list.
* You put your favorite list array in redux store. 


Page Two - Favorites
You list your favorite drivers here. 
There is a remove from favorites button on each line. 

Note:
API has server side pagination. You should solve this problem in your table!

API Link:
http://ergast.com/api/f1/drivers 