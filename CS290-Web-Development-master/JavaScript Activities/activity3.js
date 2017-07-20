//Some of this code is from StackOverflow. I had trouble
//with implementation so I will explain every piece.



var deepEqual = function (x, y) {
  if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) { //This first line is checking that x and y are objects that have a value
    if (Object.keys(x).length != Object.keys(y).length)  //We can exit the program right away if the objects have different length. That means they aren't equal.
      return false;

    for (var item in x) {               //This checks each item of x and y, hence the for loop
      if (y.hasOwnProperty(item))
      {  
        if (!deepEqual(x[item], y[item]))   //The recursive call to deepEqual to check if the item is equal
          return false;
      }
      else
        return false;
    }

    return true;
  }
  else if (x !== y)      //Simple case if x is not equal to y
    return false;
  else
    return true;
}
//test cases
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true