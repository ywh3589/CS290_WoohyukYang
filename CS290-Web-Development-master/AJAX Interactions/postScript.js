document.addEventListener("DOMContentLoaded", bindButtons);

function bindButtons()
{
    document.getElementById("submitInfo").addEventListener("click", function(event)
    {
        var req = new XMLHttpRequest();
        var pasteSite = "http://httpbin.org/post";
        var payload =                                   //The payload to be delivered with initial null values for the sport and favorite team
        {                                               //These will be set next
            "sport": null,
            "team":  null
        };
        payload.sport = document.getElementById("sport").value;     //Set the values for each field of payload
        payload.team = document.getElementById("team").value;
        
        req.open("POST", pasteSite, true);                          //Set to true to send asynchronously
        req.setRequestHeader("Content-Type", "application/json");
        req.addEventListener("load",function(){
            if(req.status >= 200 && req.status < 400)           //We only want it to display if there are no errors
            {
                var response = JSON.parse(JSON.parse(req.responseText).data);
                displayResult(response);
            }
            else
            {
                console.log("error");
            }
        });
        
        req.send(JSON.stringify(payload));                  //Send the request 
        event.preventDefault();
        
    });
}

function displayResult(response)                                           //Helper function to set returned data to the table
{
    document.getElementById("sportReturn").textContent = response.sport;
    document.getElementById("teamReturn").textContent = response.team;
}