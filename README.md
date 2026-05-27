# React Bootcamp Project

A polished online shopping UI built with React and Vite. This project includes user registration, login validation, protected dashboard routes, cart functionality, a dummy checkout flow, and responsive product browsing.

## Key Features

- **React** for component-driven UI
- **Vite** for fast development and build
- **React Router** for page navigation and nested routes
- **Redux Toolkit** for state management
- **useState** and **useEffect** for local component state and lifecycle
- **Protected routes** with session-based authentication
- **LocalStorage** user storage with hashed password validation
- **Responsive product grid** with card styling
- **Dummy payment page** for checkout UI
- **Logout** and session cleanup

## Project Structure

- `src/App.jsx` - app routes and route nesting
- `src/components/Home.jsx` - landing page
- `src/components/NavBar.jsx` - public site navigation
- `src/components/Login.jsx` - login form and validation
- `src/components/Reg.jsx` - registration form with password hashing
- `src/components/user/UserDashboard.jsx` - protected dashboard wrapper
- `src/components/user/UserNav.jsx` - dashboard navigation with logout
- `src/components/user/UserHome.jsx` - product listing page
- `src/components/user/Cart.jsx` - cart UI and checkout navigation
- `src/components/user/Payment.jsx` - dummy payment page
- `src/components/user/ProductDetails.jsx` - product detail view
- `src/store/cartSlice.js` - Redux Toolkit cart slice
- `src/store/store.js` - Redux store configuration
- `src/utils/auth.js` - auth helpers, hashing and session management

## Screenshots

Add your screenshots in `reactBootcampProject-main\src\assets` and reference them here:
- `src/assets/home.png`
- `src/assets/login.png`
- `src/assets/register.png`
- `src/assets/products.png`
- `src/assets/cart.png`
- `src/assets/payment.png`

Example markdown:

```md
![Home Page](src/assets/home.png)
![Login Page](src/assets/login.png)
![Register Page](src/assets/register.png)
![Dashboard](src/assets/products.png)
![Cart Page](src/assets/cart.png)
![Payment Page](src/assets/payment.png)
```

## Installation

```bash
npm install
npm run dev
```

Open the app in your browser at the address shown by Vite.

## How It Works

1. **Register** a user in `Reg.jsx`.
2. Passwords are hashed using `SHA-256` before saving in `localStorage`.
3. **Login** checks the entered credentials against registered users.
4. A valid session stores a token and current user info in `localStorage`.
5. `ProtectedRoute` redirects unauthenticated users back to `/login`.
6. The dashboard shows the product grid, cart, and payment flow.

## Notes

- This project is a frontend demo and does not process real payments.
- Authentication is stored in browser local storage for demonstration only.
- Use the `src/assets` folder to store screenshots or other static media.

## Technologies Used

- React
- Vite
- React Router DOM
- Redux Toolkit
- JavaScript
- CSS

## Contact

For improvements, add more user flows such as product search, order history, or real backend authentication.
