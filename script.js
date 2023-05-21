fetch(`${BASE_URL}/`)
    .then(response => response.json())
    .then(data => {

        const continentSelect = document.getElementById('continent');
        data.continentNames.forEach(continent => {
            const option = document.createElement('option');
            option.value = continent;
            option.textContent = continent;
            continentSelect.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

function submitForm() {
    const selectedContinent = document.getElementById('continent').value;
    const enteredNumber = document.getElementById('number').value;

    const request = {
        continent: selectedContinent,
        count: parseInt(enteredNumber)
    };

    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = '';

    const loadingDiv = document.createElement('div');
    loadingDiv.classList.add('loading');
    responseDiv.appendChild(loadingDiv);

    fetch(`${BASE_URL}/countries/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
        .then(response => response.json())
        .then(responseData => {
            responseDiv.removeChild(loadingDiv);

            responseData.forEach(country => {
                const countryInfo = document.createElement('div');
                countryInfo.classList.add('country-info');

                const officialName = document.createElement('span');
                officialName.textContent = country.official;
                countryInfo.appendChild(officialName);

                if (country.presentInRestDatabase) {
                    const population = document.createElement('p');
                    population.textContent = 'Population: ' + country.population;
                    countryInfo.appendChild(population);

                    const subregion = document.createElement('p');
                    subregion.textContent = 'Subregion: ' + country.subregion;
                    countryInfo.appendChild(subregion);

                    const capital = document.createElement('p');
                    capital.textContent = 'Capital: ' + country.capital;
                    countryInfo.appendChild(capital);

                    const currencies = document.createElement('p');
                    const currenciesText = country.currencies.map(currency => currency.name + ' (' + currency.symbol + ')').join(', ');
                    currencies.textContent = 'Currencies: ' + currenciesText;
                    countryInfo.appendChild(currencies);

                    const languages = document.createElement('p');
                    languages.textContent = 'Languages: ' + country.languages.join(', ');
                    countryInfo.appendChild(languages);
                } else {
                    const notPresent = document.createElement('p');
                    notPresent.textContent = 'No information found!';
                    countryInfo.appendChild(notPresent);
                }

                responseDiv.appendChild(countryInfo);
            });
        })
        .catch(error => {
            responseDiv.removeChild(loadingDiv);

            console.error('Error:', error);
        });
}
