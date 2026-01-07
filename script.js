const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// Function to check localStorage and show existing button
function checkExistingUser() {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
}

// Initialize form
window.onload = () => {
  usernameInput.value = "";
  passwordInput.value = "";
  checkbox.checked = false;
  checkExistingUser();
};

// Submit button click
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

  checkExistingUser();
});

// Existing user login
existingBtn.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});
