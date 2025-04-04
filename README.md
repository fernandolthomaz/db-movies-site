> **Note**: This project was developed for educational purposes only.

# Movies Website with React

This is a movie website project developed with React, where you can search and discover movies using the TMDB API. The project also uses Appwrite to store the most popular searches.

🔗 [View Demo](https://movieswebsitedb.netlify.app/)

## About The Project

I developed this website as part of my React studies. The main goal was to create an application that:
- Allows movie searches
- Shows popular movies
- Displays most frequent user searches
- Has a responsive design

## Technologies Used

- React
- Vite
- Tailwind CSS
- TMDB API
- Appwrite
- React Use (for search debounce)

## How to Run the Project

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file and add your keys:
```bash
VITE_TMDB_API_KEY=[tmdb-api-key]
VITE_APPWRITE_PROJECT_ID=[project-id]
VITE_APPWRITE_DATABASE_ID=[database-id]
VITE_APPWRITE_COLLECTION_ID=[collection-id]
```

4. Run the project:
```bash
npm run dev
```

## Features

- Real-time movie search
- Popular movies list
- Most searched movies section
- Responsive layout that works on mobile and desktop

## Project Structure

- `src/components`: React Components
- `src/App.jsx`: Main Component
- `src/appwrite.js`: Appwrite configuration and functions
- `public`: Images and other static files

## Learnings

During this project, I learned:
- How to use external APIs (TMDB)
- How to implement real-time search with debounce
- How to use Tailwind CSS for styling
- How to work with backend services (Appwrite)
- How to create a responsive layout

## Next Steps

I plan to add:
- Movie details page
- Favorites system
- Genre filters
- Pagination

## How to Contribute

If you want to contribute to the project:
1. Fork it
2. Create a branch for your feature
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

# Credits

Project developed as part of React and web development studies.
Fernando Thomaz


