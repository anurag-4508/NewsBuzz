# NewsBuzz
[Live Link](https://thenewsbuzz.netlify.app/)

NewsBuzz is a responsive web application built with React, Vite, and Tailwind CSS for the frontend and Node.js for the backend. The app fetches the latest news headlines from a custom backend which, in turn, fetches news from `newsapi.org`.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features
- Responsive design using Tailwind CSS
- Displays the latest news headlines with images, sources, and publication dates
- Proper error handling
- Sticky navbar and footer
- Fallback to default image if no image is available

## Installation

### Backend
1. Navigate to the `backend` folder:
    ```sh
    cd backend
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Create a folder config and add a file `config.env` file in the `config` folder and add your `API_KEY`:
    ```sh
    API_KEY=your_news_api_key_here
    ```
4. Start the backend server:
    ```sh
    npm start
    ```

### Frontend
1. Navigate to the `frontend` folder:
    ```sh
    cd frontend
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Start the frontend development server:
    ```sh
    npm run dev
    ```

## Usage
- Ensure both backend and frontend servers are running.
- Open your browser and navigate to `http://localhost:5173` (or the port displayed by Vite) to view the application.

## Screenshots

### Home Page
![Home Page](https://i.ibb.co/vHyx1kw/screencapture-thenewsbuzz-netlify-app-2024-06-09-11-41-14.png)



## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
