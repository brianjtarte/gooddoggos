'use strict'



function getanswer(){

    let answer = prompt('Do you like dogs?');
    let greeting = '';
    
    if(answer === 'yes'){
        greeting = 'Wonderful! You are in the right place!';
    }
    else{
        greeting = 'Even if you don\'t like dogs, you are welcome to stay!'; 
        alert("WARNING: THIS SITE IS ABOUT DOGS!");
    }
    return greeting;
}







document.write(getanswer());