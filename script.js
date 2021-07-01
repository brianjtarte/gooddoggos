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

let rating = prompt('On a scale of 1 to 10, how much do you love dogs?');

for (let i= 0; i < rating; i++) {
    document.write('<img class="doggos" src="suchdog.png"/>')
}

let meme = prompt ('What is the name of the famous meme cryptocurrency?');

while (meme !== 'doge'){
    meme = prompt('Such wrong, many hint: Elon Musk talked about it on SNL');
}

