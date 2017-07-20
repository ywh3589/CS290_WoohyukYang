function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)

    this.logMe = function(bool) {
       var str = this.year + ' ' + this.make + ' ' + this.model;
       if (bool) {
          str += ' ' + this.type;
       }
       console.log(str);
    }.bind(this);
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

function sortArr(comparator, array) {
    var copy = array;
    do {
      swapped = false;
      for (var i = 0; i < array.length - 1; i++) {
         if (comparator(copy[i], copy[i + 1])) {
            var temp = copy[i];
            copy[i] = copy[i + 1];
            copy[i + 1] = temp;
            swapped = true;
         }
      }
    } while (swapped);    
    return copy;
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator(int1, int2){
    if (int1 < int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator(auto1, auto2){
    if (auto1.year < auto2.year) {
       return true;
    } else if (auto1.year <= auto2.year) {
       return false;
    }
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
    if (auto1.make.toUpperCase() > auto2.make.toUpperCase()) {
       return true;
    } else if (auto1.make.toUpperCase() <= auto2.make.toUpperCase()) {
       return false;
    }
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator(auto1, auto2){
   var typeMap = {
      "Roadster": 1,
      "Pickup": 2,
      "SUV": 3,
      "Wagon": 4,
      "Sedan": 5
   };

   var auto1TypeVal = typeMap[auto1.type];
   var auto2TypeVal = typeMap[auto2.type];

   if (auto1TypeVal === undefined) {
      auto1TypeVal = 6;
   }

   if (auto2TypeVal === undefined) {
      auto2TypeVal = 6;
   }

   if (auto1TypeVal > auto2TypeVal) {
      return true;
   } else if (auto1TypeVal < auto2TypeVal) {
      return false;
   } else if (auto1TypeVal === auto2TypeVal) {
      return yearComparator(auto1, auto2);
   }
}

function printArr(arr, bool) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].logMe(bool);
  }
}

console.log('*****');
console.log('The cars sorted by year are:');
printArr(sortArr(yearComparator, automobiles), false);
console.log('\nThe cars sorted by make are:');
printArr(sortArr(makeComparator, automobiles), false);
console.log('\nThe cars sorted by type are:');
printArr(sortArr(typeComparator, automobiles), true);
console.log('*****');

/*Your program should output the following to the console.log, including the opening and closing 5 stars. All values in parenthesis should be replaced with appropriate values. Each line is a seperate call to console.log.
 *
 * Each line representing a car should be produced via a logMe function. This function should be added to the Automobile class and accept a single boolean argument. If the argument is 'true' then it prints "year make model type" with the year, make, model and type being the values appropriate for the automobile. If the argument is 'false' then the type is ommited and just the "year make model" is logged.
 *
 * *****
 * The cars sorted by year are:
 * (year make model of the 'greatest' car)
 * (...)
 * (year make model of the 'least' car)
 *
 * The cars sorted by make are:
 * (year make model of the 'greatest' car)
 * (...)
 * (year make model of the 'least' car)
 *
 * The cars sorted by type are:
 * (year make model type of the 'greatest' car)
 * (...)
 * (year make model type of the 'least' car)
 * *****
 *
 * As an example of the content in the parenthesis:
 * 1990 Ford F-150 */
