canvas = document.getElementById("myCanvas")
ctx = canvas.getContext('2d')


background_image="racing.gif"
car1_width = 100
car1_height = 90
car2_width = 100
car2_height = 90

car1_image = "car1.png"
car1_x = 10
car1_y = 10
car2_image = "car2.jpeg"
car2_x = 10
car2_y = 50

function add() {
    background_imgtag = new Image()
    background_imgtag.onload = uplodebackground
    background_imgtag.src = background_image
    car1_imgtag = new Image()
    car1_imgtag.onload = uplodecar1
    car1_imgtag.src = car1_image
    car2_imgtag = new Image()
    car2_imgtag.onload = uplodecar2
    car2_imgtag.src = car2_image


}

function uplodebackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height)
}

function uplodecar1() {
    ctx.drawImage(car1_imgtag, car1_x, car1_y, car1_width, car1_height)
}
function uplodecar2() {
    ctx.drawImage(car2_imgtag, car2_x, car2_y, car2_width, car2_height)
}
window.addEventListener("keydown", mykeydown)

function mykeydown(e) {
    keypressed = e.keyCode
    console.log(keypressed)
    if (keypressed == '38') {
        up()
        console.log("up")

    }
    if (keypressed == '40') {
        down()
        console.log("down")

    }
    if (keypressed == '37') {
        left()
        console.log("left")

    }
    if (keypressed == '39') {
        right()
        console.log("right")

    }


}

function up(){
    if(car1_y>=0){
        car1_y=car1_y-10
        console.log("when up arrow is pressed,x="+car1_x+"y="+car1_y)
        uplodebackground()
        uplodecar1()
        uplodecar2()
    }
}
function down(){
    if(car1_y<=500){
        car1_y=car1_y+10
        console.log("when down arrow is pressed,x="+car1_x+"y="+car1_y)
        uplodebackground()
        uplodecar1()
        uplodecar2()
    }
}
function left(){
    if(car1_x>0){
        car1_x=car1_x-10
        console.log("when left arrow is pressed,x="+car1_x+"y="+car1_y)
        uplodebackground()
        uplodecar1()
        uplodecar2()
    }
}
function right(){
    if(car1_x<=700){
        car1_x=car1_x+10
        console.log("when right arrow is pressed,x="+car1_x+"y="+car1_y)
        uplodebackground()
        uplodecar1()
        uplodecar2()
    }
}