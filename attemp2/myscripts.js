//Inspired from this and prompted
// https://www.youtube.com/watch?v=I5kj-YsmWjM

//Redo: https://www.w3schools.com/jsref/event_onclick.asp
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_functions


// --------------------- PROFESSIONAL WAY: https://www.youtube.com/watch?v=JeXqaKeJSRI---------------------
let calculationArea = "";
let initialValue = "";

//Special Buttons
let buttonClear = document.getElementById("clear");
let buttonBackspace = document.getElementById("backspace");


let backspaceCheck = false;
let multiplyCheck = false;
let minusCheck = false;
let plusCheck = false;
let decimalCheck = false;
let divideCheck = false;
let equalCheck = false;

//When the user clicks on the button 
document.getElementById("clear").onclick = function(){
    try {
    //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_innerhtml_p
    calculationArea = document.getElementById("calculationArea").innerHTML = "";
    initialValue = document.getElementById("initialValue").innerHTML = "";
    }
    catch(error) {
        console.error(error);
    }
}
//When the user clicks on backspace
document.getElementById("backspace").onclick = function () {
    try {
        let calculationContent = document.getElementById("calculationArea").innerHTML;
        let initialContent = document.getElementById("initialValue").innerHTML;

        if (calculationContent.length > 0) {
            // Remove the last character from the calculationArea
            calculationContent = calculationContent.slice(0, -1);
            document.getElementById("calculationArea").innerHTML = calculationContent;
        } else if (calculationContent.length === 0 && initialContent.length > 0) {
            // Move the initialValue to calculationArea and clear initialValue
            document.getElementById("calculationArea").innerHTML = initialContent;
            document.getElementById("initialValue").innerHTML = "";
        }
    } catch (error) {
        console.error("Error in backspace function:", error);
    }
};



// document.getElementById("backspace").onclick = function(){
//     try {
//         let backSpaceInitialValue = document.getElementById("calculationArea").innerHTML;
//         console.log("The value of backSpaceInitialValue:" + backSpaceInitialValue);
//         let backSpaceConvertToString = backSpaceInitialValue.toString();        
//         let backSpaceCheck = backSpaceConvertToString.length;
//         //If calculationArea is length is 1 && greater than 0 , make it zero
//         if (backSpaceCheck == 1 || backSpaceCheck == 0 ){
//             calculationArea = document.getElementById("calculationArea").innerHTML = "";
//         }      
//         //If calculationArea is length is greater than 1, remove the last digit
//         if (backSpaceCheck >1 ){
//             // Need to find the value in calculationArea, find the last digit in that value: https://coreui.io/blog/how-to-remove-the-last-character-from-a-string-in-javascript/
//             let returnBackSpace = backSpaceConvertToString.slice(0,-1);
//             //Find the data type https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/
//             console.log("The datatype of returnBackSpace is: " + typeof returnBackSpace);
//             let returnBackSpace2 = Number(returnBackSpace);
//             calculationArea = document.getElementById("calculationArea").innerHTML = returnBackSpace2;
//         }

//     }
//     catch(error) {
//         console.error(error);
//     }

// }

//Adding values to calculationArea when click on button
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_functions
function valueToCalculationArea(input) {
    console.log(`Button clicked: ${input}`); // Debug message
    try {
        const calcAreaElem = document.getElementById("calculationArea");
        const initValueElem = document.getElementById("initialValue");

        let currentCalcArea = calcAreaElem.innerHTML; // Current value in calculationArea
        let currentInitValue = initValueElem.innerHTML; // Current value in initialValue

        if (!currentInitValue && !currentCalcArea) {
            // Case 1: Both initialValue and calculationArea are empty
            calcAreaElem.innerHTML += input;
        } else if (!currentInitValue && currentCalcArea) {
            // Case 2: initialValue is empty, but calculationArea is not
            initValueElem.innerHTML = currentCalcArea;
            calcAreaElem.innerHTML = input;
        } else if (currentInitValue && currentCalcArea) {
            // Case 3: Both initialValue and calculationArea have values
            initValueElem.innerHTML = currentInitValue + currentCalcArea;
            calcAreaElem.innerHTML = input;
        }
    } catch (error) {
        console.error(error);
    }
}

//When the user clicks equals: https://www.w3schools.com/js/tryit.asp?filename=tryjs_functions
function equalCalculation() {
    try {
        const valueOne = document.getElementById("initialValue").innerHTML;
        const valueTwo = document.getElementById("calculationArea").innerHTML;
        //https://www.w3schools.com/jsref/jsref_eval.asp
        const result = eval(valueOne + valueTwo);

        //Display the result and reset initialValue
        document.getElementById("calculationArea").innerHTML = result;
        document.getElementById("initialValue").innerHTML = "";
    } catch (error) {
        console.error(error);
        document.getElementById("calculationArea").innerHTML = "Cannot compute";
    }
}
