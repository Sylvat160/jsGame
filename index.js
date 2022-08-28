const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width =500;
canvas.height = 700;
const explosion = [];
let canvasPosition = canvas.getBoundingClientRect();

class Explosion {
    constructor(x,y){
        this.x = x; this.y = y;
        this.sprideWidth = 200;
        this.sprideHeight =179;
        this.width = this.sprideWidth / 2;
        this.height = this.sprideHeight / 2;
        this.image = new Image;
        this.image.src = 'boom.png';
        this.frame = 0
    }
    update() {
        this.frame++;
    }
    draw(){
        ctx.drawImage(this.image,this.sprideWidth * this.frame, 0 , this.sprideWidth , spriteHeight , 
            this.x , this.y , this.width , this.height);
    }
}

ctx.fillStyle = 'white';

window.addEventListener('click', function(e){
    console.log(e);
    ctx.fillStyle = 'white';
    ctx.fillRect(e.x, e.y, 50, 50);
});

