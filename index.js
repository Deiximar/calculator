document.getElementById("n1").addEventListener("click",n1);
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("n0").addEventListener("click",n0);

document.getElementById("sum").addEventListener("click",sum);
document.getElementById("rest").addEventListener("click",rest);
document.getElementById("multiplication").addEventListener("click",multiplication);
document.getElementById("divide").addEventListener("click",divide);

document.getElementById("equal").addEventListener("click",showResult)

function n1() {
    let actual = document.getElementById("result").innerHTML;
    let number = document.getElementById("n1").innerHTML;
    document.getElementById("result").innerHTML = actual + number;
};

function n2() {
    let actual = document.getElementById("result").innerHTML;
    let number = document.getElementById("n2").innerHTML;
    document.getElementById("result").innerHTML = actual + number;
};

function n3() {
    let actual = document.getElementById("result").innerHTML;
    let number = document.getElementById("n3").innerHTML;
    document.getElementById("result").innerHTML = actual + number;
};

function n4() {
    let actual = document.getElementById("result").innerHTML;
    let number = document.getElementById("n4").innerHTML;
    document.getElementById("result").innerHTML = actual + number;
};

function n5() {
    let actual = document.getElementById("result").innerHTML;
    let number = document.getElementById("n5").innerHTML;
    document.getElementById("result").innerHTML = actual + number;
};

function n6() {
    let actual = document.getElementById("result").innerHTML;
    let number = document.getElementById("n6").innerHTML;
    document.getElementById("result").innerHTML = actual + number;
};

function n7() {
    let actual = document.getElementById("result").innerHTML;
    let number = document.getElementById("n7").innerHTML;
    document.getElementById("result").innerHTML = actual + number;
};

function n8() {
    let actual = document.getElementById("result").innerHTML;
    let number = document.getElementById("n8").innerHTML;
    document.getElementById("result").innerHTML = actual + number;
};

function n9() {
    let actual = document.getElementById("result").innerHTML;
    let number = document.getElementById("n9").innerHTML;
    document.getElementById("result").innerHTML = actual + number;
};

function n0() {
    let actual = document.getElementById("result").innerHTML;
    let number = document.getElementById("n0").innerHTML;
    document.getElementById("result").innerHTML = actual + number;
};

function sum() {
    let actual = document.getElementById("result").innerHTML;
    let operator = document.getElementById("sum").innerHTML;
    document.getElementById("result").innerHTML = actual + operator;
};

function rest() {
    let actual = document.getElementById("result").innerHTML;
    let operator = document.getElementById("rest").innerHTML;
    document.getElementById("result").innerHTML = actual + operator;
};

function multiplication() {
    let actual = document.getElementById("result").innerHTML;
    let operator = document.getElementById("multiplication").innerHTML;
    document.getElementById("result").innerHTML = actual + operator;
};

function divide() {
    let actual = document.getElementById("result").innerHTML;
    let number = document.getElementById("divide").innerHTML;
    document.getElementById("result").innerHTML = actual + number;
};

function showResult() {
    let actual = document.getElementById("result").innerHTML;
    let sum = actual.indexOf("+");
    let rest = actual.indexOf("-");
    let divide = actual.indexOf("/");
    let multiplication = actual.indexOf("x");

    if (sum !== -1) {
        arr = actual.split("+");
        let result = parseInt(arr[0]) + parseInt(arr[1]); 
        document.getElementById("result").innerHTML = result;

    } else if (rest !== -1) {
        arr = actual.split("-");
        let result = parseInt(arr[0]) - parseInt(arr[1]); 
        document.getElementById("result").innerHTML = result;

    } else if (divide !== -1) {
        arr = actual.split("/");
        let result = parseInt(arr[0]) / parseInt(arr[1]);
        document.getElementById("result").innerHTML = result;

    } else if (multiplication !== -1) {
        arr = actual.split("x");
        let result = parseInt(arr[0]) * parseInt(arr[1]);
        document.getElementById("result").innerHTML = result; 
    };
}