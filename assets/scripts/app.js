'use strict'

// const events = require('./events')

// const userToken = 'X'
// const oppToken = 'Y'

// Place an item.
$(() => {
  let playerChoice = "X";
  let playerScore = 0;
  let computerChoice = "O";
  let computerScore = 0;
  let playersTurn = true;
  let computerSpot = '.cell-' + getRandomInt(0,2) + '-' + getRandomInt(0,2);

  $(".board-cell").click(function(){
  		  	//figure out loop logic for if a spot is taken.
  		  	if (playersTurn) {
  		  		if ($(this).html() != "&nbsp;") {
  		  			$('.message-text').text(x + " Trying to cheat? You loose a turn.");
  		  		} else if ($(this).html() == computerChoice){
  		  			$('.message-text').text(x + " Trying to cheat? You loose a turn.");
  		  		} else {
  			 		$(this).text(playerChoice);
  			 		playersTurn = false;
  		  		};
  		 	}
  		 	// check the player
  		    if (checkWin(playerChoice) == true) {
  		    	playerScore += 1;
  		    	$('.playerScore').html(playerScore);
  		    	resetBoard();
  		    };
  		    if (checkTie() == true) {
  		    	resetBoard();
  		    };
  		    //run the computer
  	 		while ($(computerSpot).html() != "&nbsp;") {
  				computerSpot = '.cell-' + getRandomInt(0,2) + '-' + getRandomInt(0,2);
  	 		}
  	 		setTimeout(function(){
  	 			$(computerSpot).text(computerChoice);
  	 			playersTurn = true;
  	 		//check the computer
  		    if (checkWin(computerChoice) == true) {
  		    	computerScore += 1;
  		    	$('.computerScore').html(computerScore);
  		    	resetBoard();
  		    };
  		    if (checkTie() == true) {
  		    	resetBoard();
  		    };
  	 		},300);

  		// x will be whoevers hit spots you are checking
  	    function checkWin(x){
  	    	var win = false;
  	    	//check horizontal
  	    	if ($('.cell-0-0').text() == x
  	    	 && $('.cell-0-1').text() == x
  	    	 && $('.cell-0-2').text() == x ||
  	    	 	$('.cell-1-0').text() == x
  	    	 && $('.cell-1-1').text() == x
  	    	 && $('.cell-1-2').text() == x ||
  	    	 	$('.cell-2-0').text() == x
  	    	 && $('.cell-2-1').text() == x
  	    	 && $('.cell-2-2').text() == x) {
  	    	 	$('.message-text').text(x + " Won last game");
  	    		win = true;
  	    	};
  	    	//check vertical
  	    	if ($('.cell-0-0').text() == x
  	    	 && $('.cell-1-0').text() == x
  	    	 && $('.cell-2-0').text() == x ||
  	    	 	$('.cell-0-1').text() == x
  	    	 && $('.cell-1-1').text() == x
  	    	 && $('.cell-2-1').text() == x ||
  	    	 	$('.cell-0-2').text() == x
  	    	 && $('.cell-1-2').text() == x
  	    	 && $('.cell-2-2').text() == x) {
  	    	 	$('.message-text').text(x + " Won last game");
  	    		win = true;
  	    	};
  	    	//check diagnal
  	    	if ($('.cell-0-0').text() == x
  	    	 && $('.cell-1-1').text() == x
  	    	 && $('.cell-2-2').text() == x ||
  	    	 	$('.cell-0-2').text() == x
  	    	 && $('.cell-1-1').text() == x
  	    	 && $('.cell-2-0').text() == x) {
  	    	 	$('.message-text').text(x + " Won last game");
  	    		win = true;
  	    	};
  	    	//return
  	    	return win;
  	    }

  	    //clear the board
  	    function resetBoard(){
  	    	$('.board-cell').html('&nbsp;');
  	    }

  	    function checkTie(){
  	    	var tie = false;
  	    	if ($('.cell-0-0').html() != "&nbsp;"
  	    	&&  $('.cell-0-1').html() != "&nbsp;"
  	    	&&  $('.cell-0-2').html() != "&nbsp;"
  	    	&&  $('.cell-1-0').html() != "&nbsp;"
  	    	&&  $('.cell-1-1').html() != "&nbsp;"
  	    	&&  $('.cell-1-2').html() != "&nbsp;"
  	    	&&  $('.cell-2-0').html() != "&nbsp;"
  	    	&&  $('.cell-2-1').html() != "&nbsp;"
  	    	&&  $('.cell-2-2').html() != "&nbsp;") {
  		    	$('.message-text').text("It's A Tie");
  	    		tie = true;
  	    	};
  	    	return tie;
  	    }
  	    //computers random number
  		function getRandomInt(min, max) {
      		return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
