// --------------------- PROFESSIONAL WAY: https://www.youtube.com/watch?v=JeXqaKeJSRI---------------------
let calculationArea = "";
let initialValue = "";

//Special Buttons
let buttonClear = document.getElementById("clear");
let buttonBackspace = document.getElementById("backspace");
let buttonMultiply = document.getElementById("*").value;
let buttonMinus = document.getElementById("-").value
let buttonPlus = document.getElementById("+").value;
let buttonDecimal = document.getElementById(".").value;
let buttonDivide = document.getElementById("/").value;
let buttonEqual = document.getElementById("=").value;

let backspaceCheck = false;
let multiplyCheck = false;
let minusCheck = false;
let plusCheck = false;
let decimalCheck = false;
let divideCheck = false;
let equalCheck = false;

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
    initialValue = document.getElementById("initialValue").innerHTML = "";
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
//Hnadle Multiplication 
document.getElementById("*").onclick = function(){
    try {
        let checkInitialValue = document.getElementById("calculationArea").innerHTML;
        console.log("The value of checkInitialValue :" + checkInitialValue );
        initialValue = document.getElementById("initialValue").innerHTML =  checkInitialValue + " " + buttonMultiply;
        multiplyCheck = true;
    }
    catch(error) {
        console.error(error);
    }
    
}
document.getElementById("-").onclick = function(){
    try{
        let minusCheckInitialValue = document.getElementById("calculationArea").innerHTML;
        console.log("The value of minusCheckInitialValue :" + minusCheckInitialValue );
        initialValue = document.getElementById("initialValue").innerHTML =  minusCheckInitialValue + " " + buttonMinus;
        minusCheck = true;

    }
    catch(error) {
        console.error(error);
    }
}
document.getElementById("+").onclick = function(){
    try{
        let plusCheckInitialValue = document.getElementById("calculationArea").innerHTML;
        console.log("The value of plusCheckInitialValue :" + plusCheckInitialValue );
        initialValue = document.getElementById("initialValue").innerHTML =  plusCheckInitialValue + " " + buttonPlus;
        plusCheck = true;
        
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
    if (!multiplyCheck && !minusCheck && !plusCheck){
        calculationArea = document.getElementById("calculationArea").innerHTML = buttonNine;
    }
    console.log("When the user clicks 9: " + calculationArea);
    console.log("The datatype is: " + typeof calculationArea); //Shoud be a string
    if (multiplyCheck){
        initialValue = document.getElementById("initialValue").innerHTML = "";
        calculationArea = document.getElementById("calculationArea").innerHTML *= buttonNine;
        multiplyCheck = false;
    }
    if (minusCheck){
        initialValue = document.getElementById("initialValue").innerHTML = "";
        calculationArea = document.getElementById("calculationArea").innerHTML -= buttonNine;
        minusCheck = false;
    } 
    if (plusCheck) {
        // Clear the initial value if needed
        document.getElementById("initialValue").innerHTML = "";    
        // Convert the content of 'calculationArea' to an integer
        let plusConverter = parseInt(document.getElementById("calculationArea").innerHTML, 10);    
        // Ensure buttonNine is treated as a number by using parseInt or Number
        let numericButtonNine = parseInt(buttonNine, 10);    
        // Add the values together (both should now be numbers)
        let result = plusConverter + numericButtonNine;    
        // Update the 'calculationArea' with the result (as a string for display)
        document.getElementById("calculationArea").innerHTML = result.toString();    
        // Set plusCheck to false to prevent further execution
        plusCheck = false;
    }
    
    

    }
    catch(error) {
        console.error(error);
    }

}
document.getElementById("8").onclick = function(){
    try {
        if (!multiplyCheck){
        calculationArea = document.getElementById("calculationArea").innerHTML = buttonEight;
        }
        console.log("When the user clicks 8: " + calculationArea);
        console.log("The datatype is: " + typeof calculationArea); //Should be a string
        if (multiplyCheck && calculationArea>=0){
            initialValue = document.getElementById("initialValue").innerHTML = "";
            calculationArea = document.getElementById("calculationArea").innerHTML *= buttonEight;
            multiplyCheck = false;
        }    
    }
    catch(error) {
        console.error(error);
    }

}
document.getElementById("7").onclick = function(){
    try {
        if (!multiplyCheck){        
        calculationArea = document.getElementById("calculationArea").innerHTML = buttonSeven;
        // console.log("When the user clicks 7: " + calculationArea);
        // console.log("The datatype is: " + typeof calculationArea);
        }     
 
        if (multiplyCheck && calculationArea>=0){
            initialValue = document.getElementById("initialValue").innerHTML = ""
            calculationArea = document.getElementById("calculationArea").innerHTML *= buttonSeven;
            multiplyCheck = false;
        }    
    }
    catch(error) {
        console.error(error);
    }

}
document.getElementById("6").onclick = function(){
    try {
        if (!multiplyCheck){  
        calculationArea = document.getElementById("calculationArea").innerHTML = buttonSix;
        // console.log("When the user clicks 6: " + calculationArea);
        // console.log("The datatype is: " + typeof calculationArea);  
        }         
        if (multiplyCheck && calculationArea>=0){
            initialValue = document.getElementById("initialValue").innerHTML = ""
            calculationArea = document.getElementById("calculationArea").innerHTML *= buttonSix;
            multiplyCheck = false;
        }    
    }
    catch(error) {
        console.error(error);
    }

}
document.getElementById("5").onclick = function(){
    try{
        if (!multiplyCheck){  
        calculationArea = document.getElementById("calculationArea").innerHTML = buttonFive;
        // console.log("When the user clicks 5: " + calculationArea);
        // console.log("The datatype is: " + typeof calculationArea);
        }
        if (multiplyCheck && calculationArea>=0){
            initialValue = document.getElementById("initialValue").innerHTML = ""
            calculationArea = document.getElementById("calculationArea").innerHTML *= buttonFive;
            multiplyCheck = false;
        }    
    }
    catch(error) {
        console.error(error);
    }

}
document.getElementById("4").onclick = function(){
    try {
        if (!multiplyCheck){  
        calculationArea = document.getElementById("calculationArea").innerHTML = buttonFour;
        // console.log("When the user clicks 4: " + calculationArea);
        // console.log("The datatype is: " + typeof calculationArea);
        }

        if (multiplyCheck && calculationArea>=0){
            initialValue = document.getElementById("initialValue").innerHTML = ""
            calculationArea = document.getElementById("calculationArea").innerHTML *= buttonFour;
            multiplyCheck = false;
        }    
    }
    catch(error) {
        console.error(error);
    }
    

}
document.getElementById("3").onclick = function(){
    try{
        if (!multiplyCheck){  
        calculationArea = document.getElementById("calculationArea").innerHTML = buttonThree;
        // console.log("When the user clicks 3: " + calculationArea);
        // console.log("The datatype is: " + typeof calculationArea);
        }
        if (multiplyCheck && calculationArea>=0){
            initialValue = document.getElementById("initialValue").innerHTML = ""
            calculationArea = document.getElementById("calculationArea").innerHTML *= buttonThree;
            multiplyCheck = false;
        }    
    }
    catch(error) {
        console.error(error);
    }
    

}
document.getElementById("2").onclick = function(){
    try{
        if (!multiplyCheck){  
        calculationArea = document.getElementById("calculationArea").innerHTML = buttonTwo;
        console.log("When the user clicks 2: " + calculationArea);
        console.log("The datatype is: " + typeof calculationArea);
        }
        if (multiplyCheck && calculationArea>=0){
            initialValue = document.getElementById("initialValue").innerHTML = ""
            calculationArea = document.getElementById("calculationArea").innerHTML *= buttonTwo;
            multiplyCheck = false;
        }    
    }
    catch(error) {
        console.error(error);
    }
    

}
document.getElementById("1").onclick = function(){
    try{
        if (!multiplyCheck){  
        calculationArea = document.getElementById("calculationArea").innerHTML = buttonOne;
        // console.log("When the user clicks 1: " + calculationArea);
        // console.log("The datatype is: " + typeof calculationArea);
        }
        if (multiplyCheck && calculationArea>=0){
            initialValue = document.getElementById("initialValue").innerHTML = ""
            calculationArea = document.getElementById("calculationArea").innerHTML *= buttonOne;
            multiplyCheck = false;
        }    
    }
    catch(error) {
        console.error(error);
    }
    

}
document.getElementById("0").onclick = function(){
    try{
        if (!multiplyCheck){  
        calculationArea = document.getElementById("calculationArea").innerHTML = buttonOne;
        console.log("When the user clicks 0: " + calculationArea);
        console.log("The datatype is: " + typeof calculationArea);
        }
        if (multiplyCheck && calculationArea>=0){
            initialValue = document.getElementById("initialValue").innerHTML = ""
            calculationArea = document.getElementById("calculationArea").innerHTML *= buttonZero;
            multiplyCheck = false;
        }    
    }
    catch(error) {
        console.error(error);
    }
    
}

