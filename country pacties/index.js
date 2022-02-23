const getAllcountry = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showCountry(data))
}
getAllcountry()

const showCountry = countries =>{
    const countryContainer = document.getElementById('country-name')
    
    countries.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('country-class')
        div.innerHTML=`
        <h1>${country.name.common}</h1>
        <p> ${country.capital}</p>
        <button onclick="countryDetails('${country.name.common}')">Click Now</button>
        `
        countryContainer.appendChild(div)
        // console.log(country)
    }); 
    // console.log(countries)
}

const countryDetails = nameinfo =>{
    const url = `https://restcountries.com/v3.1/name/${nameinfo}`
     fetch(url)
    .then(res => res.json())
    .then(data => displyCountries(data[0]))
    
}

const displyCountries = countryName =>{
    const countryDetalis = document.getElementById("country-detalis")
    countryDetalis.innerHTML=`
    <h1>Country Name: ${countryName.name.common}</h1>
    <h3>Country Population: ${countryName.population}</h3>
    `
}