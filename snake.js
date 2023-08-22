let inputdir={x:0,y:0}
const foodsound = new Audio('food.mp3');
const gameoversound = new Audio('gameover.mp3');
const movesound = new Audio('move.mp3');
const musicsound = new Audio('music.mp3');
let speed =5
let lastPaintTime = 0
let score=0
let snakearr=[{x:13,y:15}]
let  food = { x: 11, y: 12 }
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameengine();
}
function iscollide(snake){
    for(let i=1;i<snakearr.length;i++){
        if(snake[i].x===snake[0].x && snake[i].y===snake[0].y){
            return true
        }
     
    }
    if(snake[0].x>=18 || snake[0].x<=0 || snake[0].y>=18 || snake[0].y<=0  ){
         return true   
    }

}
function gameengine() {
    musicsound.play()
    if(iscollide(snakearr)){
        gameoversound.play()
        musicsound.pause()
        inputdir={x:0,y:0};
        alert("press any key to play again")
        snakearr=[{x:13,y:15}]
        musicsound.play()
        score=0
    }
    if(snakearr[0].y===food.y && snakearr[0].x===food.x){
       
        snakearr.unshift({x:snakearr[0].x+inputdir.x,y:snakearr[0].y+inputdir.y})
        foodsound.play()
        score+=1
        scorebox.innerHTML="score:"+score
        let a=2;
        let b=16;
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
    }

    for(let a=snakearr.length - 2;a>=0;a--){
        snakearr[a+1]={...snakearr[a]};
    }

snakearr[0].x=snakearr[0].x+ inputdir.x
snakearr[0].y=snakearr[0].y+inputdir.y











    board.innerHTML = "";
    snakearr.forEach((e,index) => {
        snakeelement = document.createElement('div')
        snakeelement.style.gridRowStart = e.y;
        snakeelement.style.gridColumnStart =e.x;
        if (index === 0) {
            snakeelement.classList.add("head")
        }
        else {
            snakeelement.classList.add("snake")
        }
        board.appendChild(snakeelement)

    });
        foodelement = document.createElement('div')
        foodelement.style.gridRowStart = food.y;
        foodelement.style.gridColumnStart = food.x;
        foodelement.classList.add("food")
        board.appendChild(foodelement)

}











window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputdir = { x: 0, y: 1 }
    movesound.play();
    switch (e.key) {
        case "w" :
            console.log("arrowup")
            inputdir.x= 0;
            inputdir.y=-1;
            break;
        case "s":
            console.log("arrowdown")
            inputdir.x=0;
            inputdir.y=1;
            break;
        case "a":
            console.log("arrowleft")
            inputdir.x=-1;
            inputdir.y=0;
            break;
        case "d":
            console.log("arrowright")
            inputdir.x=1;
            inputdir.y=0;
            break;
        default:
            break;
    }
});
