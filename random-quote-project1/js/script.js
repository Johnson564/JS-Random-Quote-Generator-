//array of objects named "quotes" to hold a collection of quotes
var quotes = [
    {
      quote: "Yesterday's weirdness is tomorrow's reason why.",
      source: "Hunter S. Thompson",
      citation: "The Curse of Lono",
      year: 1983
    },
    {
      quote: "One positive thought produces millions of positive vibrations.",
      source: "John Coltrane",
      year: 1968
    },
    {
      quote: "Tomorrow belongs to those who can hear it coming.",
      source: "David Bowie"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      source: "Steve Jobs"
    },
    {
      quote: "Do not pray for an easy life, pray for the strength to endure a difficult one.",
      source: "Bruce Lee"
    },
    {
      quote: "The minute that you're not learning I believe you're dead.",
      source: "Jack Nicholson",
      year: 1970
    }
];

// function selects a random quote form the "quotes"
// array and returns randomly selected "quote" object
function getRandomQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length );
    return quotes[randomNumber];
}

// "printQuote" function calls "getRandomQuote" function
// storing a reference to the object in "randomQuote" variable
function printQuote() {
    var randomQuote = getRandomQuote();
    var msg = " ";
        msg = '<p class="quote">' + randomQuote['quote'] + '</p>';
        msg += '<p class="source">' + randomQuote['source'] ;
        //checks to see if "citation" propertiy value is part of "quotes" object
        if(randomQuote.citation !== undefined){
          msg += '<span class="citation">' + randomQuote['citation'] + '</span>' ;
          }
          //checks to see if "year" propertiy value is part of "quotes" object
        if(randomQuote.year !== undefined){
          msg += '<span class="year">' + randomQuote['year'] + '</span>' + '</p>';
          }
    // prints quote to index.html
    document.getElementById('quote-box').innerHTML = msg;
}

// event listener to respond to "Show Another Quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
