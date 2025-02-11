# Humble Superhero API

## Objective

The **Humble Superhero API** is a simple Node.js-based API that allows users to manage superheroes with a focus on their humility. Each superhero has a name, a superpower, and a "humility score" (rating from 1 to 10). The API provides endpoints to add new superheroes and fetch the list of superheroes ordered by humility score.

---

## 📦 How to Run the Project

### 1 Prerequisites

Make sure you have the following installed:

- **Node.js** (v14+ recommended)
- **npm** (comes with Node.js)
- **Docker** (v20+ recommended)
- **Docker Compose** (for managing multi-container Docker applications)

### 2 Installation

1. Clone the repository:

```bash
   git clone https://github.com/Javierdigital85/humble-heroes-backend-express
   cd humble-heroes-backend-express
```

2. Create a .env file 

3.  File with your environment variables, for example:
```bash
    POSTGRES_USER=javier
    POSTGRES_PASSWORD=topsecret
    POSTGRES_DB=postgres
    DB_HOST=localhost
    DB_PORT=5432
    DB_USERNAME=javi
    DB_PASSWORD=secret
    DB_NAME=postgres
    DIALECT=postgres
    PORT=8000
    FRONTEND_URL=http://localhost:5173
```    

4.  Build and start the containers:
    docker compose up -d

5. Install dependencies
   npm install

6. Run the Server
   npm run dev

7. Once the containers are up and the app running, the server should be available at:
   http://localhost:8000   

. Run Tests
   npm test

## Technical Skills: Code Quality, Simplicity, and Functionality

The API is built using Node.js and Express, following clean code principles and ensuring simplicity and modularity.
Docker is used to manage the PostgreSQL database and simplify the development environment.
Sequelize is used for database operations.
Testing: Jest and Supertest are used for integration tests.
Endpoints are structured for easy maintenance and expansion, with a focus on scalability and performance.

## Team Player Attitude

To improve or expand this task, I would collaborate with a teammate in the following ways:

1.Task Breakdown and Role Assignment
Divide the task into smaller subtasks based on each person's expertise.
One teammate could focus on developing new features while the other improves tests and documentation.

2.Frequent Communication
Regular communication through video calls to share progress, ask for feedback, and unblock issues.
We would set up short daily check-ins.

3.Code Reviews and Pair Programming
Frequent code reviews to ensure high code quality and identify issues early.
Pair programming sessions for complex features or debugging.

4.Testing and Debugging Together
One teammate could implement a feature while the other writes tests to ensure full coverage and reliability.
Collaborative debugging to handle edge cases and deployment preparation.

5.Iterative Improvement
Review the code together and identify opportunities for refactoring or optimization.

## Eagerness to Learn: If I Had More Time

If I had more time, I would:
Add More Endpoints: Expand the API to include features like searching, filtering, and updating superhero details.
Comprehensive Swagger Documentation: Improve the developer experience with full API documentation.
Dedicated Testing Database: Use a separate database for tests to avoid interfering with development data.
Authentication and Authorization: Add secure authentication mechanisms (e.g., JWT or OAuth) to protect user data and enhance security.
Data Encryption: Encrypt sensitive data for added security.

## Humility and Communication

Collaboration and communication are key to a successful project. When working in a team, I would:
Keep an open line of communication and be receptive to feedback.
Write clear, concise comments and documentation to help others understand the code.
Share knowledge and learn from teammates to improve my skills.
Acknowledge areas for improvement and proactively seek guidance when needed.