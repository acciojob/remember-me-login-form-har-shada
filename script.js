const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// Function to toggle existing user button visibility
function toggleExistingButton() {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");
  existingBtn.style.display = (savedUsername && savedPassword) ? "block" : "none";
}

// Initialize form on load
window.addEventListener("DOMContentLoaded", () => {
  usernameInput.value = "";
  passwordInput.value = "";
  checkbox.checked = false;
  toggleExistingButton();
});

// Submit form
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  
  if (!username || !password) {
    alert("Please enter username and password");
    return;
  }

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  toggleExistingButton();
});

// Existing user login
existingBtn.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});
