    var numeberone = parseFloat(document.getElementById('numberone').value);
    var numbertwo = parseFloat(document.getElementById('numbertwo').value);

function Addition() {
    result = numeberone + numbertwo;
    document.getElementById('result').innerHTML = "Result Addition: " + result;
}

function Subtraction() {
    result = numeberone - numbertwo;
    document.getElementById('result').innerHTML = "Result Addition: " + result;
}

function Division() {
    result = numeberone / numbertwo;
    document.getElementById('result').innerHTML = "Result Addition: " + result;
}

function Multiplication() {
    result = numeberone * numbertwo;
    document.getElementById('result').innerHTML = "Result Addition: " + result;
}