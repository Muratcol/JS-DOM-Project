const form = document.getElementById("film-form");

const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelector("body > div > div > div:nth-child(3)");

eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    /* form.addEventListener("DOMContentLoaded", function(){
        let films = storage.getFilmsFromStorage();
        ui2.loadAllFilms(films);
        ui.loadAllFilms();
    }) */
    document.addEventListener('DOMContentLoaded', (event) => {
        Ui.loadAllFilms();
    });
    cardBody.addEventListener("click", deleteFilm);

}
function addFilm(e){
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value


    if (title === "" | director === "" | url === ""){
        Ui.displayMessages("Fill Blank Inputs", "danger")
    }
    else {
        const newFilm = new Film(title, director, url);
        Ui.AddFilmToUi(newFilm); // Updating Movie section
        Storage.AddFilmToStorage(newFilm); //Uploading movies to storage
        Ui.displayMessages("Movie Uploaded to the database", "success") //Success Alert
    }
    Ui.clearInputs(titleElement, directorElement, urlElement);
    e.preventDefault();
};

function deleteFilm(e){
    if (e.target.id === "delete-film") {
        e.target.parentElement.parentElement.remove()
        Storage.DeleteFilm(e.target.parentElement.parentElement)
        Ui.displayMessages("Movie deleted", "success")
    }
    if (e.target.id === "clear-films") {
        let delete_films = prompt("Write 'Yes' if you sure clear all films")
        if (delete_films === "Yes") {
            document.getElementById("films").innerHTML = "" 
            Storage.deleteAllFilms()
            Ui.displayMessages("All movies deleted from the list", "success")
        }     
    }
}