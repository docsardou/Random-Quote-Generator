/* 
Array of Quotes + Author + Citation + Year  
Quotes found on https://www.bustle.com/articles/121359-25-of-the-best-book-quotes-of-all-time
*/

var quotes = [{
    Quote: "It's the possibility of having a dream come true that makes life interesting.",
    Author: 'Paulo Coelho',
    Citation: 'The Alchemist',
    Year: '1988',
    Category: 'Fantasy'
}, {
    Quote: "I cannot fix on the hour, or the spot, or the look or the words, which laid the foundation. It is too long ago. I was in the middle before I knew that I had begun.",
    Author: 'Jane Austen',
    Citation: 'Pride and Prejudice',
    Year: '1797',
    Category: 'Novel of manners'
}, {
    Quote: 'There is no greater agony than bearing an untold story inside you.',
    Author: 'Maya Angelou',
    Citation: ' I Know Why the Caged Bird Sings',
    Year: '1968',
    Category: 'Autobiography'
}, {
    Quote: 'Still, there are times I am bewildered by each mile I have traveled, each meal I have eaten, each person I have known, each room in which I have slept. As ordinary as it all appears, there are times when it is beyond my imagination.',
    Author: 'Jhumpa Lahiri',
    Citation: 'Interpreter of Maladies',
    Year: '1999',
    Category: 'Short stories'
}, {
    Quote: "And so we beat on, boats against the current, borne back ceaselessly into the past.",
    Author: "F. Scott Fitzgerald",
    Citation: 'The Great Gatsby',
    Year: '1924',
    Category: 'Novel'
}, {
    Quote: "Hello, babies. Welcome to Earth. It's hot in the summer and cold in the winter. It's round and wet and crowded. At the outside, babies, you've got about a hundred years here. There's only one rule that I know of, babies—God damn it, you've got to be kind.",
    Author: "Kurt Vonnegut",
    Citation: "God Bless You, Mr. Rosewater",
    Year: '1965',
    Category: 'Novel'
}];

// Funtion that generates a random Quote from the quotes array

function getRandomQuote() {
    var i = Math.floor(Math.random() * 7);
    return quotes[i];
}

// Creates a random background color

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + ", " + y + ", " + z + ")";

    document.body.style.background = bgColor;
}

/*
Funtion that creates an HTML string of a random quote. 
Quotes also containing Citation, Year, or Category are tested with 'IF' statements. 
Calls random background function with each random quote generated. 
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
    if (randomQuote.Category) {
        HTMLmessage += '<span class="category">' + randomQuote.Category + '</span>';
    }
    HTMLmessage += '</p>';
    var div = document.getElementById('quote-box');
    div.innerHTML = HTMLmessage;

    random_bg_color();
    return HTMLmessage;
}

// Auto-refreashes the page after 20 seconds (20000 milliseconds)

var pageRefreash = window.setInterval(printQuote, 20000);

/*
Displays a new quote on page when use clicks "Show another quote".
*/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.