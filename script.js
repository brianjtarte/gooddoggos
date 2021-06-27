'use strict'

let answer = prompt('Do you like dogs?');
let greeting = '';

if(answer === 'yes'){
    greeting = 'Wonderful! You are in the right place!';
}
else{
    greeting = 'Even if you don\'t like dogs, you are welcome to stay!'; 
    alert("WARNING: THIS SITE IS ABOUT DOGS!");
}

document.write(greeting);

