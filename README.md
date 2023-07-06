# Moss Demo Booking

Welcome to the Moss Demo Booking project! This project provides a web application that allows users to book a free demo of the Moss software. Users can fill out a form with their details and schedule a demo appointment.

## Features

- User-friendly form for capturing user information
- Real-time validation for form fields
- Privacy policy acceptance checkbox
- Integration with Calendly for scheduling demo appointments
- Fetching countries data from the REST Countries API

## Technologies Used

- React: JavaScript library for building user interfaces
- Create React App: Tool for bootstrapping React applications
- Styled Components: CSS-in-JS library for styling components
- Calendly: Online appointment scheduling integration
- REST Countries API: External API for fetching countries data
- TypeScript: Typed superset of JavaScript
- Axios: Promise-based HTTP client for making API requests
- ESLint: JavaScript linter for identifying and reporting code issues
- Prettier: Opinionated code formatter for consistent code style

## Getting Started

To get started with the Moss Demo Booking project, follow these steps:

1. Clone the repository: `git clone <https://github.com/Angelikibak/book-demo-form>`
2. Install the dependencies: `npm install`
3. Start the development server: `npm start`
4. Access the application in your browser at: `http://localhost:3000`

## Fetching Countries Data

The project fetches data about countries from the REST Countries API. This data is used to populate a select dropdown in the form, allowing users to select their country of residence. The API is called using Axios, a promise-based HTTP client, to retrieve the country data.

## TypeScript

The Moss Demo Booking project is built using TypeScript, a typed superset of JavaScript. TypeScript provides static type checking and enhances the developer experience by enabling better code organization, improved tooling, and early error detection. The project includes type definitions for the components, functions, and API responses.

## Code Quality Tools

The project utilizes ESLint and Prettier for maintaining code quality and consistency.

- ESLint is a JavaScript linter that helps identify and report code issues. It enforces coding conventions, detects potential errors, and encourages best practices. The ESLint configuration for the project can be found in the `.eslintrc.json` file.
- Prettier is an opinionated code formatter that ensures consistent code style across the project. It automatically formats the code based on a set of predefined rules. The Prettier configuration for the project can be found in the `.prettierrc` file.

## Hosting on Netlify

The Moss Demo Booking project is hosted on Netlify, a cloud platform for hosting web applications. The deployment process is automated using Netlify's continuous deployment feature. Every time you push changes to the `main` branch of the repository, Netlify automatically builds and deploys the updated version of the application.

You can access the hosted project at: [https://your-netlify-project-url.com](https://your-netlify-project-url.com)

