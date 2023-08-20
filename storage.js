class Storage {
    static addFilmToStorage(newFilm) {
        let films = this.getFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films", JSON.stringify(films));
    }
    
    static deleteFilmFromStorage(filmTitle) {
        let films = this.getFilmsFromStorage();
        films.forEach((film, i) => {
            if (film.title === filmTitle) {
                films.splice(i,1);
            }
        });
    
        localStorage.setItem("films", JSON.stringify(films));
    }
    
    static getFilmsFromStorage() {
        let films = localStorage.getItem("films");
        return films ? JSON.parse(films) : [];
    }
    
    static clearAllFilmsFromStorage() {
        localStorage.removeItem("films");
    }
}