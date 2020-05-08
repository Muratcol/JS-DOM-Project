

class Storage {
    static AddFilmToStorage = function(newFilm) {
        let films = this.getFilmsFromStorage();
        films.push(newFilm)
        localStorage.setItem("films", JSON.stringify(films));
    }
    static getFilmsFromStorage = function() {
        let films;
        if (localStorage.getItem("films") === null) {
            films = [];
        }
        else {
            films = JSON.parse(localStorage.getItem("films"));

        }
        return films;
    }

    static DeleteFilm = function(path) {
        let film = path.firstChild.nextSibling.nextSibling.nextSibling.textContent
        let contents = JSON.parse(localStorage.getItem("films"))
        contents.forEach(function(content, index) {
            if (content.title === film){
                contents.splice(index, 1);
            }
        });
        localStorage.setItem("films", JSON.stringify(contents))      
    }
   static deleteAllFilms = function() {localStorage.removeItem("films")} 

}
 

