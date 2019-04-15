/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
//Quotes found on https://www.keepinspiring.me/famous-quotes/
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



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
    var i = Math.floor(Math.random() * 9);
    return quotes[i];
}
//Testing the getRandomQuote function in the console
console.log(getRandomQuote());



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/


function printQuote() {
    var randomQuote = getRandomQuote();
    var HTML = '';
    HTML += '<p class="quote">' + randomQuote.Quote + '</p>';
    HTML += '<p class="source">' + randomQuote.Author;
    if (randomQuote.Citation) {
        HTML += '<span class="citation">' + randomQuote.Citation + '</span>';
    }
    if (randomQuote.Year) {
        HTML += '<span class="year">' + randomQuote.Year + '</span>';
    }
    HTML += '</p>';
    var div = document.getElementById('quote-box');
    div.innerHTML = HTML;


    return HTML;
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.