document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  
    const data = await response.json();
    if (data.success) {
      alert("Login Successful!");
      loadMovies();
    } else {
      alert("Login Failed!");
    }
  });
  
  async function loadMovies() {
    const response = await fetch("http://localhost:5000/api/movies");
    const movies = await response.json();
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";
    movies.forEach((movie) => {
      const li = document.createElement("li");
      li.textContent = movie.title;
      movieList.appendChild(li);
    });
  }
  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `<span>${movie.title}</span>
      <button class="btn btn-success btn-sm"><i class="fas fa-download"></i> Download</button>`;
    movieList.appendChild(li);
  });

  // Example movie data
const movies = [
    { id: 1, title: "Inception", img: "https://via.placeholder.com/300x450" },
    { id: 2, title: "Avengers: Endgame", img: "https://via.placeholder.com/300x450" },
    { id: 3, title: "The Dark Knight", img: "https://via.placeholder.com/300x450" },
    { id: 4, title: "Interstellar", img: "https://via.placeholder.com/300x450" },
  ];
  
  // Reference to the movie container
  const movieContainer = document.getElementById("movie-container");
  
  // Function to display movies
  function displayMovies(movieList) {
    movieContainer.innerHTML = ""; // Clear existing movies
    movieList.forEach((movie) => {
      const movieCard = document.createElement("div");
      movieCard.className = "col-md-3 mb-4";
      movieCard.innerHTML = `
        <div class="card">
          <img src="${movie.img}" class="card-img-top" alt="${movie.title}">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <button class="btn btn-danger w-100"><i class="fas fa-play"></i> Watch Now</button>
          </div>
        </div>
      `;
      movieContainer.appendChild(movieCard);
    });
  }
  
  // Initial display of all movies
  displayMovies(movies);

  import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

function recommendMovies(userHistory) {
  const recommendations = getRecommendations(userHistory); // Logic ya filamu inayotegemea historia
  const container = document.getElementById('movie-container');
  recommendations.forEach(movie => {
    const movieElement = `
      <div class="col-md-3 mb-4">
        <div class="card">
          <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.description}</p>
          </div>
        </div>
      </div>`;
    container.innerHTML += movieElement;
  });
}

document.getElementById('language-switcher').addEventListener('change', function(e) {
  const selectedLanguage = e.target.value;
  // Logic ya kubadili lugha
  alert('Language switched to ' + selectedLanguage);
});

document.getElementById('search-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const title = document.getElementById('search-title').value.toLowerCase();
  const genre = document.getElementById('search-genre').value.toLowerCase();
  const year = document.getElementById('search-year').value;

  fetchMovies(title, genre, year);
});

function fetchMovies(title, genre, year) {
  const movies = [
    { title: "Inception", genre: "action", year: 2010 },
    { title: "The Dark Knight", genre: "action", year: 2008 },
    { title: "Avengers: Endgame", genre: "action", year: 2019 },
    { title: "Inside Out", genre: "comedy", year: 2015 },
  ];

  const filteredMovies = movies.filter(movie => {
    return (!title || movie.title.toLowerCase().includes(title)) &&
           (!genre || movie.genre.toLowerCase() === genre) &&
           (!year || movie.year.toString() === year);
  });

  displayMovies(filteredMovies);
}

function displayMovies(movies) {
  const container = document.getElementById('movie-container');
  container.innerHTML = "";

  if (movies.length === 0) {
    container.innerHTML = "<p class='text-danger'>No movies found.</p>";
    return;
  }

  movies.forEach(movie => {
    const movieCard = `
      <div class="col-md-3 mb-4">
        <div class="card">
          <img src="https://via.placeholder.com/300x400" class="card-img-top" alt="${movie.title}">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">Genre: ${movie.genre}<br>Year: ${movie.year}</p>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += movieCard;
  });
}

const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const switcher = document.getElementById('theme-switcher');
switcher.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    switcher.textContent = 'Switch to Light Mode';
  } else {
    switcher.textContent = 'Switch to Dark Mode';
  }
});

let watchlist = [];

function addToWatchlist(movie) {
  watchlist.push(movie);
  alert(`${movie} has been added to your Watchlist!`);
}

document.querySelectorAll('.add-watchlist').forEach(button => {
  button.addEventListener('click', () => {
    const movieName = button.getAttribute('data-movie-name');
    addToWatchlist(movieName);
  });
});

AOS.init();

document.getElementById('signup-link').addEventListener('click', function (e) {
  e.preventDefault();
  alert('Redirecting to Sign Up Page!');
});


fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => {
    const trendingMovies = data.results;
    const container = document.getElementById('trending-movies');
    trendingMovies.forEach(movie => {
      const movieElement = `
        <div class="col-md-3">
          <div class="card">
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="card-img-top" alt="${movie.title}">
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text">${movie.release_date}</p>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += movieElement;
    });
  });


  document.getElementById('login-form').addEventListener('submit', function (e) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email || !password) {
      e.preventDefault();
      alert('Please fill in all fields.');
    }
  });
  





  
  
  