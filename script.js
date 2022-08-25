var index = 12;

var turn = 0

var players = [];

var takesLeft = 3;

var game = false;



function stats(){
  document.getElementById("data").innerHTML = "<h3 id='info'>Turn: " + String(players[turn]) + " - You can take " + String(takesLeft) + " more tokens</h3>";
}

function clicked(token){

    console.log(token);
  if (token === index && takesLeft !== 0){
    console.log("Yes");
    document.getElementById("token" + String(index)).style.visibility = "hidden";
    index--;
    takesLeft--;
    stats();
      
    console.log("Index: " + String(index));
      
    if (index === 0){
      document.getElementById("winText").innerHTML = "<h2>" + players[turn] + " won!</h2>";
  
      classes = document.getElementsByClassName('token');
      for (var i = 0; i < classes.length; i++) {
        classes[i].style.display = 'none';
      }
    }
  }
}

function clickManager(token){
  if(game === true){
    if (token <= index && token >= index-2)
      for (i=index-token+1; i > 0; i--){
        clicked(token+i-1)
      }
  }
}

function passTurn(){
  if (game === true){
    if (takesLeft !== 3){
      takesLeft = 3;
      if (turn === 0){
        turn++;
      } else {
        turn--;
      }
      console.log(turn);
      stats();
    }
  }
}

function start() {

  players.push(document.getElementById("p1name").value, document.getElementById("p2name").value);

  stats();

  game = !game;
  console.log(game)
  if (game === true){
    document.getElementById('startGame').value = "Reset";
  } else {
    window.location.reload(true);
  }
}

function onMouseOut(token) {
    if (token === index-1){
      document.getElementById("token" + String(index)).style.backgroundColor = "";
    }
    if (token === index-2){
      document.getElementById("token" + String(index)).style.backgroundColor = "";
      document.getElementById("token" + String(index-1)).style.backgroundColor = "";
    }
}

function onHover(token){
  if (token === index-1){
    document.getElementById("token" + String(index)).style.backgroundColor = "goldenrod";
  }
  if (token === index-2){
    document.getElementById("token" + String(index)).style.backgroundColor = "goldenrod";
    document.getElementById("token" + String(index-1)).style.backgroundColor = "goldenrod";
  }
}