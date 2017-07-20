function generate_table() {

  var body = document.getElementsByTagName("body")[0];
 
  var tbl = document.createElement("table");
  var tableBody = document.createElement("tbody");
 
  for(var i = 1; i < 5; i++){
  var head = document.createElement("th");
  var headText = document.createTextNode("Header " + i);
     head.appendChild(headText);
    tableBody.appendChild(head);
  }

  // creating all cells
  for (var i = 1; i < 4; i++) {
    // creates a table row
    var row = document.createElement("tr");
    //var header = document.createElement("th");
     for (var j = 1; j < 5; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode(j+","+i);
      cell.appendChild(cellText);

      row.appendChild(cell);
      row.setAttribute("border", "1");
    }
 
    // add the row to the end of the table body
    tableBody.appendChild(row);
    tableBody.setAttribute("border", "1");
  }

 	// put the <tableBody> in the <table>
  	tbl.appendChild(tableBody);
  	// appends <table> into <body>
  	body.appendChild(tbl);
  	
  	tbl.setAttribute("border", "1");
  	
  	tbl.style.borderWidth = "thin"
}

function generate_direction_button() {
  
  var body = document.getElementsByTagName("body")[0];
 
  var buttonUp = document.createElement("button");
  var buttonTextUp = document.createTextNode("up");
  
  var buttonDown = document.createElement("button");
  var buttonTextDown = document.createTextNode("down");
  
  var buttonLeft = document.createElement("button");
  var buttonTextLeft = document.createTextNode("left");
  
  var buttonRight = document.createElement("button");
  var buttonTextRight = document.createTextNode("right");
  
  buttonUp.appendChild(buttonTextUp);
  buttonDown.appendChild(buttonTextDown);
  buttonLeft.appendChild(buttonTextLeft);
  buttonRight.appendChild(buttonTextRight);

  body.appendChild(buttonUp);
  body.appendChild(buttonDown);
  body.appendChild(buttonLeft);
  body.appendChild(buttonRight);
}


function generate_markCell_button(){
  
  var body = document.getElementsByTagName("body")[0];
 
  var buttonMarkCell = document.createElement("button");
  var buttonTextMarkCell = document.createTextNode("Mark Cell");
	
  buttonMarkCell.appendChild(buttonTextMarkCell);

  body.appendChild(buttonMarkCell);
}


//making forms
generate_table();
generate_direction_button();
generate_markCell_button();


var tdCell = document.getElementsByTagName("td");

for(var i = 0; i < tdCell.length; i++)
{
	tdCell[i].style.backgroundColor = "none";
	tdCell[i].style.borderColor = "black";
	tdCell[i].style.borderWidth = "thin";	
}

var thCell = document.getElementsByTagName("th");

for(var i = 0; i < thCell.length; i++)
{
	thCell[i].style.backgroundColor = "none";
	thCell[i].style.borderColor = "none";
	thCell[i].style.borderWidth = "thin";	
}

var position = 0;
tdCell[position].style.borderWidth = "thick";

function upDirection(){
 	
	if(position < 4)
		return;
	
	var newPosition = position-4;
	tdCell[newPosition].style.borderWidth = "thick";
	tdCell[position].style.borderWidth = "thin";
	position = newPosition;
}

function downDirection(){
 	if(position > 7)
		return;
	var newPosition = position+4;
	tdCell[newPosition].style.borderWidth = "thick";
	tdCell[position].style.borderWidth = "thin";
	position = newPosition;
}

function leftDirection(){
 	if(position == 0 || position == 4 || position == 8)
		return;
	var newPosition = position-1;
	tdCell[newPosition].style.borderWidth = "thick";
	tdCell[position].style.borderWidth = "thin";
	position = newPosition;
}

function rightDirection(){
 	if(position == 3 || position == 7 || position == 11)
		return;
	var newPosition = position+1;
	tdCell[newPosition].style.borderWidth = "thick";
	tdCell[position].style.borderWidth = "thin";
	position = newPosition;
}

function changeColor(){
	tdCell[position].style.backgroundColor = "yellow";
}

document.getElementsByTagName("button")[0].addEventListener("click", upDirection);	  // up
document.getElementsByTagName("button")[1].addEventListener("click", downDirection);  //down
document.getElementsByTagName("button")[2].addEventListener("click", leftDirection);  //left
document.getElementsByTagName("button")[3].addEventListener("click", rightDirection); //right
document.getElementsByTagName("button")[4].addEventListener("click", changeColor);    //markCell 










	
