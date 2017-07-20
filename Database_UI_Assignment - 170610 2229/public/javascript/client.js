


document.addEventListener('DOMContentLoaded', bindSubmitButtons);

function bindSubmitButtons(){document.getElementById('Submit').addEventListener('click',Requesting);}

function Requesting() {

	//Now what I need to do is to make a request and when the request is successful then I can call 
		  var req = new XMLHttpRequest();
          var payload = {name:null, reps:null, weight:null, date:null, lbs:null};
          payload.name = document.getElementById('name').value;
          console.log(payload.name);
          payload.reps = document.getElementById('reps').value;
          console.log(payload.reps);
          payload.weight = document.getElementById('weight').value;
          console.log(payload.weight);
          payload.date = document.getElementById('date').value;
          console.log(payload.date);
          payload.lbs = document.getElementById('lbs').value;
          console.log(payload.lbs);
          
          req.open('POST', 'http://localhost:5698/add', true);
          req.setRequestHeader('Content-Type', 'application/json');
          req.addEventListener('load',function(){
          if(req.status >= 200 && req.status < 400){
          	console.log("req success");
           console.log(req.responseText);
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
    console.log(x);
    


    var row = table.insertRow(x);
    
   /*
    var hiddenInput = document.createElement("INPUT");
    hiddenInput.setAttribute("type", "hidden");
    hiddenInput.id = "hiddenId";
    document.row.appendChild(hiddenInput);
     hiddenInput.value = response.id;
    */

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

    cell_edit.innerHTML = `<input onclick="EditPage()" type="Submit" value="Edit" id = "edit"/>`
    cell_delete.innerHTML = `<input onclick="DeleteRow()" type="Submit" value="Delete" id = "delete"/>`
}


function EditPage(){

	console.log("edit page clicked");

	
	//Now what I need to do is to make a request and when the request is successful then I can call 
		  var req = new XMLHttpRequest();
          var payload = {name:null, reps:null, weight:null, date:null, lbs:null};
          payload.name = document.getElementById('name').value;
          console.log(payload.name);
          payload.reps = document.getElementById('reps').value;
          console.log(payload.reps);
          payload.weight = document.getElementById('weight').value;
          console.log(payload.weight);
          payload.date = document.getElementById('date').value;
          console.log(payload.date);
          payload.lbs = document.getElementById('lbs').value;
          console.log(payload.lbs);
          
          req.open('POST', 'http://localhost:5698/add', true);
          req.setRequestHeader('Content-Type', 'application/json');
          req.addEventListener('load',function(){
          if(req.status >= 200 && req.status < 400){
          	console.log("req success");
           console.log(req.responseText);
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

function DeleteRow(){

	console.log("delete page clicked");

}


