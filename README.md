https://project-2-weather-app--glittering-bubblegum-eab161.netlify.app/

# Weather App

## Project Overview

The Weather App is a full-stack application built using Express.js, React.js, and Node.js. It uses the OpenWeatherMap API to fetch weather data, which is then transformed on the server-side to a format suitable for the frontend components.

The project is divided into two main parts: the `backend` and the `frontend`.

## Backend

The `backend` directory contains all the server-side code for the application. It is responsible for handling API requests and performing server-side operations. The backend fetches data from the OpenWeatherMap API, transforms it, and sends it to the frontend.

### Backend Structure

The `backend` directory is further divided into several subdirectories and files:

- `controllers`: This directory contains all the controller functions for handling API requests.

- `routes`: This directory contains all the route definitions for the API.

- `server.js`: This is the main file for the backend. It sets up the Express server and includes all the middleware and routes.

## Frontend

The `frontend` directory contains all the client-side code for the application. It is built using React.js and styled with Tailwind CSS. It is responsible for rendering the user interface and handling user interactions.

### Frontend Structure

The `frontend` directory is further divided into several subdirectories and files:

- `src`: This directory contains the main source code for the frontend application.

  - `App.jsx`: This is the main component of the application. It is responsible for rendering the main layout and managing the main state of the application.

  - `components`: This directory contains all the reusable components used throughout the application.

    - `Forecast.jsx`: This component displays the weather forecast.

    - `Navbar.jsx`: This component displays the navigation bar.

    - `Weather.jsx`: This component displays the current weather.

    - `ForecastCard.jsx`: This reusable component displays detailed information about the weather forecast.

    - `WeatherInfo.jsx`: This reusable component displays basic information about the current weather.

  - `hooks`: This directory contains custom React hooks used throughout the application.

    - `useGlobalState.jsx`: This custom hook manages the global state of the application.

  - `context`: This directory contains the context providers used throughout the application.

## Getting Started

To install and run the application locally, follow these steps:

1. Clone the repository to your local machine.

2. Navigate to the root directory of the project in your terminal.

3. Install the project dependencies by running the command `yarn install`.

4. Start the development server by running the command `yarn dev`.

The application should now be running on your local machine.
