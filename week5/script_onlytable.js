 var body = document.getElementsByTagName("body")[0];
//  var body = document.createElement("BODY");
  var tbl = document.createElement("table");
  var tableBody = document.createElement("tbody");



function generate_table_header() {

 
 
  var head1 = document.createElement("th");
  var headName = document.createTextNode("name");
  var head2 = document.createElement("th");
  var headReps = document.createTextNode("reps");
  var head3 = document.createElement("th");
  var headWeight = document.createTextNode("weight");
  var head4 = document.createElement("th");
  var headDate = document.createTextNode("date");
  var head5 = document.createElement("th");
  var headLbs = document.createTextNode("lbs");

  head1.appendChild(headName);
  head2.appendChild(headReps);
  head3.appendChild(headWeight);
  head4.appendChild(headDate);
  head5.appendChild(headLbs);
  

  tableBody.appendChild(head1);
   tableBody.appendChild(head2);
    tableBody.appendChild(head3);
     tableBody.appendChild(head4);
      tableBody.appendChild(head5);
  
  tbl.appendChild(tableBody);
  body.appendChild(tbl);
  
  //tbl.setAttribute("border", "1");
  //tbl.style.borderWidth = "thin"
}

function generate_table(){

  // creating all cells
 // for (var i = 1; i < 4; i++) {
    // creates a table row
    var row = document.createElement("tr");
    //var header = document.createElement("th");
     for (var j = 1; j < 6; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("empty");
      cell.appendChild(cellText);

      row.appendChild(cell);
      row.setAttribute("border", "1");

     
    }
     var del = document.createElement("INPUT");
     var edit = document.createElement("INPUT");

     del.setAttribute("type", "submit"); //what's the difference
     edit.setAttribute("type", "BUTTON");

      del.setAttribute("value", "delete");
       edit.setAttribute("value", "edit");

     row.appendChild(del);
     row.appendChild(edit);
    // add the row to the end of the table body
    tableBody.appendChild(row);
    tableBody.setAttribute("border", "1");
 // }

 	// put the <tableBody> in the <table>
  	tbl.appendChild(tableBody);
  	// appends <table> into <body>
  	body.appendChild(tbl);
  	
  	//tbl.setAttribute("border", "1");
  	
  	//tbl.style.borderWidth = "thin"
}
generate_table_header();
//generate_table();
//generate_table();