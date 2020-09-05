function playSoundOne(){
    var audio = new Audio('../src/Mouse-Click.mp3');
    audio.play(); 
}

function playSoundTwo(){
    var audio = new Audio('../src/Mouse-Click.mp3');
    audio.play();
}

function playSoundThree(){
    var audio = new Audio('../src/Mouse-Click.mp3');
    audio.play();
}

function playSoundFour(){
    var audio = new Audio('../src/Mouse-Click.mp3');
    audio.play();
    
}


$(document).ready(function(){
    $("#soundOne").click(playSoundOne);
    $("#soundTwo").click(playSoundTwo);
    $("#soundThree").click(playSoundThree);
    $("#soundFour").click(playSoundFour);
  });
