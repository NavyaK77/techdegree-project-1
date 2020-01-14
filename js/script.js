  
//Quotes array with 5 objects each with quote properities // 

var quotes = [

{
    quote: "'This too shall pass'", 
    source:"-Edward FitzGerald", 
    citation:"Persian fable", 
    color:"teal"
} ,
{
    quote: "'If life were predictable it would cease to be life, and be without flavor.'", 
    source:"-Eleanor Roosevelt",
    color:"maroon"
},
{
    quote: "'The greatest glory in living lies not in never falling, but in rising every time we fall.'", 
    source: "-Nelson Mandela",
    color: "darkgreen"},
{
    quote: "'When you reach the end of your rope, tie a knot in it and hang on.'",
    source:"-Franklin D. Roosevelt",
    color: "whitesmoke"
},
{
    quote: "'Life is either a daring adventure or nothing at all.'", 
    source:"-Helen Keller",
    year: '1940',
    color: "gray"
}

];

//function to randomly select 1 of the objects/quotes // 

function getRandomQuote() {
    var randomNum = Math.floor(Math.random() * quotes.length);
    return quotes[randomNum];
};

//function to display properities of object associated with getRandomQuote() result // 

function printQuote(){

var rand = getRandomQuote();
//variable holds the object/properties//
var message = '';
var color = '';

message += '<p class = quote>' + rand.quote + '</p>';
message += '<p class= source >' + rand.source + '</p>';
if (rand.citation){message += '<p class= source >' + rand.citation + '</p>';}
if (rand.year){message += '<p class= source >' + rand.year + '</p>';}
document.getElementById('quote-box').innerHTML = message;
//html to display the different properities of the quote objects on separate lines//
color += rand.color;
document.body.style.backgroundColor= color;
//changes the background color based on color property of the object//
};

//the printQuote function is executed when the button is clicked//
document.getElementById('load-quote').addEventListener("click", printQuote, false);



