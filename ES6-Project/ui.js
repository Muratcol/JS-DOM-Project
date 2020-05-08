

class Ui {
        static AddFilmToUi = function(newFilm) {
    
        const filmList = document.getElementById("films")
        
        filmList.innerHTML += `
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        `;
        
        }
        static clearInputs = function (element1, element2, element3) {
            element1.value = "";
            element2.value = "";
            element3.value = "";
        }
        static displayMessages = function(message, type){
            const cardBody = document.querySelector("body > div > div > div:nth-child(2)")
            const div = document.createElement("div");
            div.className = `alert alert-${type}`;
            div.setAttribute("role","alert");
            div.textContent = message
            cardBody.appendChild(div);
            setTimeout(function(){
                div.remove()
            },2500);
        }
        static loadAllFilms = function(){
            const filmList = document.getElementById("films");
            contents = JSON.parse(localStorage.getItem("films"))
            contents.forEach(film => {
                filmList.innerHTML +=`<tr>
                    <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                    <td>${film.title}</td>
                    <td>${film.director}</td>
                    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                    </tr>`
                
            });
        }
}

    