# MERN Product Page Application

Full Stack Site created with the MERN stack. Used MongoDB, Express.js, React.js, and Node.js. Chakra UI used as well.

## Features

- **Create Products:** Add new products by specifying their name, price, and image URL.
- **View Products:** Display a list of products, with support for viewing detailed product information.
- **Update Products:** Modify product details using an intuitive modal-based interface.
- **Delete Products:** Remove products from the database with a simple click.
- **Responsive Design:** The application is fully responsive and adapts to different screen sizes.

## Technologies Used

- **Front-End:**
  - React.js (with Vite for fast builds)
  - Chakra UI for responsive and accessible UI components
- **Back-End:**
  - Node.js with Express.js for the server
  - MongoDB for the database
- **State Management:**
  - Zustand for global state management in the React app
- **Other Tools:**
  - React Router for navigation

## Project Structure

- **/frontend**: Contains the React front-end code
- **/backend**: Contains the Express server and database configuration

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shahzaibf/Product-Page
   ```

2. Navigate to the project folder:

   ```bash
   cd Product-page
   ```

3. Install dependencies for both the client and server:

   ```bash
   # For the client
   cd frontend
   npm install

   # For the server
   cd backend
   npm install
   ```

   Configure .env file accordingly. Include PORT and MONGU_URI.

4. Start the development servers:

   ```bash
   # For the client
   cd frontend
   npm run dev

   # For the server
   npm start
   ```
