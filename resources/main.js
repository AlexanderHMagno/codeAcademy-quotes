const generator = document.getElementById("generator-quote");
const title = document.getElementsByClassName("title-center")[0];
const author = document.getElementsByClassName("author-center")[0];
let quotes = "";

function loadNewQuote(array) {
    const random = Math.floor((Math.random() * 101))

    if (array) {
        const data = array.quotes[random];

        title.innerHTML = `<span class="first-quote">"</span>${data.quote}<span class="last-quote">"</span>`;
        author.innerHTML = data.author;
    }

}

function loadQuotes() {
    

    if (!quotes) {
        url = "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true);
        xhr.send('');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4){
                quotes = JSON.parse(xhr.responseText)
                return loadNewQuote(quotes);
                
            }
        };
    } 
    
    return loadNewQuote(quotes);
    
   

}

generator.addEventListener('click', loadQuotes)
