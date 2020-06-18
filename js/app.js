var add = document.getElementById("add");
var removeAll = document.getElementById("removeall");
var list = document.getElementById("list");

//Remove all button

removeAll.onclick = function() {
  list.innerHTML = "";
};

// Adding new list Element

add.onclick = function() {
  addlist(list);
  document.getElementById("userinput").value = "";
  document.getElementById("userinput").focus() = "";
};

function addlist(targetUl) {
  var inputText = document.getElementById("userinput").value;
  var li = document.createElement("li");
  var textNode = document.createTextNode(inputText + "  ");
  var removeButton = document.createElement("button");

  if (inputText !== "") {
    removeButton.className = "btn btn-xs btn-danger";
    removeButton.innerHTML = "&times; ";
    removeButton.setAttribute("onclick", "removeMe(this)");

    li.appendChild(textNode);
    li.appendChild(removeButton);
    targetUl.appendChild(li);
  } else {
    alert("Please enter a Todo");
  }
}

function removeMe(item) {
  var p = item.parentElement;
  p.parentElement.removeChild(p);
}

var input = document.getElementById("userinput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("add").click();
  }
});
