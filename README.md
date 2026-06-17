# Node.js Production Grade REST API

A scalable, production-ready REST API built with Node.js, Express.js, MongoDB, and JWT Authentication following industry-standard architecture and best practices.

---

# Features

## Authentication & Authorization

* User Registration
* User Login
* JWT Access Token Authentication
* JWT Refresh Token Generation
* Protected Routes
* Authentication Middleware
* Password Hashing using bcryptjs
* Role-Based User Structure

## Architecture

* Feature-Based Modular Architecture
* Controller Layer
* Service Layer
* Repository Layer
* DTO / Response Mapper
* Global Error Handling
* Async Error Handling
* Clean Separation of Concerns

## Validation

* Request Validation using Zod
* Centralized Validation Middleware
* Standardized Validation Error Responses

## Security

* Password Hashing (bcryptjs)
* JWT Authentication
* Helmet Security Headers
* HPP Protection
* CORS Support
* Environment Variables Management

## Logging

* Winston Logger Integration

---

# Tech Stack

## Backend

* Node.js
* Express.js 5

## Database

* MongoDB
* Mongoose

## Authentication

* JWT (jsonwebtoken)
* bcryptjs

## Validation

* Zod

## Logging

* Winston

## Security

* Helmet
* HPP
* CORS

---

# Project Structure

```text
src/

├── config/
│   ├── database.js
│   └── logger.js
│
├── constants/
│
├── middlewares/
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   └── validate.middleware.js
│
├── modules/
│
│   ├── auth/
│   │   ├── auth.controller.js
│   │   ├── auth.routes.js
│   │   ├── auth.service.js
│   │   └── auth.validation.js
│   │
│   └── user/
│       ├── user.controller.js
│       ├── user.model.js
│       ├── user.repository.js
│       ├── user.routes.js
│       ├── user.service.js
│       └── user.mapper.js
│
├── routes/
│   └── index.js
│
├── utils/
│   ├── ApiError.js
│   ├── ApiResponse.js
│   ├── asyncHandler.js
│   ├── jwt.js
│   └── sendResponse.js
│
├── app.js
└── server.js
```

---

# Architecture Flow

```text
Request
   ↓
Route
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
MongoDB
```

---

# Implemented APIs

## Authentication

### Register User

```http
POST /api/v1/auth/register
```

Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "12345678"
}
```

Response:

```json
{
  "success": true,
  "message": "User registered successfully"
}
```

---

### Login User

```http
POST /api/v1/auth/login
```

Request:

```json
{
  "email": "john@example.com",
  "password": "12345678"
}
```

Response:

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {},
    "accessToken": "",
    "refreshToken": ""
  }
}
```

---

## User APIs

### Get Logged In User

```http
GET /api/v1/users/me
```

Headers:

```http
Authorization: Bearer ACCESS_TOKEN
```

---

### Get User By ID

```http
GET /api/v1/users/:id
```

---

# Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

NODE_ENV=development

MONGODB_URI=mongodb://localhost:27017/node-rest-api

JWT_ACCESS_SECRET=your_access_secret

JWT_REFRESH_SECRET=your_refresh_secret

ACCESS_TOKEN_EXPIRES=15m

REFRESH_TOKEN_EXPIRES=7d
```

---

# Installation

Clone repository:

```bash
git clone <repository-url>
```

Navigate to project:

```bash
cd node-rest-api
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Start production server:

```bash
npm start
```

---

# Security Implementations

Implemented:

* Password Hashing using bcryptjs
* JWT Authentication
* Protected Routes
* Helmet Middleware
* HPP Middleware
* Validation Middleware
* Environment Variable Protection

---

# Error Handling

Centralized error handling middleware is implemented.

Features:

* Consistent Error Response Structure
* Async Error Handling
* Custom ApiError Class
* Development Stack Trace Support

Example:

```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

---

# Validation

Validation is handled using Zod schemas.

Features:

* Request Body Validation
* Query Validation
* Parameter Validation
* Standardized Validation Responses

---

# Logging

Winston Logger is configured for:

* Application Logs
* Error Logs
* Database Connection Logs

Example:

```text
MongoDB Connected: localhost
Server running on port 5000
```

---

# Current Development Progress

Completed:

* Express Setup
* MongoDB Connection
* Modular Architecture
* Repository Pattern
* Service Layer
* User Registration
* Password Hashing
* User Login
* JWT Access Tokens
* JWT Refresh Tokens
* Protected Routes
* Authentication Middleware
* Zod Validation
* Winston Logger

---

# Planned Features

## Authentication

* Refresh Token API
* Logout API
* Refresh Token Storage
* Token Revocation

## Authorization

* Role-Based Access Control (RBAC)
* Admin Routes

## API Enhancements

* Pagination
* Filtering
* Searching
* Sorting
* Query Builder Utility

## Documentation

* Swagger/OpenAPI Documentation

## Performance

* Redis Caching
* Rate Limiting
* Queue System

## DevOps

* Docker Support
* CI/CD Pipeline
* Production Deployment

## Testing

* Unit Testing
* Integration Testing
* API Testing with Supertest

---

# Author

Manish Kumar

Backend Developer

Tech Stack:
Node.js | Express.js | MongoDB | Mongoose | JWT | Zod | Winston
