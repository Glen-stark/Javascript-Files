function myFunction() {
    var person = prompt("Please enter your name");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?" +" Here are some instructons on how to use the to do app   " + " " + ".1. You can click once for your 'to do' to be checked ";
    }
  }

function todoList() {
    var item = document.getElementById("todoInput").value
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("todoList").appendChild(newItem)


    newItem.addEventListener("click", function() {
        newItem.style.textDecoration = "line-through";
    });
    
   
    newItem.addEventListener("hover", function() {
        newItem.style.cursor = "pointer";
    })
      
}
