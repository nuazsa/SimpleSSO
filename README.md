# SIMPLE SINGLE SIGN-ON (SSO)

![Schema](https://github.com/nuazsa/SimpleSSO/blob/main/schema.png)

Single Sign-On (SSO) is an authentication method that allows users to access multiple applications and websites using just one set of login credentials. This means users only need to log in once to access various services, eliminating the need to enter their credentials separately for each application.

## Directory Structure
```
SimpleSSO/
├── auth-server/ # Authentication Server
│ ├── src/ # Source code for the authentication server
│ └── index.js # Entry point for the authentication server
│
├── app-server-1/ # Application Server 1
│ ├── src/ # Source code for application server 1
│ └── index.js # Entry point for application server 1
│
├── app-server-2/ # Application Server 2
│ ├── src/ # Source code for application server 2
│ └── index.js # Entry point for application server 2
│
└── README.md # Project documentation
```


## Overview

### Authentication Server (`auth-server`)
- **Responsibility**: Handles user authentication, token generation, and token validation.
- **Key Features**:
  - User login and registration.
  - Generation and validation of JWT (JSON Web Tokens).
  - Centralized authentication for all application servers.

### Application Servers (`app-server-1` and `app-server-2`)
- **Responsibility**: Serve specific applications and rely on the authentication server for user authentication.
- **Key Features**:
  - Protected routes that require valid JWT for access.
  - Middleware to validate tokens received from the authentication server.
  - Seamless user experience by leveraging SSO.

## Getting Started

### Prerequisites
- Node.js and npm installed.
- Basic understanding of Express.js and JWT.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/nuazsa/SimpleSSO.git
   cd SimpleSSO
   ```

2. Install dependencies for each server:
  ```bash
  cd auth-server && npm install
  cd ../app-server-1 && npm install
  cd ../app-server-2 && npm install
  ```

3. Configure environment variables:
   - Create a .env file in each server directory.
   - Example for auth-server/.env:
     ```bash
        PORT=3000
        JWT_SECRET=your_jwt_secret_key
        DATABASE_URL=your_database_url
     ```

### Running the Servers
1. Start the authentication server:
  ```bash
  cd auth-server
  npm start
  ```

2. Start application server 1:
  ```bash
  cd ../app-server-1
  npm start
  ```

3. Start application server 2:
  ```bash
  cd ../app-server-2
  npm start
  ```

## Usage
- Access the authentication server at http://localhost:3000.
- Use the generated JWT to access protected routes on app-server-1 and app-server-2.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Special thanks to the Express.js and JWT communities for their excellent documentation and support.
