document.addEventListener("DOMContentLoaded", () => {
    const calculationArea = document.getElementById("calculationArea");
    let currentInput = ""; // Tracks the current input shown on the screen

    // Function to update the display
    function updateDisplay(value) {
        calculationArea.textContent = value;
    }

    // Handle button clicks for numbers and operators
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", () => {
            const buttonValue = button.getAttribute("value");

            switch (button.id) {
                case "clear":
                    currentInput = "";
                    updateDisplay("0");
                    break;
                case "backspace":
                    currentInput = currentInput.slice(0, -1);
                    updateDisplay(currentInput || "0");
                    break;
                case "=":
                    try {
                        // Evaluate the expression and update the display
                        currentInput = eval(currentInput).toString();
                    } catch (error) {
                        currentInput = "Error";
                    }
                    updateDisplay(currentInput);
                    break;
                default:
                    currentInput += buttonValue;
                    updateDisplay(currentInput);
                    break;
            }
        });
    });
});
