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
    Quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
    Author: 'Dr.Seus'
}, {
    Quote: "I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.",
    Author: 'Marilyn Monroe'
}, {
    Quote: 'Get busy living or get busy dying.',
    Author: 'Stephen King'
}, {
    Quote: 'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.',
    Author: 'Mark Caine'
}, {
    Quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    Author: "Helen Keller"
}, {
    Quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do",
    Author: "Mark Twain"
}, {
    Quote: "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    Author: 'Audre Lorde'
}, {
    Quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people",
    Author: "Eleanor Roosevelt"
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
    HTML += '<p class="source">' + randomQuote.Author + '</p>';

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