const form = document.querySelector("#film-form");
const titleInput = document.querySelector("#title");
const directorInput = document.querySelector("#director");
const urlInput = document.querySelector("#url");
const filmsCard = document.querySelectorAll(".card-body")[1];
const clearFilmsBtn = document.querySelector("#clear-films");

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", () => UI.loadFilmsToUI(Storage.getFilmsFromStorage()));
    filmsCard.addEventListener("click", deleteFilm);
    clearFilmsBtn.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
    const title = titleInput.value;
    const director = directorInput.value;
    const url = urlInput.value;

    if (title === "" || director === "" || url === "") {
        UI.displayMessages("Fill all the fields...", "danger");
    }
    else {
        const newFilm = new Film(title, director, url);
        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm);
        UI.displayMessages("Film has been added successfully...", "success");
    }

    UI.clearInputs(titleInput, directorInput, urlInput);

    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Film has been deleted successfully...", "success");
    }
}

function clearAllFilms() {
    if (confirm("Are you sure?")) {
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
}