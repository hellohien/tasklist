var button = document.getElementById("submit");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");


document.getElementById("time").innerHTML = date();

function date() {
  var d = new Date(),
    months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
    days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate();
}

function removeParent(event) {
  event.target.parentNode.remove();
}

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var span = li.appendChild(document.createElement("span"));
  span.appendChild(document.createTextNode(input.value));

  ul.appendChild(li);
  input.value = "";

  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("x"));
  li.appendChild(deleteButton);
  deleteButton.onclick = removeParent;
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function togglesDone(event) {
  //selects element that got clicked
  var target = event.target;
  var selection = window.getSelection();
  if (selection.toString().length === 0) {
    //toggles class "done"
    target.classList.toggle("done");
  }
}

ul.addEventListener("click", togglesDone);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
