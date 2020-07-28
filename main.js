const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");
const generateBtn = document.getElementById("generateBtn")
const result = document.getElementById("result");
const generateBox = document.getElementById("generateBox");
const submit = document.getElementById("submit");
const countNum = document.getElementById("countNum");
let count = 0;
let data = ["3 try left", "2 try left", "1 try left"];

msg1.style.display = "none";
msg2.style.display = "none";

function display(number) {
    result.value += number;
}

function clr() {
    result.value = "";
}

function back() {
    let str = result.value;
    result.value = str.substring(0, str.length - 1);
}

function tryThree() {
    if (count < 3) {
        countNum.innerText = data[count];
    }
    count++;
    if (count == 4) {
        alert("Reload this page");
        location.reload();
        return;
    }
}

function Random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

generateBtn.addEventListener("click", () => {
    let num = Random(1000, 9999);
    generateBox.value = num;
    result.value = "";
    countNum.innerText = "";
    msg1.style.display = "none";
    msg2.style.display = "none";
});

submit.addEventListener("click", () => {
    if (result.value != "" && generateBox.value != "") {
        if (result.value === generateBox.value) {
            msg1.style.display = "none";
            msg2.style.display = "block";
        } else {
            tryThree();
            msg1.style.display = "block";
            msg2.style.display = "none";
        }
    } else {
        alert("Blank value not supported...!!");
    }
});