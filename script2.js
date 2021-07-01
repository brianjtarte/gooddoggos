'use strict'

function fnamelname(){
    let name1 = prompt('what is your first name?');
    let name2 = prompt('what is your last name?');
    
  
    function hello() {
      return ' Hello ' + name1 + ' ' + name2 + ' ' + ' how are you today?';
  
    }
  
  return hello();
  
  }
  
  
  document.write(fnamelname());

  