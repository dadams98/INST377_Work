function playGame() {
    var userChoice = document.getElementById("choice").value;
    var computerChoice = getRandomChoice();
    var body = document.getElementsByTagName("body")[0];
    document.getElementById("user-choice").innerHTML = userChoice;
    document.getElementById("computer-choice").innerHTML = computerChoice;
  
    if (computerChoice === "spock") {
      alert("You Lose");
      body.style.backgroundColor = "red";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      alert("You Win");
      body.style.backgroundColor = "green";
    } else if (userChoice === computerChoice) {
      alert("Tie");
      body.style.backgroundColor = "blue";
    }else{
        alert("You Lose");
        body.style.backgroundColor = "red";
    }
  }
  
  function getRandomChoice() {
    var choices = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function validateText() {
    var inputText = document.getElementById("concern").value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(inputText)) {
      alert("Text contains special characters!");
      return false;
    }
    window.location.href = "successForm.html";
    return false;
  }