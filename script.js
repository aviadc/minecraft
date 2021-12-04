const GAME_SIZE = 20;
const tiles = {
  sky: 'sky',
  cloud: 'cloud',
  grass: 'grass',
  timber: 'timber',
  stone: 'stone',
  dirt: 'dirt'
}
const tools = {
  nothing: 0,
  pickaxe: 1,
  shovel: 2,
  axe: 3
}

let selectedTool = tools.nothing;
let lastSelectedTool =  tools.nothing;

const gameBoard = document.querySelector('.game-board');

const pickaxe = document.querySelector('.pickaxe');
const shovel = document.querySelector('.shovel');
const axe = document.querySelector('.axe');
axe.classList.add('axe');

const lastTile = document.querySelector('.last-tile');
lastTile.setAttribute('isfull',false);
lastTile.setAttribute('lastclass','');



function isSkyOrCloud(e){
  if(e.target.className==='blue'&&e.target.className==='white'){
    return true;
  }
  return false;
}





gameBoard.addEventListener('click',(e)=>{
  if(selectedTool!==tools.nothing){
      switch(selectedTool){
        case tools.pickaxe:
          console.log('pickaxe');
          if(e.target.className===tiles.stone){
            if(lastTile.lastclass){
              lastTile.classList.remove(lastTile.lastclass)
            }
            console.log(`lastclass is : ${lastTile.lastclass}`);
            lastTile.classList.add(tiles.stone);
           
            lastTile.lastclass = tiles.stone;
            console.log(`lastclass is : ${lastTile.lastclass}`);
            e.target.className = tiles.sky;
            if(!lastTile.isfull){
              lastTile.isfull=true;
            }
          }
          break; 
        case tools.shovel:
          if(e.target.className===tiles.dirt){
            if(lastTile.lastclass){
              lastTile.classList.remove(lastTile.lastclass)
            }
            lastTile.classList.add(tiles.dirt);
            lastTile.lastclass = tiles.dirt;
            e.target.className = tiles.sky;
            if(!lastTile.isfull){
              lastTile.isfull=true;
            }
          }
          break; 
        case tools.axe:
          if(e.target.className===tiles.grass||e.target.className===tiles.timber){
            if(lastTile.lastclass){
              lastTile.classList.remove(lastTile.lastclass)
            }
            lastTile.classList.add(e.target.className);
            lastTile.lastclass = e.target.className;
            e.target.className = tiles.sky;
            if(!lastTile.isfull){
              lastTile.isfull=true;
            }
          }
          break; 
          default:
            break;
      }
  }else{ // if selected tool is null
    if(lastTile.isfull){
      if(!isSkyOrCloud(e)){
        e.target.className=lastTile.lastclass;
        lastTile.isfull = false;
      }
    }
  }
});



let counter = 0;
for(let row=0;row<GAME_SIZE;row++){
  for(let col=0;col<GAME_SIZE;col++){
    const div = document.createElement('div');
    div.style.height = '100%';
    div.style.border = "1px solid black";
    div.className
    div.innerText = counter;
    if(counter<100){
      div.className = tiles.sky;
    }else if(counter>=100&&counter<200){
      div.className = tiles.grass;
    }else if(counter>=200&&counter<300){
      div.className = tiles.stone;
    }else{
      div.className = tiles.dirt;
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




pickaxe.addEventListener('click',(e)=>{
  selectedTool = tools.pickaxe;
  pickaxe.classList.add('selected-tool');
  if(lastSelectedTool){
    if(lastSelectedTool===tools.axe){
      axe.classList.remove('selected-tool')
    }else{
      shovel.classList.remove('selected-tool')
    }
  }
})
shovel.addEventListener('click',(e)=>{
  selectedTool = tools.shovel;
  shovel.classList.add('selected-tool');
  if(lastSelectedTool){
    if(lastSelectedTool===tools.axe){
      axe.classList.remove('selected-tool')
    }else{
      shovel.classList.remove('selected-tool')
    }
  }
})
axe.addEventListener('click',(e)=>{
  selectedTool = tools.axe;
  axe.classList.add('selected-tool');
  if(lastSelectedTool){
    if(lastSelectedTool===tools.axe){
      axe.classList.remove('selected-tool')
    }else{
      shovel.classList.remove('selected-tool')
    }
  }
})
lastTile.addEventListener('click',(e)=>{
  selectedTool = tools.nothing;
  console.log(selectedTool);
})

function selectedTool()





