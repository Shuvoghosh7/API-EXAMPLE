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
        console.log(country)
        const div = document.createElement('div')
        div.classList.add('countries')
        const h1 =document.createElement('h1')
        h1.style.color='green'
        h1.innerText=`countries common Name: ${country.name.common}`
        div.appendChild(h1)
        const p = document.createElement('p')
        p.style.color='red'
        p.innerText=`Capital : ${country.capital}`
        div.appendChild(p)
        countryContainer.appendChild(div)
    });
}