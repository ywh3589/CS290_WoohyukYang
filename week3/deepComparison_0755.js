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


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true