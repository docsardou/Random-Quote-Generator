/* 
Array of Quotes + Author + Citation + Year  
Quotes found on https://www.bustle.com/articles/121359-25-of-the-best-book-quotes-of-all-time
*/
var quotes = [{
    Quote: "It's the possibility of having a dream come true that makes life interesting.",
    Author: 'Paulo Coelho',
    Citation: 'The Alchemist',
    Year: '1988'
}, {
    Quote: "I cannot fix on the hour, or the spot, or the look or the words, which laid the foundation. It is too long ago. I was in the middle before I knew that I had begun.",
    Author: 'Jane Austen',
    Citation: 'Pride and Prejudice',
    Year: '1797'
}, {
    Quote: 'There is no greater agony than bearing an untold story inside you.',
    Author: 'Maya Angelou',
    Citation: ' I Know Why the Caged Bird Sings',
    Year: '1968'
}, {
    Quote: 'Still, there are times I am bewildered by each mile I have traveled, each meal I have eaten, each person I have known, each room in which I have slept. As ordinary as it all appears, there are times when it is beyond my imagination.',
    Author: 'Jhumpa Lahiri',
    Citation: 'Interpreter of Maladies',
    Year: '1999'
}, {
    Quote: "And so we beat on, boats against the current, borne back ceaselessly into the past.",
    Author: "F. Scott Fitzgerald",
    Citation: 'The Great Gatsby',
    Year: '1924'
}, {
    Quote: "Hello, babies. Welcome to Earth. It's hot in the summer and cold in the winter. It's round and wet and crowded. At the outside, babies, you've got about a hundred years here. There's only one rule that I know of, babies—God damn it, you've got to be kind.",
    Author: "Kurt Vonnegut",
    Citation: "God Bless You, Mr. Rosewater",
    Year: '1965'
}];




// Funtion that generates a random Quote from the quotes array

function getRandomQuote() {
    var i = Math.floor(Math.random() * 7);
    return quotes[i];
}
//Testing the getRandomQuote function in the console
console.log(getRandomQuote());

/*
Funtion that creates an HTML string of a random quote. 
Quotes also containing Citation, Year, or both are tested with 'IF' statements. 
*/
function printQuote() {
    var randomQuote = getRandomQuote();
    var HTMLmessage = '';
    HTMLmessage += '<p class="quote">' + randomQuote.Quote + '</p>';
    HTMLmessage += '<p class="source">' + randomQuote.Author;
    if (randomQuote.Citation) {
        HTMLmessage += '<span class="citation">' + randomQuote.Citation + '</span>';
    }
    if (randomQuote.Year) {
        HTMLmessage += '<span class="year">' + randomQuote.Year + '</span>';
    }
    HTMLmessage += '</p>';
    var div = document.getElementById('quote-box');
    div.innerHTML = HTMLmessage;


    return HTMLmessage;
}



/*
Displays a new quote on page when use clicks "Show another quote".
*/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.