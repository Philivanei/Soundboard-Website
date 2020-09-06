function playSoundOne(){
    var audio = new Audio('../src/sample_1.m4a');
    audio.play(); 
}

function playSoundTwo(){
    var audio = new Audio('../src/sample_2.m4a');
    audio.play();
}

function playSoundThree(){
    var audio = new Audio('../src/sample_3.m4a');
    audio.play();
}

function playSoundFour(){
    var audio = new Audio('../src/sample_4.m4a');
    audio.play();
    
}


$(document).ready(function(){
    $("#soundOne").click(playSoundOne);
    $("#soundTwo").click(playSoundTwo);
    $("#soundThree").click(playSoundThree);
    $("#soundFour").click(playSoundFour);
  });
