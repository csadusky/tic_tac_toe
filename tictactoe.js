
var player = 0;
var players = ['X','O'];

$(document).ready(function(){

  $('.square').click(function() {
if ($(this).text() === ""){

$(this).text(players[player]);
player= (1 - player);
    }
  })
});

var board = [];

$('.square').each(function() {
            board.push($(this).text());
        });

var getWinnerX= function (board){
  if (('X'=== board[0] && 'X'=== board[1] && 'X'=== board[2])||
  ('X'=== board[3] && 'X'=== board[4] && 'X'=== board[5])||
  ('X'=== board[6] && 'X'=== board[7] && 'X'=== board[8])){
    return  true;
  }
};


var getWinnerO= function (board){
  if (('O'=== board[0] && 'O'=== board[1] && 'O'=== board[2])||
  ('O'=== board[3] && 'O'=== board[4] && 'O'=== board[5])||
  ('O'=== board[6] && 'O'=== board[7] && 'O'=== board[8])){
    return  true;
  }
};

function Winner(getWinnerX, getWinnerO){
  if (getWinnerX === true){
    alert ('X is the winner');
  }else if (getWinnerO === true){
    alert ('O is the winner');
  }else {
    alert ('No winner, play again');
  }
};



