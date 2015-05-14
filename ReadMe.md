feature webpage

user story 1
user should see tic tac toe board on main page
-this can be done html + css
when user clicks a square on board, x  or o appears

user story 2
user should be able to click board and place x in any space
-this can be done w/jquery
$(classname).click(function)

user story 3
user should be able to click reset button to start a new game

feature game logic

user story 1
play should alternate between x and o


user story 2
user should be able to win if 3 in a row

user story 3
if user gets a tie they will play again

user story 4

when a user gets three in a row, game will display a winner alert

user story 5
user will be able to reset board

$(document).ready(function(){
var player = 0;
var players = ['X','O'];
var board = [];
var turns = 0;
var gameisOver = false;



```javascript
$('.square').click(function() {
  if ($(this).text() === "" && (gameisOver !==true)){
```
/*when you click on a square a function is called that checks to see if  when you call the text method on "this" (the square you clicked on) it returns an empty string and that var gameIsOver is false.
    if the text is empty and the gameisOver is false, then we can put either 'X' or 'O' is a square.  we do this in next line./*

      //turns ++;

      $(this).text(players[player]);
/*'this' is still $('.square') so were are inserting (players[player]) which is 'X' for first space because 'X' comes first in player's array which gives it the value 0. this is setting the (players[player]) for the text method/*

      board =[];
/*call var board so next function knows where to put each $(',square')/*

      $('.square').each(function() {
        board.push($(this).text());
      });
/*now we iterate through each $('.square') and push each square's text (which will be a X first time through)/*

      gameisOver =Winner(getWinnerX(),getWinnerO());
      console.log(gameisOver)

/*everytime a 'X' or 'O' is placed on the board we have to check to see if there is a winner.
      player= (1 - player);
    }
  })
//[0,1,2]
//[3,4,5]
//[6,7,8]
  var getWinnerX= function (){
  if (('X'=== board[0] && 'X'=== board[1] && 'X'=== board[2])||
    ('X'=== board[3] && 'X'=== board[4] && 'X'=== board[5])||
    ('X'=== board[6] && 'X'=== board[7] && 'X'=== board[8])||
    ('X'=== board[0] && 'X'=== board[4] && 'X'=== board[8])||
    ('X'=== board[6] && 'X'=== board[4] && 'X'=== board[2])){
    return  true;
}
};


var getWinnerO= function (){
  if (('O'=== board[0] && 'O'=== board[1] && 'O'=== board[2])||
    ('O'=== board[3] && 'O'=== board[4] && 'O'=== board[5])||
    ('O'=== board[6] && 'O'=== board[7] && 'O'=== board[8])||
    ('O'=== board[0] && 'O'=== board[4] && 'O'=== board[8])||
    ('O'=== board[6] && 'O'=== board[4] && 'O'=== board[2])){
    return  true;
}
};

function Winner(getWinnerX, getWinnerO){
  if (getWinnerX === true){
    alert ('X is the winner');
    return true;
  }else if (getWinnerO === true){
    alert ('O is the winner');
    return true;
  }else if (turns===9){
   alert ('No winner, play again');
   return true;
  }
};
});


