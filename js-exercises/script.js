// single line comment

/*
multi-line
comment
*/

// to log information to tghe console
//we can use the console.log();

//single line instruction - statement
console.log('Hello world');

///console.log(2 + 2);

//declare a variable
var messageToTheWorld = 'Hello world';
var myName = 'David';

var myMessage = messageToTheWorld + ' from ' + myName;
////console.log(messageToTheWorld + ' from ' + myName);

// try to subtitute the content of the h1 element
var titleElement = document.getElementById('title')
titleElement.innerHTML = myMessage;

////console.log(titleElement)
////titleElement.innerHTML = '001_01_101_001000_01_100';