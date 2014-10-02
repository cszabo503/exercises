

$('#rock').on('click', function(){
	var result = compare('rock', computerChoice());
	$('#decision').html(result);

});


$('#paper').on('click', function(){
	var result = compare('paper', computerChoice());
	$('#decision').html(result);

});


$('#scissors').on('click', function(){
	var result = compare('scissors', computerChoice());
	$('#decision').html(result);

});

var compare = function(userInput, compInput){
	if (userInput === 'rock'){
		if (compInput === 'rock') {
			return 'Tie!';
		}
	else if (compInput === 'paper'){
			return 'My rock lost to paper';
	} else if (opponenet === 'scissors') {
		return 'My rock crushed scissors!';
	}

	} else if (userInput === ) 
	else if (userInput === 'paper'){
			return 'My rock lost to paper';
	} else if (opponenet === 'scissors') {
		return 'My rock crushed scissors!';
	}

	}
};

var computerChoice = function(){
	var random = Math.random();
	if (random < 0.33){
		return 'rock';
	}
	else if (random < 0.67){
		return 'paper';
	}
	else{
		return 'scissors';
	}

}


0 0.33 = rock
0.34 0.66 = paper
0.67 1 = scissors