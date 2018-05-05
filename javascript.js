
/*Use quotes.rest API to get quotes
For that you need to learn how to use REST apis 

Article to learn that - > 
https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

Before this you need to learn more about JSON objects 

https://www.taniarascia.com/how-to-use-json-data-with-php-or-javascript/

*/


//We’ll create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

//Then we’ll open a new connection with the open() method – 
//in the arguments we’ll specify the type of request as GET as well as the URL of the API endpoint. 
request.open('GET', 'http://quotes.rest/qod.json', true);

//The request completes and we can access the data inside the onload function.
request.onload = function () {
  // Begin accessing JSON data here

  //we’ll use JavaScript built in JSON.parse() function to decode the string.
  data = JSON.parse(this.response);
  
  }
}

//When we’re done, we’ll send the request.*/
request.send();


function newQuote(){
	var quote=document.getElementById("quoteDisplay");
	quote.innerHTML = 
};
