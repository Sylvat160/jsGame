// var rect1 = {
//     y:5,
//     x:5,
//     width:50,
//     height:50
// }

// var rect2 = {
//     x:20,
//     y=10,
//     width:10,
//     height:10
// }

// if(rect1.x < rect2.x + rect2.width && 
//     rect1.x + rect1.width > rect2.x + rect2.width &&
//     rect1.y < rect2.y + rect2.height &&
//     rect1.y + rect1.height > rect2.y
// ){

// }

const circle1 = { x:10,y:10,radius:300 }
const circle2 = { x:500,y:500,radius:150 }

let dx = circle2.x -circle1.x
let dy = circle2.y -circle1.y
let distance = Math.floor(dx * dx + dy * dy);
let sumOfRadii = circle1.radius - circle2.radius

if(distance < sumOfRadii){
    //circle collides
}else if(distance === sumOfRadii) {
    //circles are touching
}else{
    //there is no collision
}