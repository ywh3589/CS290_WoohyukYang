

function deepEqual(x, y){

var count = 0;
var recursiveCount = 0;

if((typeof x == "object") && (x != null))
{
	if((typeof y == "object") && (y != null))
  	{
		if(Object.keys(x).length != Object.keys(y).length)
		{
			console.log("line12 false");
			return false;
		}	
		else
		{
			for(var propX in x)
			{
				//count++;
				//if(count != Object.keys(x).length)
				//	continue;
				console.log("x.propX = ", x[propX], "y.propX = ", y[propX]);		
				
				console.log("propX = ", propX);
				if(!(y.hasOwnProperty(propX)))
				{
					console.log("property not matching");
					console.log("line 29false");
					return false;
				}
				else
				{
					console.log("property matching");
					console.log("x.propX = ", x[propX], "y.propX = ", y[propX]);		
					console.log("having property");
					if((typeof x[propX] == "object")&&(typeof y[propX] == "object"))
					{
						console.log("inside recursive");
						console.log("typeof propx = ", typeof x[propX], "typeof propy = ", typeof y[propX]);
						

						recursiveCount++;
						if(!deepEqual(x[propX], y[propX]))
						{
							console.log("line40 false");
							return false;		
						}
						
						
						return true;

						
							
					}	
					else
					{
						console.log("else");
						console.log("propX = ", x[propX], "propY = ", y[propX]);
						if(x[propX] === y[propX])
						{
							count++;
							console.log("count = ", count);
							console.log("recursiveCount = ", recursiveCount);
							var newCount = count + recursiveCount;
							console.log("newCount = ", newCount);
							if(newCount != Object.keys(x).length)
							{
								console.log("continue");
								continue;
							}
							console.log("line 67 true");
							return true;
						}
						else 
						{
							console.log("last false");
							return false;
						}
					}
					
				}	



				/*for(var propY in y)
				{
					if(propX == propY)
					{
						if(x[propX] === y[propY])
							return true;
						deepEqual(x[propX], y[propY]);

					}
					else
						return false;
				}
				*/
			}
		}  
  	}
  	else
  	{
  		console.log("line 88 false");
  		return false;
  	}
}
else if(x === y)
	return true;
else
{
	console.log("line 96 false");
	return false;
}
}

var obj_n1 = null;
var obj_n2 = {};
var obj_1 = {key1 :1, key2:{innerkey:56}, key3:3};
var obj_2 = {key1 :1};
var obj_3 = {key2 :2, key1:1, key3:3};
var obj_4 = {key1 :1, key2:2, key3:3};
var obj_5 = {key1 :1, key2:{innerkey:1}, key3:3};
var obj_6 = {key2:{innerkey:1}, key1 :1, key3:3};
var obj_7 = {key1 :1, key2:{innerkey:56}, key3:3};
var obj_8 = {key1 :1, key2:{innerkey:56, innerkey_3:45}, key3:3};
var obj_9 = {key2:{innerkey:{innerinnerkey:3}}, key1:1, key3:3};
var obj_10 = {key1 :1, key2:{innerkey:{innerinnerkey :3}}, key3:3};

//if(obj_n1 == null)
//	console.log("null");
//console.log(typeof(obj_1));
//console.log(typeof(obj_n));
//console.log(deepEqual(obj_n1, obj_n2));
//console.log(Object.keys(obj_1).length);
//console.log(Object.keys(obj_2).length);

//console.log(deepEqual(obj_3, obj_4));
//console.log(deepEqual(obj_1, obj_8));
//console.log(deepEqual(obj_1, obj_7));
//console.log(typeof obj_1.key2);
//console.log(deepEqual(obj_9, obj_10));
//console.log(deepEqual(obj_7, obj_8));

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true