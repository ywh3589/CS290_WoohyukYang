
/* function to prove that function hoisting this will work in JavaScript.*/
console.log(sum(1,2));

function sum(x,y){
	return x + y;
}

console.log(sum(1,3));

/*Function which is assigned to a variable*/


//console.log(summation(1,2));


var summation = function sumSecond(x,y){
	return x + y;
};

console.log(summation(1,3));


