let a = 0;
let op = "";

function append(num) {
    document.getElementById("display").value += num;
}

function setOp(operation) {
    a = document.getElementById("display").value;
    op = operation;
    document.getElementById("display").value = op;
}

function calculate() {

    let display = document.getElementById("display");
    let b = display.value;
    
    if (display.value === "" || a==="" || op === ""){
        display.value = "";
        return;

    }

    fetch("/" + getPath() + "?a=" + a + "&b=" + b)
            .then(res => res.text())
            .then(data => {
                document.getElementById("display").value = data;
            });

}

function getPath() {

    if (op === "+")
        return "add";
    if (op === "-")
        return "sub";
    if (op === "*")
        return "mul";
    if (op === "/")
        return "div";
    if (op === "%")
        return "mod";

}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}