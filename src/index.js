import './css/common.css';
import './js/fetch-countries.js';
// import axios from 'axios';
// import countryInfoTpl from '../template/country-info-tpl';
// import countriesSearchListTpl from '../template/countries-search-tpl.hbs';
// import debounce from 'lodash.debounce';
// import { error } from "@pnotify/core";
// import "@pnotify/core/dist/PNotify.css";
// import "@pnotify/core/dist/BrightTheme.css";
// import "@pnotify/confirm/dist/PNotifyConfirm.css";


// const refs = {
//     search: document.querySelector('#search'),
//     country: document.querySelector('.country'),
// }

// let searchQuery = '';

// refs.search.addEventListener('input', debounce(onSearchCountry, 500));

// function onSearchCountry(e) {
//     searchQuery = e.target.value;
    
//     axios.defaults.baseURL = 'https://restcountries.eu/rest/v2/name';
    
//     axios.get(`/${searchQuery}`)
//         .then(response => {
//             if (response.data.length > 10) {
//                 const myError = error({ text: "Too many matches found. Please enter a more specific query!"});
//                 return myError;
//             }

//             if (response.data.length >= 2 && response.data.length <= 10) {
//                 const markupCountryList = countriesSearchListTpl(response.data);
//                 refs.country.insertAdjacentHTML('beforeend', markupCountryList);
//                 return;
//             }

//             const markup = countryInfoTpl(response.data);
//             refs.country.insertAdjacentHTML('beforeend', markup);  
//         })
//     .catch(error => console.log(error));
// }

