import React from 'react'

const About = () => {
    return (
        <div>
            <h1>About this project</h1><br />
            <p>This application was designed and developed by Ethan Rodriguez.</p>
            <p>Its intended use is for people who have large collections of DVD and enjoy collecting movies.</p>
            <p>The apps is easy and simple to use.  A user can add new movies, delete movies and add a movie to favorites and remove a favorite.  Each user that signs up will have their own list.  They will also have their very own favorties list.  The application is using a Ruby on Rails api for the backend and a React front end.  Users have full Active Record CRUD ability for their movies.  The backend consists of three models for a database (User, Movie, Category). Via fetch request from the front end we are able to create new users, add and delete movies.  This project has been a fun learning experience and I look forward to making plenty more projects to add to my portfolio.  Thank you for taking the time to lood at the project.  Hope you enjoyed!</p>
        </div>
    )
}

export default About
