const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displyCountries(data))
}

loadCountries()
const displyCountries = countries =>{
    
  /*   for(const country of countries){
        console.log(country)
    } */
    const countryContainer = document.getElementById("countries")
    countries.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('countries')
        div.innerHTML = `
        <h1> ${country.name.common}</h1>
        <p> ${country.capital}</p>
        <button onclick="countryDetails('${country.name.common}')"> Details </button>
        `
        countryContainer.appendChild(div)
    });
}

const countryDetails = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}`
     fetch(url)
    .then(res => res.json())
    .then(data => displyCountriesDetails(data[0]))
    // console.log(url)
}

const displyCountriesDetails = country =>{
    const countryDiv = document.getElementById("country-details")
    countryDiv.innerHTML = `
    <h4>Country Namne : ${country.name.common}</h4>
    <p><b>Total population<b> : ${country.population}</p>
    <img src="${country.flags.png}">
    `
    console.log(country)
}