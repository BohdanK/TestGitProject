"use strict";

var salaries = {
	"Вася": 100,
	"Петя": 300,
	"Даша": 250
};

function getSum(obj) {
	var sal = 0;
	for (var key in obj) {
		if (obj[key] > sal){
			sal = obj[key];
		}

	}
	return sum;
}

alert(getSum(salaries));