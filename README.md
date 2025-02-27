# ShopCart - E-Commerce App

ShopCart is a simple e-commerce application built with React. It allows users to browse products, add them to the cart, and manage the cart items. The app uses the [Fake Store API](https://fakestoreapi.com) to fetch product data.

## Features

- **Product Listing**: Display a list of products fetched from the Fake Store API.
- **Search Functionality**: Search for products by name.
- **Add to Cart**: Add products to the cart with quantity management.
- **Cart Management**: Increase, decrease, or remove items from the cart.
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop screens.
- **Cart Count**: Displays the total number of items in the cart in the header.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling routing in the app.
- **Context API**: For state management (cart state).
- **CSS**: For styling the components.
- **Fake Store API**: For fetching product data.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/shopcart.git

## Project Structure
shopcart/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Home.js
│   │   ├── ProductCard.js
│   │   └── Cart.js
│   ├── context/
│   │   └── CartContext.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── README.md
├── package.json
└── README.md