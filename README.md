# README

## Overview

This repository contains code for a client-side application that communicates with a server-side API to retrieve, update, and delete data. It uses Redux Toolkit and its createApi function to define and manage the API calls.

## Getting Started

To use this code, you will need to have Node.js and npm installed on your machine. Once you have cloned the repository, navigate to the project directory and run the command npm install to install the required dependencies.

## Dependencies

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
- [Redux Toolkit](https://redux-toolkit.js.org/) - An opinionated, efficient, and easy-to-use library for Redux that reduces boilerplate and provides powerful abstractions for managing application state.
- [React Router](https://reactrouter.com/en/main) - A popular routing library for React used for client-side routing.

## How to Use

1. Clone the repository to your local machine.
2. Install dependencies using npm install.
3. Run the development server using npm run dev.
4. Access the application at `/http://localhost:5173/`.

## Project Structure

- `src/`: Contains all the source code for the application.
  -`app/`: Contains the Redux store configuration.
  -`assets/`: Contains all the necessary assets for the application.
  -`components/`: Contains all the React components used in the application.
  -`feature/`: Contains all the Redux features used in the application.
    -`api/`: Contains all the files related to handling API requests.
      -`apiSlice.js`: Defines the API endpoints and their associated functions.
      -`useOfQueryHooks.txt`: Explains how to use Query Hooks that have been created in apiSlice.
  -`App.jsx`: The main component that renders all other components.
  -`index.css`: Contains all the necessary CSS for the application.
  -`main.jsx`: The application's entry point that renders the App component wrapped with the Provider component to provide the Redux store to the entire application.

### Usage

- The `apiSlice` module defines the API endpoints and their associated functions for querying, posting, updating, and deleting data. These functions can be used in the application's components to interact with the API and manage the state of the data.

- The `store` module configures the Redux store with the apiSlice reducer and middleware, allowing the API functions to dispatch actions and update the store's state.

- The `useGetNamesQuery` hook is used for querying data from the server using a GET request. The `useGetNameQuery` hook is used for querying data with dynamic parameters. The `usePostNameMutation` hook is used for posting data to the server using a POST request. The `usePatchNameMutation` hook is used for updating data on the server using a PATCH request. The `useDeleteNameMutation` hook is used for deleting data from the server using a DELETE request.

### Key Features

- Uses Redux Toolkit to manage global state.
- Utilizes createApi and fetchBaseQuery from Redux Toolkit to handle API requests.
- Provides hooks for fetching data with GET requests (`useGetNamesQuery` and `useGetNameQuery`), posting data with POST requests (`usePostNameMutation`), updating data with PATCH requests (`usePatchNameMutation`), and deleting data with DELETE requests (`useDeleteNameMutation`).
- Provides caching and data invalidation for improved performance and accuracy.

## Contributions

Contributions to this project are welcome. If you find a bug or would like to suggest an improvement, please open an issue or a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
