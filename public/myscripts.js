// --------------------- PROFESSIONAL WAY: https://www.youtube.com/watch?v=JeXqaKeJSRI---------------------
/* 
Steps 
1) Click any button
If number, Record that value 
If it is a 

IF 
Backspace: As long as there is a value in calculationArea, delete 
Clear: Get the ID where the user enters a value and clear the value
*/


//First get the IDs
//Where the calculation is displayed
let calculationArea = 0;

//Special Buttons
let buttonClear = document.getElementById("clear");
let buttonBackspace = document.getElementById("backspace");
let buttonMultiply = document.getElementById("*").value = false;
let buttonMinus = document.getElementById("-").value = false;;
let buttonPlus = document.getElementById("+").value = false;;
let buttonDecimal = document.getElementById(".").value = false;;
let buttonDivide = document.getElementById("/").value = false;;
let buttonEqual = document.getElementById("=").value = false;;

//Number buttons
let buttonNine = document.getElementById("9").value;
let buttonEight = document.getElementById("8").value;
let buttonSeven = document.getElementById("7").value;
let buttonSix = document.getElementById("6").value;
let buttonFive = document.getElementById("5").value;
let buttonFour = document.getElementById("4").value;
let buttonThree = document.getElementById("3").value;
let buttonTwo = document.getElementById("2").value;
let buttonOne = document.getElementById("1").value;



//When the user clicks on the button 
document.getElementById("clear").onclick = function(){
    //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_innerhtml_p
    calculationArea = document.getElementById("calculationArea").innerHTML = 0;
}
document.getElementById("backspace").onclick = function(){
    let backSpaceCheck = document.getElementById("calculationArea").value;
    (backSpaceCheck).toString().length;
    //If calculationArea is length is 1 && greater than 0 , make it zero
    if (backSpaceCheck == 1 || backSpaceCheck == 0 ){
        calculationArea = document.getElementById("calculationArea").innerHTML = 0;
    }      
    //If calculationArea is length is greater than 1, remove the last digit
    if (backSpaceCheck >= 1 ){
        calculationArea = document.getElementById("calculationArea").innerHTML = 1
    }      

}
document.getElementById("*").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = 0 ; // Need to find a way to backspace
}
document.getElementById("-").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = 0 ; // Need to find a way to backspace
}
document.getElementById("+").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = 0 ; // Need to find a way to backspace
}
document.getElementById(".").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = 0 ; // Need to find a way to backspace
}
document.getElementById("/").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = 0 ; // Need to find a way to backspace
}
document.getElementById("=").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = 0 ; // Need to find a way to backspace
}


document.getElementById("9").onclick = function(){
    //IF some value is true, need to add to it 
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonNine;
}
document.getElementById("8").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonEight;
}
document.getElementById("7").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonSeven;
}
document.getElementById("6").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonSix;
}
document.getElementById("5").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonFive;
}
document.getElementById("4").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonFour;
}
document.getElementById("3").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonThree;
}
document.getElementById("2").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonTwo;
}
document.getElementById("1").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonOne;
}
document.getElementById("0").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonOne;
    console.log()
}
