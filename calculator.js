function Addition() {
    var numeberone = parseFloat(document.getElementById('numberone').value);
    var numbertwo = parseFloat(document.getElementById('numbertwo').value);
    result = numeberone + numbertwo;
    document.getElementById('result').innerHTML = "Result Addition: " + result;
}

function Subtraction() {
    var numeberone = parseFloat(document.getElementById('numberone').value);
    var numbertwo = parseFloat(document.getElementById('numbertwo').value);
    result = numeberone - numbertwo;
    document.getElementById('result').innerHTML = "Result Addition: " + result;
}

function Division() {
    var numeberone = parseFloat(document.getElementById('numberone').value);
    var numbertwo = parseFloat(document.getElementById('numbertwo').value);
    result = numeberone / numbertwo;
    document.getElementById('result').innerHTML = "Result Addition: " + result;
}

function Multiplication() {
    var numeberone = parseFloat(document.getElementById('numberone').value);
    var numbertwo = parseFloat(document.getElementById('numbertwo').value);
    result = numeberone * numbertwo;
    document.getElementById('result').innerHTML = "Result Addition: " + result;
}

