let n = 0;

function b() {
    n++;
    if (n === 1) {
        document.getElementById("a").textContent = "зарикроллен!";
    }
    else {
        document.getElementById("a").textContent = "зарикроллен " + n + " раз!";
    }
}