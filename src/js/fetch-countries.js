import debounce from 'lodash.debounce';
import axios from 'axios';
import countryInfoTpl from '../template/country-info-tpl';
import countriesSearchListTpl from '../template/countries-search-tpl.hbs';


const refs = {
    search: document.querySelector('#search'),
    country: document.querySelector('.country'),
}

let searchQuery = '';

refs.search.addEventListener('input', onSearchCountry);

function onSearchCountry(e) {
    searchQuery = e.currentTarget.value;
    
    axios.defaults.baseURL = 'https://restcountries.eu/rest/v2/name';
    
    axios.get(`/${searchQuery}`)
        .then(response => {
            console.log(response.data);
            const markup = countryInfoTpl(response.data);
            refs.country.insertAdjacentHTML('beforeend', markup)
        })
    .catch(error => console.log(error));
}



// refs.search.addEventListener('input', onSearchCountry)

// function onSearchCountry(e) {
//     const countryName = e.currentTarget.value;
    
    
//     axios.defaults.baseURL = 'https://restcountries.eu/rest/v2/name';
//     axios.get(`/${countryName}`)
//     .then(response => {
        // if (!countryName) {
        //     refs.search.innerHTML = '';
        //     return;
        // }

        
            // const markup = countriesSearchListTpl(response.data);
            // refs.country.insertAdjacentHTML('beforeend', markup)
        

        
        // const markup = countryInfoTpl(response.data);
        // refs.country.insertAdjacentHTML('beforeend', markup)
//     })
//     .catch(error => console.log(error));
// }






    
