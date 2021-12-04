const GAME_SIZE = 20;

function randomNum(){
  return Math.floor(Math.random()*3)+1;
}


const gameBoard = document.querySelector('.game-board');
gameBoard.addEventListener('click',(e)=>{
  console.log(e.target.id); 
});
let counter = 0;
for(let row=0;row<GAME_SIZE;row++){
  for(let col=0;col<GAME_SIZE;col++){
    const div = document.createElement('div');
    // div.setAttribute('id',`${(col+row*10)}`);
    div.style.height = '100%';
    div.style.border = "1px solid black";
    div.innerText = counter;
    if((counter)>100){
      div.style.background = 'brown';
    }else{
      div.style.background = 'teal';
    }
    counter++;
    gameBoard.appendChild(div);
  }
 
}
console.log(counter);

function draw(){

}

function createGameBoard(){

}

const tools = {
  nothing: 0,
  pickaxe: 1,
  shovel: 2,
  axe: 3
}



