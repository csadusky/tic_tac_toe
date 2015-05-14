//1.  When document is ready run function
$(document).ready(function(){
  var player = 0;
  var players = ['X','O'];
  var board = ['','','','','','','','',''];
  var turns = 0;
  var gameisOver = false;



    //2.  $('.square') is selecting all the dom elements with the class square. Then its applying a click handler to each of those elements

  $('.square').click(function() {

    //3.  If the square that you click text is empty and the game is not over..
    if ($(this).text() === "" && (gameisOver !==true)){
      //4.  increments the turns
      turns ++;
      //5.  Put X or O into square
      $(this).text(players[player]);
      //6.  Creating variable id which equals the attribute that was assigned to the specific square that is clicked on
      var id = $(this).attr('id');
      //7.  Putting that id into the board array and making it either X or O
      board[id] = players[player];

      //9.  getWinnerX() and getWinnerO() will return as either true or false which will assign var xIsWinner and var oIsWinner to be either true or false.  Then true and/or false is passed to the winner function.
      //  It can also be this way below
      //  gameisOver = Winner(getWinnerX(),getWinnerO());

      var xIsWinner = getWinnerX();
      var oIsWinner = getWinnerO();
      //10.  gameisOver will be assigned either true or false
      gameisOver = Winner(xIsWinner, oIsWinner);


      //switch player from X to O
      player= (1 - player);

    } // end of if

  }); // end of click function


    //8.  Function that goes through each winning combination of X and if any of them match the board then true is returned and stores it in variable getWinnerX
  var getWinnerX= function (){
    var result = false;

    if (('X'=== board[0] && 'X'=== board[1] && 'X'=== board[2])||
      ('X'=== board[3] && 'X'=== board[4] && 'X'=== board[5])||
      ('X'=== board[6] && 'X'=== board[7] && 'X'=== board[8])||
      ('X'=== board[0] && 'X'=== board[4] && 'X'=== board[8])||
      ('X'=== board[6] && 'X'=== board[4] && 'X'=== board[2])||
      ('X'=== board[0] && 'X'=== board[3] && 'X'=== board[6])||
      ('X'=== board[1] && 'X'=== board[4] && 'X'=== board[7])||
      ('X'=== board[2] && 'X'=== board[5] && 'X'=== board[8])){
      result = true;
    }else{
      result = false;
    };
    return result;
  };

    //8.  Function that goes through each winning combination of O and if any of them match the board then true is returned and stores it in variable getWinnerO
  var getWinnerO= function (){
    var result = false;

    if (('O'=== board[0] && 'O'=== board[1] && 'O'=== board[2])||
      ('O'=== board[3] && 'O'=== board[4] && 'O'=== board[5])||
      ('O'=== board[6] && 'O'=== board[7] && 'O'=== board[8])||
      ('O'=== board[0] && 'O'=== board[4] && 'O'=== board[8])||
      ('O'=== board[6] && 'O'=== board[4] && 'O'=== board[2])||
      ('O'=== board[0] && 'O'=== board[3] && 'O'=== board[6])||
      ('O'=== board[1] && 'O'=== board[4] && 'O'=== board[7])||
      ('O'=== board[2] && 'O'=== board[5] && 'O'=== board[8])){
      result = true;
    }else{
      result = false;
    };
    return result;
  };
    //9.  function that passes through true and false from getWinner functions above and will evaluate Winner to either true or false and alert accordingly.
  function Winner(XWins, OWins){
    var result = false
    if (XWins){
      alert ('X is the winner');
      result = true;
    }else if (OWins){
      alert ('O is the winner');
      result = true;
    }else if (turns === 9){
      alert ('No winner, play again');
      result = true;
    };
    return result;
  };
//};
//clickSquare();

function resetBoard(){
  board = ['','','','','','','','',''];
  $('.square').each(function() {
    $(this).text('');
  });
  turns = 0;
  gameisOver = false;
  //clickSquare();
};

$('#restart').click(resetBoard);

});



