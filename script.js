const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // eval() is okay for a simple local project, 
        // but avoid it in high-security production apps!
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}