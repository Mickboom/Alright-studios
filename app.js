document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "69398c8228ad0ef2282393e5c5e98323=";

    function fetchMovies(category, elementId) {
        fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const row = document.getElementById(elementId);
            row.innerHTML = ""; 

            data.results.forEach(movie => {
                const movieCard = document.createElement("div");
                movieCard.classList.add("movie-card");
                movieCard.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                    <h5>${movie.title}</h5>
                    <button class="btn btn-warning btn-sm" onclick="showAdThenTrailer(${movie.id})">Watch Trailer</button>
                `;
                row.appendChild(movieCard);
            });
        });
    }

    window.showAdThenTrailer = function(movieId) {
        document.getElementById("trailerModalContainer").innerHTML = `
            <div class="modal">
                <div class="modal-content">
                    <p>Advertisement</p>
                    <button onclick="fetchTrailer(${movieId})">Skip Ad</button>
                </div>
            </div>
        `;
    };

    window.fetchTrailer = function(movieId) {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                const trailerKey = data.results[0].key;
                document.getElementById("trailerModalContainer").innerHTML = `
                    <div class="modal">
                        <iframe class="modal-content" src="https://www.youtube.com/embed/${trailerKey}" frameborder="0" allowfullscreen></iframe>
                    </div>
                `;
            } else {
                alert("Trailer not available.");
            }
        });
    };

    fetchMovies("popular", "trending");
    fetchMovies("top_rated", "top-rated");
    fetchMovies("upcoming", "upcoming");
});const API_URL = "69398c8228ad0ef2282393e5c5e98323"; // Badilisha na API yako halisi

async function searchMovies() {
    let input = document.getElementById("searchInput").value.trim();
        let resultsContainer = document.getElementById("searchResults");
            
                resultsContainer.innerHTML = "";
                    if (input === "") {
                            resultsContainer.style.display = "none";
                                    return;
                                        }

                                            try {
                                                    let response = await fetch(API_URL + encodeURIComponent(input));
                                                            let movies = await response.json();

                                                                    if (movies.length === 0) {
                                                                                resultsContainer.innerHTML = "<div class='result-item'>Hakuna matokeo</div>";
                                                                                            resultsContainer.style.display = "block";
                                                                                                        return;
                                                                                                                }

                                                                                                                        movies.forEach(movie => {
                                                                                                                                    let movieDiv = document.createElement("div");
                                                                                                                                                movieDiv.className = "result-item";
                                                                                                                                                            movieDiv.innerHTML = `
                                                                                                                                                                            <img src="${movie.poster}" alt="${movie.title}">
                                                                                                                                                                                            <div>
                                                                                                                                                                                                                <strong>${movie.title}</strong> (${movie.year})<br>
                                                                                                                                                                                                                                    <small>${movie.genre}</small>
                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                `;
                                                                                                                                                                                                                                                                            movieDiv.onclick = () => window.location.href = `/movie/${movie.id}`;
                                                                                                                                                                                                                                                                                        resultsContainer.appendChild(movieDiv);
                                                                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                                                                        resultsContainer.style.display = "block";

                                                                                                                                                                                                                                                                                                            } catch (error) {
                                                                                                                                                                                                                                                                                                                    console.error("Hitilafu kwenye utafutaji:", error);
                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                        }