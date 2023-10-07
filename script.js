var randomnum1 = Math.floor((Math.random() * 6) + 1);
var randomnum2 = Math.floor((Math.random() * 6) + 1);
var randomimage1 = "image/" + randomnum1 + ".png";
var randomimage2 = "image/" + randomnum2 + ".png";
// const myImage1 = document.getElementById("dice1");
// myImage1.src = randomimage1;
// const myImage2 = document.getElementById("dice1");
// myImage2.src = randomimage2;

image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimage1);
image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimage2);
