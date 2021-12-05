const GAME_SIZE = 20;
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


const gameBoard = document.querySelector('.game-board');

const pickaxe = document.querySelector('.pickaxe');
const shovel = document.querySelector('.shovel');
const axe = document.querySelector('.axe');


const lastTile = document.querySelector('.last-tile');
lastTile.setAttribute('isfull',false);
lastTile.setAttribute('lastclass','');



function isSkyOrCloud(e){
  if(e.target.className===tiles.sky||e.target.className===tiles.cloud){
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


function createGaneBoared(){
  let counter = 0;
  for(let row=0;row<GAME_SIZE;row++){
    for(let col=0;col<GAME_SIZE;col++){
      const div = document.createElement('div');
      div.style.height = '100%';
      div.style.border = "1px solid black";
      div.className
      // div.innerText = counter;
      if(counter>=92&&counter<99||counter>=73&&counter<78||counter>=114&&counter<117){
        div.className = tiles.cloud;
      }else if(counter>=127&&counter<131||counter>=147&&counter<151||counter>=166&&counter<172
        ||counter>=186&&counter<192){
        div.className = tiles.grass;
      }else if(counter>=208&&counter<210||counter>=228&&counter<230||counter>=248&&counter<250
        ||counter>=268&&counter<270){
        div.className = tiles.timber;
      }else if(counter>=220&&counter<223||counter>=240&&counter<243||counter>=260&&counter<263
        ||counter>=258&&counter<261||counter>=278&&counter<280){
        div.className = tiles.stone;
      }else if(counter>=280&&counter<300){
        div.className = tiles.dirtAndGrass;
      }else if(counter>=300&&counter<=399){
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

createGaneBoared();



function draw(){

}

function createGameBoard(){

}




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







