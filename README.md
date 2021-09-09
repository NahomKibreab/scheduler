# Interview Scheduler

## Introduction
- Interview Scheduler is a modern client application using the React view library that allows student to book and manage an interview with mentor.
- Appointment can be made between noon to five for each day of the week. 
- When the application loads a request made to the API server which respond JSON file.
- Server uses Express as a backend and React as a frontend. 

## App Functions
The app includes the following functionality:

- It's a single page application (SPA) called Interview Scheduler, built using React.
- Data is persisted by the API server using a PostgreSQL database.
- The client application communicates with an API server over HTTP, using the JSON format.
- Storybook is used to built and test individual components by isolating from any dependencies.
- Jest tests are used through the development of the project for unit teting.
- Cypress is used for End-to-End testing.  

## Screenshots

!["Screenshot of Interview Scheduler Home Page"]('/images/home-page.png')
###### Interview Scheduler Home Page 

!["Screenshot of Interview Scheduler Booking New Interview"]('/images/book-interview.png')
###### Booking New Interview 

!["Screenshot of Interview Scheduler Editing Booked Interview"]('/images/booked-interview.png')
###### Editing Booked Interview 

!["Screenshot of Interview Scheduler Cancel Interview"]('/images/cancel-interview.png')
###### Cancel Interview 


## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Authors
Developed by Nahom Mehanzel. You can find me on [LinkedIn](https://www.linkedin.com/in/nahom-mehanzel/) or [Twitter](https://twitter.com/NahomKibreab).