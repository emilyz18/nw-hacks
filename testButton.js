var phoneNumber;
let time;
var content;

function addButton() {
    document.getElementById("error").innerText = ""
    phoneNumber = document.getElementById("Phone Number").value;
    time = document.getElementById("Time").value;
    content = document.getElementById("Content").value;
    if (document.getElementById("daysblock") != null) {var recurDays = [document.getElementById("Monday").value,
                     document.getElementById("Tuesday").value,
                     document.getElementById("Wednesday").value,
                     document.getElementById("Thursday").value,
                     document.getElementById("Friday").value,
                     document.getElementById("Saturday").value,
                     document.getElementById("Sunday").value]
                     const allEqual = recurDays.every( v => v == "false")
                     console.log(allEqual)
                    if (allEqual && text == 'weekly') {
        console.log("success")
        document.getElementById("error").innerText = "must select at least one"
        
    } else {
        document.getElementById("error").innerText = ""}}
    var id = document.getElementById("Recurence Dropdown")

    var text = id.options[id.selectedIndex].text;
    console.log(text);

    let hr = "";
    let min = "";
    let month = "";
    let day = "";
    let year = "";

    if (time) {
      let timeSplit = time.split("T");
      let date = timeSplit[0].split("-");
      year = date[0];
      month = date[1];
      day = date[2];
  
      console.log(year);
      console.log(month);
      console.log(day);
  
      console.log(date);
      let hrmin = timeSplit[1].split(":");
      hr = hrmin[0];
      min = hrmin[1];

    }

   

    const rtArray = [content, phoneNumber, hr, min, month, day, year, text, recurDays]

    // Convert array to JSON format
    const keys = ["content", "phoneNumber", "hour", "minute", "month", "day", "year", "recurrence", "recurDays"];
    let jsonObj = convertToJSON(keys, rtArray);
    
    console.log(jsonObj);
}



function convertToJSON(keys, values) {
let jsonObj = {};

values.map((elem, index) => {
    let key = keys[index];
    return jsonObj[key] = elem;
})

jsonObj = JSON.stringify(jsonObj);

return jsonObj;
}


function checkbox(p){
  if (document.getElementById(p).value == "false") {
    document.getElementById(p).value = true;
  } else {
    document.getElementById(p).value = false;
  }
}

function changeFunc(i) {
    let code = '<div id = "daysblock">'+
    '<p>Select the Days you want the reminder to recur on: </p>' +
  '<input type="checkbox" id="Monday" name="Monday" value=false onClick="checkbox(id)">' +
  '<label for="Monday"> Monday</label><br><br>' +
  '<input type="checkbox" id="Tuesday" name="Tuesday" value=false onClick="checkbox(id)">' +
  '<label for="Tuesday"> Tuesday</label><br><br>' +
  '<input type="checkbox" id="Wednesday" name="Wednesday" value=false onClick="checkbox(id)">' +
  '<label for="Wednesday">Wednesday</label><br><br>' +
  '<input type="checkbox" id="Thursday" name="Thursday" value=false onClick="checkbox(id)">' +
  '<label for="Thursday">Thursday</label><br><br>' +
  '<input type="checkbox" id="Friday" name="Friday" value=false onClick="checkbox(id)">' +
  '<label for="Friday">Friday</label><br><br>' +
  '<input type="checkbox" id="Saturday" name="Saturday" value=false onClick="checkbox(id)">' +
  '<label for="Saturday">Saturday</label><br><br>' +
  '<input type="checkbox" id="Sunday" name="Sunday" value=false onClick="checkbox(id)">' +
  '<label for="Sunday">Sunday</label><br><br>'+
  '</div>';


    if (i == 'weekly') {
      document.getElementById("main").innerHTML += code;
      document.getElementById("Recurence Dropdown").value = "weekly";
      document.getElementById("Phone Number").value = phoneNumber;
      document.getElementById("Content").value = content;
      document.getElementById("Time").value = time;

    } else {
        if ((document.getElementById("daysblock")) != null){
        document.getElementById("daysblock").remove();
        }
    }
    
  }
