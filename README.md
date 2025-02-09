# Humble Superhero API

## Objective

The **Humble Superhero API** is a simple Node.js-based API that allows users to manage superheroes with a focus on their humility. Each superhero has a name, a superpower, and a "humility score" (rating from 1 to 10). The API provides endpoints to add new superheroes and fetch the list of superheroes ordered by humility score.

---

## 📦 How to Run the Project

### 1️⃣ Prerequisites

Make sure you have the following installed:

- **Node.js** (v14+ recommended)
- **npm** (comes with Node.js)
- **Docker** (v20+ recommended)
- **Docker Compose** (for managing multi-container Docker applications)

### 2️⃣ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/humble-superhero-api.git
   cd humble-superhero-api

   ```

2. Create a .env file based on the .env.example template:

3.  File with your environment variables, for example:

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
    URL_FRONTEND=http://localhost:5173

4.  Build and start the containers:
    docker compose up -d


5. Install dependencies
   npm install

6. Running the Server
   npm run dev

7. Once the containers are up and the app running, the server should be available at:
   http://localhost:8000   

. Running Tests
   npm test

## Collaboration Plan

To improve or expand this task, I would collaborate with a teammate in the following ways:

1. **Task Breakdown and Role Assignment**:

   - First, we would break down the task into smaller, manageable subtasks and assign roles based on each teammate's strengths and expertise.
   - For example, one person could focus on implementing new features or logic, while the other works on improving tests, documentation, or addressing edge cases.

2. **Frequent Communication**:

   - Regular communication would be key to ensure we're aligned and that tasks are being completed according to the requirements.
   - We would set up quick check-ins (daily or bi-daily) to discuss progress, blockers, and share feedback on each other's work.
   - Communication could be done via Slack, and for complex discussions, we would hold video calls.

3. **Code Reviews and Pair Programming**:

   - Code reviews would be conducted frequently to maintain code quality, identify potential issues, and learn from each other's approaches.
   - Pair programming could also be used for certain features to boost productivity and knowledge sharing.

4. **Testing and Debugging Together**:

   - While one teammate works on implementing a feature, the other could focus on writing tests, ensuring that the code is well-covered by unit and integration tests.
   - We would also test edge cases and handle potential failures in a collaborative manner to prevent issues during deployment.

5. **Iterative Improvement**:
   - After completing the initial task, we would review the code together to identify areas for improvement, such as performance optimization or refactoring.
   - We would also brainstorm on how to expand the task, adding new features or functionality to better serve the users.

By splitting responsibilities, communicating effectively, and engaging in code reviews and collaborative debugging, we would ensure both quality and efficiency in improving or expanding the task.

If I had more time, I would:

1. Write More Tests
2. Focus on increasing test coverage with more unit and integration tests to ensure reliability.
3. Add More Endpoints
4. Expand the API by adding additional endpoints to support more features and improve functionality.
Implement Swagger Documentation
5. Create comprehensive Swagger documentation to make the API easier to understand and use for other developers.
Set Up a Dedicated Testing Database
6. Configure a separate testing database to ensure isolated and consistent test environments.
