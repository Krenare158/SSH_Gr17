# Electronic Services

## Description

The Electronic Services project aims to provide electronic services to users through a web application. This could include features such as online registration, login, authentication, and other online services.

## Technologies Used

- React.js
- Node.js
- Express.js
- Sequelize
- MySQL (or other database)

## Installation

1. Creating the project: `npx create-react-app SSH_Gr18`
2. Install dependencies: `npm install`

## Usage

To use the application, users can navigate to the provided API endpoints to register, log in, and perform various electronic transactions. To do this we have chose to implemet ORM by Sequelize.

## Setup
1. To install Sequelize and Sequelize-CLI: `npm install sequelize sequelize-cli`
2. To create necessary folders, such as Models and Confug: `sequelize init`
3. To use paths whenever and where ever we want: `npm install paths`
4. For security: `npm install fs`
5. To install mysql2: `npm install mysql2`
6. Configure the database connection in: `config/config.json`.
7. To create new migrations: `npx sequelize-cli migration:generate  --name create--file name`
8. To run the database migrations: `npx sequelize-cli db:migrate`
9. To start the server: `node server.js`
10. To start the application: `npm start`
   

## Features

- User registration
- User login
- CRUD operations for electronic services entities (e.g., orders, transactions, etc.)

## Database Schema

The database schema includes tables for users, electronic transactions, and any other necessary entities. Detailed descriptions of tables, columns, and relationships can be found in the database schema documentation.

## API Endpoints

### User Registration

- **POST /register**: Register a new user.

  Request Body:
  ```json
  {
    "username": "example",
    "password": "password"
  }

 ### Code Structure
The project's codebase is organized into folders for  models,config, auths, server, client and other relevant components.

### Development Workflow
The project follows a standard development workflow. Feature branches are created for new developments, and pull requests are submitted for code review before merging into the main branch.

 ### Credits
This project was developed by Liburna Berisha, Ilirjana Suka, Krenare Kyreziu and Majlinda Halilaj.
