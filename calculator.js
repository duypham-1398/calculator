function Addition() {
    var numberone = parseFloat(document.getElementById('numberone').value);
    var numbertwo = parseFloat(document.getElementById('numbertwo').value);
    result = numberone + numbertwo;
    document.getElementById('result').innerHTML = "Result Addition: " + result;
}

function Subtraction() {
    var numberone = parseFloat(document.getElementById('numberone').value);
    var numbertwo = parseFloat(document.getElementById('numbertwo').value);
    result = numberone - numbertwo;
    document.getElementById('result').innerHTML = "Result Addition: " + result;
}

function Division() {
    var numberone = parseFloat(document.getElementById('numberone').value);
    var numbertwo = parseFloat(document.getElementById('numbertwo').value);
    result = numberone / numbertwo;
    document.getElementById('result').innerHTML = "Result Addition: " + result;
}

function Multiplication() {
    var numberone = parseFloat(document.getElementById('numberone').value);
    var numbertwo = parseFloat(document.getElementById('numbertwo').value);
    result = numberone * numbertwo;
    document.getElementById('result').innerHTML = "Result Addition: " + result;
}