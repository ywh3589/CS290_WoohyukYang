function makeTable()                            //Function to create the table that will be added
{       

    var body = document.getElementsByTagName("body")[0]; //This creates a reference so we can add the table to the body at the end of the function

    var createTable = document.createElement("table");  //Creating the table
    
    
    var createTableBody = document.createElement("tbody");   //Creating the body of the table

    for(var i = 0; i < 4; i++)
    {
        var createRow = document.createElement("tr");   //Creating the rows of the 4x4 table
        
        for(var j = 0; j < 4; j++)
        {
            if(i == 0)                                  //Logic to create the header rows of the table. It adds the text plus the index + 1 (since j is set to 0)
            {
                var tableHead = document.createElement("th");
                var tableHeadText = document.createTextNode("Header " + (j + 1));
                tableHead.appendChild(tableHeadText);   //Append the text node to each header cell
                createRow.appendChild(tableHead);
            }
            
            else
            {
                var normalCell = document.createElement("td");  //The logic that will run to create the rest of the table
                var normalCellText = document.createTextNode((i) + ', ' + (j + 1));     //The location of each cell
                normalCell.appendChild(normalCellText);     //Add the location text to the cell
                createRow.appendChild(normalCell);          //Add the cell to the table itself
            }
        }
        
        createTableBody.appendChild(createRow);             //Append each row to the table
    }
    
    createTable.appendChild(createTableBody);
    body.appendChild(createTable);                       //Puts the table in the document
    createTable.setAttribute("border", "1.5px");            //Sets the default border for the table
}

function makeButtons(){                                     //Function that will create the 5 different buttons that are needed
    
      
  var upButton = document.createElement("button");      //Button to move up
  upButton.id = "up";
  var upButtonText = document.createTextNode("Up");
  upButton.appendChild(upButtonText);
  document.body.appendChild(upButton);  
  
    
  var downButton = document.createElement("button");    //Button to move down
  downButton.id = "down";
  var downButtonText = document.createTextNode("Down");
  downButton.appendChild(downButtonText);
  document.body.appendChild(downButton);
  
    
  var leftButton = document.createElement("button");     //Button to move left
  leftButton.id = "left";
  var leftButtonText = document.createTextNode("Left");
  leftButton.appendChild(leftButtonText);
  document.body.appendChild(leftButton);
  
 
  var rightButton = document.createElement("button");       //Button to move right
  rightButton.id = "right";
  var rightButtonText = document.createTextNode("Right");
  rightButton.appendChild(rightButtonText);
  document.body.appendChild(rightButton);

  
  var markButton = document.createElement("button");        //Button to mark cell
  markButton.id = "mark";
  var markButtonText = document.createTextNode("Mark Cell");
  markButton.appendChild(markButtonText);
  document.body.appendChild(markButton);
}



function moveUp(){
  current = document.getElementById("this");            //"this" is the current cell. I found this naming convention online with a google search
  if(current.parentNode.rowIndex <= 1)                  
  { 
    return;                                             //If the currently selected cell is at the top, then moveUp will just return without doing anything
  }
  var holder = current.cellIndex;                       //Used to hold the column so the index can be used in a for loop
  current.style.borderWidth = "1.5px";    
  current.removeAttribute("id");                        //Clears the id so it can be assigned later
  current = current.parentNode;
  current = current.previousElementSibling;
  current = current.firstElementChild;                  //Sets the current cell to the first element 
  for(var i =0; i < holder; i++)                        //Use the index holder to move the current cell
  {                         
    current = current.nextElementSibling;
  }
  current.style.borderWidth = "4px";                    //Thick border for showing the selected cell
  current.id = "this";                                  //reset the id

}

function moveDown(){
  current = document.getElementById("this"); 
  if(current.parentNode.rowIndex >= 3)                  //Does nothing if the current cell is at the bottom
  { 
    return;
  }
  var holder = current.cellIndex; 
  current.style.borderWidth = "1.5px";
  current.removeAttribute("id"); 
  current = current.parentNode;
  current = current.nextElementSibling;
  current = current.firstElementChild;                  //Set to the child of the current cell
  for(var i = 0; i < holder; i++)
{ 
    current = current.nextElementSibling;
  }
  current.style.borderWidth = "4px";
  current.id = "this"; 

}

function moveRight(){
  current = document.getElementById("this"); 
  if(current.cellIndex == 3)                        //Does nothing if the current cell is all the way to the right
  { 
    return;
  }
  current.style.borderWidth = "1.5px"; 
  current.removeAttribute("id"); 
  current = current.nextElementSibling; 
  current.style.borderWidth = "4px"; 
  current.id = "this"; 
}


function moveLeft(){
  current = document.getElementById("this");
  if(current.cellIndex == 0)                        //Does nothing if the current cell is all the way to the left
  { 
      return;
  }
  current.style.borderWidth = "1.5px"; 
  current.removeAttribute("id"); 
  current = current.previousElementSibling;         //Set current cell to the cell on its left
  current.style.borderWidth = "4px"; 
  current.id = "this"; 
}

function markCell(){
    current = document.getElementById("this");      //The currently selected cell
    current.style.backgroundColor = "#FFFF00";      //The hex for yellow
}

makeTable();                                        //Call the functions to make the table and the buttons
makeButtons(); 

var current = document.getElementsByTagName("td")[0];   //This makes sure that the first selected cell is always the top left non-header cell
current.id = "this"; 
current.style.borderWidth = "4px"; 

                                                                            //The next five functions add the event functionality to execute the functions when the button is clicked
document.getElementById("up").addEventListener("click", moveUp);            //Moves up

document.getElementById("down").addEventListener("click", moveDown);        //Moves down

document.getElementById("left").addEventListener("click", moveLeft);        //Moves left

document.getElementById("right").addEventListener("click", moveRight);      //Moves right
 
document.getElementById("mark").addEventListener("click", markCell);        //"Marks" the cell by changing its background color to yellow