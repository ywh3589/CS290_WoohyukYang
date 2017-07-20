

 document.addEventListener('DOMContentLoaded', bindButtons);


      function bindButtons(){
        document.getElementById('Submit').addEventListener('click', function(event){
          var req = new XMLHttpRequest();
          var payload = {name:null, reps:null, weight:null, date:null, lbs:null };
          payload.name = document.getElementById('name').value;
          payload.reps = document.getElementById('reps').value;
          payload.weight = document.getElementById('weight').value;
          payload.date = document.getElementById('date').value;
          payload.lbs = document.getElementById('lbs').value;
          req.open('POST', 'http://httpbin.org/post', true);
          req.setRequestHeader('Content-Type', 'application/json');
          req.addEventListener('load',function(){
          if(req.status >= 200 && req.status < 400){
            var response = JSON.parse(req.responseText);
            document.getElementById('response').textContent = response.data;
            //generate_table();
            tableCreate();
           
          } else {
            console.log("Error in network request: " + req.statusText);
          }});

          req.send(JSON.stringify(payload));
         
          event.preventDefault();
        })

        //generate_table();


         //myFunction();
      
        tableHeaderCreate();

       //generate_table_header()
       
       // generate_table_header();
      }


//--------------------------table------------------------------------


  //var body = document.getElementsByTagName("body")[0];
  /*
  var body = document.createElement("BODY");
  var tbl = document.createElement("table");
  var tableBody = document.createElement("tbody");
*/

/*
function generate_table_header() {

  var body = document.getElementsByTagName('body')[0];
    //var body = document.createElement('body');
    var tbl = document.createElement('table');
 
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
//generate_table_header();
//generate_table();
//generate_table();
*/

function tableHeaderCreate() {
    var body = document.getElementsByTagName('body')[0];
    //var body = document.createElement('body');
    var tbl = document.createElement('table');
    tbl.style.width = '50%';
    tbl.setAttribute('border', '1');
    var tbody = document.createElement('tbody');
    
        var th = document.createElement('th');
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

  tbody.appendChild(head1);
   tbody.appendChild(head2);
    tbody.appendChild(head3);
     tbody.appendChild(head4);
      tbody.appendChild(head5);
  
  tbl.appendChild(tbody);
  body.appendChild(tbl);

      
}

function tableCreate() {
    var body = document.getElementsByTagName('body')[0];
    //var body = document.createElement('body');
    var tbl = document.createElement('table');
    tbl.style.width = '50%';
    tbl.setAttribute('border', '1');
    var tbody = document.createElement('tbody');
    
        var th = document.createElement('th');
  var head1 = document.createElement("th");
  var headName = document.createTextNode("sddfdfd");
  var head2 = document.createElement("th");
  var headReps = document.createTextNode("dfdfd");
  var head3 = document.createElement("th");
  var headWeight = document.createTextNode("dfdfd");
  var head4 = document.createElement("th");
  var headDate = document.createTextNode("dfdfd");
  var head5 = document.createElement("th");
  var headLbs = document.createTextNode("dfdf");

  head1.appendChild(headName);
  head2.appendChild(headReps);
  head3.appendChild(headWeight);
  head4.appendChild(headDate);
  head5.appendChild(headLbs);

  tbody.appendChild(head1);
   tbody.appendChild(head2);
    tbody.appendChild(head3);
     tbody.appendChild(head4);
      tbody.appendChild(head5);
  
 

     var del = document.createElement("INPUT");
     var edit = document.createElement("INPUT");

     del.setAttribute("type", "submit"); //what's the difference
     edit.setAttribute("type", "BUTTON");

      del.setAttribute("value", "delete");
       edit.setAttribute("value", "edit");

   

  tbl.appendChild(tbody);
   
      
    body.appendChild(tbl);
    body.appendChild(del);
     body.appendChild(edit);
}

function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
       var cell5 = row.insertCell(4);
   //var cell6 = row.insertCell(5);
   
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "NEW CELL1";
    cell4.innerHTML = "NEW CELL2";
    cell5.innerHTML = "NEW CELL1";
   // cell6.innerHTML = "NEW CELL1";

    //var inside = document.getElementById

    var x = document.createElement("BUTTON");
    var t = document.createTextNode("delete");
    x.appendChild(t);
    document.table.appendChild(x);


    
     
}

function generate_table() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
 
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
 
  // creating all cells
 
    // creates a table row
    var row = document.createElement("tr");
 
    
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell_1 = document.createElement("td");
      var cellText = document.createTextNode("name");
      cell_1.appendChild(cellText);
      row.appendChild(cell_1);
    
      var cell_2 = document.createElement("td");
      var cellText = document.createTextNode("reps");
      cell_2.appendChild(cellText);
      row.appendChild(cell_2);

      var cell_3 = document.createElement("td");
      var cellText = document.createTextNode("weight");
      cell_3.appendChild(cellText);
      row.appendChild(cell_3);

      var cell_4 = document.createElement("td");
      var cellText = document.createTextNode("date");
      cell_4.appendChild(cellText);
      row.appendChild(cell_4);

      var cell_5 = document.createElement("td");
      var cellText = document.createTextNode("lbs");
      cell_5.appendChild(cellText);
      row.appendChild(cell_5);




    
 
    // add the row to the end of the table body
    tblBody.appendChild(row);
  
 
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}



//tableCreate();
console.log("dfdf");