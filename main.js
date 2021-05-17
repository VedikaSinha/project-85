canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "https://i.postimg.cc/9rqYz9HM/car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "https://i.postimg.cc/tnnW1Kff/car2.png";
car2_x = 10;
car2_y = 100;

background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";

function add() {

    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgTag.src = background_image;

    car1_imgTag = new Image(); //defining a variable with a new image
    car1_imgTag.onload = uploadCar1; // setting a function, onloading this variable
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image(); //defining a variable with a new image
    car2_imgTag.onload = uploadCar2; // setting a function, onloading this variable
    car2_imgTag.src = car2_image;

}

function uploadBackground() {

    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadCar1() {

    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);

}

function uploadCar2() {

    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    key_pressed = e.keyCode;
    if (key_pressed == "38") {
        car1up();
        console.log("up arrow is pressed");
    }

    if (key_pressed == "40") {
        car1down();
        console.log("down arrow is pressed");
    }

    if (key_pressed == "37") {
        car1left();
        console.log("left arrow is pressed");
    }

    if (key_pressed == "39") {
        car1right();
        console.log("right arrow is pressed");
    }

    if (key_pressed == "87") {
        car2up();
        console.log("w key is pressed");
    }

    if (key_pressed == "83") {
        car2down();
        console.log("s key is pressed");
    }

    if (key_pressed == "65") {
        car2left();
        console.log("a is pressed");
    }

    if (key_pressed == "68") {
        car2right();
        console.log("d key is pressed");
    }

    if (car1_x >= 680) {
        document.getElementById("game_status").innerHTML = "Car 1 Won";
    } else if (car2_x >= 680) {
        document.getElementById("game_status").innerHTML = "Car 2 Won";
    }

}

function car1up() {

    if (car1_y >= 10) {

        car1_y = car1_y - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}

function car1down() {

    if (car1_y <= 500) {

        car1_y = car1_y + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}

function car1left() {

    if (car1_x >= 10) {

        car1_x = car1_x - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}

function car1right() {

    if (car1_x <= 670) {

        car1_x = car1_x + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}

function car2up() {

    if (car1_y >= 10) {

        car2_y = car2_y - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}

function car2down() {

    if (car2_y <= 500) {

        car2_y = car2_y + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}

function car2left() {

    if (car2_x >= 10) {

        car2_x = car2_x - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}

function car2right() {

    if (car2_x <= 670) {

        car2_x = car2_x + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}