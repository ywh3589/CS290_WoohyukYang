//Name: Tyler Cope
//Date: 2/3/2017
//This assignment has some ideas borrowed from stack overflow, particularly using the switch statement to compare automobiles in typeComparator function.
//The naming convention to print is also taken from stack overflow because I really liked the autoArr name

function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator, array ){
    /*your code here*/
    var sorted = array.slice(0);    //Used to make a copy of the old array
    var temp;   //Variable used to switch values
    for(var i = 0; i < sorted.length - 1; i++)  //Iterate until the end
    {
        for(var j = i + 1; j < sorted.length; j++) //Another loop to compare each object in the array
        {
            if(comparator(sorted[j], sorted[i]))    //Switch the objects
            {
                temp = sorted[i];
                sorted[i] = sorted[j];
                sorted[j] = temp;
            }
        }
    }
    return sorted;
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
    /* your code here*/
    if(auto1.year > auto2.year)     //Newer year returns newer true
    {
        return true;
    }
    else
    {
        return false;
    }
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
    /* your code here*/
    if(auto1.make.toLowerCase() < auto2.make.toLowerCase()) //make use of toLowerCase to make the comparison case insensitive
    {
        return true;
    }
    else
    {
        return false;
    }
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
    /* your code here*/
    var holder = function(auto) //It's easy to use a switch statement to assign values to a variable based on the greatest to least defined in the assignment
    {
        switch(auto.type.toLowerCase())
        {
            case "roadster":
            return 1;
            break;
            
            case "pickup":
            return 2;
            break;
            
            case "suv":
            return 3;
            break;
            
            case "wagon":
            return 4;
            break;
            
            default:
            return 5;
        }
    }
    
    if(holder(auto1) < holder(auto2))    //The reason why the comparison returns true if auto1 is < auto2 is because the smaller numbers are "greater"
    {
        return true;
    }
    
    else if(holder(auto1) == holder(auto2)) //Need to compare the years if the models are equal
    {
        return yearComparator(auto1, auto2);
    }
    
    else
    {
        return false;
    }
}

Automobile.prototype.logMe = function(bool)
{
    if(bool == true)
    {
        console.log(this.year + " " + this.make + " " + this.model + " " + this.type);
    }
    else
    {
        console.log(this.year + " " + this.make + " " + this.model + " ");
    }
}

function printing(autoArr, bool)
{
    autoArr.forEach(function(x)
    {
        x.logMe(bool);
    })
}

//Your program should output the following to the console.log, including the opening and closing 5 stars. All values in parenthesis should be replaced with appropriate values. Each line is a seperate call to console.log.

//Each line representing a car should be produced via a logMe function. This function should be added to the Automobile class and accept a single boolean argument. If the argument is 'true' then it prints "year make model type" with the year, make, model and type being the values appropriate for the automobile. If the argument is 'false' then the type is ommited and just the "year make model" is logged.

//Now we need arrays in order to sort the automobiles
var autoYear = sortArr(yearComparator, automobiles);  //Sorts by year
var makeType = sortArr(makeComparator, automobiles);  //Sorts by make
var autoType = sortArr(typeComparator, automobiles);   //Sorts by type

console.log("*****");
console.log("The cars sorted by year are:");
console.log("year make model of the 'greatest' car");
printing(autoYear, false);
console.log("year make model of the 'least' car");

console.log("The cars sorted by make are:");
console.log("year make model of the 'greatest' car");
printing(makeType, false);
console.log("year make model of the 'least' car");

console.log("The cars sorted by type are:");
console.log("year make model type of the 'greatest' car");
printing(autoType, false);
console.log("year make model type of the 'least' car");
console.log("*****");

