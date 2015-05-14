$(document).ready(function(){
  var player = 0;
  var players = ['X','O'];
  var board = [];
  var turns = 0;
  var gameisOver = false;



    //1.  $('.square') is selecting all the dom elements with the class square. Then its applying a click handler to each of those elements */

  $('.square').click(function() {

    //2.  if the square that you click text is empty and the game is not over
    if ($(this).text() === "" && (gameisOver !==true)){
      //3.  increments the turns
      turns ++;
      //4.  putting X or O into square
      $(this).text(players[player]);
      //TO DO
      board =[];
      //get all the dom elements that have the class square, go through each one and push its text onto the board.
      $('.square').each(function() {
        board.push($(this).text());
      });
      //TO DO if either var getWinnerX or var getWinnerO is true when we pass them through the winner function, then Winner will be true. gameisOver will also be true, and then we cant go to next player
      var xIsWinner = getWinnerX();
      var oIsWinner = getWinnerO();
      gameisOver = Winner(xIsWinner, oIsWinner);
      //gameIsOver = Winner(true, false);
      //gameIsOver = Winner(false, true);
      //gameIsOver = Winner(false, false);



      //gameisOver = Winner(getWinnerX(),getWinnerO());
      console.log(gameisOver);
      //switch player from X to O
      player= (1 - player);

    } // end of if

  });  // end of click function


    //function that goes through each winning combination of X and if any of them match the board then true is returned and stores it in variable getWinnerX
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

    //function that goes through each winning combination of O and if any of them match the board then true is returned and stores it in variable getWinnerO
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
    //function that goes through vars getWinnerX and getWinnerO and if they are true then an alert pops up and Winner function returns true
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

/*function resetBoard(board){
board = [['','',''],
        ['','',''],
        ['','','']];
$('.square').each(function() {
        board.push.text(""));
  }
  var turns = 0;
}

$('#restart').click(resetBoard);*/

});



