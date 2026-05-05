📚 Bookstore API (MERN Stack)
A professional, production-ready RESTful API for managing a bookstore inventory. Built with Node.js, Express, and MongoDB, this project demonstrates clean architecture, modular folder structures, and industry-standard error handling.

🚀 Key Features
Full CRUD Operations: Seamlessly Create, Read, Update, and Delete book records.

Clean Async Logic: Utilizes express-async-handler to eliminate messy try/catch blocks.

Global Error Middleware: Centralized error handling for consistent JSON responses.

Secure Configuration: Environment variables managed via dotenv and protected by .gitignore.

CORS Enabled: Ready for secure integration with React, Vue, or Angular frontends.

🛠️ Tech Stack & Libraries
Backend: Node.js & Express.js

Database: MongoDB Atlas (via Mongoose ODM)

Security: CORS & Dotenv

Testing: Postman & manual API validation

📂 Project Structure
bookstore-api-mern/
├── config/             # Database connection logic
│   └── db.js
├── controllers/        # Business logic and request handling
│   └── bookController.js
├── models/             # Mongoose schema definitions
│   └── Book.js
├── routes/             # API endpoint definitions
│   └── bookRoutes.js
├── .env                # Private environment variables (Hidden)
├── .gitignore          # Git exclusion rules
├── server.js           # Main entry point & Middleware
└── package.json        # Project metadata and dependencies

⚙️ Setup and Installation
-----------------------------
1. PrerequisitesNode.js (v16+) and npm installed.

A MongoDB Atlas connection string.

2. Local InstallationBash# Clone the repository

git clone https://github.com/rahamat554566/bookstore-api-mern.git

# Enter project directory
cd bookstore-api-mern

# Install dependencies

npm install

3. Configuration

Create a .env file in the root folder and add your credentials:Code snippetPORT=5000
MONGO_URI=your_mongodb_connection_string_here
NODE_ENV=development

4. Running the AppBash

# Start in Development mode (Nodemon)

npm run dev

# Start in Production mode

npm start

📡 API Endpoints:
Method,   Endpoint,      Description
GET,     /api/books,     Retrieve all books
POST,    /api/books,     Add a new book
PUT,     /api/books/:id, Update book details by ID
DELETE,  /api/books/:id, Remove a book by ID


👨‍💻 Author

Mohammad Rahamat Khan
MERN Stack Developer & QA Automation Engineer