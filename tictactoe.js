
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

var board = [[a,b,c],
             [d,e,f],
             [g,h,i]];

var getWinnerX= function (board){
  ('X'===[a] && 'X'===[b] && 'X'===[c])||
  ('X'===[d] && 'X'===[e] && 'X'===[f])||
  ('X'===[g] && 'X'===[h] && 'X'===[i]){
    return  'X is the Winner'
  }
}


