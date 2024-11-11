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
let calculationArea = "";

//Special Buttons
let buttonClear = document.getElementById("clear");
let buttonBackspace = document.getElementById("backspace");
let buttonMultiply = document.getElementById("*").value = false;
let buttonMinus = document.getElementById("-").value = false;
let buttonPlus = document.getElementById("+").value = false;;
let buttonDecimal = document.getElementById(".").value = false;
let buttonDivide = document.getElementById("/").value = false;
let buttonEqual = document.getElementById("=").value = false;

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
    try {
    //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_innerhtml_p
    calculationArea = document.getElementById("calculationArea").innerHTML = 0;
    }
    catch(error) {
        console.error(error);
    }
}
//When the user clicks on backspace
document.getElementById("backspace").onclick = function(){

    try {
        let backSpaceInitialValue = document.getElementById("calculationArea").innerHTML;
        console.log("The value of backSpaceInitialValue:" + backSpaceInitialValue);
        let backSpaceConvertToString = backSpaceInitialValue.toString();        
        let backSpaceCheck = backSpaceConvertToString.length;
        //If calculationArea is length is 1 && greater than 0 , make it zero
        if (backSpaceCheck == 1 || backSpaceCheck == 0 ){
            calculationArea = document.getElementById("calculationArea").innerHTML = 0;
        }      
        //If calculationArea is length is greater than 1, remove the last digit
        if (backSpaceCheck >1 ){
            // Need to find the value in calculationArea, find the last digit in that value: https://coreui.io/blog/how-to-remove-the-last-character-from-a-string-in-javascript/
            let returnBackSpace = backSpaceConvertToString.slice(0,-1);
            //Find the data type https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/
            console.log("The datatype of returnBackSpace is: " + typeof returnBackSpace);
            let returnBackSpace2 = Number(returnBackSpace);
            calculationArea = document.getElementById("calculationArea").innerHTML = returnBackSpace2;
        }      
    }
    catch(error) {
        console.error(error);
    }

}
document.getElementById("*").onclick = function(){
    try {
        calculationArea = document.getElementById("calculationArea").innerHTML = 0 ; // Need to find a way to backspace
    }
    catch(error) {
        console.error(error);
    }
    
}
document.getElementById("-").onclick = function(){
    try{
        calculationArea = document.getElementById("calculationArea").innerHTML = 0 ; // Need to find a way to backspace

    }
    catch(error) {
        console.error(error);
    }
}
document.getElementById("+").onclick = function(){
    try{
        calculationArea = document.getElementById("calculationArea").innerHTML = 0 ; // Need to find a way to backspace
    }    
    catch(error) {
        console.error(error);
    }
}
document.getElementById(".").onclick = function(){
    try{
        calculationArea = document.getElementById("calculationArea").innerHTML = 0 ; // Need to find a way to backspace
    }    
    catch(error) {
        console.error(error);
    }
}
document.getElementById("/").onclick = function(){
    try{
        calculationArea = document.getElementById("calculationArea").innerHTML = 0 ; // Need to find a way to backspace
    }    
    catch(error) {
        console.error(error);
    }
}
document.getElementById("=").onclick = function(){
    try{
        calculationArea = document.getElementById("calculationArea").innerHTML = 0 ; // Need to find a way to backspace
    }
    catch(error) {
        console.error(error);
    }
}


document.getElementById("9").onclick = function(){
    try{
    //IF some value is true, need to add to it 
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonNine;
    console.log("When the user clicks 9: " + calculationArea);
    console.log("The datatype is: " + typeof calculationArea);
    }
    catch(error) {
        console.error(error);
    }

}
document.getElementById("8").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonEight;
    console.log("When the user clicks 8: " + calculationArea);
    console.log("The datatype is: " + typeof calculationArea);
}
document.getElementById("7").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonSeven;
    console.log("When the user clicks 7: " + calculationArea);
    console.log("The datatype is: " + typeof calculationArea);
}
document.getElementById("6").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonSix;
    console.log("When the user clicks 6: " + calculationArea);
    console.log("The datatype is: " + typeof calculationArea);
}
document.getElementById("5").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonFive;
    console.log("When the user clicks 5: " + calculationArea);
    console.log("The datatype is: " + typeof calculationArea);
}
document.getElementById("4").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonFour;
    console.log("When the user clicks 4: " + calculationArea);
    console.log("The datatype is: " + typeof calculationArea);
}
document.getElementById("3").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonThree;
    console.log("When the user clicks 3: " + calculationArea);
    console.log("The datatype is: " + typeof calculationArea);
}
document.getElementById("2").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonTwo;
    console.log("When the user clicks 2: " + calculationArea);
    console.log("The datatype is: " + typeof calculationArea);
}
document.getElementById("1").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonOne;
    console.log("When the user clicks 1: " + calculationArea);
    console.log("The datatype is: " + typeof calculationArea);
}
document.getElementById("0").onclick = function(){
    calculationArea = document.getElementById("calculationArea").innerHTML = buttonOne;
    console.log("When the user clicks 0: " + calculationArea);
    console.log("The datatype is: " + typeof calculationArea);
}
