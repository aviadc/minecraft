const GAME_SIZE = 25;
const tiles = {
  sky: 'sky',
  cloud: 'cloud',
  grass: 'grass',
  timber: 'timber',
  stone: 'stone',
  dirt: 'dirt',
  dirtAndGrass: 'dirt-and-grass'
}
const tools = {
  nothing: 0,
  pickaxe: 1,
  shovel: 2,
  axe: 3
}

let selectedTool = tools.nothing;
let arrayOfDivsElement = [];


const gameBoard = document.querySelector('.game-board');
const resetGame = document.querySelector('.reset');
const startGameContainer = document.querySelector('.start-game');
const startGameBtn = document.querySelector('.start-game-button');



const pickaxe = document.querySelector('.pickaxe');
const shovel = document.querySelector('.shovel');
const axe = document.querySelector('.axe');


const lastTile = document.querySelector('.last-tile');
lastTile.setAttribute('isfull',false);
lastTile.setAttribute('lastclass','');


// function isSkyOrCloud(e){
//   if(e.target.className===tiles.sky||e.target.className===tiles.cloud){
//     return true;
//   }
//   return false;
// }


function createGameBoard(){
  let counter = 0;
  for(let row=0;row<GAME_SIZE;row++){
    for(let col=0;col<GAME_SIZE;col++){
      const div = document.createElement('div');
      div.className = 'tile';
      // div.innerText = counter;
      arrayOfDivsElement.push(div);
      if(counter>=93&&counter<98||counter>=118&&counter<123||counter>=69&&counter<72){
        div.className = tiles.cloud;
      }else if(counter>=284&&counter<290||counter>=260&&counter<264||counter>=234&&counter<240
        ||counter>=210&&counter<215||counter>=185&&counter<188){
        div.className = tiles.grass;
      }else if(counter>=311&&counter<313||counter>=336&&counter<338||counter>=361&&counter<363
        ||counter>=386&&counter<388||counter>=411&&counter<413){
        div.className = tiles.timber;
      }else if(counter>=325&&counter<328||counter>=350&&counter<353||counter>=375&&counter<378
        ||counter>=400&&counter<403||counter>=397&&counter<400||counter>=422&&counter<425){
        div.className = tiles.stone;
      }else if(counter>=425&&counter<450){
        div.className = tiles.dirtAndGrass;
      }else if(counter>=450){
        div.className = tiles.dirt;
      }else{
        div.className = tiles.sky;
      }
      counter++;
      gameBoard.appendChild(div);
    }
  }
  console.log(counter);
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
            lastTile.classList.add(tiles.stone);
            lastTile.lastclass = tiles.stone;
            e.target.className = tiles.sky;
            if(!lastTile.isfull){
              lastTile.isfull=true;
            }
          }
          break; 
        case tools.shovel:
          if(e.target.className===tiles.dirt||e.target.className===tiles.dirtAndGrass){
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
      if(e.target.className===tiles.sky){
        e.target.className=lastTile.lastclass;
        lastTile.classList.remove(lastTile.lastclass);
        lastTile.isfull = false;
      }
    }
  }
});

resetGame.addEventListener('click',(e)=>{
  let counter = 0;
  for(let row=0;row<GAME_SIZE;row++){
    for(let col=0;col<GAME_SIZE;col++){
      if(counter>=93&&counter<98||counter>=118&&counter<123||counter>=69&&counter<72){
        arrayOfDivsElement[counter].className = tiles.cloud;
      }else if(counter>=284&&counter<290||counter>=260&&counter<264||counter>=234&&counter<240
        ||counter>=210&&counter<215||counter>=185&&counter<188){
        arrayOfDivsElement[counter].className = tiles.grass;
      }else if(counter>=311&&counter<313||counter>=336&&counter<338||counter>=361&&counter<363
        ||counter>=386&&counter<388||counter>=411&&counter<413){
        arrayOfDivsElement[counter].className = tiles.timber;
      }else if(counter>=325&&counter<328||counter>=350&&counter<353||counter>=375&&counter<378
        ||counter>=400&&counter<403||counter>=397&&counter<400||counter>=422&&counter<425){
        arrayOfDivsElement[counter].className = tiles.stone;
      }else if(counter>=425&&counter<450){
        arrayOfDivsElement[counter].className = tiles.dirtAndGrass;
      }else if(counter>=450){
        arrayOfDivsElement[counter].className = tiles.dirt;
      }else{
        arrayOfDivsElement[counter].className = tiles.sky;
      }
      counter++;
    }
  }
  console.log(counter);
  selectedTool = tools.nothing;
  axe.classList.remove('selected-tool');
  shovel.classList.remove('selected-tool');
  pickaxe.classList.remove('selected-tool');
  lastTile.classList.remove(lastTile.lastclass);
  lastTile.isfull = false;
});

pickaxe.addEventListener('click',(e)=>{
  if(selectedTool){
    axe.classList.remove('selected-tool');
    shovel.classList.remove('selected-tool');
  }
  selectedTool = tools.pickaxe;
  pickaxe.classList.add('selected-tool');
});

shovel.addEventListener('click',(e)=>{
  if(selectedTool){
    axe.classList.remove('selected-tool');
    pickaxe.classList.remove('selected-tool');
  }
  selectedTool = tools.shovel;
  shovel.classList.add('selected-tool');
});

axe.addEventListener('click',(e)=>{
  if(selectedTool){
    pickaxe.classList.remove('selected-tool');
    shovel.classList.remove('selected-tool');
  }
  console.log('im here');
  selectedTool = tools.axe;
  axe.classList.add('selected-tool');
});

lastTile.addEventListener('click',(e)=>{
  if(selectedTool){
    axe.classList.remove('selected-tool');
    shovel.classList.remove('selected-tool');
    pickaxe.classList.remove('selected-tool');
  }
  selectedTool = tools.nothing;
});

startGameBtn.addEventListener('click',(e)=>{
  startGameContainer.className = "none";
})

createGameBoard();





