var form = document.getElementById("todoList");
var list = document.getElementById("jobList");


// Catch the event when the user clicks "Save".
form.addEventListener("submit", function (event) {
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");
  // Prevent the data from being sent to the server.
  // Also prevents the page from being refreshed.
  event.preventDefault();

  // this.title and this.good are available because of the
  // name="title" and name="good" attributes in index.html
  var title = this.title.value;

  // Make a new list item with document.createElement()
  var li = document.createElement("li");
  // Set the contents of the li to be the movie title. This is a
  // dangerous step because if the user enters HTML then the browser
  // will render it. What if the user enters
  // <style>*{display:none;}</style> or
  // <style>body{color:red;}</style>?
  li.innerText = title;
  btn1.innerText = "Edit";
  btn2.innerText = "Delete";
  // Merely creating the element does not add it to the page.
  // Make it visible on the page by using appendChild().
  list.appendChild(li);
  li.appendChild(btn1);
  li.appendChild(btn2);

  btn1.addEventListener("click", markAsDone);

  btn2.addEventListener("click", function(){
    $(this).parent().remove();
  });

  // Clear out the previous title from the text field
  this.title.value = "";
});

function markAsDone() {
  this.parentElement.style.textDecoration = "line-through";
  this.innerText = "undo";
  this.addEventListener("click", undoDone);
  this.removeEventListener("click", markAsDone);
}

function undoDone() {
  this.parentElement.style.textDecoration = "none";
  this.innerText = "Edit";
  this.addEventListener("click", markAsDone);
  this.removeEventListener("click", undoDone);
}



