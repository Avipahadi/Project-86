var canvas = new fabric.Canvas("myCanvas");

var player_x = 10;
var player_y = 10;

var block_h = 30;
var block_w = 30;

var player_object = "";
var block_object = "";

function player_add() {
    fabric.Image.fromURL("player.png", function (img) {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
    });
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    var keypressed = e.keyCode;
    if (e.shiftKey == true & keypressed == "80") {
        console.log(keypressed);
        block_h = block_h + 10;
        block_w = block_w + 10;
        console.log("Shift and P Pressed");
        document.getElementById("block_height").innerHTML = block_h;
        document.getElementById("block_width").innerHTML = block_w;
    }
    if (e.shiftKey == true & keypressed == "77") {
        console.log(keypressed);
        block_h = block_h - 10;
        block_w = block_w - 10;
        console.log("Shift and M Pressed");
        document.getElementById("block_height").innerHTML = block_h;
        document.getElementById("block_width").innerHTML = block_w;
    }
    if (e.shiftKey == true & keypressed == "82") {
        console.log(keypressed);
        block_h = 30;
        block_w = 30;
        console.log("Shift and R Pressed");
        document.getElementById("block_height").innerHTML = block_h;
        document.getElementById("block_width").innerHTML = block_w;
    }
}