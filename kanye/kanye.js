const loadQuotes = ()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuots(data))
}

const displayQuots = quotes =>{
    const quoteContainer =document.getElementById("quote");
    quoteContainer.innerText=quotes.quote
}