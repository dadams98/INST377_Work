function showAlert() {
    var name = document.getElementById("name").value;
    alert("Hi " + name + "!");
  }
  
  function changeColor() {
    var body = document.getElementsByTagName("body")[0];
    var currentColor = body.style.backgroundColor;
    var newColor = currentColor === "blue" ? "green" : "blue";
    body.style.backgroundColor = newColor;
  }
  
  function validateText() {
    var inputText = document.getElementById("inputText").value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(inputText)) {
      alert("Text contains special characters!");
    }
  }
  
  function addText() {
    var heading = document.getElementById("heading");
    heading.innerHTML += " Add Text";
  }