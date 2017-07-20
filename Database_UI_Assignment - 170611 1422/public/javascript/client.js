


document.addEventListener('DOMContentLoaded', bindSubmitButtons);

function bindSaveButtons(){document.getElementById('Save').addEventListener('click',Requesting);}

function bindSubmitButtons(){document.getElementById('Submit').addEventListener('click',Requesting);}

function Requesting() {

	//Now what I need to do is to make a request and when the request is successful then I can call 
		  var req = new XMLHttpRequest();
          var payload = {name:null, reps:null, weight:null, date:null, lbs:null};
          payload.name = document.getElementById('name').value;
          
          payload.reps = document.getElementById('reps').value;
          //console.log(payload.reps);
          payload.weight = document.getElementById('weight').value;
          //console.log(payload.weight);
          payload.date = document.getElementById('date').value;
          //console.log(payload.date);
          payload.lbs = document.getElementById('lbs').value;
          //console.log(payload.lbs);
          
          req.open('POST', 'http://localhost:5698/add', true);
          req.setRequestHeader('Content-Type', 'application/json');
          req.addEventListener('load',function(){
          if(req.status >= 200 && req.status < 400){
          //	console.log("req success");
          // console.log(req.responseText);
           //var response = req.responseText;
           var response = JSON.parse(req.responseText);
           
         
           console.log(response);

	        Adding(response);
            //document.getElementById('response').textContent = req.responseText;
           
          } else {
            console.log("Error in network request: " + req.statusText);
          }});

          req.send(JSON.stringify(payload));
         
          //event.preventDefault();





	
    event.preventDefault();



	
}

function Adding(response){
    var table = document.getElementById("myTable");
    var x = document.getElementById("myTable").rows.length;
   // console.log(x);
    var hiddenId = response[0].id;


	var row = document.createElement("TR");
    row.setAttribute("id", "row" + hiddenId);
    document.getElementById("myTable").appendChild(row);


  //  var row = table.insertRow(x);
  //  row.setAttribute("id", response[0].id);

    /*
test
    */
    // document.getElementById(response[0].id)

   //---------
    var hiddenInput = document.createElement("INPUT");
    hiddenInput.setAttribute("type", "hidden");
    hiddenInput.id = "hiddenId" + response[0].id;
    row.appendChild(hiddenInput);
     hiddenInput.value = response[0].id;
    console.log(hiddenInput.value);

    var cell_name = row.insertCell(0);
    var cell_reps = row.insertCell(1);
    var cell_weight = row.insertCell(2);
    var cell_date = row.insertCell(3);
    var cell_lbs = row.insertCell(4);
    var cell_edit = row.insertCell(5);
    var cell_delete = row.insertCell(6);

    var noInput = "no Input";

    cell_name.innerHTML = response[0].name || noInput;
    cell_reps.innerHTML = response[0].reps || noInput;
    cell_weight.innerHTML = response[0].weight || noInput;
    cell_date.innerHTML = response[0].date || noInput;
    cell_lbs.innerHTML = response[0].lbs || noInput;

//-----------edit button
	//var editLink = document.createElement('a');
	//editLink.setAttribute('href','/edit?query=' + hiddenId); 

    var editButton = document.createElement("INPUT");
    editButton.setAttribute("type", "Submit");
    editButton.id = "edit" + hiddenInput.value;
    console.log("EDIT BUTTON ID IS " + editButton.id);
    editButton.value = "edit";
    cell_edit.appendChild(editButton);

    document.getElementById(editButton.id).addEventListener('click',function(){
    		  window.location='/edit';

    });


//<button onclick="visitPage();">Visit Page Now</button>

    //editLink.appendChild(editButton);


//-----delete button

	var delButton = document.createElement("INPUT");
    delButton.setAttribute("type", "Submit");
    delButton.id = hiddenInput.value;
    console.log("this delete button's id is " + delButton.id);
    delButton.value = "delete";


    cell_delete.appendChild(delButton);

    var idTracker = delButton.id;

 document.getElementById(delButton.id).addEventListener('click',function()
 {
  console.log(delButton.id);//it works.

  //here we can use delButton.id

  var req = new XMLHttpRequest();
  var payload = {id:null};
  payload.id = delButton.id;
  req.open('POST', '/delete', true);
  req.setRequestHeader('Content-Type', 'application/json');
  
  req.addEventListener('load', function(){
     if(req.status >= 200 && req.status < 400){
          console.log("req success");
           console.log(req.responseText);
           alert(req.responseText);
           //var response = req.responseText;
           //var response = JSON.parse(req.responseText);
           
       }

      else {
            console.log("Error in network request: " + req.statusText);
      }
  }); // --LINE 139
  req.send(JSON.stringify(payload));
   event.preventDefault();

  var i = document.getElementById("row" + delButton.id);
  for(var a = 0; a < 7; a++)
  {
    i.deleteCell(i);  
  }
  

/*
console.log("req success outside");
  req.onreadystatechange = function(){
    console.log("req success 1");
     if(req.status >= 200 && req.status < 400){
          console.log("req success 2");

     }

      else {
            console.log("Error in network request: " + req.statusText);
      }
       console.log("req success 3");
  };
    console.log("req success 4");

  var i = document.getElementById("row" + delButton.id);
  for(var a = 0; a < 7; a++)
  {
    i.deleteCell(i);  
  }
  






/*
  var i = document.getElementById("row" + delButton.id);
  for(var a = 0; a < 7; a++)
  {
    i.deleteCell(i);  
  }
*/
}); //---LINE 128



/////////////////////////////////update!
document.getElementById(editButton.id).addEventListener('click',function()
 {
 	console.log("hidden" + hiddenInput.value); //hidden value usable
 	
 	var id = hiddenInput.value

var req = new XMLHttpRequest();
 
  req.open('GET', '/edit?id=' + id, true); 
  
          req.addEventListener('load',function(){
          if(req.status >= 200 && req.status < 400){
          	console.log("req success");
           //console.log(req.responseText);


 			//var response = JSON.parse(req.responseText);
           
         
           //console.log(response);

           //var response = req.responseText;
           //var response = JSON.parse(req.responseText);
           
         
          // console.log(response);

	        //Adding(response);
            //document.getElementById('response').textContent = req.responseText;
           
          } else {
            console.log("Error in network request: " + req.statusText);
          }});

          req.send('/edit?id=' + id);
          event.preventDefault();
 


});












}//--------END OFF ADDING FUNCTION

