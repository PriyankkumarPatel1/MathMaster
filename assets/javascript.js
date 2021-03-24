var curve = document.querySelector("#myChart").getContext("2d");

var negX = -1;
var posX = +1;
var pointColor = "black";
// var xRange = posX - negX; // this will always be +ve

var negXobj = document.querySelector("#negX");
var posXobj = document.querySelector("#posX");

generateData(negX, posX);

negXobj.addEventListener("input", () => {
    let inputValue = negXobj.value;
    if (inputValue > -1) {
        alert(`-ve X can't be positive`);
    } else {
        negX = inputValue;
        console.log(`-ve X: ${negX}`);
        generateData(negX, posX);
    }
});

posXobj.addEventListener("input", () => {
    let inputValue = posXobj.value;
    if (inputValue < 1) {
        alert(`+ve X can't be negative`);
    } else {
        posX = inputValue;
        console.log(`+ve X: ${posX}`);
        generateData(negX, posX);
    }
});

function generateData(negX, posX) {
    var dataX = [];
    var dataY = [];
    var dataYcolor = [];
    for (var x = negX, dataXi = 0; x <= posX; x++, dataXi++) {
        dataX[dataXi] = x;
        let y = x * x * x;
        dataY[dataXi] = y;
        dataYcolor[dataXi] = pointColor;
    }

    var myChart = new Chart(curve, {
        type: "line",
        data: {
            labels: dataX,
            datasets: [{
                label: "X^2 Graph",
                data: dataY,
                borderColor: dataYcolor,
                borderWidth: 0.7,
            }, ],
        },
        options: {},
    });
}