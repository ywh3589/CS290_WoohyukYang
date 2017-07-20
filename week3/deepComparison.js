function deepEqual(x, y){

if((typeof x == "object") && (x != null))
{
	if((typeof y == "object") && (y != null))
  	{
  		//when there is difference between the number of properties, it returns false.
		if(Object.keys(x).length != Object.keys(y).length)
			return false;
		//when the number of properties is same. 	
		else
		{
			for(var propX in x)
			{
				//if there is no property matching then it returns false.
				if(!(y.hasOwnProperty(propX)))
					return false;
				//if there is a property matching together
				else
				{
					//if the type of properties are both object then we have to check the value object using recursive function.
					if((typeof x[propX] == "object")&&(typeof y[propX] == "object"))
					{
						if(!deepEqual(x[propX], y[propX]))
							return false;	
						return true;				
					}
					//if the type of properties are not both objects.	
					else
					{
						if((typeof x[propX]) != (typeof y[propX]))
							return false;
						if(x[propX] !== y[propX])
							return false;
					}	
				}	
			}
			
			return true;
		}  
  	}
  	else
  		return false;
}
else if(x === y)
	return true;
else
	return false;
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

console.log(deepEqual(obj_n1, obj_n2));
//if(obj_n1 == null)
//	console.log("null");
//console.log(typeof(obj_1));
//console.log(typeof(obj_n));
//console.log(deepEqual(obj_n1, obj_n2));
//console.log(Object.keys(obj_1).length);
//console.log(Object.keys(obj_2).length);

console.log(deepEqual(obj_3, obj_4));
//true
console.log(deepEqual(obj_1, obj_8));
//false
console.log(deepEqual(obj_1, obj_7));
//true
//console.log(typeof obj_1.key2);
console.log(deepEqual(obj_9, obj_10));
//true
console.log(deepEqual(obj_7, obj_8));

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true