# Secure API Server

A REST API server with JWT authentication.

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

## Endpoints

- `GET /` - Welcome message
- `POST /auth/login` - Login and get JWT token
- `GET /users/list` - List users (protected)
- `POST /users/register` - Register new user (protected)
