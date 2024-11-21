// app.js

document.addEventListener("DOMContentLoaded", () => {
    const loginPage = document.getElementById("login-page");
    const gamePage = document.getElementById("game-page");
    const googleLoginBtn = document.getElementById("google-login");
    const githubLoginBtn = document.getElementById("github-login");
    const sectionButtons = document.querySelectorAll(".section-btn");
    const quizArea = document.getElementById("quiz-area");
  
    // Dummy login handlers
    googleLoginBtn.addEventListener("click", () => {
      alert("Logged in with Google!");
      showGamePage();
    });
  
    githubLoginBtn.addEventListener("click", () => {
      alert("Logged in with GitHub!");
      showGamePage();
    });
  
    // Function to switch to the game page
    function showGamePage() {
      loginPage.classList.add("hidden");
      gamePage.classList.remove("hidden");
    }
  
    // Handle section buttons
    sectionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const section = button.getAttribute("data-section");
        loadQuiz(section);
      });
    });
  
    // Load quiz content dynamically
    function loadQuiz(section) {
      switch (section) {
        case "html":
          quizArea.innerHTML = "<p>HTML Quiz: Coming Soon!</p>";
          break;
        case "css":
          quizArea.innerHTML = "<p>CSS Quiz: Coming Soon!</p>";
          break;
        case "js":
          quizArea.innerHTML = "<p>JavaScript Quiz: Coming Soon!</p>";
          break;
        default:
          quizArea.innerHTML = "<p>Select a valid section!</p>";
      }
    }
  });
  