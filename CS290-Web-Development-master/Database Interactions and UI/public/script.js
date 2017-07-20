document.getElementById('addExerciseButton').addEventListener('click',function(event){      //Add functionality to addExerciseButton	
	
	var addExercise = document.getElementById("addExercise");               //Get form id so we can edit it

	
	var req = new XMLHttpRequest();

	
	var param =         "exercise="+addExercise.elements.exercise.value+    //Set the parameters so we can send it in the get request.
						"&reps="+addExercise.elements.reps.value+
						"&weight="+addExercise.elements.weight.value+
						"&date="+addExercise.elements.date.value;
	
	if(addExercise.elements.unitCheck.checked){
		param += "&unitCheck=1";                                     //If they checked lbs then set unitCheck to 1 (for boolean value)
	}
	else{
		param += "&unitCheck=0";
	}

	
	req.open("GET", "/insert?" + param, true);                 //Open the get request and set the last value to true for asynchronous request
	req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

	
	req.addEventListener('load', function(){                        //Add to the table once it loads properly
		if(req.status >= 200 && req.status < 400){

			
			var response = JSON.parse(req.responseText);            //Save the response
			var id = response.inserted;

			
			var table = document.getElementById("exerciseTable");   //Save the table to add to it

			
			var row = table.insertRow(-1);                          //Variable so we can add to the table each time

			
			var exerciseName = document.createElement('td');                //The next 5 blocks of code create table data by grabbing the value
			exerciseName.textContent = addExercise.elements.exercise.value; //supplied by the user and then appending it to the table
			row.appendChild(exerciseName);

			
			var repsCounted = document.createElement('td');
			repsCounted.textContent = addExercise.elements.reps.value;
			row.appendChild(repsCounted);

			
			var weightLifted = document.createElement('td');
			weightLifted.textContent = addExercise.elements.weight.value;
			row.appendChild(weightLifted);


            var dateDone = document.createElement('td');
			dateDone.textContent = addExercise.elements.date.value;
			row.appendChild(dateDone);
            
			var unitChecker = document.createElement('td');
			if(addExercise.elements.unitCheck.checked){                 //If they checked pounds then add lbs
				unitChecker.textContent = "lbs";
			}
			else{
				unitChecker.textContent = "kg";                         //kg if not checked
			}
			row.appendChild(unitChecker);
            
            	

			var updateData = document.createElement('td');              //This will add an update button to the table to redirect to a different page and update the exercise
			var updateDataLink = document.createElement('a');
			updateDataLink.setAttribute('href','/updateTable?id=' + id);      //Place in our views folder so we redirect here so we set it's href value to the handlebars file
			var updateButton = document.createElement('input');         //Create the button
			updateButton.setAttribute('value','Update Exercise');       //Set the attributes for the button
            updateButton.setAttribute('type','button');         
			updateDataLink.appendChild(updateButton);
			updateData.appendChild(updateDataLink);
			row.appendChild(updateData);                            //Add the button to the table data            
            
   
			var deleteCell = document.createElement('td');                  //This will add a delete button to remove exercises
			var deleteButton = document.createElement('input');             //Create button
			deleteButton.setAttribute('type','button');
			deleteButton.setAttribute('name','delete');                     //Set the attributes for it
			deleteButton.setAttribute('value','Delete');
			deleteButton.setAttribute('onClick', 'deleteData("dataTable",' + id +')');
			var deleteHidden = document.createElement('input');             //Hidden input to remove elements from database (taken from Helpful Suggestions on assignment page)
			deleteHidden.setAttribute('type','hidden');
			deleteHidden.setAttribute('id', 'delete' + id);
			deleteCell.appendChild(deleteButton);                           //Add both to the cell
			deleteCell.appendChild(deleteHidden);
			row.appendChild(deleteCell);                                    //Add to the table itself

		}
		else {
	    	console.log("error");
		}
	});
	
	
	req.send("/insert?" + param);                               //Send the request to the server
	event.preventDefault();                                     //Always included
});

function deleteData(tableId, id){                                //We need to create a function to delete data 
    var deleteItem = "delete" + id;                             //Create a variable to use to search for in the loop. This will allow us to find the hidden id	
	var table = document.getElementById("exerciseTable");       //Save the table and the number of rows to use for a loop
	var numRows = table.rows.length;

	
	for(var i = 1; i < numRows; i++){                           //Loop through the table for as many rows as there are
		var row = table.rows[i];
		var findData = row.getElementsByTagName("td");		    //Find each table data and save it
		var erase = findData[findData.length -1];		        
		if(erase.children[1].id === deleteItem){                //If the erase data is equal to the item to delte, remove it from the table
			table.deleteRow(i);
		}

	}

	var req = new XMLHttpRequest();
	

	req.open("GET", "/delete?id=" + id, true);              //Open the request to delete data

	req.addEventListener("load",function(){
		if(req.status >= 200 && req.status < 400){          //Make sure the request is successful
	    	console.log('success');
		} else {
		    console.log('error');
		}
	});

	req.send("/delete?id=" + id);                           //Send the request

}