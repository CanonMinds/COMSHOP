
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");

  var inputValue = document.getElementById("myInput").value;
  
  var text = document.createTextNode(inputValue);
  
  li.appendChild(text);
  if (inputValue === '') {
    alert("You must write something");
  } else {
    document.getElementById("myTable").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function newPrice() {
  var li = document.createElement("li");

  var inputValue = document.getElementById("myPrice").value;
  
  var text = document.createTextNode(inputValue);
  
  li.appendChild(text);
  if (inputValue === '') {
    alert("You must write something");
  } else {
    document.getElementById("myTable").appendChild(li);
  }
  document.getElementById("my").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function changeContent()
{
rn = window.prompt("Input the Row number(0,1,2)", "0");
cn = window.prompt("Input the Column number(0,1)","0");
content = window.prompt("Input the Cell content");  
var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
x[parseInt(cn,10)].innerHTML=content;
}


function myFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(3);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
  cell3.innerHTML = "NEW CELL2";
}

function myFunction2() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(3);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = "NEW CELLas";
  cell2.innerHTML = "NEW CELLas";
  cell3.innerHTML = "NEW CELLas";
}