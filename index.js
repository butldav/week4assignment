// 1.	Using template literals instead of concatenation, write a function that takes firstName and lastName and returns ‘fistName lastName’
function printFullName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
}
printFullName('Thomas', 'Jefferson');

// 2.	Write the same function as above as an arrow function with a different name.
const logFullName = (firstName, lastName) => console.log(`${firstName} ${lastName}`);
logFullName('George', 'Washington');

// 3.	Look up the JavaScript functions setTimeout() and setInterval(). Notice how they each take a callback.
// a.	Using setTimeout, write an anonymous (has no name assigned to it) arrow function in the callback parameter position. The function should alert ‘Time is up!’. Choose whatever length of time you want for the timeout.

setTimeout(() => window.alert('Time is up!'),10000);

const askAreWeThereYet = () => window.alert('Are we there yet?');

//let timeInt = setInterval(askAreWeThereYet, 12000);

function processSplicedValue(array, index, callback){
    var splicedElement = array.splice(index, 1);

    callback(splicedElement);
}

stringArray = ['string1', 'string2', 'string3','string1a', 'string2a', 'string3a'];

processSplicedValue(stringArray, 2, console.log);
processSplicedValue(stringArray, 2, alert);
processSplicedValue(stringArray, 2, cbalert => alert(cbalert));

