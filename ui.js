const filmList = document.querySelector("#films");

class UI {
    static addFilmToUI(newFilm) {
        filmList.innerHTML += `
        <tr>
            <td><img src="${newFilm.url}" class="img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><button id = "delete-film" class = "btn btn-danger">Delete Film</button></td>
        </tr>
        `;
    }
    
    static deleteFilmFromUI(deletingFilm) {
        deletingFilm.parentElement.parentElement.remove();
    }
    
    static clearInputs(input1, input2, input3) {
        input1.value = "";
        input2.value = "";
        input3.value = "";
    }
    
    static displayMessages(message, type) {
        const alertField = document.querySelector(".card-body");
        const alert = document.createElement("div");
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
    
        alertField.appendChild(alert);
    
        setTimeout(() => {
            alert.remove();
        }, 1000);
    }
    
    static loadFilmsToUI(films) {
        films.forEach(film => {
            filmList.innerHTML += `
            <tr>
                <td><img src="${film.url}" class="img-thumbnail" width="100px"></td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><button id = "delete-film" class = "btn btn-danger">Delete Film</button></td>
            </tr>
            `;
        });
    }
    
    static clearAllFilmsFromUI() {
        while (filmList.firstElementChild != null) {
            filmList.firstElementChild.remove();
        }
    }    
}
