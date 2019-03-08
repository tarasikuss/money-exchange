// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	var fiftyQuant = Math.floor(currency/50);
		if (fiftyQuant>0) {
			var curStand = currency-(fiftyQuant*50);
			var twentFiveQuant = Math.floor(curStand/25);
				if (twentFiveQuant > 0){
					curStand = curStand- (twentFiveQuant*25);
					var tenQuant = Math.floor(curStand/10);
					if (tenQuant > 0){
						curStand = curStand- (tenQuant*10);
						var fiveQuant = Math.floor(curStand/5);
						if (fiveQuant > 0){
							curStand = curStand - (fiveQuant*5);
							var oneQuant = curStand;
						}
						else {
							var oneQuant = curStand;
						}	
					}
					else {
						var fiveQuant = Math.floor(curStand/5);
						if (fiveQuant > 0){
							curStand = curStand - (fiveQuant*5);
							var oneQuant = curStand;
						}
						else {
							var oneQuant = curStand;
						}
					}
				}
				else {
					var tenQuant = Math.floor(curStand/10);
					if (tenQuant > 0){
						curStand = curStand- (tenQuant*10);
						var fiveQuant = Math.floor(curStand/5);
						if (fiveQuant > 0){
							curStand = curStand - (fiveQuant*5);
							var oneQuant = curStand;
						}
						else {
							var oneQuant = curStand;
						}
					}
					else {
						var fiveQuant = Math.floor(curStand/5);
						if (fiveQuant > 0){
							curStand = curStand - (fiveQuant*5);
							var oneQuant = curStand;
						}
						else {
							var oneQuant = curStand;
						}
					}
				}
		}
		else {
			var curStand = currency;
			var twentFiveQuant = Math.floor(currency/25);
				if (twentFiveQuant > 0){
					curStand = curStand-(twentFiveQuant*25);
					var tenQuant = Math.floor(curStand/10);
					if (tenQuant > 0){
						curStand = curStand- (tenQuant*10);
						var fiveQuant = Math.floor(curStand/5);
						if (fiveQuant > 0){
							curStand = curStand - (fiveQuant*5);
							var oneQuant = curStand;
						}
						else {
							var oneQuant = curStand;
						}
					}
					else {
						var fiveQuant = Math.floor(curStand/5);
						if (fiveQuant > 0){
							curStand = curStand - (fiveQuant*5);
							var oneQuant = curStand;
						}
						else {
							var oneQuant = curStand;
						}
					}
				}
				else {
					var tenQuant = Math.floor(curStand/10);
					if (tenQuant > 0){
						curStand = curStand- (tenQuant*10);
						var fiveQuant = Math.floor(curStand/5);
						if (fiveQuant > 0){
							curStand = curStand - (fiveQuant*5);
							var oneQuant = curStand;
						}
						else {
							var oneQuant = curStand;
						}
					}
					else {
						var fiveQuant = Math.floor(curStand/5);
						if (fiveQuant > 0){
							curStand = curStand - (fiveQuant*5);
							var oneQuant = curStand;
						}
						else {
							var oneQuant = curStand;
						}
					}
				}
		}
		if (currency < 10000){
			var test = {}
			if (fiftyQuant>0) {
				test['H'] = fiftyQuant;
			}
			if (twentFiveQuant>0) {
				test['Q'] = twentFiveQuant;
			}
			if (tenQuant>0) {
				test['D'] = tenQuant;
			}
			if (fiveQuant>0) {
				test['N'] = fiveQuant;
			}
			if (oneQuant>0) {
				test['P'] = oneQuant;
			}
			return test;
		}
		else {
			return ({error: "You are rich, my friend! We don't have so much coins for exchange"});
		}

    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}