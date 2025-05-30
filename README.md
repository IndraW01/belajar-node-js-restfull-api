# Node.js RESTful API Project

This is a RESTful API project built with Node.js, Express, and Prisma ORM. The project implements best practices for building scalable and maintainable APIs.

## Features

- Express.js web framework
- Prisma ORM for database operations
- JWT-based authentication
- Input validation using Joi
- Password hashing with bcrypt
- Logging with Winston
- Unit testing with Jest
- API documentation
- Environment configuration

## Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- npm or yarn package manager
- A running database (supported by Prisma)

## Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd belajar-nodejs-restful-api
```

2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables (create a `.env` file)

```env
APP_HOST=localhost
APP_PORT=3000
# Add your database connection string and other environment variables
```

4. Run database migrations:

```bash
npx prisma migrate dev
```

## Running the Application

### Development Mode

```bash
npm run dev
```

This will start the server using nodemon for automatic reloading.

### Running Tests

```bash
npm test
```

## Project Structure

- `src/` - Source code directory
  - `application/` - Application configuration and setup
  - `controller/` - Request handlers
  - `service/` - Business logic
  - `repository/` - Database operations
  - `validation/` - Input validation schemas
  - `middleware/` - Express middleware
- `prisma/` - Prisma schema and migrations
- `test/` - Test files
- `docs/` - Documentation files

## API Documentation

API endpoints can be tested using the provided `test.http` file. You can use REST Client in VS Code or import it into Postman.

## Dependencies

### Main Dependencies

- express: Web framework
- @prisma/client: Database ORM
- bcrypt: Password hashing
- joi: Input validation
- uuid: UUID generation
- winston: Logging

### Development Dependencies

- jest: Testing framework
- supertest: HTTP testing
- nodemon: Development server
- prisma: Database toolkit
- babel-jest: Testing transpiler

## License

ISC

## Author

Indra Wijaya
