# Book API Server

This project is a REST API server built using Node.js, Express, and MongoDB to perform CRUD (Create, Read, Update, Delete) operations on book data. The API allows users to manage a collection of books stored in MongoDB.

## Features

Create, Read, Update, and Delete books from a MongoDB database.

Uses Express.js for handling HTTP requests.

Uses Mongoose for interacting with MongoDB.

Supports CORS to allow frontend applications to interact with the API.

Includes a seeding script to populate the database with initial book data.

## Tech Stack

Node.js - JavaScript runtime

Express.js - Web framework for Node.js

MongoDB - NoSQL database

Mongoose - ODM for MongoDB

CORS & Body-Parser - Middleware for handling requests

## API Endpoints 
### HTTP Method  |   Route        |   Description

GET              | /api/books      |    Get all books

GET              | /api/books/:id  |    Get a book by ID

POST             | /api/books      |    Add a new book

PUT              | /api/books/:id  |    Update a book by ID

DELETE           | /api/books/:id  |    Delete a book by ID


## Testing the API

You can use Postman, cURL, or any REST client to test the API:

Fetch all books: GET http://localhost:5000/api/books

Fetch a single book by ID: GET http://localhost:5000/api/books/:id

Add a new book: POST http://localhost:5000/api/books (Send JSON body)

Update a book: PUT http://localhost:5000/api/books/:id (Send JSON body)

Delete a book: DELETE http://localhost:5000/api/books/:id












