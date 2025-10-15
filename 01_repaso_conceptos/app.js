const img = document.getElementById("img");

const byc = document.getElementById("byc");
const des = document.getElementById("des");
const zyr = document.getElementById("zyr");

byc.addEventListener("click", () => {
    if (img.style.filter !== "grayscale(100%)") {
        img.style.filter = "grayscale(100%)";
    }
    else {
        img.style.filter = "none";
    }
});

des.addEventListener("click", () => {
    if (img.style.filter !== "blur(5px)") {
        img.style.filter = "blur(5px)";
    }
    else {
        img.style.filter = "none";
    }
});

zyr.addEventListener("click", () => {
    if (img.style.transform !== "scale(0.5) rotate(10deg)") {
        img.style.transform = "scale(0.5) rotate(10deg)";
    }
    else {
        img.style.transform = "none";
    }
});