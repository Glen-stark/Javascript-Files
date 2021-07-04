
getQuote = () => {
    const url =  "https://geek-quote-api.herokuapp.com/v1/quote"
fetch(url)
.then(response => response.json())
.then(data => {document.getElementById("display").innerHTML = data.quote
});

}
    




