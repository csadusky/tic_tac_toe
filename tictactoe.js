
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

Var Board = [[]

                        ]


