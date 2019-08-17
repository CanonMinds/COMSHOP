function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 // Replace with none
 document.getElementById("save_button"+no).style.display="block";
// Do not do anything

 var item=document.getElementById("inputItem_row"+no);
 var quantity=document.getElementById("itemQuantity_row"+no);
 var price=document.getElementById("itemPrice_row"+no);
	
 var item_data=item.innerHTML;
 var quantity_data=quantity.innerHTML;
 var price_data=price.innerHTML;
	
 item.innerHTML="<input type='text' id='item_text"+no+"' value='"+item_data+"'>";
 quantity.innerHTML="<input type='number' id='quantity_text"+no+"' value='"+quantity_data+"'>";
 price.innerHTML="<input type='number' id='price_text"+no+"' value='"+price_data+"'>";
}

function save_row(no)
{
// Store
 var item_val=document.getElementById("item_text"+no).value;
 var quantity_val=document.getElementById("quantity_text"+no).value;
 var price_val=document.getElementById("price_text"+no).value;
// Swap
 document.getElementById("inputItem_row"+no).innerHTML=item_val;
 document.getElementById("itemQuantity_row"+no).innerHTML=quantity_val;
 document.getElementById("itemPrice_row"+no).innerHTML=price_val;
// Display
 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="block";
 
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 // var the_inputItem0 = document.createElement("new_inputItem0");	
 // var user_inputItem = document.getElementById("myInput").value; 
 // var useruser_inputItem = document.createTextNode("user_inputItem");
 // the_inputItem0.appendChild(useruser_inputItem);

 var new_inputItem=document.getElementById("myInput").value;
 var new_itemQuantity=document.getElementById("new_itemQuantity").value;
 var new_itemPrice=document.getElementById("new_itemPrice").value;

	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML=
 "<tr id='row"+table_len+ "'><td id='inputItem_row"+table_len+"'>"+new_inputItem+"</td> <td id='itemQuantity_row"+table_len+"'>"+new_itemQuantity+"</td> <td id='itemPrice_row"+table_len+"'>"+new_itemPrice+ "</td> <td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'> </td></tr>";

 document.getElementById("new_inputItem").value="";
 document.getElementById("new_itemQuantity").value="";
 document.getElementById("new_itemPrice").value="";
}
