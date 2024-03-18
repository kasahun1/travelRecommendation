const searchResults = document.getElementById("searchResults");
const btnReset = document.getElementById("btnReset");
const searchInput = document.getElementById("searchInput");
const btnSearch = document.getElementById("btnSearch");

function resetForm() {
    searchInput.value = "";
    searchResults.classList.add("invisible");
}

function searchDestination() {
    const input = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';
    let searchResultsConstructor = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            if (input == "country" || input == "countries") {
                resultsFinder = data.countries;
                for (let i = 0; i < resultsFinder.length; i++) {
                    for (let j = 0; j < resultsFinder[i].cities.length; j++) {
                        searchResultsConstructor += `<li class="searchResultsContent">`;
                        searchResultsConstructor += `<img src="${resultsFinder[i].cities[j].imageUrl}" class="searchResultsImages">`;
                        searchResultsConstructor += `<p><h1>${resultsFinder[i].cities[j].name}</h1></p>`;
                        searchResultsConstructor += `<p>${resultsFinder[i].cities[j].description}</p>`;
                        searchResultsConstructor += `<button class="bookNowBtn">Visit</button>`;
                        searchResultsConstructor += `</li>`;
                    }
                }
            } else if (input == "temple" || input == "temples") {
                resultsFinder = data.temples;
                for (let i = 0; i < resultsFinder.length; i++) {
                    searchResultsConstructor += `<li class="searchResultsContent">`;
                    searchResultsConstructor += `<img src="${resultsFinder[i].imageUrl}" class="searchResultsImages">`;
                    searchResultsConstructor += `<p><h1>${resultsFinder[i].name}</h1></p>`;
                    searchResultsConstructor += `<p>${resultsFinder[i].description}</p>`;
                    searchResultsConstructor += `<button class="bookNowBtn">Visit</button>`;
                    searchResultsConstructor += `</li>`;
                }
                console.log(resultsFinder);
            } else if (input == "beach" || input == "beaches") {
                resultsFinder = data.beaches;
                for (let i = 0; i < resultsFinder.length; i++) {
                    searchResultsConstructor += `<li class="searchResultsContent">`;
                    searchResultsConstructor += `<img src="${resultsFinder[i].imageUrl}" class="searchResultsImages">`;
                    searchResultsConstructor += `<p><h1>${resultsFinder[i].name}</h1></p>`;
                    searchResultsConstructor += `<p>${resultsFinder[i].description}</p>`;
                    searchResultsConstructor += `<button class="bookNowBtn">Visit</button>`;
                    searchResultsConstructor += `</li>`;
                }
            } else {
                searchResultsConstructor += `<li class="searchResultsContent">`;
                searchResultsConstructor += `<p><h1>No results found.</h1></p>`;
                searchResultsConstructor += `<p>Please try a different query.</p>`;
                searchResultsConstructor += `</li>`;
            }
            searchResults.innerHTML = searchResultsConstructor;
            searchResults.classList.remove("invisible");
        });
}

btnReset.addEventListener("click", resetForm);
btnSearch.addEventListener("click", searchDestination);