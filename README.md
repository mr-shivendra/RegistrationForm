
# Project Registration Application

A full-stack web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack that allows Student to register for details. This application provides a seamless and responsive user interface for project submission and management.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

-   **User Authentication**: Secure user registration system.
-   **Project Creation**: An intuitive form for users to submit new student's details.
-   **Edit and Update details**: Functionality for users to modify the details of their submitted details.
-   **Delete details**: Ability for users to remove their projects.
-   **Responsive Design**: A mobile-first design that works on various screen sizes.

## Tech Stack

### Frontend

-   **React.js**: A JavaScript library for building user interfaces.
-   **React Router**: For declarative routing in the React application.
-   **Axios**: A promise-based HTTP client for making requests to the backend.
-   **CSS**: For styling the application.

### Backend

-   **Node.js**: A JavaScript runtime environment.
-   **Express.js**: A web application framework for Node.js.
-   **MongoDB**: A NoSQL database for storing project and user data.
-   **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
-   **dotenv**: For managing environment variables.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

-   [Node.js](https://nodejs.org/en/) (v14.x or later)
-   [npm](https://www.npmjs.com/) (Node Package Manager)
-   [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)

## Installation

Follow these steps to set up the project locally:

1.  **Clone the repository:**
    ```
    git clone https://github.com/mr-shivendra/[Registration].git
    cd Registration
    ```

2.  **Install backend dependencies:**
    Navigate to the `backend` or `server` directory and install the required npm packages.
    ```
    cd server
    npm install
    ```

3.  **Install frontend dependencies:**
    Navigate to the `frontend` or `client` directory and install the required npm packages.
    ```
    cd ../ClientSide
    npm install
    ```

4.  **Set up environment variables:**
    Create a `.env` file in the `backend` directory and add the following variables. Replace the placeholder values with your actual data.
    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ```

5.  **Run the application:**
    -   **Start the backend server:** From the `server` directory, run:
        ```
        npm run server
        ```
    -   **Start the frontend development server:** From the ClientSide directory, run:
        ```
        npm run dev
        ```

The application should now be running on `http://localhost:3000`.

## Usage

Once the application is running, you can:
1.  Navigate to `http://localhost:3000` in your web browser.
2.  From the dashboard, you can create a new Registration by filling out the registration form.

## API Endpoints

The backend server exposes the following RESTful API endpoints:

| HTTP Method | Endpoint            | Description                  |
| :---------- | :------------------ | :--------------------------- |
| `POST`      | `/api/student/details` | Register a new student      |
| `GET`       | `/api/student/details`       | Get all students' details             |
| `GET`       | `/api/student/details:id`   | Get a single student's detail by ID   |
| `PUT`       | `/api/student/details:id`   | Update a student's detail by ID       |
| `DELETE`    | `/api/student/details:id`   | Delete a student's detail by ID       |

## Screenshots

 here to get users a visual idea of this project.

**Home Page**
[(image-1.png)](https://github.com/mr-shivendra/RegistrationForm/blob/main/image-1.png?raw=true)

**Project Form**
[`[(image.png)](https://github.com/mr-shivendra/RegistrationForm/blob/main/image.png?raw=true)

## Contributing

Contributions are welcome! If you have suggestions for improving this application, please feel free to fork the repository and create a pull request or open an issue with the "enhancement" tag.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
