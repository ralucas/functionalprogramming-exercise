//Pluralize refactor
var pluralize = function (word, number){
  return number === 1 ? word : word + "s";	
};

//Victim refactor
var victim = {};

var key = ['name', 'phone', 'street']; 

var setObj = function(arr, obj){
	for(var i = 0; i < arr.length; i++){
		obj[arr[i]] = prompt("Please enter your "+ arr[i]+":");
	}
	return obj;
};

setObj(key, victim);
alert('Thank you! Victim entered: \n {name}, {phone}, {street}'.supplant(victim));

//Falsy with side-effects
var falsies = function(arr){
	for(var i = 0; i < arr.length; i++){
		arr[i] ? arr[i] : arr.splice(i,1);
	}
	return arr;
}

//Falsy pure
var falsiesPure = function(arr){
	var newArr = [];
	for(var i = 0; i < arr.length; i++){
		if(arr[i]){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
